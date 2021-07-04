const bcrypt = require('bcryptjs');
const connection = require('../db/db-mysql');
const { ErrorHandler } = require('../helpers/error');
const jwt = require('jsonwebtoken');

//create user
const signUp = async (req, res, next) => {
  const { body } = req;
  if (body.password != undefined) {
    body.password = await bcrypt.hash(body.password, 8);
  }
  try {
    // const token = jwt.sign({}, 'secret_key', { expiresIn: '5m' });
    // newUser.token = token;
    const newUser = await connection.query(
      'INSERT INTO users SET ? ',
      body,
      (err) => {
        if (err) throw new ErrorHandler(400, 'Something Went Wrong');
        console.log('User Added');

        return res.status(200).send({ data: newUser.values });
      }
    );
  } catch (error) {
    next(error);
  }
};
const signIn = async (req, res, next) => {
  // const { body } = req;
  // console.log(body.email);
  // const useWithEmail = await connection.query(
  //   `SELECT * FROM users WHERE "email"= ${body.email}`,
  //   (err) => {
  //     if (err) throw new ErrorHandler(400, 'Not Found');
  //     return res.send({ data: useWithEmail.values });
  //   }
  // );
  // console.log(useWithEmail.values, 'with email');
  // // const isMatch = await bcrypt.compare(body.password, body.password);
  // // if (!isMatch) {
  // //   throw new ErrorHandler(400, 'Unable To Login');
  // // }
  // try {
  //   const userLogined = await connection.query(
  //     `SELECT name , email FROM users WHERE email = ${body.email} and password = ${body.password}`,
  //     (err) => {
  //       if (err) throw new ErrorHandler(400, 'Something Went Wrong');
  //       console.log(userLogined, 'user logined');
  //       const token = jwt.sign({}, 'secret_key', { expiresIn: '5m' });
  //       userLogined.token = token;
  //       res.status(200).send({ data: userLogined, token: token });
  //     }
  //   );
  // } catch (error) {
  //   next(error);
  // }
};

module.exports = {
  signUp,
  signIn,
};
