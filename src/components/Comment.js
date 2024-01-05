import React from "react";
import { getAgo } from "../utils/ago";

const Comment = ({ info }) => {
  const { authorProfileImageUrl, authorDisplayName, textDisplay, publishedAt } =
    info;
  const ago = getAgo(publishedAt);
  return (
    <div className="flex mt-10">
      <div>
        <img
          src={authorProfileImageUrl}
          width={50}
          height={50}
          alt="user"
          className="rounded-full"
        />
      </div>
      <div className="ml-4">
        <div className="flex">
          <div className="font-bold text-sm">{authorDisplayName}</div>
          <div className="text-sm ml-4 text-gray-500">{ago} ago</div>
        </div>
        <div className="font-medium">{textDisplay}</div>
        <div className="flex justify-between w-40">
          <button className="hover:rounded-full hover:border hover:bg-gray-300 p-2">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Like-Button-Transparent.png"
              alt="like"
              width={20}
              height={20}
            />
          </button>
          <button className="hover:rounded-full hover:border hover:bg-gray-300 p-2">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*f09SPIWHCzKwFfmzT_gShA.png"
              alt="like"
              width={20}
              height={20}
            />
          </button>
          <button className="font-bold text-xs">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
