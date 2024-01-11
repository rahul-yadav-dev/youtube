import React from "react";
import { getAgo } from "../utils/ago";
import { getViews } from "../utils/getViews";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const views = getViews(statistics.viewCount);

  const ago = getAgo(snippet.publishedAt);

  return (
    <div className=" m-2 w-80">
      <img src={thumbnails.medium.url} alt="Thumbnail" className="rounded-lg" />
      <ul className="mt-2">
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <div className="flex">
          <div className="mr-2">{views} views</div>
          <div className="">{ago} ago</div>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
