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
       
INSERT INTO employees (first_name, last_name ,role_id, is_active, is_manager)
VALUES
  ("Timon","Darryl",1,true,true),
  ("Zena","Keiko",3,true,false),
  ("Dai","Inez",2,true,false),
  ("Lillian","Ila",1,true,false),
  ("Skyler","Leila",2,true,false),
  ("Paul","Hanae",5,true,true),
  ("Ariana","Upton",4,true,false),
  ("Clark","Hiram",6,true,false),
  ("Chaim","Vincent",2,true,false),
  ("Solomon","Dexter",2,true,true),
  ("Ryan","Emery",4,true,false),
  ("Ina","Victor",5,true,true),
  ("Christian","Daniel",3,true,true);