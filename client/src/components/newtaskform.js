import { useState } from 'react'
import Draggable from './draggable';

function NewTaskForm({toggleTaskForm}) {


  // task states

  const[title, setTitle] = useState("");
  const[description, setDescription] = useState("");
  const[status, setStatus] = useState("");
  const[priority, setPriority] = useState(0);

  let handleTitle = (e) => {
    setTitle(e.target.value)
  };
  let handleDescription = (e) => {
    setDescription(e.target.value)
  };
  let handleStatus = (e) => {
    setStatus(e.target.value)
  };
  let handlePriority = (e) => {
    setPriority(e.target.value)
  };

  let handleAddingTasks = () => {

    let todoColumn = document.querySelector("#todo-dnd-col");
    let inprogressColumn = document.querySelector("#progress-dnd-col");
    let doneColumn = document.querySelector("#done-dnd-col");


    // console.log(todoColumn,inprogressColumn,doneColumn)

    let taskobj = {
      title,
      description,
      status,
      priority
    }
  
    todoColumn.appendChild(<Draggable/>)
  }

    return ( 
        <div 
        onClick={(e) => {
          toggleTaskForm();
        }}
        className="crud-form"
        id="add-task-form"
      >
        <form
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
                    <i
          onClick={() => {
            toggleTaskForm();
          }}
          id="form-close-icon"
          className="material-icons"
        >
          close
        </i>
          <h3 className="dash-form-title">Add New Task</h3>
          <div className="dash-form-group">
            <input
              onChange={(e) => {
                handleTitle(e)
              }}
              id="board-name-input"
              type="text"
              placeholder="..."
              value={title}
            />
            <label className="dash-form-label">Title</label>
          </div>{" "}
          <div className="dash-form-group">
            <input
              onChange={(e) => {
                handleDescription(e)
              }}
              id="board-name-input"
              type="text"
              placeholder="..."
              value={description}
            />
            <label className="dash-form-label">Description</label>
          </div>
          <div className="dash-form-group">
          <label className="dash-label-normal">Status</label>
            <select onChange={(e)=>{handleStatus(e)}}>
              <option>Todo</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>
          </div>
          <div className="dash-form-group">
          <label className="dash-label-normal">Priority</label>
            <select onChange={(e)=>{handlePriority(e)}}>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
            </select>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddingTasks()
            }}
            className="dash-form-button"
          >
            Add New Task
          </button>
        </form>
      </div>
     );
}

export default NewTaskForm;