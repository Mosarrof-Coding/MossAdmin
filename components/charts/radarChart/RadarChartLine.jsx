"use client";

import { TrendingUp } from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Tooltip,
} from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 160 },
  { month: "February", desktop: 185, mobile: 170 },
  { month: "March", desktop: 207, mobile: 180 },
  { month: "April", desktop: 173, mobile: 160 },
  { month: "May", desktop: 160, mobile: 190 },
  { month: "June", desktop: 174, mobile: 204 },
];

const RadarChartLine = () => {
  return (
    <div className="bg-card shadow mx-auto p-4 border rounded-xl w-full">
      <div className="mb-4 text-center">
        <h2 className="font-semibold text-xl">Radar Chart - Lines Only</h2>
        <p className="text-sm">Showing total visitors for the last 6 months</p>
      </div>

      <div className="flex justify-center">
        <RadarChart width={300} height={300} data={chartData}>
          <PolarGrid radialLines={false} />
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
            strokeWidth={2}
            fillOpacity={0}
          />
          <Radar
            dataKey="mobile"
            stroke="#22c55e"
            strokeWidth={2}
            fillOpacity={0}
          />
        </RadarChart>
      </div>

      <div className="mt-4 text-sm text-center">
        <div className="flex justify-center items-center gap-2 font-medium">
          Trending up by 5.2% this month <TrendingUp className="w-4 h-4" />
        </div>
        <div className="mt-1 text-gray-500">January - June 2024</div>
      </div>
    </div>
  );
};

export default RadarChartLine;
