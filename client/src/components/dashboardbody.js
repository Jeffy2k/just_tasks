import "../styles/dashboardbody.css";

function DashboardBody({ toggleTaskForm }) {


  //  Dragging and dropping logic

  let startDragging = (draggable) => {
    draggable.classList.add("dragging");
  };

  let endDragging = (draggable) => {
    draggable.classList.remove("dragging");
  };

  let draggingOver = (e) => {
    e.preventDefault();
    const container = e.target;
    const container_parent = container.parentNode;
    let classList = container.classList.value;
    if(classList === "row-dnd"){
      console.log(container)
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");
    console.log(container);
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  }
    else if(classList === "dragging"){
      const afterElement = getDragAfterElement(container_parent, e.clientY);
      const draggable = document.querySelector(".dragging");
      console.log(container_parent);
      if (afterElement == null) {
        container_parent.appendChild(draggable);
      } else {
        container_parent.insertBefore(draggable, afterElement);
      }
    }
  }

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
        <div onDragOver={(e)=>{
          draggingOver(e)
        }} id="todo-col" className="body-col">
          <div className="status-row">
            <div id="status-todo" className="status-drop"></div>
            <h4>Todo ( 4 )</h4>
          </div>
          <div className="row-dnd">
            <div
              onDragStart={(e) => {
                startDragging(e.target);
              }}
              onDragEnd={(e) => {
                endDragging(e.target);
              }}
              id="draggable"
              draggable="true"
            >
              <h4>Some random task 1</h4>
              <p>some very long description coz i canafbqhwavj</p>
            </div>
            <div
              onDragStart={(e) => {
                startDragging(e.target);
              }}
              onDragEnd={(e) => {
                endDragging(e.target);
              }}
              id="draggable"
              draggable="true"
            >
              <h4>Some random task 2</h4>
              <p>some very long description coz i canafbqhwavj</p>
            </div>
            <div
              onDragStart={(e) => {
                startDragging(e.target);
              }}
              onDragEnd={(e) => {
                endDragging(e.target);
              }}
              id="draggable"
              draggable="true"
            >
              <h4>Some random task 3</h4>
              <p>some very long description coz i canafbqhwavj</p>
            </div>
          </div>
        </div>
        <div onDragOver={(e)=>{
          draggingOver(e)
        }} className="body-col">
          <div className="status-row">
            <div id="status-progress" className="status-drop"></div>
            <h4>In Progress ( 4 )</h4>
          </div>
          <div className="row-dnd">
            <div
              onDragStart={(e) => {
                startDragging(e.target);
              }}
              onDragEnd={(e) => {
                endDragging(e.target);
              }}
              id="draggable"
              draggable="true"
            >
              <h4>Some random task 4</h4>
              <p>some very long description coz i canafbqhwavj</p>
            </div>
            <div
              onDragStart={(e) => {
                startDragging(e.target);
              }}
              onDragEnd={(e) => {
                endDragging(e.target);
              }}
              id="draggable"
              draggable="true"
            >
              <h4>Some random task</h4>
              <p>some very long description coz i canafbqhwavj</p>
            </div>
            <div
              onDragStart={(e) => {
                startDragging(e.target);
              }}
              onDragEnd={(e) => {
                endDragging(e.target);
              }}
              id="draggable"
              draggable="true"
            >
              <h4>Some random task</h4>
              <p>some very long description coz i canafbqhwavj</p>
            </div>
          </div>
        </div>
        <div onDragOver={(e)=>{
          draggingOver(e)
        }} className="body-col">
          <div className="status-row">
            <div id="status-done" className="status-drop"></div>
            <h4>Done ( 4 )</h4>
          </div>
          <div className="row-dnd">
            <div
              onDragStart={(e) => {
                startDragging(e.target);
              }}
              onDragEnd={(e) => {
                endDragging(e.target);
              }}
              id="draggable"
              draggable="true"
            >
              <h4>Some random task</h4>
              <p>some very long description coz i canafbqhwavj</p>
            </div>
            <div
              onDragStart={(e) => {
                startDragging(e.target);
              }}
              onDragEnd={(e) => {
                endDragging(e.target);
              }}
              id="draggable"
              draggable="true"
            >
              <h4>Some random task</h4>
              <p>some very long description coz i canafbqhwavj</p>
            </div>
            <div
              onDragStart={(e) => {
                startDragging(e.target);
              }}
              onDragEnd={(e) => {
                endDragging(e.target);
              }}
              id="draggable"
              draggable="true"
            >
              <h4>Some random task</h4>
              <p>some very long description coz i canafbqhwavj</p>
            </div>
            <div
              onDragStart={(e) => {
                startDragging(e.target);
              }}
              onDragEnd={(e) => {
                endDragging(e.target);
              }}
              id="draggable"
              draggable="true"
            >
              <h4>Some random task</h4>
              <p>some very long description coz i canafbqhwavj</p>
            </div>
            <div
              onDragStart={(e) => {
                startDragging(e.target);
              }}
              onDragEnd={(e) => {
                endDragging(e.target);
              }}
              id="draggable"
              draggable="true"
            >
              <h4>Some random task</h4>
              <p>some very long description coz i canafbqhwavj</p>
            </div>
            <div
              onDragStart={(e) => {
                startDragging(e.target);
              }}
              onDragEnd={(e) => {
                endDragging(e.target);
              }}
              id="draggable"
              draggable="true"
            >
              <h4>Some random task</h4>
              <p>some very long description coz i canafbqhwavj</p></div>{" "}
            <div
              onDragStart={(e) => {
                startDragging(e.target);
              }}
              onDragEnd={(e) => {
                endDragging(e.target);
              }}
              id="draggable"
              draggable="true"
            >
              <h4>Some random task</h4>
              <p>some very long description coz i canafbqhwavj</p>
            </div>
            <div
              onDragStart={(e) => {
                startDragging(e.target);
              }}
              onDragEnd={(e) => {
                endDragging(e.target);
              }}
              id="draggable"
              draggable="true"
            >
              <h4>Some random task</h4>
              <p>some very long description coz i canafbqhwavj</p>
            </div>
            <div
              onDragStart={(e) => {
                startDragging(e.target);
              }}
              onDragEnd={(e) => {
                endDragging(e.target);
              }}
              id="draggable"
              draggable="true"
            >
              <h4>Some random task</h4>
              <p>some very long description coz i canafbqhwavj</p>
            </div>
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
