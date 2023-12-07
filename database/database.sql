CREATE DATABASE tu_base_de_datos;
USE tu_base_de_datos;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255),
  edad INT,
  fecha_nacimiento DATE
);
