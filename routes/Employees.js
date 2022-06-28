const router = require('express').Router();
const { Employee } = require('../models/employee.js')


router.get('/:employee_id', (req, res) => {
  Employee.findOne(
    {
      where: {
        id: req.params.employee_id
      },
    }
  ).then((employeeData) => {
    // console.log(employeeData.dataValues)
    res.json(employeeData);
  });
});

// Get all employees
router.get('/', async (req, res) => {
  const employeeData = await Employee.findAll().catch((err) => {
    res.json(err);
  });
  const employeeArray = []
  employeeData.forEach(employee => {
    employeeArray.push(employee.dataValues)
  });
  console.table(employeeArray)
  // console.log(employeeArray);
  res.json(employeeData);
});

module.exports = router