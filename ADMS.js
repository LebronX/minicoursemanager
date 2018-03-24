添加管理员：
Insert INTO MANAGER VALUES ('000','OKJB','000');


MANAGER:

管理员的添加/删除老师：
Insert INTO TEACHER VALUES ('001','OJBK','001');
Delete FROM TEACHER 
WHERE teacher_id = '001';

管理员的添加/删除学生：
Insert INTO STUDENT VALUES ('101','JBOK','101');
Delete FROM STUDENT 
WHERE course_id = '101';


TEACHER:

添加课程：
Insert INTO COURSE VALUES ('201','UML','001','60');

删除课程：
Delete FROM COURSE 
WHERE course_id = '201'

发布公告：
Insert INTO INFO VALUES ('301','HELLO','HELLO_WORLD','001');

删除公告：
Delete FROM COURSE 
WHERE course_id = '301'

老师的导入学生名单












