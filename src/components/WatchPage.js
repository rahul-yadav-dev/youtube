import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { MdDownload } from "react-icons/md";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { RiShareForwardFill } from "react-icons/ri";
import {
  GET_YT_CHANNEL,
  GET_YT_VIDEO,
  YOUTUBE_COMMENT_API,
} from "../utils/constants";
import Comment from "./Comment";
import ChatComponent from "./ChatComponent";
import { getAgo } from "../utils/ago";
import { addCommasToNumber } from "../utils/commaViews";
import { getViews } from "../utils/getViews";

const WatchPage = () => {
  const [comments, setComments] = useState([]);
  const [channelDetails, setChannelDetails] = useState();
  const [videoData, setVideoData] = useState();
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");

  async function getComments() {
    const data = await fetch(YOUTUBE_COMMENT_API + videoId);
    const comments = await data.json();
    setComments(comments?.items);
  }

  async function getVideoDetail() {
    const data = await fetch(GET_YT_VIDEO + videoId);
    const videoData = await data.json();
    const channelId = videoData.items[0].snippet.channelId;
    const channel = await fetch(GET_YT_CHANNEL + channelId);
    const channelData = await channel.json();
    setVideoData(videoData?.items[0]);
    setChannelDetails(channelData?.items[0]);
  }

  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetail();
    getComments();
  }, []);

  const ago = videoData && getAgo(videoData.snippet.publishedAt);
  console.log(videoData);

  return (
    <div className="px-5 flex flex-col w-full ml-20">
      <div className="flex justify-between">
        <iframe
          className="w-3/4 rounded-2xl "
          width="843"
          height="550"
          src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
          title="Youtube vide player"
          allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;fullscreen"
          allowFullScreen
        />
        <div className="w-1/4 h-600">
          <ChatComponent />
        </div>
      </div>
      {videoData && videoData.statistics ? (
        <div className="w-3/4  ">
          <div className="font-extrabold text-xl pb-2">
            {videoData.snippet.title}
          </div>
          <div className="flex justify-between">
            <div className="flex mb-2 items-center">
              <img
                src={channelDetails.snippet.thumbnails.default.url}
                width={50}
                height={50}
                alt="channel"
                className="rounded-full"
              />
              <div className="flex flex-col ml-2">
                <div className="font-bold text-sm">
                  {channelDetails.snippet.title}
                </div>
                <div className="text-slate-400">
                  {getViews(channelDetails.statistics.subscriberCount)}{" "}
                  subscribers
                </div>
              </div>
              <button className="text-white font-medium h-4/5 bg-black rounded-3xl mx-7 px-5 ">
                Subscribe
              </button>
            </div>
            <div className="flex justify-between  w-2/5 px-2">
              <div className="flex justify-between bg-gray-200 rounded-full w-2/5 mr-1 items-center">
                <div className="flex  border-r border-r-slate-400 h-full items-center py-4 hover:opacity-40">
                  <div className="text-2xl flex items-center ml-3 cursor-pointer">
                    <AiOutlineLike />
                  </div>
                  <div className="mx-2 font-semibold">
                    {getViews(videoData.statistics.likeCount)}
                  </div>
                </div>
                <div className="text-2xl flex items-center mr-8 cursor-pointer hover:opacity-40">
                  <AiOutlineDislike />
                </div>
              </div>
              <button className="w-1/4 bg-gray-200 ml-1 rounded-full text-2xl flex justify-center items-center text-center">
                <div>
                  <RiShareForwardFill />
                </div>
              </button>
              <button className="w-1/5 bg-gray-200 ml-1 rounded-full text-2xl flex justify-center items-center text-center">
                <div>
                  <MdDownload />
                </div>
              </button>
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl mt-3 p-4  text-sm whitespace-pre-line">
            <div className="flex">
              <div className="font-bold">
                {addCommasToNumber(videoData.statistics.viewCount)} views
              </div>
              <div className="font-bold ml-4 ">{ago} ago</div>
            </div>
            <div>{videoData.snippet.description}</div>
          </div>
        </div>
      ) : (
        <div>No</div>
      )}
      {comments ? (
        <div>
          <div className="mt-10 font-extrabold text-2xl border-b-2 p-4">
            {comments.length} Comments
          </div>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              info={comment.snippet.topLevelComment.snippet}
            />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default WatchPage;
