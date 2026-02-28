import React from "react";

const Todo = () => {

  return (
    <div>
      <div className="container">
        <div className="todo-main">
          <div className="form-group">
            <label>Todo item</label> <br/>
            <input type="text" className="form-control" />
            <button type="button" className="submit-btn">Submit</button>
          </div>
          {/* <div className="form-group">
          <label>Todo item</label>
          <input type="text" className="todo-inptext-item" />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Todo;
