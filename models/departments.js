const { Model, DataTypes } = require('sequelize');
const inquirer = require('inquirer');
const { Employees, EmployeeUtility } = require('./employee')

const sequelize = require('../config/connection');
const { response } = require('express');
const { Roles } = require('./roles');

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



// class DepartmentUtility {
//   constructor() {

//   }

//   async viewDepartments() {
//     console.log("-----------------".green);
//     console.log("Activating VIEW DEPARTMENTS".green);
//     const departments = await Departments.findAll()
//     const departmentArray = []
//     for (const department of departments) {
//       departmentArray.push(department.dataValues);
//     }
//     console.table(departmentArray)
//   }

//   async deleteDepartment() {
//     console.log("-----------------".red);
//     console.log("Activating DELETE DEPARTMENTS".red);
//     const departments = await Departments.findAll()
//     const departmentArray = []
//     for (const department of departments) {
//       departmentArray.push(department.dataValues);
//     }
//     console.table(departmentArray)

//   }
//   async viewDepartmentArray() {
//     const departments = await Departments.findAll();
//     const departmentArray = [];
//     for (const department of departments) {
//       const department_name = department.dataValues.name;
//       const department_id = department.dataValues.id;
//       const departmentObject = { value: department_id, name: department_name }
//       departmentArray.push(departmentObject)
//     }
//     console.log(departmentArray)
//     return departmentArray;
//   }

//   async viewSpecificRolesArray(depart_id) {
//     const roles = await Roles.findAll({
//       where: {
//         department_id: depart_id
//       }
//     });
//     const roleArray = [];
//     for (const role of roles) {
//       const role_name = role.dataValues.title;
//       const role_id = role.dataValues.id;
//       const departmentObject = { value: role_id, title: role_name }
//       roleArray.push(departmentObject)

//     }
//     console.table(roleArray)
//     return roleArray;
//   }
//   // This will add a new DEPARTMENT to the database. 
//   async addDepartment() {
//     const e_utility = new EmployeeUtility();
//     const managerArray = await e_utility.viewManagers();
//     const employeeArray = await e_utility.viewEmployees();

//     console.log("-----------------");
//     console.log("Activating ADD EMPLOYEE");
//     inquirer.prompt([
//       {
//         type: 'input',
//         name: 'd.name',
//         message: "What is the new department?"
//       },
//       {
//         type: 'list',
//         name: 'd_manager',
//         message: 'Who is the manager?',
//         choices: employeeArray
//       }
//     ])
//       .then(res => {
//         console.log(res.d.name);
//         const depAdded = Departments.create(
//           {
//             name: res.d.name,
//           }
//         );
//         console.log(`${res.d.name}s auto-generated ID:`, depAdded.id);
//         console.log(`${depAdded.name} has been added to departments`)
//       });
//   }
// }

module.exports = {
  Departments,
  // DepartmentUtility,
};