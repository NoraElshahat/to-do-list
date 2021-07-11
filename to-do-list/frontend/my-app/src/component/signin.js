import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function SignIn() {
  let history = useHistory();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function hanldeData(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function userLogin(e) {
    e.preventDefault();
    axios
      .post('http://localhost:4000/users/signin', user)
      .then((res) => {
        if (res.data.data) {
          localStorage.setItem('name', res.data.data.name);
          localStorage.setItem('token', res.data.data.token);
          localStorage.setItem('amount', res.data.data.wallet_amount);

          history.push('/tasks');
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  return (
    <div className="container ">
      <div className="row center_div mt-5">
        <form onSubmit={userLogin}>
          <div class="form-group">
            <label className="mt-2">Email</label>
            <input
              type="text"
              class="form-control"
              name="email"
              placeholder="Enter Your Email"
              onChange={hanldeData}
              value={user.email}
            />
          </div>
          <div class="form-group">
            <label className="mt-2">password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="Enter Price of Task"
              onChange={hanldeData}
              value={user.password}
            />
          </div>

          <button type="submit" class="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
