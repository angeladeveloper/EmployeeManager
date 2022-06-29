var inquirer = require("inquirer");
var colors = require('colors');
const { Employees, EmployeeUtility } = require('./models/employee.js')
const { Departments, DepartmentUtility, } = require('./models/departments.js');
const { Roles, RolesUtility, } = require('./models/roles.js');
// const sequelize = require('./config/connection');


function startProgram() {
  console.log(`                                     
  _____           _                   
 |   __|_____ ___| |___ _ _ ___ ___   
 |   __|     | . | | . | | | -_| -_|  
 |_____|_|_|_|  _|_|___|_  |___|___|  
             |_|       |___|                                              
  _____                               
 |     |___ ___ ___ ___ ___ ___       
 | | | | .'|   | .'| . | -_|  _|      
 |_|_|_|__,|_|_|__,|_  |___|_|        
                   |___|              
 `);
  inquirer.prompt([
    {
      type: "list",
      name: "main",
      message: "What would you like to do?",
      choices: ["View All Employees", "Add Employee", "Delete Employee", "Update Employee Role", "View All Roles", "Add Role", "Delete Role", "View All Departments", "Add Departments", "Delete Department"],
      default: "View All Employees",

    },
  ]).then(res => {
    const currentTask = res.main
    console.log(`Current Task: ${currentTask}`)
    taskRouter(currentTask)
  });

}

function taskRouter(task) {
  const e_utility = new EmployeeUtility();
  const d_utility = new DepartmentUtility();
  const r_utility = new RolesUtility();
  switch (task) {
    case "View All Employees":
      e_utility.viewEmployees();
      startProgram();
      // console.log("View All Employees".blue)
      break;
    case "Add Employee":
      e_utility.addEmployee();
      console.log("Add Employee".green)
      // startProgram()
      break;
    case "Delete Employee":
      e_utility.deleteEmployee();
      // console.log("Delete Employee".red)
      startProgram()
      break;
    case "Update Employee Role":
      console.log("Update Employee Role".blue)
      break;
    case "View All Roles":
      r_utility.viewRoles()
      console.log("View All Roles".blue)
      break;
    case "Delete Role":
      r_utility.deleteRole();
      console.log("Add Role".green)
      break;
    case "Add Role":
      r_utility.addRole();
      console.log("Add Role".green)
      break;
    case "View All Departments":
      d_utility.viewDepartments();
      console.log("View All Departments".blue)
      startProgram()
      break;
    case "Add Departments":
      d_utility.addDepartment();
      console.log("Add Departments".green)
      startProgram()
      break;
    case "Delete Department":
      d_utility.deleteDepartment();
      startProgram()
      // console.log("Add Departments".green)
      break;

    default:
      break;
  }
}


// // Force false so data doesn't get dropped on every sync
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

startProgram()