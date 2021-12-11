import React from "react";
import ChatBot from "react-simple-chatbot";
import { Link } from "react-router-dom";

const steps = [
  {
    id: "1",
    message: "Hey, how can i help you?",
    trigger: "name"
  },
  {
    id: "name",
    user: true,
    trigger: "2"
  },
  {
    id: "2",
    message: "{previousValue}",
    trigger: "3"
  },
  {
    id: "3",
    options: [
      { value: 1, label: "Leave", trigger: "4" },
      { value: 2, label: "Appointment", trigger: "5" }
    ]
  },
  {
    id: "4",
    component: <a href="/leave"> Apply for leave </a>
  },
  {
    id: "5",
    component: <Link to={{ pathname: "/bookings", state: "admin@admin.com" }}> Appointment </Link>
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
