import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggelMenu } from "../utils/appSlice";
import { YOUTUBSE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const searchCache = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggelMenu());
  };

  useEffect(() => {
    // make an api call b/w two key press but if the diff is less than 200 ms decline the api call
    const timeout = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache.searchQuery);
      } else {
        console.log("making api call ");
        getSearchSuggestion();
      }
    }, 200);

    // before next useEffect function is called, current component is
    // destroyed so the function which we return from
    // the useEffect is called
    // when function is unmounted
    return () => {
      clearTimeout(timeout);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBSE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  return (
    <div className="grid grid-flow-col p-5 m-2">
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
      <div>
        <div className="col-span-10 px-10">
          <input
            type="text"
            className="w-1/2 border border-gray-400 py-2 px-4 rounded-l-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 border-l-0 py-2 px-6 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        <div
          className={`fixed bg-white py-2 mx-12 w-[20rem] rounded-xl border border-gray-100 ${
            suggestions && suggestions.length && showSuggestion ? "" : "hidden"
          }`}
        >
          <ul>
            {suggestions &&
              suggestions.map((s) => (
                <li key={s} className="px-2 py-2 hover:bg-gray-100 rounded-lg">
                  🔍 {s}
                </li>
              ))}
          </ul>
        </div>
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
