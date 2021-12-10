import React from "react";
import ChatBot from "react-simple-chatbot";
const steps = [
  {
    id: "0",
    message: "Welcome to CMRCET Chatbot.",
    trigger: "1"
  },
  {
    id: "1",
    message: "Welcome to react chatbot!",
    trigger: "2"
  },
  {
    id: "2",
    message: "Bye!",
    end: true
  }
];

function ChatBotCore() {
  return (
    <div>
      <ChatBot steps={steps} />
    </div>
  );
}

export default ChatBotCore;
