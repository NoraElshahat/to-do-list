import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const Header = () => {
  let history = useHistory();
  function signUp(e) {
    e.preventDefault();
    history.push('/sign-up');
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a class="navbar-brand">To Do List</a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/tasks" class="nav-item nav-link">
                Tasks
              </Link>
            </div>
          </div>
          <form class="form-inline my-2 my-lg-0" onSubmit={signUp}>
            {localStorage.getItem('freelance') == 'undefined'
              ? 'Client ->  '
              : 'Freelancer ->  '}
            {localStorage.getItem('name') ? (
              localStorage.getItem('name')
            ) : (
              <button className="btn btn-success">sign up</button>
            )}
          </form>
        </div>
      </nav>
    </>
  );
};

export default Header;
