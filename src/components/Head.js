import React from "react";
import { useDispatch } from "react-redux";
import { toggelMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggelMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
          alt="menu"
          className="h-8 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="youtube logo"
            className="mx-2 h-8"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Head;
