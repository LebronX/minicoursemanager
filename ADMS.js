﻿添加管理员：
INSERT INTO MANAGER VALUES ('000','OKJB','000');


MANAGER:

管理员的添加/删除老师：
INSERT INTO TEACHER VALUES ('001','OJBK','001');
DELETE FROM TEACHER 
WHERE teacher_id = '001';

管理员的添加/删除学生：
INSERT INTO STUDENT VALUES ('101','JBOK','101');
DELETE FROM STUDENT 
WHERE course_id = '101';


TEACHER:

添加/删除课程：
INSERT INTO COURSE VALUES ('201','UML','001','60');
DELETE FROM COURSE 
WHERE course_id = '201'

发布/删除/查看公告：
INSERT INTO INFO VALUES ('301','HELLO','HELLO_WORLD','001');
DELETE FROM INFO 
WHERE info_id = '301'
SELECT info_name,info_content
FROM INFO
WHERE info_id = '301'

老师的导入/删除学生名单,这个是加入/删除COURSE_MEMBER中
INSERT INTO COURSE_MEMBER VALUES ('201','101');
DELETE FROM COURSE_MEMBER
WHERE student_id = '101'

学生签到
INSERT INTO SIGN_USER VALUES ('201','101','JBOK');

随机点名(不太懂)
SELECT

查看签到结果
SELECT * FROM SIGN_USER






