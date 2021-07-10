import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './tasks-style.css';
import Card from '../Card';
import Board from '../Board';

const Tasks = () => {
  const [tasks, updateTasks] = useState({});
  const [doneTasks, updateDone] = useState([]);
  const [paidTasks, updatePaid] = useState([]);
  const [testingTasks, updateTesting] = useState([]);
  const [InprogressTasks, updateinprogress] = useState([]);
  const [toDoTasks, updateToDoTasks] = useState([]);
  const [isFreelance, setFreelance] = useState(0);
  useEffect(() => {
    axios.get('http://localhost:4000/tasks/all-tasks').then((res) => {
      const all_tasks = res.data.data;
      console.log(all_tasks);
      // updateToDoTasks(all_tasks);
      // console.log(toDoTasks);
      const free = localStorage.getItem('freelance');
      setFreelance(free);
      const groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
          (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
          );
          return result;
        }, {});
      };
      const tasksWithStatus = groupBy(all_tasks, 'status');
      console.log(tasksWithStatus);
      updateDone(tasksWithStatus.DONE);
      updatePaid(tasksWithStatus.PAID);
      updateTesting(tasksWithStatus.TESTING);
      updateinprogress(tasksWithStatus.INPROGRESS);
      updateToDoTasks(tasksWithStatus.TODO);
    });
    console.log(toDoTasks, 'fff');
  }, []);

  return (
    <div className="container">
      <Link to="/add-task">
        <img src="/add.png" width="50px" height="50" className="mt-5" />
      </Link>

      <Board>
        <div className="row mt-3">
          {/* todo */}

          {!toDoTasks ? (
            <div
              className="card col-lg-3 mr-2"
              name="paid"
              style={{ height: '500px' }}
            >
              <p className="card-text">tODO</p>
            </div>
          ) : (
            <>
              <div
                className="card col-lg-3 mr-2"
                name="todo"
                style={{ height: '500px' }}
              >
                <p className="card-text">To Do</p>
                {toDoTasks ? (
                  toDoTasks.map((task) => {
                    return (
                      <div className="col-lg-12 mt-2">
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
                  })
                ) : (
                  <></>
                )}
              </div>
            </>
          )}
          {/* testing */}
          {!testingTasks ? (
            <div
              className="card col-lg-3 mr-2"
              name="testing"
              style={{ height: '500px' }}
            >
              <p className="card-text">Testing</p>
            </div>
          ) : (
            <div
              className="card col-lg-3 mr-2"
              name="testing"
              style={{ height: '500px' }}
            >
              <p className="card-text">Testing</p>
              {testingTasks ? (
                testingTasks.map((task) => {
                  return (
                    <div className="col-lg-12 mt-2">
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
                })
              ) : (
                <></>
              )}
            </div>
          )}

          {/* Done */}
          {!doneTasks ? (
            <div
              className="card col-lg-3 mr-2"
              name="done"
              style={{ height: '500px' }}
            >
              <p className="card-text">Done</p>
            </div>
          ) : (
            <>
              <div
                className="card col-lg-3 mr-2"
                name="done"
                style={{ height: '500px' }}
              >
                <p className="card-text">Done</p>
                {doneTasks ? (
                  doneTasks.map((task) => {
                    return (
                      <div className="col-lg-12 mt-2">
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
                  })
                ) : (
                  <></>
                )}
              </div>
            </>
          )}

          {/* paid tasks */}
          {!paidTasks ? (
            <div
              className="card col-lg-3 mr-2"
              name="paid"
              style={{ height: '500px' }}
            >
              <p className="card-text">Paid</p>
            </div>
          ) : (
            <div
              className="card col-lg-3 mr-2"
              name="paid"
              style={{ height: '500px' }}
            >
              <p className="card-text">Paid</p>
              {paidTasks ? (
                paidTasks.map((task) => {
                  return (
                    <div className="col-lg-12 mt-2">
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
                })
              ) : (
                <></>
              )}
            </div>
          )}
        </div>
        {/* {isFreelance == 'undefined' || 'null' ? (
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
        )} */}
      </Board>
    </div>
  );
};

export default Tasks;
