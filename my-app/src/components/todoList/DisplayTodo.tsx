import React, { useState } from 'react';

interface TodoProps {
  DeleteTask: (e) => void;
  id: number;
  tasks: MyTask;
  updateTask: (id ,newTitle) => void;
  delId:number;
}

interface MyTask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function DisplayTodo(prop: TodoProps) {
  const { tasks, DeleteTask, id, updateTask,delId } = prop;
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(tasks.title);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleTitleChange(e) {
    setEditedTitle(e.target.value);
  }

  function handleBlur() {
    setIsEditing(false);
    if (editedTitle !== tasks.title) {
      updateTask(tasks.id, editedTitle);
    }
  }

  return (
    <div>
      <div key={id}>
        <h5>ID : {tasks.id}</h5>
        <h5>UserId : {tasks.userId} </h5>
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            onBlur={handleBlur}
          />
        ) : (
          <h5 onClick={handleEdit}>
            Title : {tasks.title}
          </h5>
        )}
        <h5>Completed : {tasks.completed ? 'yes' : 'no'}</h5>
      </div>

      <button type="button" id="btn" onClick={() => DeleteTask(delId)}>
        Delete
      </button>
      &nbsp;
      <button type="button" id="btn" onClick={handleEdit}>
        Edit
      </button>
      <hr />
    </div>
  );
}

export default DisplayTodo;
