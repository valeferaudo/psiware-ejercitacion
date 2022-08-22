CREATE TABLE `autos_db`.`autos` (
  `id` INT NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `patente` VARCHAR(45) NOT NULL,
  `modelo` INT NOT NULL,
  `precio` FLOAT NOT NULL,
  `seguro` TINYINT NOT NULL,
  PRIMARY KEY (`id`));
