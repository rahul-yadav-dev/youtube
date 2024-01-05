import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 m-5 border bg-gray-200 rounded-lg hover:bg-slate-400 cursor-pointer">
        {name}
      </button>
    </div>
  );
};

export default Button;
