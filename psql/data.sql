-- postgres=# \i psql/data.sql

INSERT INTO routing_tables
(details)
VALUES
('{\"step_number\":10,\"step_type\":\"work\",\"step\":\"cut\",\"setup_time\":10,\"cycle_time\":20,\"description\":\"deburr\"}'),
('{\"step_number\":20,\"step_type\":\"work\",\"step\":\"drill\",\"setup_time\":10,\"cycle_time\":20,\"description\":\"deburr\"}'),
('{\"step_number\":30,\"step_type\":\"vend\",\"step\":\"coating\",\"setpu_time\":5,\"cycle_time\":20,\"description\":\"\"}');

INSERT INTO drawings 
(routing_table_id, creation_date, modification_date, drawing_number, modified_by, price_table, description)
VALUES
(1, '2023-5-7 20:00:00', '2023-5-7 20:00:00', 'drawing#2', 'David Wang', '{\"quantity\":50,\"sell price\":8.99,\"unit cost\":6.00}', 'this is the first drawing'),
(1, '2023-5-8 20:00:00', '2023-5-8 20:00:00', 'drawing#1', 'David Wang', '{\"quantity\":100,\"sell price\":10.99,\"unit cost\":7.50}', 'this is the second drawing');

INSERT INTO parts
(part_number, drawing_id, "open", routing_table_id, creation_date, modification_date, modified_by, description)
VALUES
('abc123', 1, TRUE, 1, '2023-5-8 20:00:00', '2023-5-8 20:00:00', 'David Wang', 'this is the first tool'),
('abc456', 1, TRUE, 1, '2023-5-7 20:00:00', '2023-5-7 20:00:00', 'David Wang', 'this is the second tool');

INSERT INTO customers
(name, customer_code, email, phone, address, sales_rep)
VALUES
('customer#1', 'abc', 'purchase@abc.com', '1234567890', '123 abc street', 'Kyle Walker'),
('customer#2', 'def', 'purchase@def.com', '0987654321', '456 def street', 'Kyle Walker');

INSERT INTO orders
(order_number, creation_date, modification_date, PO_number, modified_by, customer_id, description, part_ids)
VALUES
(143242, '2023-5-7 20:00:00', '2023-5-7 20:00:00', 'PO#1', 'David Wang', 1, 'this is the first order', ARRAY[1]),
(143243, '2023-5-8 20:00:00', '2023-5-8 20:00:00', 'PO#2', 'David Wang', 2, 'this is the second order', ARRAY[2]);

