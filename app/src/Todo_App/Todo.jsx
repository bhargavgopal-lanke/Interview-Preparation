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
    console.log("selectedindex", index);
    const deleteItem = item.filter((todo) => todo.id !== index);
    setItem(deleteItem);
    console.log("delete", deleteItem);
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
              <div style={{ display: "flex" }}>
                <ul key={x.id}>
                  <li>{x.id}</li>
                  <li>{x.name}</li>
                </ul>
                <button
                  style={{ marginLeft: "10px" }}
                  onClick={() => handleDelete(x?.id)}
                >
                  Delete
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
