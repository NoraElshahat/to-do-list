import React, { useState } from 'react';
import axios from 'axios';
import './form-style.css';
import { useHistory } from 'react-router-dom';

export default function AddTask() {
  let history = useHistory();
  const [task, setTask] = useState({ title: '', description: '', price: '' });

  function taskAdded(e) {
    e.preventDefault();
    axios.post('http://localhost:4000/tasks/add-task', task).then((res) => {
      console.log(task, 'task');
      console.log(res.data.data, 'task added');
      if (res.data.data.length !== 0) {
        history.push('/tasks');
      }
    });
  }

  function hanldeData(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  return (
    <div className="container ">
      <div className="row center_div mt-5">
        <form onSubmit={taskAdded}>
          <div class="form-group">
            <label className="mt-2">Task Title</label>
            <input
              type="text"
              class="form-control"
              name="title"
              placeholder="Enter Title of Task"
              onChange={hanldeData}
              value={task.title}
            />
          </div>
          <div class="form-group">
            <label className="mt-2">Task Description</label>
            <input
              type="text"
              class="form-control"
              name="description"
              placeholder="Enter Description of Task"
              onChange={hanldeData}
              value={task.description}
            />
          </div>
          <div class="form-group">
            <label className="mt-2">Task Price</label>
            <input
              type="text"
              class="form-control"
              name="price"
              placeholder="Enter Price of Task"
              onChange={hanldeData}
              value={task.price}
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
