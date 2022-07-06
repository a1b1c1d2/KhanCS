/** Grocery list: 
Bananas (4)
Peanut Butter (1)
Dark Chocolate Bars (2)
**/

CREATE TABLE groceries (id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER );
INSERT INTO groceries VALUES (1, "Bananas", 4);
INSERT INTO groceries VALUES (2, "Peanut Butter", 1);
INSERT INTO groceries VALUES (3, "Dark chocolate bars", 2);
SELECT * FROM groceries;


CREATE TABLE movies (id INTEGER PRIMARY KEY, name TEXT, release_year INTEGER);
INSERT INTO movies VALUES (1, "Avatar", 2009);
INSERT INTO movies VALUES (2, "Titanic", 1997);
INSERT INTO movies VALUES (3, "Star Wars: Episode IV - A New Hope", 1977);
INSERT INTO movies VALUES (4, "Shrek 2", 2004);
INSERT INTO movies VALUES (5, "The Lion King", 1994);
INSERT INTO movies VALUES (6, "Disney's Up", 2009);
select * from movies where release_year >= 2000 order by release_year;

CREATE TABLE groceries (id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER, aisle INTEGER);
INSERT INTO groceries VALUES (1, "Bananas", 4, 7);
INSERT INTO groceries VALUES(2, "Peanut Butter", 1, 2);
INSERT INTO groceries VALUES(3, "Dark Chocolate Bars", 2, 2);
INSERT INTO groceries VALUES(4, "Ice cream", 1, 12);
INSERT INTO groceries VALUES(5, "Cherries", 6, 2);
INSERT INTO groceries VALUES(6, "Chocolate syrup", 1, 4);
SELECT sum(quantity) FROM groceries;
SELECT max(quantity) FROM groceries;
SELECT aisle,sum(quantity) s FROM groceries group by aisle order by s;

create table clothes(id integer primary key, `size` text, materials text, category text,price INTEGER, store INTEGER, style text);
insert into clothes values(1,"S","denim","vest",300,1000,"basic");
insert into clothes values(2,"M","puffer","vest",259,1000,"basic");
insert into clothes values(3,"L","cotton","vest",356,1000,"plaid");
insert into clothes values(4,"X","wool","blouse",257,1000,"pleating");
insert into clothes values(5,"M","silk","blouse",346,1000,"ruffled");
insert into clothes values(6,"L","FKAX","blouse",747,1000,"puffed");
insert into clothes values(7,"S","cotton","shirt",358,1000,"basic");
insert into clothes values(8,"M","FKAX","shirt",476,1000,"long");
insert into clothes values(9,"XL","silk","shirt",2984,1000,"dress");
insert into clothes values(10,"XXL","cotton","basic tee",183,1000,"basic");
insert into clothes values(11,"S","Velvet Mock","top",398,1000," Neck");
insert into clothes values(12,"M","FYR","top",503,1000,"Houndstooth");
insert into clothes values(13,"X","FKAX","top",598,1000,"Off-the Shoulder");
insert into clothes values(14,"L","cotton","top",389,1000,"Cutout Turtleneck");
insert into clothes values(15,"S","LINEN","polo shirt",171,1000,"basic");
