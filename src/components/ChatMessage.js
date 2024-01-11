import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="px-4 flex items-center mt-2">
      <img
        className="h-8 rounded-full"
        src="https://yt3.ggpht.com/qggzKyjRluy6x7k4u6zYaXw1lWNaxX9VDIXuq_E0VwE5i40nEh3hvK2Norz3bKOoGAsmUpoS=s48-c-k-c0x00ffffff-no-rj"
        alt="user icon"
      />
      <span className="ml-2 font-medium">{name}</span>
      <span className="ml-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
