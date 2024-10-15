DROP DATABASE IF EXISTS testdb;

CREATE DATABASE testdb;

USE testdb;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(36) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(45) DEFAULT 'regular',
  PRIMARY KEY (`id`)
);

CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `rating` int NOT NULL,
  `text` varchar(1000) NOT NULL,
  `date` datetime DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `uid_idx` (`uid`),
  CONSTRAINT `uid` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);