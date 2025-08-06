"use client";

import { useState } from "react";
import {
  Phone,
  Video,
  Smile,
  Paperclip,
  Mic,
  Send,
  Search,
  ChevronRight,
  UserRoundSearch,
  UserRoundX,
} from "lucide-react";
import Link from "next/link";

// Sample user data with live thumbs
const chatUsers = [
  {
    name: "Kaiya George",
    role: "Project Manager",
    time: "15 mins",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Lindsey Curtis",
    role: "Designer",
    time: "30 mins",
    img: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    name: "Zain Geidt",
    role: "Content Writer",
    time: "45 mins",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Carla George",
    role: "Front-end Developer",
    time: "2 days",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Abram Schleifer",
    role: "Digital Marketer",
    time: "1 hour",
    img: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    name: "Lincoln Donin",
    role: "Product Designer",
    time: "3 days",
    img: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    name: "Erin Geidthem",
    role: "Copywriter",
    time: "5 days",
    img: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    name: "Alena Baptista",
    role: "SEO Expert",
    time: "2 hours",
    img: "https://randomuser.me/api/portraits/women/73.jpg",
  },
];

const initialMessages = [
  {
    sender: "them",
    content: "I want to make an appointment tomorrow from 2:00 to 5:00pm?",
    time: "30 mins ago",
    img: chatUsers[1].img,
  },
  {
    sender: "them",
    content: "If I don’t like something, I’ll stay away from it.",
    time: "2 hours ago",
    img: chatUsers[1].img,
  },
  {
    sender: "them",
    content: "I want more detailed information.",
    time: "2 hours ago",
    img: chatUsers[1].img,
  },
  {
    sender: "me",
    content: "Sure! Please preview the image.",
    time: "Just now",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const ChatComponent = () => {
  const [selectedUser, setSelectedUser] = useState(chatUsers[1]);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      {
        sender: "me",
        content: newMessage,
        time: "Now",
        img: "https://randomuser.me/api/portraits/men/10.jpg",
      },
    ]);
    setNewMessage("");
  };
  // asider
  const [user, setUser] = useState();

  return (
    <div className="pt-6 md:pt-12">
      <div className="flex flex-wrap justify-between items-center mb-2 px-4 text-sm">
        <h3 className="font-semibold text-primary text-2xl md:text-3xl">
          Chat
        </h3>
        <div className="flex items-center gap-1 text-lg">
          <Link href="/" className="font-bold text-lg">
            Home
          </Link>
          <ChevronRight className="inline-block mt-0.5" size={18} />
          <span className="font-semibold text-primary">Chats</span>
        </div>
      </div>

      <div className="relative flex gap-4 min-h-screen">
        {/* Sidebar */}
        <aside
          className={`space-y-4 p-4 rounded-xl w-1/3 min-w-fit  ${
            user
              ? "absolute right-0 top-0 z-20 bg-card h-full"
              : "hidden md:block bg-card/40"
          }`}
        >
          {/* Search */}
          <div className="relative">
            <Search className="top-2.5 left-3 absolute w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="py-2 pr-4 pl-10 border border-input rounded-md outline-none focus:ring-2 focus:ring-primary w-full text-sm"
            />
          </div>

          {/* User List */}
          <div className="space-y-3">
            {chatUsers.map((user, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-accent ${
                  selectedUser.name === user.name ? "bg-accent" : ""
                }`}
                onClick={() => setSelectedUser(user)}
              >
                <img
                  src={user.img}
                  alt={user.name}
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="flex-1">
                  <div className="font-medium text-sm">{user.name}</div>
                  <div className="text-muted-foreground text-xs">
                    {user.role}
                  </div>
                </div>
                <span className="text-muted-foreground text-xs">
                  {user.time}
                </span>
              </div>
            ))}
          </div>
        </aside>

        {/* Chat Section */}
        <div className="flex flex-col flex-1 bg-card/40 rounded-xl">
          {/* Header */}
          <header className="flex justify-between items-center bg-card/40 p-4 border-b">
            <div className="flex items-center gap-3">
              <button
                className="md:hidden pr-2 border-r-4 cursor-pointer"
                onClick={() => setUser(!user)}
              >
                {user ? (
                  <UserRoundSearch className="size-8" />
                ) : (
                  <UserRoundX className="size-8" />
                )}
              </button>

              <img
                src={selectedUser.img}
                alt={selectedUser.name}
                className="rounded-full w-10 h-10 object-cover"
              />
              <div>
                <div className="font-semibold text-base">
                  {selectedUser.name}
                </div>
                <div className="text-muted-foreground text-xs">
                  {selectedUser.role}
                </div>
              </div>
            </div>
            <div className="flex space-x-4 text-muted-foreground">
              <Phone className="hover:text-primary cursor-pointer" />
              <Video className="hover:text-primary cursor-pointer" />
            </div>
          </header>

          {/* Messages */}
          <div className="flex-1 space-y-6 bg-card/40/80 p-6 w-full h-full">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end gap-3 w-fit ${
                  msg.sender === "me" ? "ms-auto flex-row-reverse" : ""
                }`}
              >
                <img
                  src={msg.img}
                  alt="user"
                  className="rounded-full w-8 h-8 object-cover"
                />
                <div
                  className={`rounded-xl px-4 py-2 max-w-xs text-sm ${
                    msg.sender === "me" ? "bg-chart-2/50" : "bg-muted"
                  }`}
                >
                  <p>{msg.content}</p>
                  <span className="block opacity-75 mt-1 text-[10px]">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input Footer */}
          <footer className="bg-card/40 p-4 pb-6 md:pb-12 border-t">
            <div className="flex items-center gap-2">
              <button className="text-muted-foreground hover:text-primary">
                <Smile size={20} />
              </button>
              <button className="text-muted-foreground hover:text-primary">
                <Paperclip size={20} />
              </button>
              <button className="text-muted-foreground hover:text-primary">
                <Mic size={20} />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message"
                className="flex-1 px-4 py-2 border border-input rounded-full outline-none focus:ring-2 focus:ring-primary text-sm"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                className="bg-primary/60 hover:bg-primary/90 p-2 rounded-full"
                onClick={handleSend}
              >
                <Send size={18} />
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
