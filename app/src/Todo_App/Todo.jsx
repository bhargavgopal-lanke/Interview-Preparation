import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [nextId, setNextId] = useState(0);

  const handleChange = () => {
    if (input.trim() !== "") {
      setNextId((prevState) => prevState + 1);
      setItem([...item, { id: nextId, name: input }]);
    }
    setInput("");
  };

  const handleDelete = (index) => {
    const deleteItem = item.filter((todo) => todo.id !== index);
    setItem(deleteItem);
  };

  const moveUp = (index) => {
    if (index > 0) {
      const updatedTask = [...item];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index]
      ];
      setItem(updatedTask);
    }
  };
  const moveDown = (index) => {
    if (index < item.length - 1) {
      const updatedTask = [...item];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index]
      ];
      setItem(updatedTask);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={{ marginLeft: "10px" }} onClick={handleChange}>
        Add List
      </button>

      <div style={{ margin: "30px 0" }}>
        <h1>List Items</h1>
        <label>
          {item.map((x) => {
            return (
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginBottom: "30px",
                  alignContent: "center",
                }}
              >
                <ul key={x.id}>
                  <li>{x.name}</li>
                </ul>
                <button
                  style={{ padding: "10px", width: "100px", height: "40px" }}
                  onClick={() => handleDelete(x?.id)}
                >
                  Delete
                </button>
                <button
                  onClick={() => moveUp(x.id)}
                  style={{ padding: "10px", width: "100px", height: "40px" }}
                >
                  ⬆️
                </button>
                <button
                  onClick={() => moveDown(x.id)}
                  style={{ padding: "10px", width: "100px", height: "40px" }}
                >
                  ⬇️
                </button>
              </div>
            );
          })}
        </label>
      </div>
    </div>
  );
};

export default Todo;
