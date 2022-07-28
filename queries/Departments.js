const inquirer = require('inquirer');
const { Roles, Departments, Employees } = require('../models/index');
const { EmployeeUtility } = require("./Employee");
const { RolesUtility } = require("./Roles");


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
  async viewDepartmentArray() {
    const departments = await Departments.findAll();
    const departmentArray = [];
    for (const department of departments) {
      const department_name = department.dataValues.name;
      const department_id = department.dataValues.id;
      const departmentObject = { value: department_id, name: department_name }
      departmentArray.push(departmentObject)
    }
    console.log(departmentArray)
    return departmentArray;
  }

  async viewSpecificRolesArray(depart_id) {
    const roles = await Roles.findAll({
      where: {
        department_id: depart_id
      }
    });
    const roleArray = [];
    for (const role of roles) {
      const role_name = role.dataValues.title;
      const role_id = role.dataValues.id;
      const departmentObject = { value: role_id, title: role_name }
      roleArray.push(departmentObject)

    }
    console.table(roleArray)
    return roleArray;
  }
  // This will add a new DEPARTMENT to the database. 
  async addDepartment() {
    const e_utility = new EmployeeUtility();
    const employeeArray = await e_utility.viewEmployees();

    console.log("-----------------");
    console.log("Activating ADD Department");
    inquirer.prompt([
      {
        type: 'input',
        name: 'd.name',
        message: "What is the new department?"
      },
      {
        type: 'list',
        name: 'd_manager',
        message: 'Who is the manager?',
        choices: employeeArray
      }
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

Departments.prototype.addDepartment

module.exports = { DepartmentUtility }