import React from "react";

const Tile = ({ className, value, onClick }) => {
  return (
    <div onClick={onClick} className={`tile ${className}`}>
      {value}
    </div>
  );
};

export default Tile;
