import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';
import './tasks-style.css';

const Tasks = () => {
  const [tasks, updateTasks] = useState([]);
  const [isFreelance, setFreelance] = useState(0);
  useEffect(() => {
    axios.get('http://localhost:4000/tasks/all-tasks').then((res) => {
      const all_tasks = res.data.data;
      updateTasks(all_tasks);
      const free = localStorage.getItem('freelance');
      setFreelance(free);
      console.log(free, 'free');
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
      {isFreelance == 'undefined' ? (
        <div className="row mt-5">
          <div className="card col-lg-3" name="inprogress">
            <div className="card-body">
              <p className="card-text">Testing</p>
            </div>
          </div>
          <div className="card col-lg-3" name="testing">
            <div className="card-body">
              <p className="card-text">Done</p>
            </div>
          </div>
          <div className="card col-lg-3" name="testing">
            <div className="card-body">
              <p className="card-text">Paid</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="row mt-5">
          <div className="card col-lg-3" name="inprogress">
            <div className="card-body">
              <p className="card-text">InProgress</p>
            </div>
          </div>
          <div className="card col-lg-3" name="testing">
            <div className="card-body">
              <p className="card-text">Testing</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
