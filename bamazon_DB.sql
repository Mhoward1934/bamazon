DROP DATABASE bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products(
	item_id INTEGER(11) NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INTEGER(11) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL
);

SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1000, "Citizen Watch", "Jewelry", 45, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1100, "1ct Diamond Ring", "Jewelry", 1200, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1200, "18 inch Gold Necklace", "Jewelry", 100, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1300, "Bikes", "Toys", 85, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1400, "Playstation", "Toys", 300, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1500, "Monopoly", "Toys", 25, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1600, "Lawn Mower", "Home and Garden", 250, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1700, "Lawn Edger", "Home and Garden", 75, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1800, "Patio Set", "Home and Garden", 250, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1900, "Euro Planter", "Home and Garden", 20, 10);