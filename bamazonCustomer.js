
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
    database: "bamazon_bd"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
  });

  
  function itemForSale() {
    connection.query("SELECT * FROM products", function (err, result) {
      var table = new Table({
        head: ['Item ID', 'Product Name', 'Price', 'Quantity']
      , colWidths: [10, 30, 10, 10]
    });
     
    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    for(var i = 0; i < result.length; i++){
      table.push(
          [result[i].item_id, result[i].product_name, result[i].price, result[i].stock_quantity]
      );

    }
     
    console.log(table.toString());

    })
    
  };
  itemForSale();