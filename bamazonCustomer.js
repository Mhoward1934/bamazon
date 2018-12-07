
var fs = require("fs");
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

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
        validate: function (value) {
          if (value < stock_quantity) {
            placeOrder();
          }
          console.log("Insufficient quantity!");
        }
      },
    ])
  }
  orderItem();