
var fs = require("fs");
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
var recordKeeping = [];
var databaseUpdate = [];
var total = 0;
var action = process.argv[2];
var value = process.argv[3];


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "MHcookie1969",
  database: "bamazon_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  //connection.end();
});

function itemForSale() {
  connection.query("SELECT * FROM products", function (err, result) {
    console.log("Welcome to Bamazon!");
    var table = new Table({
      head: ['Item ID', 'Product Name', 'Price', 'Quantity']
      , colWidths: [10, 30, 10, 10]
    });

    for (var i = 0; i < result.length; i++) {
      table.push(
        [result[i].item_id, result[i].product_name, result[i].price, result[i].stock_quantity]
      );
    }

    console.log(table.toString());

  })

};
itemForSale();

// function to handle user ordering items from the list.
function orderItem() {
  // prompt for item id and quantity and return to the user what they ordered and the total price.
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "Please enter the Item ID for the product you would like to purchase.",
      },
      {
        name: "quantity",
        type: "input",
        message: "How many would you like?",
      }
    ])
    .then(function (answer) {
      var query = "SELECT * FROM products WHERE item_id = ?";
      connection.query(query, answer.item, function (err, result) {
        if (result.length > 0) {
          if (answer.quantity > result[0].stock_quantity) {
            console.log("Sorry, this amount is greater than what we have in inventory at this time.  Please try again.");
          }
          else {
            recordKeeping.push(result, parseInt(answer.quantity));
            databaseUpdate.push(result[0].item_id, (parseInt(result[0].stock_quantity) - parseInt(answer.quantity)));
            var table = new Table({
              head: ['Item ID', 'Product Name', 'Price', 'Quantity']
              , colWidths: [10, 30, 10, 10]
            });

            for (var x = 0; x < recordKeeping.length; x += 2) {
              table.push(
                [recordKeeping[x][0].item_id, recordKeeping[x][0].product_name, recordKeeping[x][0].price, recordKeeping[x + 1]]
              );
              total += (recordKeeping[x][0].price * recordKeeping[x + 1]);
            };
            table.push(
              ["", "", "", ""],
              ["", "", "Total: ", total]
              );
              console.log(table.toString());
            };
            whatNext(answer.item, answer.quantity);
        }
      });
    })
}

setTimeout(function () {
  orderItem();
}, 1000);

function whatNext(item_id, stock_quantity, result) {
  inquirer.prompt([
    {
      type: "list",
      name: "options",
      message: "What would you like to do?",
      choices: ["Continue Shopping?", "Checkout?", "Quit?"]
    }
  ]).then(function (customer) {
    if (customer.options === "Continue Shopping?") {
      orderItem();
    } else if (customer.options === "Checkout?") {
      checkout();
    } else {
      (customer.options === "Quit?")
      quit();
    }
  });
};

function checkout() {
  for (var y = 0; y < databaseUpdate.length; y += 2) {
    query2 = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
    connection.query(query2, [databaseUpdate[y + 1], databaseUpdate[y]], function (err, result) {
      
      console.log("\n Your order was placed successfully! Thank you for shopping at Bamazon! \n");
    });
  
  }
  connection.end();
};

function quit() {
  connection.end();
  console.log("Thanks for visiting Bamazon!");
};



