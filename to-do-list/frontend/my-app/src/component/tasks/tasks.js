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
  const [isFreelance, updateFreelance] = useState(true);
  useEffect(() => {
    axios.get('http://localhost:4000/tasks/all-tasks').then((res) => {
      const all_tasks = res.data.data;
      const free = localStorage.getItem('freelance');
      updateFreelance(free);
      const groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
          (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
          );
          return result;
        }, {});
      };
      const tasksWithStatus = groupBy(all_tasks, 'status');
      updateDone(tasksWithStatus.DONE);
      updatePaid(tasksWithStatus.PAID);
      updateTesting(tasksWithStatus.TESTING);
      updateinprogress(tasksWithStatus.INPROGRESS);
      updateToDoTasks(tasksWithStatus.TODO);
      updateinprogress(tasksWithStatus.INPROGRESS);
    });
  }, []);

  return (
    <div className="container">
      <Link to="/add-task">
        <img src="/add.png" width="50px" height="50" className="mt-5" />
      </Link>

      <Board>
        {isFreelance == 'undefiend' || 'null' || 0 ? (
          <div className="row mt-3">
            {/* todo */}

            {!toDoTasks ? (
              <div
                className="card col-lg-3 mr-2"
                name="todo"
                style={{ height: '500px' }}
              >
                <p className="card-text">TODO</p>
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
                          <Card
                            id={task.id}
                            price={task.price}
                            title={task.title}
                            description={task.description}
                          >
                            <div className="card drag">
                              <div className="card-body">
                                <h5 className="card-title">{task.title}</h5>
                                <p className="card-text">{task.description}</p>
                                <p className="card-text" name="price">
                                  {task.price} EGP
                                </p>
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
                        <Card
                          id={task.id}
                          price={task.price}
                          title={task.title}
                          description={task.description}
                        >
                          <div className="card drag">
                            <div className="card-body">
                              <h5 className="card-title">{task.title}</h5>
                              <p className="card-text">{task.description}</p>
                              <p className="card-text" name="price">
                                {task.price} EGP
                              </p>
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
                          <Card
                            id={task.id}
                            price={task.price}
                            title={task.title}
                            description={task.description}
                          >
                            <div className="card drag">
                              <div className="card-body">
                                <h5 className="card-title">{task.title}</h5>
                                <p className="card-text">{task.description}</p>
                                <p className="card-text" name="price">
                                  {task.price} EGP
                                </p>
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
                        <Card
                          id={task.id}
                          price={task.price}
                          title={task.title}
                          description={task.description}
                        >
                          <div className="card drag">
                            <div className="card-body">
                              <h5 className="card-title">{task.title}</h5>
                              <p className="card-text">{task.description}</p>
                              <p className="card-text" name="price">
                                {task.price} EGP
                              </p>
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
        ) : (
          <div className="row mt-5">
            {!InprogressTasks ? (
              <div
                className="card col-lg-3 mr-2"
                name="inprogress"
                style={{ height: '500px' }}
              >
                <p className="card-text">In Progress</p>
              </div>
            ) : (
              <div
                className="card col-lg-3 mr-2"
                name="inprogress"
                style={{ height: '500px' }}
              >
                <p className="card-text">Inprogress</p>
                {InprogressTasks ? (
                  InprogressTasks.map((task) => {
                    return (
                      <div className="col-lg-12 mt-2">
                        <Card
                          id={task.id}
                          price={task.price}
                          title={task.title}
                          description={task.description}
                        >
                          <div className="card drag">
                            <div className="card-body">
                              <h5 className="card-title">{task.title}</h5>
                              <p className="card-text">{task.description}</p>
                              <p className="card-text" name="price">
                                {task.price} EGP
                              </p>
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
                        <Card
                          id={task.id}
                          price={task.price}
                          title={task.title}
                          description={task.description}
                        >
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
        )}
      </Board>
    </div>
  );
};

export default Tasks;
