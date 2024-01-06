import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import SideButton from "./SideButton";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";

const Sidebar = () => {
  const isMenuOption = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOption) return null;

  return (
    <div className="p-5 w-1/2 text-lg">
      <div className="font-medium">
        <Link to={"/"} className="flex   hover:bg-gray-200 rounded-xl mb-2">
          <div className="p-2 ml-3 text-2xl">
            <IoMdHome />
          </div>
          <SideButton title={"Home"} />
        </Link>
        <Link
          to={"/shorts"}
          className="flex   hover:bg-gray-200 rounded-xl mb-2"
        >
          <div className="p-2 ml-3 text-2xl">
            <SiYoutubeshorts />
          </div>
          <SideButton title={"Shorts"} />
        </Link>
        <Link
          to={"/subscriptions"}
          className="flex   hover:bg-gray-200 rounded-xl mb-2"
        >
          <div className="p-2 ml-3  text-2xl">
            <MdSubscriptions />
          </div>
          <SideButton title={"Shorts"} />
        </Link>
        <Link
          to={"/subscriptions"}
          className="flex   hover:bg-gray-200 rounded-xl mb-2"
        >
          <div className="p-2 ml-3  text-2xl">
            <MdOutlineWatchLater />
          </div>
          <SideButton title={"Watch Later"} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
