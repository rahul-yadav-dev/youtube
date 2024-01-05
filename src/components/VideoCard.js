import React from "react";
import { getAgo } from "../utils/ago";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const views = statistics.viewCount;
  let noOfViews;
  if (views > 1000000) noOfViews = `${Math.floor(views / 1000000)}M`;
  else if (views > 1000) noOfViews = `${Math.floor(views / 1000)}K`;
  else noOfViews = views;

  const ago = getAgo(snippet.publishedAt);

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img src={thumbnails.medium.url} alt="Thumbnail" className="rounded-lg" />
      <ul className="mt-2">
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <div className="flex">
          <div className="mr-2">{noOfViews} views</div>
          <div className="">{ago} ago</div>
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
