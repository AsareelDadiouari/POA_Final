-- MySQL Script generated by MySQL Workbench
-- Sat Dec  3 12:19:20 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE =
        'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema poa-backend-database
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema poa-backend-database
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `poa-backend-database` DEFAULT CHARACTER SET utf8;
USE `poa-backend-database`;

-- -----------------------------------------------------
-- Table `poa-backend-database`.`Employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `poa-backend-database`.`Employee`
(
    `id`             INT         NOT NULL,
    `firstName`      VARCHAR(45) NULL,
    `lastName`       VARCHAR(45) NULL,
    `organizationId` INT         NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `organizationId`
        FOREIGN KEY (`organizationId`)
            REFERENCES `poa-backend-database`.`Organization` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `poa-backend-database`.`Organization`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `poa-backend-database`.`Organization`
(
    `id`   INT         NOT NULL,
    `name` VARCHAR(45) NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB;


SET SQL_MODE = @OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;
