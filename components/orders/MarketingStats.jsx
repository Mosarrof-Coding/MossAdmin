"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  Star,
  DollarSign,
  Users,
} from "lucide-react";

export default function MarketingStats() {
  const stats = [
    {
      title: "Avg. Client Rating",
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      value: "7.8/10",
      change: "+20%",
      changeType: "up",
    },
    {
      title: "Instagram Followers",
      icon: <Users className="w-6 h-6 text-pink-500" />,
      value: "5,934",
      change: "-3.59%",
      changeType: "down",
    },
    {
      title: "Total Revenue",
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      value: "$9,758",
      change: "+15%",
      changeType: "up",
    },
  ];

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, idx) => (
        <Card key={idx}>
          <CardTitle className="flex flex-col justify-center items-center gap-2 font-medium text-sm">
            {stat.icon}
            {stat.title}
          </CardTitle>

          <CardContent className="text-center">
            <div className="font-bold text-2xl">{stat.value}</div>
            <p className="flex items-center gap-1 mx-auto mt-1 w-fit text-muted-foreground text-xs">
              {stat.changeType === "up" ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              {stat.change} vs last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
