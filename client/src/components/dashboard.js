import React, { useState } from "react";
import "../styles/dashboard.css";

function Dashboard() {


  //   ADD BOARD FORM

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
            <div className="board">
              <i className="material-symbols-outlined">view_kanban</i>
              <h5>Project</h5>
            </div>
            <div className="board">
              <i className="material-symbols-outlined">view_kanban</i>
              <h5>Presentation</h5>
            </div>
            <div className="board">
              <i className="material-symbols-outlined">view_kanban</i>
              <h5>Presentation</h5>
            </div>{" "}
            <div className="board">
              <i className="material-symbols-outlined">view_kanban</i>
              <h5>Presentation</h5>
            </div>{" "}
            <div className="board">
              <i className="material-symbols-outlined">view_kanban</i>
              <h5>Presentation</h5>
            </div>{" "}
            <div className="board">
              <i className="material-symbols-outlined">view_kanban</i>
              <h5>Presentation</h5>
            </div>{" "}
            <div className="board">
              <i className="material-symbols-outlined">view_kanban</i>
              <h5>Presentation</h5>
            </div>{" "}
            <div className="board">
              <i className="material-symbols-outlined">view_kanban</i>
              <h5>Presentation</h5>
            </div>{" "}
            <div className="board">
              <i className="material-symbols-outlined">view_kanban</i>
              <h5>Presentation</h5>
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
      <div className="col-body">
        <div className="row-nav"></div>
        <div className="row-body"></div>
      </div>

      {/* add board popup */}
      <div
        onClick={(e) => {
          toggleAddBoardForm();
        }}
        id="add-board-form"
      >
        <form
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <i
            onClick={() => {
              toggleAddBoardForm();
            }}
            id="form-close-icon"
            className="material-icons"
          >
            close
          </i>
          <h3 className="dash-form-title">Add Board</h3>
          <div className="dash-form-group">
            <input
              onChange={(e) => {
                setBoardName(e.target.value);
              }}
              id="board-name-input"
              type="text"
              placeholder="..."
              value={boardName}
            />
            <label className="dash-form-label">Title</label>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleBoardName();
            }}
            className="dash-form-button"
          >
            Add
          </button>
        </form>
      </div>
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
    </div>
  );
}

export default Dashboard;
