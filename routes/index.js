const router = require('express').Router();
const employeesRoutes = require('./Employees')
const departmentRoutes = require('./Departments')
const rolesRoutes = require('./Roles')

router.use('/departments', departmentRoutes);
router.use('/employees', employeesRoutes);
router.use('/roles', rolesRoutes);

module.exports = router;



module.exports = router;
