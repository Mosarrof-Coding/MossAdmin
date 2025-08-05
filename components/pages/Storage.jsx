"use client";

import * as React from "react";
import { Pie, PieChart, Label } from "recharts";

import { Card, CardContent } from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "File storage donut chart summary";

const chartData = [
  { category: "Images", size: 26.4, fill: "var(--chart-1)" },
  { category: "Videos", size: 26.4, fill: "var(--chart-2)" },
  { category: "Audios", size: 18.9, fill: "var(--chart-3)" },
  { category: "Apps", size: 85.3, fill: "var(--chart-4)" },
  { category: "Documents", size: 5.4, fill: "var(--chart-5)" },
  { category: "Downloads", size: 26.4, fill: "var(--chart-6)" },
];

const chartConfig = {
  size: {
    label: "Storage Used (GB)",
  },
  Images: {
    label: "Images",
    color: "var(--chart-1)",
  },
  Videos: {
    label: "Videos",
    color: "var(--chart-2)",
  },
  Audios: {
    label: "Audios",
    color: "var(--chart-3)",
  },
  Apps: {
    label: "Apps",
    color: "var(--chart-4)",
  },
  Documents: {
    label: "Documents",
    color: "var(--chart-5)",
  },
  Downloads: {
    label: "Downloads",
    color: "var(--chart-6)",
  },
};

const Storage = () => {
  const totalStorage = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.size, 0);
  }, []);

  return (
    <Card className="flex flex-col shadow-none m-0 p-0 border-none">
      <CardContent className="flex-1 m-0 p-0">
        <ChartContainer
          config={chartConfig}
          className="m-0 mx-auto p-0 max-h-[340px] aspect-square"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="size"
              nameKey="category"
              innerRadius={80}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground font-bold text-3xl"
                        >
                          {totalStorage.toFixed(1)} GB
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-sm"
                        >
                          Used
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default Storage;
