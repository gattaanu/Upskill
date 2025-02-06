import React from 'react';
import DisplayList from './DisplayList';
import './ToDoList.scss';

const ToDoList = () => {
  const [toDoList, setToDoList] = React.useState([]);
  const [listItems, setListItem] = React.useState("");
  const [editIndex, setEditIndex] = React.useState(null);
  const [editValue, setEditValue] = React.useState("");

  const setValue = (e) => {
    setListItem(e.target.value);
  };

  const addItem = () => {
    if (listItems.trim()) {
      setToDoList([...toDoList, listItems]);
      setListItem("");
    }
  };

  const onDelete = (index) => {
    const list = toDoList.filter((_, i) => i !== index);
    setToDoList(list);
  };

  const onEdit = (index) => {
    setEditIndex(index);
    setEditValue(toDoList[index]);
  };

  const saveEdit = () => {
    const newToDoList = [...toDoList];
    newToDoList[editIndex] = editValue;
    setToDoList(newToDoList);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="todo-container">
      <h3>ToDO List</h3>
      <div className="input-section">
        <input
          type="text"
          value={listItems}
          onChange={(e) => setValue(e)}
          placeholder="Enter a task"
        />
        <button onClick={addItem}>Add</button>
      </div>
      <DisplayList
        toDoList={toDoList}
        onEdit={onEdit}
        onDelete={onDelete}
        editIndex={editIndex}
        editValue={editValue}
        saveEdit={saveEdit}
        setEditValue={setEditValue}
      />
    </div>
  );
};

export default ToDoList;
