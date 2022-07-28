const { Employees, EmployeeUtility } = require('./employee.js')
const { Departments, DepartmentUtility, } = require('./departments.js');
const { Roles, RolesUtility, } = require('./roles.js');


// Employees.hasOne(Roles, {
//   foreignKey: 'role_id',
// });

// Roles.belongsTo(Employees, {
//   foreignKey: 'role_id',
// });

Departments.hasMany(Employees, {
  foreignKey: 'department_id',
});


Employees.belongsTo(Departments, {
  foreignKey: 'department_id',
});
Departments.hasMany(Roles, {
  foreignKey: 'department_id',
});


Roles.belongsTo(Departments, {
  foreignKey: 'department_id',
});

module.exports = { Employees, Roles, Departments };