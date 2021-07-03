const mySql = require('mysql');
const connection = mySql.createConnection({
  host: 'localhost',
  user: 'noura',
  password: 'password',
  database: 'to-do-list',
});

connection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log('Connected Database Done');
});
