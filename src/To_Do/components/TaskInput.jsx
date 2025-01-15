import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask({ text: task, priority }));
      setTask('');
    }
  };

  return (
    <div style={{
      height:'10%',
      width:'65%',
      backgroundColor:'#e6ffe6'
    }}>
      <input
        type="text"
        className=""
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select
        className=""
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button className="btn btn-primary mt-2" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
