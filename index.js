var inquirer = require("inquirer");
var colors = require('colors');
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
      choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Departments"],
      default: "View All Employees",

    },
  ]).then(res => {
    const currentTask = res.main
    console.log(`Current Task: ${currentTask}`)
    taskRouter(currentTask)
  });

}

function taskRouter(task) {
  switch (task) {
    case "View All Employees":
      console.log("View All Employees".blue)
      break;
    case "Add Employee":
      console.log("Add Employee".green)
      break;
    case "Update Employee Role":
      console.log("Update Employee Role".blue)
      break;
    case "View All Roles":
      console.log("View All Roles".blue)
      break;
    case "Add Role":
      console.log("Add Role".green)
      break;
    case "View All Departments":
      console.log("View All Departments".blue)
      break;
    case "Add Departments":
      console.log("Add Departments".green)
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