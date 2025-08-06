"use client";

import {
  Inbox,
  Send,
  FileText,
  Archive,
  Trash2,
  Star,
  StarOff,
  Mail,
  MailOpen,
  AlertTriangle,
  Pencil,
  Plus,
  Reply,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const initialMessages = [
  {
    id: 1,
    sender: "Kaiya George",
    subject: "Project launch updates",
    preview:
      "We've finalized the features. Let's push to production this week.",
    time: new Date().toLocaleString(),
    read: false,
    important: true,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    sender: "Lindsey Curtis",
    subject: "Design mockups ready",
    preview: "Hi! I’ve attached the updated mockups for the mobile view.",
    time: new Date().toLocaleString(),
    read: true,
    important: false,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    sender: "Zain Geidt",
    subject: "Payment Received",
    preview: "Your invoice has been successfully processed.",
    time: new Date().toLocaleString(),
    read: true,
    important: true,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 4,
    sender: "Piya Islam",
    subject: "Project launch updates",
    preview:
      "We've finalized the features. Let's push to production this week.",
    time: new Date().toLocaleString(),
    read: false,
    important: true,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 5,
    sender: "Moss Hamedani",
    subject: "Design mockups ready",
    preview: "Hi! I’ve attached the updated mockups for the mobile view.",
    time: new Date().toLocaleString(),
    read: true,
    important: false,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 6,
    sender: "Mosharof",
    subject: "Payment Received",
    preview: "Your invoice has been successfully processed.",
    time: new Date().toLocaleString(),
    read: true,
    important: true,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const EmailInboxPage = () => {
  const [filter, setFilter] = useState("all");
  const [messages, setMessages] = useState(initialMessages);

  const toggleRead = (id) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === id ? { ...msg, read: !msg.read } : msg))
    );
  };

  const toggleImportant = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, important: !msg.important } : msg
      )
    );
  };

  const archiveMessage = (id) => {
    console.log(`Archived message ${id}`);
    // Could remove or mark archived here
  };

  const replyToMessage = (id) => {
    console.log(`Reply to message ${id}`);
    // Show reply modal or navigate
  };

  const filteredMessages = messages.filter((msg) => {
    if (filter === "read") return msg.read;
    if (filter === "important") return msg.important;
    return true;
  });

  // compose
  const [compose, setCompose] = useState();
  return (
    <div className="px-4 py-6 mg:py-12">
      <div className="flex flex-wrap justify-between items-center mb-2 text-sm">
        <div className="flex items-center gap-2">
          <button className="setmail"></button>
          <h3 className="font-semibold text-primary text-2xl lg:text-3xl">
            Inbox
          </h3>
        </div>
        <div className="flex items-center gap-1 text-lg">
          <Link href="/" className="font-bold">
            Home
          </Link>
          <ChevronRight className="inline-block mt-0.5" size={18} />
          <span className="font-semibold text-primary">Inbox</span>
        </div>
      </div>

      <div className="flex gap-4 bg-background text-foreground">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col gap-2 p-2 lg:p-4 rounded-xl min-w-[260px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-xl">Mailbox</h2>
            <Button size="icon" variant="outline">
              <Plus />
            </Button>
          </div>

          <Button variant="ghost" className="justify-start gap-2">
            <Inbox size={18} /> Inbox
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            <Send size={18} /> Sent
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            <FileText size={18} /> Drafts
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            <AlertTriangle size={18} /> Spam
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            <Trash2 size={18} /> Trash
          </Button>
          <Button variant="ghost" className="justify-start gap-2">
            <Archive size={18} /> Archive
          </Button>

          <div className="space-y-1 mt-4 pt-4 border-t text-muted-foreground text-sm">
            <div className="font-semibold text-muted-foreground">LABELS</div>
            <div className="pl-2">📌 Personal</div>
            <div className="pl-2">💼 Work</div>
            <div className="pl-2">💳 Payments</div>
          </div>
        </aside>

        {/* Main content */}
        <div className="relative space-y-4 p-2 lg:p-6 rounded-xl w-full">
          {/* Search and Filter */}
          <div className="hidden sm:flex justify-between items-center">
            <h1 className="font-bold text-2xl">Inbox</h1>
            <Input className="w-1/3 min-w-[240px]" placeholder="Search..." />
          </div>

          {/* Filter buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              <Mail className="mr-2 w-4 h-4" /> All
            </Button>
            <Button
              variant={filter === "read" ? "default" : "outline"}
              onClick={() => setFilter("read")}
            >
              <MailOpen className="mr-2 w-4 h-4" /> Read
            </Button>
            <Button
              variant={filter === "important" ? "default" : "outline"}
              onClick={() => setFilter("important")}
            >
              <Star className="mr-2 w-4 h-4" /> Important
            </Button>
          </div>

          {/* Message list */}
          <div className="space-y-2">
            {filteredMessages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex items-center gap-2 lg:gap-4 hover:bg-muted/40 shadow-sm p-3 border rounded-xl transition",
                  !msg.read && "bg-muted/30"
                )}
              >
                <Checkbox className="border border-foreground data-[state=checked]:text-background" />
                <Avatar>
                  <AvatarImage src={msg.avatar} />
                  <AvatarFallback>{msg.sender.slice(0, 2)}</AvatarFallback>
                </Avatar>

                <div className="md:flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{msg.sender}</h4>
                    <span className="text-muted-foreground text-sm">
                      {msg.time}
                    </span>
                  </div>
                  <div className="text-muted-foreground text-sm">
                    <strong className="text-foreground">
                      {msg.subject} —{" "}
                    </strong>
                    {msg.preview}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap justify-center items-center gap-1 md:gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleImportant(msg.id)}
                  >
                    {msg.important ? (
                      <Star className="text-yellow-500" size={18} />
                    ) : (
                      <StarOff size={18} />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleRead(msg.id)}
                  >
                    {msg.read ? (
                      <MailOpen className="text-primary" size={18} />
                    ) : (
                      <Mail size={18} />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => replyToMessage(msg.id)}
                  >
                    <Reply size={18} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => archiveMessage(msg.id)}
                  >
                    <Archive size={18} />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Action Button (FAB) */}
          <Button
            variant="default"
            className="right-6 bottom-6 fixed shadow-lg rounded-full"
            onClick={() => setCompose(!compose)}
          >
            <Pencil className="mr-2" /> Compose
          </Button>
          {compose && (
            <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-20">
              <div className="relative bg-white shadow-lg p-6 rounded-lg w-full max-w-2xl animate-fadeIn">
                {/* Close Button */}
                <button
                  onClick={() => setCompose(!compose)}
                  className="top-4 right-4 absolute text-gray-500 hover:text-red-600 text-xl"
                >
                  &times;
                </button>

                {/* Header */}
                <h2 className="mb-4 font-semibold text-gray-800 text-xl">
                  Compose Message
                </h2>

                {/* Form */}
                <form className="space-y-4">
                  {/* To */}
                  <div>
                    <label className="block mb-1 font-medium text-gray-600 text-sm">
                      To
                    </label>
                    <input
                      type="email"
                      placeholder="recipient@example.com"
                      className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block mb-1 font-medium text-gray-600 text-sm">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Subject of the message"
                      className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block mb-1 font-medium text-gray-600 text-sm">
                      Message
                    </label>
                    <textarea
                      rows="6"
                      placeholder="Write your message here..."
                      className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end gap-2 pt-4">
                    <button
                      type="button"
                      onClick={() => setCompose(!compose)}
                      className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded text-gray-700 text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white text-sm"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailInboxPage;
