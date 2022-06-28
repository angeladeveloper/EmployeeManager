const inquirer = require('inquirer');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employees extends Model { }

Employees.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employees',
  }
);

class EmployeeUtility {
  constructor() {

  }

  async viewEmployees() {
    console.log("-----------------".green);
    console.log("Activating VIEW EMPLOYEES".green);
    const users = await Employees.findAll()
    const employeeArray = []
    for (const employee of users) {
      employeeArray.push(employee.dataValues);
      // employeeArray.push(employee.dataValues)
    }
    console.table(employeeArray)
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
  addEmployee() {
    //TODO: Switch this out with real array from database
    const roleArray = ["Software Developer", "Accountant", "Lead Engineer", "Sales", "Operator", "CSR", "Clerical staff", "HR manager"]

    console.log("-----------------");
    console.log("ADD EMPLOYEE");
    // Inquirer for adding employee
    inquirer.prompt([
      {
        type: 'input',
        name: 'e.first_name',
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
        name: 'e.last_name',
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
        name: 'e.role',
        message: "What is the Employee's role?",
        choices: roleArray
      },
    ])
      // Add new Employee to database
      .then(res => {
        console.log(res.e.first_name);
        const empAdded = Employees.create(
          {
            first_name: res.e.first_name,
            last_name: res.e.last_name,
            role_id: 2
          }
        );
        return empAdded
      })
      // Display added employee and full list
      .then(employee => {
        console.log(`${employee.first_name} ${employee.last_name} has been added. ID:${employee.id}`)
        this.viewEmployees();
      });
  }
}

module.exports = {
  Employees,
  EmployeeUtility,
};