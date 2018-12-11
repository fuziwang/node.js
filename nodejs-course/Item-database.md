```mysql
MariaDB [pleasing_growth]> show tables;
+---------------------------+
| Tables_in_pleasing_growth |
+---------------------------+
| Article                   |
| ArticleColumn             |
| ArticleComment            |
| Back                      |
| Fruit                     |
| Photo                     |
| Photos                    |
| Say                       |
| SayComment                |
| Tree                      |
| User                      |
| UserConcern               |
| UserHobby                 |
| Video                     |
+---------------------------+
14 rows in set (0.01 sec)

MariaDB [pleasing_growth]> describe User;
+-----------+--------------+------+-----+---------+-------+
| Field     | Type         | Null | Key | Default | Extra |
+-----------+--------------+------+-----+---------+-------+
| uid       | int(11)      | NO   | PRI | NULL    |       |
| uname     | varchar(30)  | YES  | UNI | NULL    |       |
| uimage    | varchar(100) | YES  |     | NULL    |       |
| usex      | char(4)      | YES  |     | NULL    |       |
| uage      | int(11)      | YES  |     | NULL    |       |
| uwhere    | varchar(20)  | YES  |     | NULL    |       |
| utel      | varchar(30)  | YES  |     | NULL    |       |
| upass     | varchar(20)  | YES  |     | NULL    |       |
| ufans     | int(11)      | YES  |     | NULL    |       |
| uconcern  | int(11)      | YES  |     | NULL    |       |
| udescribe | varchar(50)  | YES  |     | NULL    |       |
| ustatus   | int(11)      | YES  |     | NULL    |       |
+-----------+--------------+------+-----+---------+-------+
12 rows in set (0.00 sec)

MariaDB [pleasing_growth]> describe UserHobby;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| uid   | int(11)     | YES  |     | NULL    |       |
| topic | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

MariaDB [pleasing_growth]> describe UserConcern;
+-------+---------+------+-----+---------+-------+
| Field | Type    | Null | Key | Default | Extra |
+-------+---------+------+-----+---------+-------+
| uid   | int(11) | YES  |     | NULL    |       |
| upid  | int(11) | YES  |     | NULL    |       |
+-------+---------+------+-----+---------+-------+
2 rows in set (0.00 sec)

MariaDB [pleasing_growth]> describe Article;
+----------+--------------+------+-----+---------+-------+
| Field    | Type         | Null | Key | Default | Extra |
+----------+--------------+------+-----+---------+-------+
| aid      | int(11)      | NO   | PRI | NULL    |       |
| atitle   | varchar(40)  | YES  |     | NULL    |       |
| acontent | varchar(100) | YES  |     | NULL    |       |
| atime    | varchar(20)  | YES  |     | NULL    |       |
| acomment | int(11)      | YES  |     | NULL    |       |
| aimage   | varchar(100) | YES  |     | NULL    |       |
| astatus  | int(11)      | YES  |     | NULL    |       |
| aprivate | int(11)      | YES  |     | NULL    |       |
| uid      | int(11)      | YES  | MUL | NULL    |       |
+----------+--------------+------+-----+---------+-------+
9 rows in set (0.00 sec)

MariaDB [pleasing_growth]> describe ArticleColumn;
+---------+-------------+------+-----+---------+-------+
| Field   | Type        | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| aid     | int(11)     | YES  |     | NULL    |       |
| acloumn | varchar(10) | YES  |     | NULL    |       |
+---------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

MariaDB [pleasing_growth]> describe Say;
+----------+---------------+------+-----+---------+-------+
| Field    | Type          | Null | Key | Default | Extra |
+----------+---------------+------+-----+---------+-------+
| sid      | int(11)       | NO   | PRI | NULL    |       |
| scontent | varchar(1000) | YES  |     | NULL    |       |
| stime    | char(30)      | YES  |     | NULL    |       |
| simage   | varchar(100)  | YES  |     | NULL    |       |
| sstatus  | int(11)       | YES  |     | NULL    |       |
| uid      | int(11)       | YES  | MUL | NULL    |       |
+----------+---------------+------+-----+---------+-------+
6 rows in set (0.00 sec)

MariaDB [pleasing_growth]> describe SayComment;
+-----------+---------------+------+-----+---------+-------+
| Field     | Type          | Null | Key | Default | Extra |
+-----------+---------------+------+-----+---------+-------+
| scid      | int(11)       | NO   | PRI | NULL    |       |
| sccontent | varchar(1000) | YES  |     | NULL    |       |
| sctime    | char(30)      | YES  |     | NULL    |       |
| scstatus  | int(11)       | YES  |     | NULL    |       |
| uid       | int(11)       | YES  |     | NULL    |       |
| sid       | int(11)       | YES  |     | NULL    |       |
+-----------+---------------+------+-----+---------+-------+
6 rows in set (0.00 sec)

MariaDB [pleasing_growth]> describe ArticleComment;
+-----------+---------------+------+-----+---------+-------+
| Field     | Type          | Null | Key | Default | Extra |
+-----------+---------------+------+-----+---------+-------+
| acid      | int(11)       | NO   | PRI | NULL    |       |
| accontent | varchar(1000) | YES  |     | NULL    |       |
| actime    | char(30)      | YES  |     | NULL    |       |
| acstatus  | int(11)       | YES  |     | NULL    |       |
| uid       | int(11)       | YES  |     | NULL    |       |
| aid       | int(11)       | YES  |     | NULL    |       |
+-----------+---------------+------+-----+---------+-------+
6 rows in set (0.00 sec)

MariaDB [pleasing_growth]> describe Back;
+----------+---------------+------+-----+---------+-------+
| Field    | Type          | Null | Key | Default | Extra |
+----------+---------------+------+-----+---------+-------+
| rid      | int(11)       | NO   | PRI | NULL    |       |
| rcontent | varchar(1000) | YES  |     | NULL    |       |
| rtel     | varchar(30)   | YES  |     | NULL    |       |
| rtime    | char(30)      | YES  |     | NULL    |       |
| rimage   | varchar(100)  | YES  |     | NULL    |       |
| rstatus  | int(11)       | YES  |     | NULL    |       |
| uid      | int(11)       | YES  |     | NULL    |       |
+----------+---------------+------+-----+---------+-------+
7 rows in set (0.00 sec)

MariaDB [pleasing_growth]> describe Tree;
+---------+-------------+------+-----+---------+-------+
| Field   | Type        | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| tid     | int(11)     | NO   | PRI | NULL    |       |
| tcount  | int(11)     | YES  |     | NULL    |       |
| ttime   | varchar(20) | YES  |     | NULL    |       |
| tstatus | int(11)     | YES  |     | NULL    |       |
| uid     | int(11)     | YES  |     | NULL    |       |
+---------+-------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

MariaDB [pleasing_growth]> describe Fruit;
+---------+--------------+------+-----+---------+-------+
| Field   | Type         | Null | Key | Default | Extra |
+---------+--------------+------+-----+---------+-------+
| fid     | int(11)      | NO   | PRI | NULL    |       |
| fname   | varchar(100) | YES  |     | NULL    |       |
| ftime   | varchar(20)  | YES  |     | NULL    |       |
| fstatus | int(11)      | YES  |     | NULL    |       |
| tid     | int(11)      | YES  |     | NULL    |       |
+---------+--------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

MariaDB [pleasing_growth]> describe Video;
+---------+--------------+------+-----+---------+-------+
| Field   | Type         | Null | Key | Default | Extra |
+---------+--------------+------+-----+---------+-------+
| vid     | int(11)      | NO   | PRI | NULL    |       |
| vname   | varchar(100) | YES  | UNI | NULL    |       |
| vtype   | varchar(10)  | YES  |     | NULL    |       |
| vlocal  | varchar(100) | YES  |     | NULL    |       |
| vtime   | char(30)     | YES  |     | NULL    |       |
| vstatus | int(11)      | YES  |     | NULL    |       |
| uid     | int(11)      | YES  |     | NULL    |       |
+---------+--------------+------+-----+---------+-------+
7 rows in set (0.00 sec)

MariaDB [pleasing_growth]> describe Photos;
+---------+--------------+------+-----+---------+-------+
| Field   | Type         | Null | Key | Default | Extra |
+---------+--------------+------+-----+---------+-------+
| xid     | int(11)      | NO   | PRI | NULL    |       |
| xname   | varchar(50)  | YES  | UNI | NULL    |       |
| xcount  | int(11)      | YES  |     | NULL    |       |
| xlocal  | varchar(100) | YES  |     | NULL    |       |
| xtime   | char(30)     | YES  |     | NULL    |       |
| xstatus | int(11)      | YES  |     | NULL    |       |
| uid     | int(11)      | YES  |     | NULL    |       |
+---------+--------------+------+-----+---------+-------+
7 rows in set (0.00 sec)

MariaDB [pleasing_growth]> describe Photo;
+---------+--------------+------+-----+---------+-------+
| Field   | Type         | Null | Key | Default | Extra |
+---------+--------------+------+-----+---------+-------+
| pid     | int(11)      | NO   | PRI | NULL    |       |
| pname   | varchar(100) | YES  | UNI | NULL    |       |
| ptype   | varchar(10)  | YES  |     | NULL    |       |
| plocal  | varchar(100) | YES  |     | NULL    |       |
| ptime   | char(30)     | YES  |     | NULL    |       |
| pstatus | int(11)      | YES  |     | NULL    |       |
| xid     | int(11)      | YES  |     | NULL    |       |
+---------+--------------+------+-----+---------+-------+
7 rows in set (0.00 sec)

```

