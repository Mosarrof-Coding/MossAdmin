"use client";

import { TrendingUp } from "lucide-react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";

const RadarChartSimple = () => {
  const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 273 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];

  return (
    <div className="bg-card shadow-sm mx-auto p-4 border rounded-xl w-full">
      <div className="mb-4 text-center">
        <h2 className="font-semibold text-xl">Radar Chart</h2>
        <p className="text-sm">Showing total visitors for the last 6 months</p>
      </div>

      <div className="flex justify-center">
        <RadarChart width={300} height={300} data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="month" />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--background)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
              borderRadius: "0.75rem",
            }}
          />

          <Radar
            dataKey="desktop"
            stroke="#4f46e5"
            fill="#4f46e5"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>

      <div className="mt-4 text-sm text-center">
        <div className="flex justify-center items-center gap-2 font-medium">
          Trending up by 5.2% this month <TrendingUp className="w-4 h-4" />
        </div>
        <div className="mt-1">January - June 2024</div>
      </div>
    </div>
  );
};
export default RadarChartSimple;
