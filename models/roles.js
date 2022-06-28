const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
var inquirer = require("inquirer");

class Roles extends Model { }

Roles.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'roles',
  }
);



class RolesUtility {
  constructor() {

  }

  async viewRoles() {
    console.log("-----------------".green);
    console.log("Activating DELETE ROLES".green);
    const roles = await Roles.findAll()
    const rolesArray = []
    for (const role of roles) {
      rolesArray.push(role.dataValues);
    }
    console.table(rolesArray)

  }

  async deleteRole() {
    console.log("-----------------".red);
    console.log("Activating DELETE ROLES".red);
    const roles = await Roles.findAll()
    const rolesArray = []
    for (const role of roles) {
      rolesArray.push(role.dataValues);
    }
    console.table(rolesArray)

  }

  // This will add a new employee to the database. 
  addRole() {
    const departmentsArray = ["Engineering", "Finance", "Human Resources", "Marketing", "Service", "Production"]

    console.log("-----------------");
    console.log("Activating ADD ROLE");
    inquirer.prompt([
      {
        type: 'input',
        name: 'r.title',
        message: "What is the Role?"
      },
      {
        type: 'list',
        name: 'r.department',
        message: "What department is the role in?",
        choices: departmentsArray
      },
      {
        type: 'input',
        name: 'r.salary',
        message: "What is the role's salary (Yearly i.e 87000)?"
      },

    ])
      .then(res => {
        console.log(res.r.title);
        const roleAdded = Roles.create(
          {
            title: res.r.title,
            salary: +res.r.salary,
            department_id: 2
          }
        );
        return roleAdded;
      }).then(role => {
        console.log(`${role.title} has been added`);
        this.viewRoles();
      });
  }
}

module.exports = {
  Roles,
  RolesUtility,
};
