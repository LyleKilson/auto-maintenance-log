/*database name info */

DROP DATABASE IF EXISTS vehicle_maintenance_db;

CREATE DATABASE  vehicle_maintenance_db;

CREATE TABLE vehicle {
    id INTEGER NOT NULL,
    vehicle_make VARCHAR(30),
    vehicle_description TEXT,
    vehicle_model VARCHAR(30),
    vehicle_year VALUES (0, 2022);
}

CREATE TABLE owner {
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    email VARCHAR(30)
}

CREATE TABLE maintenance {

}


SELECT * FROM vehicle;
SELECT * FROM owner;
SELECT * FROM maintenance;
