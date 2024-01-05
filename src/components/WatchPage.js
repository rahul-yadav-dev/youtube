import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { YOUTUBE_COMMENT_API } from "../utils/constants";
import Comment from "./Comment";

const WatchPage = () => {
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");

  async function getComments() {
    const data = await fetch(YOUTUBE_COMMENT_API + videoId);
    const comments = await data.json();
    setComments(comments?.items);
    console.log(comments);
  }

  useEffect(() => {
    dispatch(closeMenu());
    getComments();
  }, []);

  return (
    <div className="px-5">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
        title="Youtube vide player"
        allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;fullscreen"
        allowFullScreen
      />
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
