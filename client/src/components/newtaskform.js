function NewTaskForm({toggleTaskForm}) {
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
              onChange={(e) => {}}
              id="board-name-input"
              type="text"
              placeholder="..."
            />
            <label className="dash-form-label">Title</label>
          </div>{" "}
          <div className="dash-form-group">
            <input
              onChange={(e) => {}}
              id="board-name-input"
              type="text"
              placeholder="..."
            />
            <label className="dash-form-label">Description</label>
          </div>
          <div className="dash-form-group">
          <label className="dash-label-normal">Status</label>
            <select>
              <option>Todo</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>
          </div>
          <div className="dash-form-group">
          <label className="dash-label-normal">Priority</label>
            <select>
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