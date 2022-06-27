INSERT INTO departments (name, id)
VALUES ("Engineering", 1),
       ("Finance", 2),
       ("Human Resources",3),
       ("Marketing",4),
       ("Service",5),
       ("Production",6);

INSERT INTO roles (title, department_id, salary)
VALUES ("Software Developer", 1, 100000),
       ("Accountant",2, 90000),
       ("Lead Engineer",1,130000),
       ("Sales",4,80000),
       ("Operator",6,75000),
       ("CSR",5,75000),
       ("Clerical staff",5,70000),
       ("HR manager",3,95000);
       
INSERT INTO employees (first_name, last_name ,role_id)
VALUES
  ("Sean","Chandler",2),
  ("Gavin","Declan",2),
  ("Ulysses","Jerome",3),
  ("Laith","Stephen",3),
  ("Reed","Rashad",1),
  ("Destiny","Louis",4),
  ("Amity","Calvin",1),
  ("Maris","Melvin",2),
  ("Uriel","Kasper",2),
  ("Sean","Xander",3),
  ("Hayden","Guy",1),
  ("Amela","Dolan",5),
  ("Sophia","Tarik",7);