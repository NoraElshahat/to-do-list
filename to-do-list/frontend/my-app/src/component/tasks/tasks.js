import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Tasks = () => {
  const [tasks, updateTasks] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/tasks/all-tasks').then((res) => {
      const all_tasks = res.data.data;
      updateTasks(all_tasks);
      console.log(all_tasks);
    });
  }, []);
  return (
    <div className="container">
      <Link to="/add-task">
        <img src="/add.png" width="50px" height="50" className="mt-5" />
      </Link>

      <div className="row mt-5">
        {tasks.map((task) => {
          return (
            <div className="col-lg-4 mt-2">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{task.title}</h5>
                  <p class="card-text">{task.description}</p>
                  <p class="card-text">{task.price} EGP</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
