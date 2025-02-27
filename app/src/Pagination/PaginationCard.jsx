import React from "react";

const PaginationCard = ({ title, description, thumbnail }) => {
  return (
    <div className="paginatoncard">
      <div className="">
        <img src={thumbnail} alt={title} />
        <div className="">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PaginationCard;
