const { Model, DataTypes } = require('sequelize');
const inquirer = require('inquirer');

const sequelize = require('../config/connection');

class Departments extends Model { }

Departments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'departments',
  }
);



class DepartmentUtility {
  constructor() {

  }

  async viewDepartments() {
    console.log("-----------------".green);
    console.log("Activating VIEW DEPARTMENTS".green);
    const departments = await Departments.findAll()
    const departmentArray = []
    for (const department of departments) {
      departmentArray.push(department.dataValues);
    }
    console.table(departmentArray)
  }

  async deleteDepartment() {
    console.log("-----------------".red);
    console.log("Activating DELETE DEPARTMENTS".red);
    const departments = await Departments.findAll()
    const departmentArray = []
    for (const department of departments) {
      departmentArray.push(department.dataValues);
    }
    console.table(departmentArray)

  }

  // This will add a new DEPARTMENT to the database. 
  addDepartment() {
    const roleArray = ["Software Developer", "Accountant", "Lead Engineer", "Sales", "Operator", "CSR", "Clerical staff", "HR manager"]

    console.log("-----------------");
    console.log("Activating ADD EMPLOYEE");
    inquirer.prompt([
      {
        type: 'input',
        name: 'd.name',
        message: "What is the new department?"
      },
    ])
      .then(res => {
        console.log(res.d.name);
        const depAdded = Departments.create(
          {
            name: res.d.name,
          }
        );
        console.log(`${res.d.name}s auto-generated ID:`, depAdded.id);
        console.log(`${depAdded.name} has been added to departments`)
      });
  }
}

module.exports = {
  Departments,
  DepartmentUtility,
};