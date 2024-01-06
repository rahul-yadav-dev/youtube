import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Cricket",
  "Soccer",
  "News",
  "Cooking",
  "Valentines",
  "Arijit",
];

const ButtonList = () => {
  return (
    <div className="flex justify-between">
      {list.map((button, index) => (
        <Button name={button} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
