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
    const users = await Employees.findAll()
    const employeeArray = []
    for (const employee of users) {
      employeeArray.push(employee.dataValues);
      // employeeArray.push(employee.dataValues)
    }
    console.table(employeeArray)

  }

  // This will add a new employee to the database. 
  addEmployee() {
    const roleArray = ["Software Developer", "Accountant", "Lead Engineer", "Sales", "Operator", "CSR", "Clerical staff", "HR manager"]

    console.log("-----------------");
    console.log("Activating ADD EMPLOYEE");
    inquirer.prompt([
      {
        type: 'input',
        name: 'e.first_name',
        message: "What is the Employee's first name?"
      },
      {
        type: 'input',
        name: 'e.last_name',
        message: "What is the Employee's last name?"
      },
      {
        type: 'list',
        name: 'e.role',
        message: "What is the Employee's role?",
        choices: roleArray
      },
    ])
      .then(res => {
        console.log(res.e.first_name);
        const empAdded = Employees.create(
          {
            first_name: res.e.first_name,
            last_name: res.e.last_name,
            role_id: 2
          }
        );
        console.log(`${res.e.first_name}'s auto-generated ID:`, empAdded.id);
        console.log(`${res.e.first_name} has been added`)
      });
  }
}

module.exports = {
  Employees,
  EmployeeUtility,
};