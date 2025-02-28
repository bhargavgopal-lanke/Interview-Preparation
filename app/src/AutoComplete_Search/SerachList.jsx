import React from "react";

const SerachList = ({ data }) => {
  const { name } = data || "";

  console.log("name", name)
  return (
    <div className="serachlist">
      <label>{name}</label>
    </div>
  );
};

export default SerachList;
