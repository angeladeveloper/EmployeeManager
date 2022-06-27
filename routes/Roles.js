const router = require('express').Router();
const Roles = require('../models/roles.js');


// GET  one role
router.get('/:role_id', (req, res) => {
  Roles.findOne(
    {
      where: {
        id: req.params.role_id
      },
    }
  ).then((roleData) => {
    console.table(roleData.dataValues)
    res.json(roleData);
  });
});

// Get all departments
router.get('/', async (req, res) => {
  const roleData = await Roles.findAll().catch((err) => {
    res.json(err);
  });
  const roleArray = []
  roleData.forEach(department => {
    roleArray.push(department.dataValues)
  });
  console.table(roleArray)
  res.json(roleData);
});

module.exports = router