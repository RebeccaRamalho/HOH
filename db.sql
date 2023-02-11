CREATE DATABASE hand_of_hope;
USE hand_of_hope;
CREATE TABLE reviewers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    last_name VARCHAR(45) NOT NULL, 
    first_name VARCHAR(45) NOT NULL, 
    opinion VARCHAR (400) NOT NULL,
    role VARCHAR (20)
);

CREATE TABLE article(
    article_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(45) NOT NULL,
    img LONGTEXT NOT NULL,
    tags VARCHAR (25), 
    resume_article VARCHAR (30),
    content_article VARCHAR (500)
);
Create table tag
tags_id
article_id
Chacun des tags serait relliés à plusieurs article ID

CREATE TABLE administator (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR (15),
	email VARCHAR (15),
	passWord VARCHAR (255),
    article_id INT AUTO_INCREMENT,
    FOREIGN KEY (article_id) REFERENCES article (article_id)
);

