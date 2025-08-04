"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Filter, Search } from "lucide-react";

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
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-foreground text-2xl">Task List</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="mr-2 w-4 h-4" />
            Filter
          </Button>
          <Button>
            <Plus className="mr-2 w-4 h-4" />
            New Task
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3">
        <Search className="w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search tasks..." className="max-w-md" />
      </div>

      {/* Task List */}
      <ScrollArea className="bg-card border rounded-xl w-full h-[500px]">
        <div className="space-y-4 p-4">
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
