import { useEffect } from "react";
import "../styles/dashboardbody.css";
import Draggable from "./draggable";

function DashboardBody({ toggleTaskForm }) {
const tasks = [{ title: "task1", description: "task `1 description" },{ title: "task1", description: "task `1 description" },{ title: "task1", description: "task `1 description" },{ title: "task1", description: "task `1 description" }];

  let draggingOver = (e) => {
    e.preventDefault();
    const container = e.target;
    const container_parent = container.parentNode;
    let classList = container.classList.value;
    if (classList === "row-dnd") {
      console.log(container);
      const afterElement = getDragAfterElement(container, e.clientY);
      const draggable = document.querySelector(".dragging");
      console.log(container);
      if (afterElement == null) {
        container.appendChild(draggable);
      } else {
        container.insertBefore(draggable, afterElement);
      }
    } else if (classList === "dragging") {
      const afterElement = getDragAfterElement(container_parent, e.clientY);
      const draggable = document.querySelector(".dragging");
      console.log(container_parent);
      if (afterElement == null) {
        container_parent.appendChild(draggable);
      } else {
        container_parent.insertBefore(draggable, afterElement);
      }
    }
  };

  function getDragAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll("#draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }

  // fetching values

  useEffect(() => {
    fetch("https://just-tasks-api.onrender.com/todos/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div className="col-body">
      <div className="row-nav">
        <div id="board-name-title">
          <h2>Platform Launch</h2>
        </div>
        <div id="options-container">
          <div className="hamburger ham-example-six">
            <div className="ham-container-six">
              <input type="checkbox" id="example-six-checkbox" />
              <div id="example-six-bar1" className="example-six-bar"></div>
              <div id="example-six-bar2" className="example-six-bar">
                <div id="bar-bar1"></div>
                <div id="bar-bar2"></div>
              </div>
              <div id="example-six-bar3" className="example-six-bar"></div>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="row-body">
        <div
          onDragOver={(e) => {
            draggingOver(e);
          }}
          id="todo-col"
          className="body-col"
        >
          <div className="status-row">
            <div id="status-todo" className="status-drop"></div>
            <h4>Todo ( 4 )</h4>
          </div>
          <div id="todo-dnd-col" className="row-dnd">
          </div>
        </div>
        <div
          onDragOver={(e) => {
            draggingOver(e);
          }}
          className="body-col"
        >
          <div className="status-row">
            <div id="status-progress" className="status-drop"></div>
            <h4>In Progress ( 4 )</h4>
          </div>
          <div id="progress-dnd-col" className="row-dnd">
          </div>
        </div>
        <div
          onDragOver={(e) => {
            draggingOver(e);
          }}
          className="body-col"
        >
          <div className="status-row">
            <div id="status-done" className="status-drop"></div>
            <h4>Done ( 4 )</h4>
          </div>
          <div id="done-dnd-col" className="row-dnd">
          </div>
        </div>
        <button
          onClick={() => {
            toggleTaskForm();
          }}
          id="add-task-btn"
        >
          <i className="material-icons">add</i>
        </button>
      </div>
    </div>
  );
}

export default DashboardBody;
