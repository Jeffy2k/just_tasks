import React, { useState } from "react";
import "../styles/dashboard.css";
import DashboardBody from "./dashboardbody";
import NewBoardForm from "./newboardform";
import NewTaskForm from "./newtaskform";

function Dashboard() {
  //   CRUD FORMS

  /*                      ADD BOARD                                      */

  const [isAddBoardFormActive, setAddBoardFormActive] = useState(false);

  let toggleAddBoardForm = () => {
    if (!isAddBoardFormActive) {
      document.getElementById("add-board-form").style.zIndex = "999";
      setAddBoardFormActive(true);
    } else {
      document.getElementById("add-board-form").style.zIndex = "-1";
      setAddBoardFormActive(false);
    }
  };


    /*                      ADD BOARD                                      */

  const [isAddTaskFormActive, setAddTaskFormActive] = useState(false);

  let toggleTaskForm = () => {
    if (!isAddTaskFormActive) {
      document.getElementById("add-task-form").style.zIndex = "999";
      setAddTaskFormActive(true);
    } else {
      document.getElementById("add-task-form").style.zIndex = "-1";
      setAddTaskFormActive(false);
    }
  };



  // NEW PROJECT CREATION

  const [boardName, setBoardName] = useState("");

  let handleBoardName = () => {
    toggleAddBoardForm();
    let newBoard = document.createElement("div");

    let icon = document.createElement("i");
    icon.classList = "material-symbols-outlined";
    icon.innerHTML = "view_kanban";

    let name = document.createElement("h5");
    name.innerHTML = `${boardName}`;

    newBoard.classList = "board";
    newBoard.appendChild(icon);
    newBoard.appendChild(name);

    document.querySelector(".boards-list").appendChild(newBoard);
    setBoardName("");
    handleNotifs("board-error-notification");
  };

  // NOTIFICATION HANDLING // *let's see

  let handleNotifs = (id) => {
    setTimeout(() => {
      document.querySelector(`#${id}`).classList.toggle("active");
    }, 500);

    setTimeout(() => {
      document.querySelector(`#${id}`).classList.toggle("active");
    }, 2500);
  };

  /*remove error using close icon*/

  let removeNotifications = (id) => {
    let elemClass = document.querySelector(`#${id}`).classList[1];

    if (elemClass === "inactive") {
      document.querySelector(`#${id}`).classList.remove("active");
      document.querySelector(`#${id}`).classList.add("inactive");
    }
  };

  return (
    <div id="dashboard-container">
      <div id="side-nav" className="col-nav">
        <div className="row-logo">
          <h1>
            taskZen<span>.</span>
          </h1>
        </div>
        <div className="row-boards">
          <h5>ALL BOARDS (6)</h5>
          <div className="boards-list">
            <div className="board">
              <i className="material-symbols-outlined">view_kanban</i>
              <h5>Platform Launch</h5>
            </div>
            <div className="board">
              <i className="material-symbols-outlined">view_kanban</i>
              <h5>Roadmap</h5>
            </div>
          </div>
          <div
            onClick={() => {
              toggleAddBoardForm();
            }}
            className="add-board"
          >
            <i className="material-symbols-outlined">add</i>
            <h5>Create New Board</h5>
            <i id="create-arrow" className="material-icons">
              arrow_forwards
            </i>
          </div>
        </div>
        <div className="row-settings">
          <div id="theme-container">
            <i className="material-icons">dark_mode</i>
          </div>
        </div>
      </div>

      <DashboardBody toggleTaskForm = {toggleTaskForm}/>
      {/* add board popup */}
      <NewBoardForm toggleAddBoardForm={toggleAddBoardForm} handleBoardName = {handleBoardName} setBoardName = {setBoardName} boardName = {boardName}/>
      <div id="board-status-messages">
        <div className="notification inactive" id="board-success-notification">
          <h4>Board created successfully</h4>
          <i
            onClick={() => {
              removeNotifications("board-success-notification");
            }}
            className="material-icons"
          >
            {" "}
            close{" "}
          </i>
        </div>
        <div className="notification inactive" id="board-error-notification">
          <h4>Could not add board</h4>
          <i
            onClick={() => {
              removeNotifications("board-error-notification");
            }}
            className="material-icons"
          >
            {" "}
            close{" "}
          </i>
        </div>
      </div>
      <NewTaskForm toggleTaskForm = {toggleTaskForm}/>
    </div>
  );
}

export default Dashboard;
