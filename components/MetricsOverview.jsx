"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MetricsOverview() {
  const data = [
    {
      title: "Target",
      value: "$20K",
      trend: "up",
      change: "+12%",
    },
    {
      title: "Revenue",
      value: "$20K",
      trend: "down",
      change: "-3.5%",
    },
    {
      title: "Today",
      value: "$20K",
      trend: "up",
      change: "+8.1%",
    },
  ];

  return (
    <div className="gap-4 grid">
      {data.map((item, idx) => (
        <Card key={idx} className="bg-card shadow-sm border-none rounded-2xl">
          <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">{item.title}</CardTitle>
            {item.trend === "up" ? (
              <ArrowUp className="w-5 h-5 text-green-500" />
            ) : (
              <ArrowDown className="w-5 h-5 text-red-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className="font-bold text-2xl">{item.value}</div>
            <p
              className={`text-xs ${
                item.trend === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.change} from last week
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
