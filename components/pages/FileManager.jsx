"use client";

import {
  FileText,
  ImageIcon,
  Music,
  PlaySquare,
  Folder,
  Download,
  UploadCloud,
  MoreVertical,
  Trash2,
} from "lucide-react";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import Storage from "./Storage";

const categories = [
  {
    title: "Image",
    icon: ImageIcon,
    percent: 17,
    files: 245,
    size: "26.40 GB",
    color: "text-blue-500",
  },
  {
    title: "Videos",
    icon: PlaySquare,
    percent: 22,
    files: 245,
    size: "26.40 GB",
    color: "text-red-500",
  },
  {
    title: "Audios",
    icon: Music,
    percent: 23,
    files: 830,
    size: "18.90 GB",
    color: "text-purple-500",
  },
  {
    title: "Apps",
    icon: Folder,
    percent: 65,
    files: 1200,
    size: "85.30 GB",
    color: "text-yellow-500",
  },
  {
    title: "Documents",
    icon: FileText,
    percent: 10,
    files: 78,
    size: "5.40 GB",
    color: "text-green-500",
  },
  {
    title: "Downloads",
    icon: Download,
    percent: 16,
    files: 245,
    size: "26.40 GB",
    color: "text-pink-500",
  },
];

const folders = [
  { name: "Images", files: 345, size: "26.40 GB" },
  { name: "Documents", files: 130, size: "26.40 GB" },
  { name: "Apps", files: 130, size: "26.40 GB" },
  { name: "Downloads", files: 345, size: "26.40 GB" },
];

const recentFiles = [
  {
    name: "iconVideo_947954.mp4",
    category: "Video",
    size: "89 MB",
    date: "12 Jan, 2027",
  },
  {
    name: "iconTravel.jpg",
    category: "Image",
    size: "5.4 MB",
    date: "10 Feb, 2027",
  },
  {
    name: "iconDocument.pdf",
    category: "Document",
    size: "1.2 MB",
    date: "8 Mar, 2027",
  },
  {
    name: "iconVideo_947954_028.mp4",
    category: "Video",
    size: "489 MB",
    date: "29 Apr, 2027",
  },
  {
    name: "iconMountain.png",
    category: "Image",
    size: "5.4 MB",
    date: "10 Feb, 2027",
  },
  {
    name: "iconCV.pdf",
    category: "Document",
    size: "12 MB",
    date: "17 Jun, 2027",
  },
  {
    name: "iconVideo_09783_882943.mp4",
    category: "Video",
    size: "309 MB",
    date: "27 Jul, 2027",
  },
];

export default function FileManager() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-12">
        <h2 className="w-sm font-bold text-2xl truncate">All Media</h2>
        <div className="flex justify-end items-center gap-8 max-w-4xl">
          <Input placeholder="Search..." className="bg-muted/10 w-sm" />
          <Button variant="default" className="bg-primary text-white">
            <UploadCloud className="mr-2 w-4 h-4" />
            Upload File
          </Button>
        </div>
      </div>

      {/* Search + Media Overview */}
      <div className="gap-4 grid md:grid-cols-3">
        <Card className="col-span-1 shadow-sm p-4 border rounded-2xl">
          <h4 className="font-medium text-muted-foreground text-sm">
            Storage Details
          </h4>
          <Storage />
          <p className="font-semibold text-lg">585 GB Free space left</p>
        </Card>
      </div>

      {/* Category Cards */}
      <div className="gap-4 grid sm:grid-cols-2 md:grid-cols-3">
        {categories.map(
          ({ title, icon: Icon, percent, files, size, color }, i) => (
            <Card key={i} className="shadow-sm border rounded-2xl">
              <CardHeader className="flex flex-row justify-between items-center pb-2">
                <CardTitle className="font-medium text-sm">{title}</CardTitle>
                <Icon className={`w-5 h-5 ${color}`} />
              </CardHeader>
              <CardContent>
                <Progress value={percent} className="h-2" />
                <p className="mt-2 text-muted-foreground text-xs">
                  {percent}% Used
                </p>
                <p className="text-xs">
                  {files} files • {size}
                </p>
              </CardContent>
            </Card>
          )
        )}
      </div>

      {/* Folder Previews */}
      <div className="flex justify-between items-center mt-8">
        <h3 className="font-semibold text-lg">All Folders</h3>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>
      <div className="gap-4 grid sm:grid-cols-2 md:grid-cols-4">
        {folders.map((folder, i) => (
          <Card key={i} className="bg-muted/50 border rounded-xl">
            <CardContent className="space-y-1 p-4">
              <Folder className="mb-2 w-6 h-6 text-primary" />
              <p className="font-semibold">{folder.name}</p>
              <p className="text-muted-foreground text-xs">
                {folder.files} Files • {folder.size}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Files Table */}
      <div className="flex justify-between items-center mt-10">
        <h3 className="font-semibold text-lg">Recent Files</h3>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>
      <div className="border rounded-xl overflow-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="px-4 py-2 font-medium text-left">File Name</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Size</th>
              <th className="px-4 py-2 text-left">Date Modified</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {recentFiles.map((file, i) => (
              <tr key={i} className="hover:bg-muted/40 transition">
                <td className="px-4 py-2">{file.name}</td>
                <td className="px-4 py-2">{file.category}</td>
                <td className="px-4 py-2">{file.size}</td>
                <td className="px-4 py-2">{file.date}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="hover:bg-primary/10"
                    >
                      <Download className="w-4 h-4 text-primary" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <MoreVertical className="w-4 h-4 text-muted-foreground" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
