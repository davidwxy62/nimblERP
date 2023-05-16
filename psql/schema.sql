CREATE TABLE routing_tables
(
    routing_table_id SERIAL NOT NULL PRIMARY KEY,
    details TEXT NOT NULL -- JSON
);

CREATE TABLE drawings
(
    drawing_id SERIAL NOT NULL PRIMARY KEY,
    routing_table_id INTEGER NOT NULL,
    creation_date TIMESTAMP NOT NULL,
    modification_date TIMESTAMP NOT NULL,
    drawing_number VARCHAR(20) NOT NULL UNIQUE,
    modified_by VARCHAR(20) NOT NULL,
    price_table TEXT, -- JSON
    description TEXT,

    CONSTRAINT routing_table_fk
        FOREIGN KEY (routing_table_id)
        REFERENCES  routing_tables (routing_table_id)
        ON DELETE CASCADE
);

CREATE TABLE parts
(
    part_id SERIAL NOT NULL PRIMARY KEY,
    part_number VARCHAR(20) NOT NULL UNIQUE,
    drawing_id INTEGER NOT NULL,
    "open" BOOLEAN NOT NULL,
    routing_table_id INTEGER NOT NULL,
    creation_date TIMESTAMP NOT NULL,
    modification_date TIMESTAMP NOT NULL,
    modified_by VARCHAR(20) NOT NULL,
    description TEXT,

    CONSTRAINT drawing_fk
        FOREIGN KEY (drawing_id)
        REFERENCES  drawings (drawing_id)
        ON DELETE CASCADE,
    CONSTRAINT routing_table_fk
        FOREIGN KEY (routing_table_id)
        REFERENCES  routing_tables (routing_table_id)
        ON DELETE CASCADE
);

CREATE TABLE customers
(
    customer_id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(20) NOT NULL UNIQUE,
    customer_code VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(20) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    address VARCHAR(30) NOT NULL,
    sales_rep VARCHAR(20) NOT NULL
);

CREATE TABLE orders
(
    order_id SERIAL NOT NULL PRIMARY KEY,
    order_number INTEGER NOT NULL UNIQUE,
    creation_date TIMESTAMP NOT NULL,
    modification_date TIMESTAMP NOT NULL,
    PO_number VARCHAR(20) NOT NULL UNIQUE,
    modified_by VARCHAR(20) NOT NULL,
    customer_id INTEGER NOT NULL,
    description TEXT,
    part_ids INTEGER[],

    CONSTRAINT customer_fk
        FOREIGN KEY (customer_id)
        REFERENCES  customers (customer_id)
        ON DELETE CASCADE
);
