"use client";

import React from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const tasks = {
  todo: [
    {
      title: "Design login page",
      assignee: "https://i.pravatar.cc/40?u=login",
      priority: "High",
      due: "Today",
    },
    {
      title: "Write API documentation",
      assignee: "https://i.pravatar.cc/40?u=doc",
      priority: "Medium",
      due: "Tomorrow",
    },
  ],
  inProgress: [
    {
      title: "Fix user auth bug",
      assignee: "https://i.pravatar.cc/40?u=auth",
      priority: "Critical",
      due: "In 2 days",
    },
  ],
  done: [
    {
      title: "Initial dashboard layout",
      assignee: "https://i.pravatar.cc/40?u=layout",
      priority: "Low",
      due: "Last week",
    },
  ],
};

const Kanban = () => {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl tracking-tight">Kanban Board</h2>
        <div className="flex gap-2">
          <Button variant="outline">
            <Plus className="mr-2 w-4 h-4" />
            New Task
          </Button>
          <Button variant="default">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Board */}
      <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
        {/* Column: To Do */}
        <Card className="bg-muted/40">
          <CardHeader>
            <CardTitle className="text-lg">To Do</CardTitle>
          </CardHeader>
          <ScrollArea className="h-[500px]">
            <CardContent className="space-y-4">
              {tasks.todo.map((task, index) => (
                <TaskCard key={index} task={task} />
              ))}
            </CardContent>
          </ScrollArea>
        </Card>

        {/* Column: In Progress */}
        <Card className="bg-muted/40">
          <CardHeader>
            <CardTitle className="text-lg">In Progress</CardTitle>
          </CardHeader>
          <ScrollArea className="h-[500px]">
            <CardContent className="space-y-4">
              {tasks.inProgress.map((task, index) => (
                <TaskCard key={index} task={task} />
              ))}
            </CardContent>
          </ScrollArea>
        </Card>

        {/* Column: Completed */}
        <Card className="bg-muted/40">
          <CardHeader>
            <CardTitle className="text-lg">Completed</CardTitle>
          </CardHeader>
          <ScrollArea className="h-[500px]">
            <CardContent className="space-y-4">
              {tasks.done.map((task, index) => (
                <TaskCard key={index} task={task} />
              ))}
            </CardContent>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
};

const TaskCard = ({ task }) => {
  return (
    <div className="bg-card shadow p-4 rounded-xl">
      <h4 className="mb-2 font-semibold">{task.title}</h4>
      <div className="flex justify-between items-center text-muted-foreground text-sm">
        <span className="bg-chart-4 px-2 py-1 rounded-full font-medium text-yellow-800 text-xs">
          {task.priority}
        </span>
        <span>{task.due}</span>
      </div>
      <div className="flex justify-end mt-3">
        <img
          src={task.assignee}
          alt="Assignee"
          className="ring-border rounded-full ring-2 w-8 h-8"
        />
      </div>

      <ScrollArea className="border w-full h-80">
        <div className="space-y-4 p-4">
          <div className="bg-gray-200 rounded h-24" />
          <div className="bg-gray-200 rounded h-24" />
          <div className="bg-gray-200 rounded h-24" />
          <div className="bg-gray-200 rounded h-24" />
          <div className="bg-gray-200 rounded h-24" />
        </div>
      </ScrollArea>
    </div>
  );
};

export default Kanban;
