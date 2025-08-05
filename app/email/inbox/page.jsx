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

  return (
    <>
      <div className="flex flex-wrap justify-between items-center p-3 md:p-5 text-sm">
        <h3 className="font-medium text-2xl">Inbox</h3>
        <div className="flex items-center gap-1 text-lg">
          <Link href="/" className="">
            Home
          </Link>
          <ChevronRight className="inline-block mt-0.5" size={18} />
          <span className="font-semibold text-primary">Inbox</span>
        </div>
      </div>

      <div className="gap-6 grid grid-cols-[240px_1fr] bg-background h-screen text-foreground">
        {/* Sidebar */}
        <aside className="flex flex-col gap-2 bg-gray-400/5 p-4 rounded-xl">
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
        <main className="relative space-y-6 bg-gray-400/5 p-6 rounded-xl overflow-y-auto">
          {/* Search and Filter */}
          <div className="flex justify-between items-center">
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
                  "flex items-center gap-4 hover:bg-muted/40 shadow-sm p-3 border rounded-xl transition",
                  !msg.read && "bg-muted/30"
                )}
              >
                <Checkbox className="border border-foreground data-[state=checked]:text-background" />
                <Avatar>
                  <AvatarImage src={msg.avatar} />
                  <AvatarFallback>{msg.sender.slice(0, 2)}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
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
                <div className="flex items-center gap-2">
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
            className="right-6 bottom-6 fixed shadow-lg p-4 rounded-full"
          >
            <Pencil className="mr-2" /> Compose
          </Button>
        </main>
      </div>
    </>
  );
};

export default EmailInboxPage;
