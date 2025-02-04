import React from "react";

const Interests = ({ data, setData }) => {
  const [Coding, Sports] = data?.interests || "";


  console.log("Coding", Coding)
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Coding"
            checked={Coding || false}
            readOnly
          />
          Coding
        </label>
      </div>
    </div>
  );
};

export default Interests;
