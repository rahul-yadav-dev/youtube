import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_APIS } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  async function getVideos() {
    const data = await fetch(YOUTUBE_VIDEOS_APIS);
    const videos = await data.json();
    setVideos(videos.items);
  }

  useEffect(() => {
    getVideos();
}, []);

  if (!videos.length) return;
  return (
    <div className="flex flex-wrap  justify-between">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
