import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, genrateRandomMessages } from "../utils/helper";

const ChatComponent = () => {
  const [chatText, setChatText] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const handlePostChat = () => {
    if (chatText) {
      dispatch(addMessage({ name: "Rahul Yadav", message: chatText }));
      setChatText("");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // api polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: genrateRandomMessages(10),
        })
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="h-[580px] mx-2 border border-gray-400 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div className="">
          {chatMessages.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <div className="mx-2 rounded-lg my-2 flex justify-between">
        <input
          type="text"
          placeholder="Post a Chat"
          className="w-4/5 border rounded-lg p-2"
          value={chatText}
          onChange={(e) => setChatText(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handlePostChat();
            }
          }}
        />
        <button
          className="border border-slate-200 bg-orange-400 p-2 rounded-lg text-white"
          onClick={handlePostChat}
        >
          Post
        </button>
      </div>
    </>
  );
};

export default ChatComponent;
