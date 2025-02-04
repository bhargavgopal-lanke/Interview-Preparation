import React from "react";

const Profile = ({ data, setData }) => {
  // optional chaining
  const { name, age, email } = data || {};

  console.log(data)

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
      </div>
      <div className="form-group">
        <label>Age:</label>
        <input type="number" name="age" value={age} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Profile;
