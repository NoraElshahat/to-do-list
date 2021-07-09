const connection = require('../db/db-mysql');
const { ErrorHandler } = require('../helpers/error');

const addNewTask = async (req, res, next) => {
  const { body } = req;
  try {
    const newTask = await connection.query(
      'INSERT INTO tasks SET ?',
      body,
      (err) => {
        if (err) console.log(err.message);
        console.log('Task addedd');
        res.status(200).send({ data: newTask.values });
      }
    );
  } catch (err) {
    next(err);
  }
};

const listAllTasks = async (req, res, next) => {
  try {
    await connection.query('SELECT * FROM tasks', (err, rows) => {
      if (err) {
        throw new ErrorHandler(400, 'Somthing Went Worng');
      }
      res.status(200).send({ data: rows });
    });
  } catch (err) {
    next(err);
  }
};

const updateStatusTask = async (req, res, next) => {
  const id = req.params.id;
  const status = req.params.status;

  try {
    await connection.query(
      `UPDATE tasks SET status ="${status}" WHERE id =${id}`,
      (err, result) => {
        if (err) {
          throw new ErrorHandler(400, "Can't Update");
        }
        res.status(200).send({ data: result });
      }
    );
  } catch (error) {
    next(error);
  }
};
module.exports = {
  addNewTask,
  listAllTasks,
  updateStatusTask,
};
