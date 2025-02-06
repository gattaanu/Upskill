import React from 'react';
import './DisplayList.scss';

const DisplayList = ({ toDoList, onEdit, onDelete, editIndex, editValue, saveEdit, setEditValue }) => {
  return (
    <div className="list-container">
      {toDoList.map((item, index) => (
        <div className="list-item" key={index}>
          {editIndex === index ? (
            <div className="edit-section">
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <button onClick={saveEdit}>Save</button>
            </div>
          ) : (
            <div className="task-section">
              <span className="task-text">{item}</span>
              <div className="action-buttons">
                <button onClick={() => onEdit(index)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayList;
