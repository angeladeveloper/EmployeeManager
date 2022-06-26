const express = require('express');

// Import the connection object
const sequelize = require('./config/connection');
// we initiated it in the file 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database before starting the Express.js server
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });

// Hardcoded query: DELETE FROM course_names WHERE id = 3;

db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Query database
db.query('SELECT * FROM course_names', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
