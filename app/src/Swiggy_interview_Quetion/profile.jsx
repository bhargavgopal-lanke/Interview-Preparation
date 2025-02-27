import React from "react";

const Profile = ({ data, setData, errors }) => {
  // optional chaining
  const { name, age, email } = data || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        {errors.name && <span className="error-msgs">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input type="number" name="age" value={age} onChange={handleChange} />
        {errors.age && <span className="error-msgs">{errors.age}</span>}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {errors.email && <span className="error-msgs">{errors.email}</span>}
      </div>
    </div>
  );
};

export default Profile;
