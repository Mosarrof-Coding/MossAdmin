"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  { name: "Jan", profit: 4000 },
  { name: "Feb", profit: -3000 },
  { name: "Mar", profit: 2000 },
  { name: "Apr", profit: -2780 },
  { name: "May", profit: 1890 },
  { name: "Jun", profit: -2390 },
  { name: "Jul", profit: 3490 },
  { name: "Mar", profit: 2000 },
  { name: "Jan", profit: 4000 },
  { name: "Feb", profit: -3000 },
  { name: "Mar", profit: 2000 },
  { name: "Apr", profit: -2780 },
  { name: "May", profit: 1890 },
  { name: "Jun", profit: -2390 },
  { name: "Jul", profit: 3490 },
];
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-foreground/60 shadow-md p-4 border rounded-xl text-background">
        <p className="font-semibold text-sm">{label}</p>
        <p className="font-bold text-base">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};
const BarChartNegative = () => {
  return (
    <Card className="w-full h-[400px]">
      <CardHeader>
        <CardTitle>Bar Chart - Negative (Monthly Profit & Loss)</CardTitle>
      </CardHeader>
      <CardContent className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="profit"
              fill="#8884d8"
              radius={[4, 4, 0, 0]}
              isAnimationActive={true}
            >
              <LabelList dataKey="profit" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default BarChartNegative;
