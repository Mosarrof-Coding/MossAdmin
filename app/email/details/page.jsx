"use client";

import {
  Archive,
  Inbox,
  Mail,
  Send,
  Trash,
  Star,
  AlertOctagon,
  FileText,
  Download,
  Reply,
  ReplyAll,
  File,
  Users,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const messages = [
  {
    id: 1,
    sender: "Codescandy",
    email: "hello@example.com",
    subject: "Contact For “Website Design”",
    time: new Date().toLocaleString(),
    message: `Hello Dear Alexander,

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut rutrum mi. Aenean ac leo non justo suscipit consectetur. Nam vestibulum eleifend magna quis porta. ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut rutrum mi. Aenean ac leo

Praesent ut rutrum mi. Aenean ac leo non justo suscipit consectetur. Nam vestibulum eleifend magna quis porta.

Nullam tincidunt sodales diam, quis rhoncus dolor aliquet a. Nulla a rhoncus lectus. In nunc neque, pellentesque non massa ornare, accumsan ornare massa. sodales diam, quis rhoncus dolor aliquet a. Nulla a rhoncus lectus. In nunc neque

Suspendisse semper vel turpis vitae aliquam. Aenean semper dui in consequat ullamcorper.

Nullam tincidunt sodales diam, quis rhoncus dolor aliquet a. Nulla a rhoncus lectus. In nunc neque, pellentesque non massa ornare, accumsan ornare massa. sodales diam, quis rhoncus dolor aliquet a. Nulla a rhoncus lectus. In nunc neque

Praesent ut rutrum mi. Aenean ac leo non justo suscipit consectetur. Nam vestibulum eleifend magna quis porta.`,
    attachments: [
      { name: "Guidelines.pdf", type: "PDF" },
      { name: "Branding Assets", type: "Media" },
    ],
    avatar: "https://i.pravatar.cc/80?img=32",
  },
];

export default function InboxPage() {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center p-3 md:p-5 text-sm">
        <h3 className="font-medium text-2xl">Inbox Details</h3>
        <div className="flex items-center gap-1 text-lg">
          <Link href="/" className="">
            Home
          </Link>
          <ChevronRight className="inline-block mt-0.5" size={18} />
          <span className="font-semibold text-primary">Inbox Details</span>
        </div>
      </div>
      <div className="gap-6 grid grid-cols-12 border rounded-xl min-h-screen text-sm">
        {/* Sidebar */}
        <aside className="space-y-6 col-span-2 px-4 py-6 border-r">
          <div>
            <h2 className="mb-2 font-semibold text-lg">MAILBOX</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Inbox className="w-4" /> Inbox{" "}
                <span className="bg-muted ml-auto px-2 py-0.5 rounded-full text-xs">
                  3
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Send className="w-4" /> Sent
              </li>
              <li className="flex items-center gap-2">
                <File className="w-4" /> Drafts
              </li>
              <li className="flex items-center gap-2">
                <AlertOctagon className="w-4" /> Spam{" "}
                <span className="bg-muted ml-auto px-2 py-0.5 rounded-full text-xs">
                  2
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Trash className="w-4" /> Trash
              </li>
              <li className="flex items-center gap-2">
                <Archive className="w-4" /> Archive
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 font-semibold text-lg">FILTER</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Star className="w-4" /> Starred
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4" /> Important
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 font-semibold text-lg">LABEL</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="before:top-1.5 before:left-2 before:absolute relative before:bg-blue-500 pl-6 before:rounded-full before:w-2 before:h-2">
                Personal
              </li>
              <li className="before:top-1.5 before:left-2 before:absolute relative before:bg-green-500 pl-6 before:rounded-full before:w-2 before:h-2">
                Work
              </li>
              <li className="before:top-1.5 before:left-2 before:absolute relative before:bg-orange-500 pl-6 before:rounded-full before:w-2 before:h-2">
                Payments
              </li>
              <li className="before:top-1.5 before:left-2 before:absolute relative before:bg-purple-500 pl-6 before:rounded-full before:w-2 before:h-2">
                Invoices
              </li>
              <li className="before:top-1.5 before:left-2 before:absolute relative before:bg-gray-400 pl-6 before:rounded-full before:w-2 before:h-2">
                Blank
              </li>
            </ul>
          </div>
        </aside>

        {/* Inbox Content */}
        <main className="space-y-6 col-span-10 p-6">
          <div>
            <h1 className="mb-2 font-bold text-2xl">Inbox Details</h1>
            <p className="text-muted-foreground text-sm">
              Home / Inbox Details / Compose
            </p>
          </div>

          {/* Message Content */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="space-y-4 bg-card/20 shadow p-6 rounded-xl"
            >
              <div className="flex items-start gap-4">
                <img
                  src={msg.avatar}
                  alt="avatar"
                  className="rounded-full w-12 h-12"
                />
                <div className="flex-1 space-y-1">
                  <h3 className="font-semibold text-lg">{msg.subject}</h3>
                  <p className="text-muted-foreground text-sm">
                    {msg.sender} <span className="text-xs">({msg.email})</span>{" "}
                    · {msg.time}
                  </p>
                </div>
                <Checkbox className="border-black" />
              </div>

              <p className="text-muted-foreground whitespace-pre-wrap">
                {msg.message}
              </p>

              <div>
                <h4 className="mb-2 font-medium">2 Attachments</h4>
                <div className="gap-4 grid grid-cols-2">
                  {msg.attachments.map((file, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-3 border rounded"
                    >
                      <FileText className="text-muted-foreground" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{file.name}</p>
                        <p className="text-muted-foreground text-xs">
                          {file.type}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="mr-1 w-4 h-4" /> Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button size="sm">
                  <Reply className="mr-1 w-4 h-4" /> Reply
                </Button>
                <Button size="sm" variant="outline">
                  <ReplyAll className="mr-1 w-4 h-4" /> Reply All
                </Button>
              </div>
            </div>
          ))}

          <div className="text-muted-foreground text-sm text-right">
            4 of 120
          </div>
        </main>
      </div>
    </>
  );
}
