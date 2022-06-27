const router = require('express').Router();
const Departments = require('../models/departments.js');


// GET  one employee
router.get('/:department_id', (req, res) => {
  Departments.findOne(
    {
      where: {
        id: req.params.department_id
      },
    }
  ).then((departmentData) => {
    console.log(departmentData.dataValues)
    res.json(departmentData);
  });
});

// Get all departments
router.get('/', async (req, res) => {
  const departmentData = await Departments.findAll().catch((err) => {
    res.json(err);
  });
  const departmentArray = []
  departmentData.forEach(department => {
    departmentArray.push(department.dataValues)
  });
  console.table(departmentArray)
  // console.log(employeeArray);
  res.json(departmentData);
});

module.exports = router