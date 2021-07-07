import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  function handleCheck(e) {
    setUser({ ...user, freelancer: e.target.checked });
    console.log(user, 'checked');
  }

  function hanldeData(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function userSignin(e) {
    e.preventDefault();
    // let history = useHistory();
    axios.post('http://localhost:4000/users/signup', user).then((res) => {
      console.log(res.data.data, 'ssdsd');
      localStorage.setItem('freelance', res.data.data.freelancer);
    });
  }
  return (
    <div className="container ">
      <div className="row center_div mt-5">
        <form onSubmit={userSignin}>
          <div class="form-group">
            <label className="mt-2">Name</label>
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="Enter Your Name"
              onChange={hanldeData}
              value={user.name}
            />
          </div>
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
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value={user.freelancer}
              name="freelancer"
              id="freelanceCheck"
              onChange={handleCheck}
            />
            <label class="form-check-label" for="freelanceCheck">
              are you freelancer ?
            </label>
          </div>
          <button type="submit" class="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
