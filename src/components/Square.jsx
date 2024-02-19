import React, { useState } from "react";

const Square = ({ value: propValue,onClick }) => {
  return (
    <button onClick={onClick} className="p-0 flex-row text-center square m-1 w-12 h-12">
      {propValue}
    </button>
  );
};

export default Square;
