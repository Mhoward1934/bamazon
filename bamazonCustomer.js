
var fs = require("fs");
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
var recordkeeping = [];
var databaseUpdate = [];
var total = 0;


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

// function to handle using ordering items from the list.
function orderItem() {
  // prompt for item id and quantity.
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
            recordkeeping.push(result, parseInt(answer.quantity));
            databaseUpdate.push(result[0].item_id, (parseInt(result[0].stock_quantity) - parseInt(answer.quantity)));
            var table = new Table({
              head: ['Item ID', 'Product Name', 'Price', 'Quantity']
              , colWidths: [10, 30, 10, 10]
            });
        
            for (var x = 0; x < recordkeeping.length; x+=2) {
              table.push(
                [result[0].item_id, result[0].product_name, result[0].price, recordkeeping[x+1]]
              );
            }
            console.log(table.toString());
            console.log("Your total is: ");
            total += (result[0].price * recordkeeping[x+1]);
          }
        }
      })
    })
}

setTimeout(function () {
  orderItem();
}, 1000);



