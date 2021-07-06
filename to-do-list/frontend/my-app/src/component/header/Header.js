import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
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
      </div>
    </nav>
  );
};

export default Header;
