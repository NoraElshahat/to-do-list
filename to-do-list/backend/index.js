const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');
const API_KEY =
  'ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SnVZVzFsSWpvaWFXNXBkR2xoYkNJc0ltTnNZWE56SWpvaVRXVnlZMmhoYm5RaUxDSndjbTltYVd4bFgzQnJJam94TVRBM09URjkudUhtRW0wbm5ZVkREOHVzWGNrLUlDWG9yUjhCWW1fVVQ2SlYzY1VTX2RfZTJLd2RQX0R4RFFVM3VFd1JUYVFRSkgxV1dmUzB3WDVwUzhJU2JDSFhJelE=';
require('./src/db/db-mysql');
const bodyParser = require('body-parser');
const taskRouter = require('./src/routers/taskRouter');
const userRouter = require('./src/routers/userRouter');
const { handleError } = require('./src/helpers/error');
const paymob = require('paymob');
app.use(cors());

//body parser to convert request body to json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/tasks', taskRouter);
app.use('/users', userRouter);

// middleware of central error handling
app.use((err, req, res, next) => {
  handleError(err, res);
  next();
});

//listen to server
app.listen(PORT, () => {
  console.log(`Server is listining on port ${PORT}`);
});
