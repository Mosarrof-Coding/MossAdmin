"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Filter, Search, ChevronLeft, ChevronRight } from "lucide-react";

const tasks = [
  {
    title: "Fix user authentication bug",
    status: "In Progress",
    assignee: "Musharof Chowdhury",
    priority: "High",
    due: "2025-07-25",
  },
  {
    title: "Update dashboard layout",
    status: "Completed",
    assignee: "Alena Franci",
    priority: "Medium",
    due: "2025-07-20",
  },
  {
    title: "Refactor payment logic",
    status: "Pending",
    assignee: "Brandon Philips",
    priority: "Low",
    due: "2025-07-30",
  },
  {
    title: "Build mobile responsive UI",
    status: "In Progress",
    assignee: "Fatima Noor",
    priority: "High",
    due: "2025-07-27",
  },
];

const ListPage = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 mx-auto px-4 py-6 md:py-12">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-primary text-2xl md:text-3xl">
          Task List
        </h2>
        <div className="flex items-center gap-1">
          <h4 className="font-bold text-lg">Home</h4>
          <ChevronRight className="size-5" />
          <h4 className="text-primary text-lg">Task List</h4>
        </div>
      </div>

      {/* Search */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="relative flex items-center gap-2 w-full sm:w-1/2">
          <Search className="top-1/2 right-2 absolute size-5 text-muted-foreground -translate-y-1/2" />
          <Input placeholder="Search tasks..." className="w-full" />
        </div>
        <div className="flex items-center gap-2 ms-auto w-full sm:w-fit">
          <Button variant="outline">
            <Filter className="mr-1 size-4" />
            Filter
          </Button>
          <Button>
            <Plus className="mr-1 size-4" />
            New Task
          </Button>
        </div>
      </div>

      {/* Task List */}
      <ScrollArea className="bg-card border rounded-xl w-full">
        <div className="space-y-4 p-1 sm:p-3">
          {tasks.map((task, index) => (
            <Card key={index} className="bg-muted/40 border">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="font-medium text-foreground text-base">
                    {task.title}
                  </CardTitle>
                  <Badge
                    variant={
                      task.status === "Completed"
                        ? "default"
                        : task.status === "In Progress"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {task.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-1 text-muted-foreground text-sm">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback>{task.assignee[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{task.assignee}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs">Due: {task.due}</span>
                    <Badge variant="outline" className="text-xs">
                      {task.priority}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ListPage;
