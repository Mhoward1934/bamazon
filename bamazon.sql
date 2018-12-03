DROP DATABASE bamazon_bd;
CREATE DATABASE bamazon_bd;
USE bamazon_bd;

CREATE TABLE products(
	item_id INTEGER(11) NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INTEGER(11) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL
);

SELECT * FROM products;
