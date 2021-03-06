DROP DATABASE bamazon_bd;
CREATE DATABASE bamazon_bd;
USE bamazon_bd;

CREATE TABLE products(
	item_id INTEGER(11) NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(6,2),
    stock_quantity INTEGER(11) NOT NULL
);

SELECT * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1000, "Citizen Watch", "Jewelry", 45.00, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1100, "1ct Diamond Ring", "Jewelry", 1200.00, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1200, "18 inch Gold Necklace", "Jewelry", 100.00, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1300, "Bikes", "Toys", 85.00, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1400, "Playstation", "Toys", 300.00, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1500, "Monopoly", "Toys", 25.00, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1600, "Lawn Mower", "Home and Garden", 250.00, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1700, "Lawn Edger", "Home and Garden", 75.00, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1800, "Patio Set", "Home and Garden", 250.00, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1900, "Euro Planter", "Home and Garden", 20.00, 10);