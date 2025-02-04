import React from "react";

const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleChange = (e) => {
    const { name } = e.target;
    setData((prevState) => ({
      ...prevState,
      theme: name,
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleChange}
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="light"
            checked={theme ==="light"}
            onChange={handleChange}
          />
          Light
        </label>
      </div>
    </div>
  );
};

export default Settings;
