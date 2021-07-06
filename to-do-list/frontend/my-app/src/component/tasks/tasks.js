import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';
import './tasks-style.css';

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

      <div className="col-lg-7 mt-5">
        {tasks.map((task) => {
          return (
            <Draggable>
              <div className="col-lg-3 mt-2 drag">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{task.title}</h5>
                    <p class="card-text">{task.description}</p>
                    <p class="card-text">{task.price} EGP</p>
                  </div>
                </div>
              </div>
            </Draggable>
          );
        })}
      </div>
      <div class="card">
        <div class="card-body">
          <p class="card-text"></p>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
