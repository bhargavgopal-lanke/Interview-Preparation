import React from "react";

const Interests = ({ data, setData, errors }) => {
  const { interests } = data || "";

  const handleChange = (e) => {
    const { name, checked } = e.target;

    setData((prevState) => ({
      ...prevState,
      interests: checked
        ? [...prevState.interests, name]
        : prevState.interests.filter((i) => i !== name),
    })); 
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Coding"
            checked={interests.includes("Coding") || false}
            onChange={handleChange}
          />
          Coding
        </label>
        {errors.interests && <span className="error-msgs">{errors.interests}</span>}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Sports"
            checked={interests.includes("Sports") || false}
            onChange={handleChange}
          />
          Sports
        </label>
        {errors.interests && <span className="error-msgs">{errors.interests}</span>}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="javascript"
            checked={interests.includes("javascript") || false}
            onChange={handleChange}
          />
          Javascript
        </label>
        {errors.interests && <span className="error-msgs">{errors.interests}</span>}
      </div>
    </div>
  );
};

export default Interests;
