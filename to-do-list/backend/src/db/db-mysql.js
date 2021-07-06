const mySql = require('mysql');
const connection = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'to_do_list',
});

connection.connect((error) => {
  if (error) {
    throw error;
  }
  console.log('Connected Database Done');
});

module.exports = connection;
