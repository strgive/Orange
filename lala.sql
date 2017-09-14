CREATE DATABASE la CHARSET=UTF8;
USE la;
CREATE TABLE la_user(
 uid  INT PRIMARY KEY AUTO_INCREMENT,
 uname VARCHAR(20) UNIQUE,
 upwd  VARCHAR(32)
);
INSERT INTO la_user VALUES(null,'qiangdong','123456');
INSERT INTO la_user VALUES(null,'naicha','123456');
INSERT INTO la_user VALUES(null,'dongdong','123456');
CREATE TABLE la_product(
 pid   INT PRIMARY KEY AUTO_INCREMENT,
 pname VARCHAR(200),
 price DECIMAL(10,2),
 pic   VARCHAR(100)
);
CREATE TABLE la_cart(
  cid   INT PRIMARY KEY AUTO_INCREMENT,
  pid   INT,
  uid   INT,
  count INT
);
INSERT INTO la_cart VALUES(null,1,1,2);
INSERT INTO la_cart VALUES(null,5,1,1);


INSERT INTO la_product VALUES
(1,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/1.jpg'),
(2,'手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/2.jpg'),
(3,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/3.jpg'),
(4,'手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/4.jpg'),
(5,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/5.jpg'),
(6,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/6.jpg'),
(7,'手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/7.jpg'),
(8,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/8.jpg'),
(9,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/9.jpg'),
(10,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/10.jpg'),
(11,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/11.jpg'),
(12,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/1.jpg'),
(13,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/2.jpg'),
(14,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/3.jpg'),
(15,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/4.jpg'),
(16,'手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/5.jpg'),
(17,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/6.jpg'),
(18,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/7.jpg'),
(19,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/8.jpg'),
(20,'手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/9.jpg'),
(21,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/10.jpg'),
(22,'手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/11.jpg'),
(23,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/1.jpg'),
(24,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/2.jpg'),
(25,'手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/3.jpg'),
(26,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/4.jpg'),
(27,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/5.jpg'),
(28,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/6.jpg'),
(29,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/7.jpg'),
(30,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/8.jpg'),
(31,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/9.jpg'),
(32,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/10.jpg'),
(33,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/11.jpg'),
(34,'手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/1.jpg'),
(35,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/2.jpg'),
(36,'【良品铺子旗舰店】手剥松子218g 坚果炒货零食新货巴西松子包邮',28.80,'images/3.jpg');

