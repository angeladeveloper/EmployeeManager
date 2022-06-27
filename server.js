const express = require('express');
const mysql = require('mysql2');
const routes = require('./routes')

// const sequelize = require('./config/connection');
// we initiated it in the file 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)


app.get("http://localhost:3001/roles/1", (req, res) => {
  res.send('got it')
  console.log("got it")
})
// Connect to database
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // MySQL password
//     password: 'root',
//     database: 'employee_manager_db'
//   },
//   console.log(`Connected to the employee_manager_db database.`)
// );

// Hardcoded query: DELETE FROM course_names WHERE id = 3;

// db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Query database
// db.query('SELECT * FROM employees', function (err, results) {
//   console.log(results);
// });
// db.query(`SELECT * FROM employees WHERE id = ? `, 3, function (err, results) {
//   console.log(results);
// });



// db.query('SELECT * FROM roles', function (err, results) {
//   console.log(results);
// });
// db.query('SELECT * FROM departments', function (err, results) {
//   console.log(results);
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


