function NewBoardForm({
  toggleAddBoardForm,
  handleBoardName,
  setBoardName,
  boardName,
}) {
  return (
    <div
      onClick={(e) => {
        toggleAddBoardForm();
      }}
      className="crud-form"
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
  );
}

export default NewBoardForm;
