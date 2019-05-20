# My SQL notes
welcome to SQL it is just an excell sheet 
we shall use MAMP
there is also WAMP and LAMP
structured query language

what we teach in this lecture is just an introductoin on mySQL you could have a 3 month boootcamp on mySQL alone

we will learn basics how too set them up and how to run them 

SQL is the language itself
we learn SQL because it is free there are loads of others that are similar that just have different methods



# Create Database
CREATE DATABASE databasename_db;

in SQL we store info inside of tables
###to use the db
USE databasename_db;
### Create Table
CREATE TABLE people(

id INTEGER NOT NULL AUTO_INCREMENT,

name VARCHAR(50)NOT NULL,

has_pet BOOLEAN NOT NULL,

pet_name VARCHAR(30),

pet_age INTEGER(10)

PRIMARY KEY(id)
);
INSERT INTO database_table_name(column)VALUES("shea");
UPDATE database_table_name SET name = "Shaun" WHERE name = "Shea";
SELECT * FROM database_table_name;
schemas is where your database exists

#CRUD
Create

# Example of how to create a node query qith mysql
```
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "top_songsDB"
});

//   * A query which returns all data for songs sung by a specific artist
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM top5000 WHERE artist = 'Elvis Presley'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
```

# CSV
csv = comma separated values

# Review concepts later