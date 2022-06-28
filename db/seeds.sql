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
       
INSERT INTO employees (first_name, last_name ,role_id, is_active)
VALUES
  ("Sean","Chandler",2, true),
  ("Gavin","Declan",2, true),
  ("Ulysses","Jerome",3, true),
  ("Laith","Stephen",3, true),
  ("Reed","Rashad",1, true),
  ("Destiny","Louis",4, true),
  ("Amity","Calvin",1, true),
  ("Maris","Melvin",2, true),
  ("Uriel","Kasper",2, true),
  ("Sean","Xander",3, true),
  ("Hayden","Guy",1, true),
  ("Amela","Dolan",5, true),
  ("Sophia","Tarik",7, true);