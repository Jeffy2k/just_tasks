function Draggable({title, description}) {
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
    return (
      <>
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
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </>   
    );
  }
  
  export default Draggable;
  