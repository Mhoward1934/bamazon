# bamazon
This application is desgined to take customer orders from a list of available products.  The application utilizes the terminal to complete the transactions, deplete stock, and provide the customer with a total of their order.

1. The image below shows the start of the program.  The customer would access this program using the Terminal and from the command line enter "node bamazonCustomer.js".  The program will then generate a list of products that can be purchased.  The customer is then instructed to enter and "Item ID" number for the product they wish to order.  Once the product number is entered they are then asked how many of the product they wish to purchase.  The program then displays the customer's selection.  The customer is then asked what would they like to do next "Continue Shopping", "Checkout", or "Quit".

![Bamazon Beginning]
(https://github.com/Mhoward1934/bamazon/blob/master/images/Bamazon%20Beginning.png?raw=true)

2. Should the customer choose a quantity amount over the available stock they will receive a message stating "Sorry, this amount is greater than what we have in inventory at this time.  Please try again." and will then be asked what would they like to do next "Continue Shopping", "Checkout", or "Quit".  At this point the customer can choose to Continue Shopping and enter the appropriate quantity for the product they would like to purchase.

![Over Order]
(https://github.com/Mhoward1934/bamazon/blob/master/images/Customer_Over_Order.png)

3. Once the product is displayed, the customer will then be asked what would they like to do next "Continue Shopping", "Checkout", or "Quit".  If the customer selects "Quit" the program will terminate and display "Thanks for visiting Bamazon!" and the order is not processed.

![Quit]
(https://github.com/Mhoward1934/bamazon/blob/master/images/Quit.png)

4. When the customer is done making a selection from the list they can then choose "Checkout". By choosing "Checkout" this will process the order, and deplete the stock quantity.  The customer will then receive a message stating "Your order was placed successfully!", "Thank you for shopping at Bamazon!".

![Checkout]
(


Attached is a link to the video demonstrating how the application works:


## Built With
#### Javascript
#### MySQL
#### Packages: Node, NPM, Inquirer, FS, CLI-Table
