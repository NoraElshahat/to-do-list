const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');
require('./src/db/db-mysql');
const bodyParser = require('body-parser');
const taskRouter = require('./src/routers/taskRouter');
const { handleError } = require('./src/helpers/error');
app.use(cors());

//body parser to convert request body to json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/tasks', taskRouter);

// middleware of central error handling
app.use((err, req, res, next) => {
  handleError(err, res);
  next();
});

//listen to server
app.listen(PORT, () => {
  console.log(`Server is listining on port ${PORT}`);
});
