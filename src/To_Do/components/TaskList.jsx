import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../actions/taskActions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="">
      {tasks.map((task, index) => (
        <li
          key={index}
          className={` d-flex justify-content-between align-items-center ${
            task.priority === 'High' ? 'list-group-item-danger' :
            task.priority === 'Medium' ? 'list-group-item-warning' :
            'list-group-item-success'
          }`}
        >
          {task.text}
          <button
            className="btn btn-danger btn-sm"
            onClick={() => dispatch(deleteTask(index))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
