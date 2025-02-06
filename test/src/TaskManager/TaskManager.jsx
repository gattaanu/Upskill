import React, { useState } from 'react';
import './TaskManager.scss';

const TaskManager = () => {
  const [inputs, setInputs] = useState({});
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleAddTask = () => {
    if (!inputs['task-name'] || !inputs['task-priority'] || !inputs['dead-line']) {
      alert('Please fill all fields before adding a task.');
      return;
    }
    setTasks([...tasks, { ...inputs, id: Date.now() }]);
    setInputs({});
  };

  const handleCompleteTask = (id) => {
    const taskToComplete = tasks.find(task => task.id === id);
    setCompletedTasks([...completedTasks, taskToComplete]);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getPriorityValue = (priority) => {
    switch (priority) {
      case 'high':
        return 1;
      case 'medium':
        return 2;
      case 'low':
        return 3;
      default:
        return 4;
    }
  };

  const sortedTasks = tasks.sort((a, b) => {
    const priorityDiff = getPriorityValue(a['task-priority']) - getPriorityValue(b['task-priority']);
    if (priorityDiff !== 0) return priorityDiff;
    return new Date(a['dead-line']) - new Date(b['dead-line']);
  });

  return (
    <div className="task-manager">
      <div className="tm-header">Task Manager</div>
      <div className="tm-body">
        <div className="tm-inputs">
          <input
            type="text"
            placeholder="Enter Your Task Name"
            name="task-name"
            value={inputs['task-name'] || ''}
            onChange={handleChange}
          />
          <select name="task-priority" value={inputs['task-priority'] || ''} onChange={handleChange}>
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <input
            type="date"
            name="dead-line"
            value={inputs['dead-line'] || ''}
            onChange={handleChange}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>

        <div className="tm-lists">
          <div className="tm-task-list">
            <h3>Pending Tasks</h3>
            {sortedTasks.length ? (
              sortedTasks.map((task) => (
                <div className="task-item" key={task.id}>
                  <p><strong>Task:</strong> {task['task-name']}</p>
                  <p><strong>Priority:</strong> {task['task-priority']}</p>
                  <p><strong>Deadline:</strong> {task['dead-line']}</p>
                  <button onClick={() => handleCompleteTask(task.id)}>Complete</button>
                </div>
              ))
            ) : (
              <p>No pending tasks.</p>
            )}
          </div>

          <div className="tm-completed-list">
            <h3>Completed Tasks</h3>
            {completedTasks.length ? (
              completedTasks.map((task) => (
                <div className="task-item" key={task.id}>
                  <p><strong>Task:</strong> {task['task-name']}</p>
                  <p><strong>Priority:</strong> {task['task-priority']}</p>
                  <p><strong>Deadline:</strong> {task['dead-line']}</p>
                </div>
              ))
            ) : (
              <p>No completed tasks.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;