import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './tasks-style.css';
import Card from '../Card';
import Board from '../Board';

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
            <div className="col-lg-3 mt-2">
              <Card id={task.id}>
                <div className="card drag">
                  <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.description}</p>
                    <p className="card-text">{task.price} EGP</p>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      <Board>
        {isFreelance == 'undefined' || 'null' ? (
          <div className="row mt-5">
            <div
              className="card col-lg-3 mr-2"
              name="testing"
              style={{ height: '500px' }}
            >
              <div className="card-body" name="testing">
                <p className="card-text">Testing</p>
              </div>
            </div>
            <div
              className="card col-lg-3 mr-2"
              name="done"
              style={{ height: '500px' }}
            >
              <div className="card-body" name="done">
                <p className="card-text">Done</p>
              </div>
            </div>
            <div
              className="card col-lg-3 mr-2"
              name="paid"
              style={{ height: '500px' }}
            >
              <div className="card-body" name="paid">
                <p className="card-text">Paid</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="row mt-5">
            <div
              className="card col-lg-3 mr-2"
              name="inprogress"
              style={{ height: '500px' }}
            >
              <div className="card-body" name="inprogress">
                <p className="card-text">InProgress</p>
              </div>
            </div>
            <div
              className="card col-lg-3 mr-2"
              name="testing"
              style={{ height: '500px' }}
            >
              <div className="card-body" name="testing">
                <p className="card-text">Testing</p>
              </div>
            </div>
          </div>
        )}
      </Board>
    </div>
  );
};

export default Tasks;
