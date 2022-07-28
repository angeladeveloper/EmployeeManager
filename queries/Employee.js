const inquirer = require('inquirer')
const { Employees } = require('../models/index');
const { DepartmentUtility } = require("./Departments");


class EmployeeUtility {
  constructor() {

  }

  async viewEmployees() {
    console.log("-----------------".green);
    console.log("Activating VIEW EMPLOYEES".green);
    const employees = await Employees.findAll({
      where: {
        is_active: true
      }
    })
    const employeeArray = []
    for (const employee of employees) {
      const employeeName = `${employee.dataValues.first_name}  ${employee.dataValues.last_name}`;
      const employeeId = employee.dataValues.id;
      const employeeObject = { value: employeeId, name: employeeName }
      employeeArray.push(employeeObject);
    }
    console.table(employeeArray)
    return employeeArray
  }

  async viewManagers() {
    console.log("-----------------".green);
    console.log("Activating VIEW EMPLOYEES".green);
    const employees = await Employees.findAll({
      where: {
        is_manager: true,
        is_active: true

      }
    })
    const employeeArray = []
    for (const employee of employees) {
      const employeeName = `${employee.dataValues.first_name}  ${employee.dataValues.last_name}`;
      const employeeId = employee.dataValues.id;
      const employeeObject = { value: employeeId, name: employeeName }
      employeeArray.push(employeeObject);
      // employeeArray.push(employee.dataValues);
      // employeeArray.push(employee.dataValues)
    }
    console.table(employeeArray)
    return employeeArray
  }

  async deleteEmployee() {
    console.log("-----------------".red);
    console.log("Activating DELETE EMPLOYEE".red);
    const users = await Employees.findAll({
      where: {
        id: 10
      }
    })
    const employeeArray = []
    for (const employee of users) {
      employeeArray.push(employee.dataValues);
      // employeeArray.push(employee.dataValues)
    }
    console.table(employeeArray)

  }

  // This will add a new employee to the database. 
  async addEmployee() {
    // Queriers Database to get real time departments

    const d_utility = new DepartmentUtility();
    const departmentArray = await d_utility.viewDepartmentArray()

    console.log("-----------------");
    console.log("ADD EMPLOYEE");
    // Inquirer for adding employee
    inquirer.prompt([
      {
        type: 'input',
        name: 'e_first_name',
        message: "What is the Employee's first name?",
        validate(answer) {
          if (!answer) {
            return "Please Enter a valid name!";
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'e_last_name',
        message: "What is the Employee's last name?",
        validate(answer) {
          if (!answer) {
            return "Please Enter a valid name!";
          }
          return true;
        },
      },
      {
        type: 'list',
        name: 'e_department',
        message: "What department is the employee being hired into?",
        choices: departmentArray
      },
    ])
      // Here, we are finding the roles in this department. 
      .then(async function (res) {
        // console.log(res)
        const department_id = res.e_department;
        const d_utility = new DepartmentUtility();

        const roleArray = await d_utility.viewSpecificRolesArray(department_id);
        console.log(res);
        const employeeObject = res

        await inquirer.prompt([
          {
            type: 'list',
            name: 'e_role',
            message: "What is the Employee's role?",
            choices: roleArray
          },
        ]
        ).then(function (answers) {
          const role = answers.e_role;
          employeeObject.role_id = role
          console.log(employeeObject)
          const empAdded = Employees.create({
            first_name: employeeObject.e_first_name,
            last_name: employeeObject.e_last_name,
            first_name: employeeObject.e_first_name,
            role_id: employeeObject.role_id,
            department_id: employeeObject.e_department
          })
          return empAdded
        }
        )
      })

      // Display added employee and full list
      .then(employee => {
        this.viewEmployees();
      });
  }
}

module.exports = { EmployeeUtility: EmployeeUtility }