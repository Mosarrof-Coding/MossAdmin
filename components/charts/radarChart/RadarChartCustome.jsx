"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radar chart with a custom label";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)", // mapped to Tailwind or custom theme
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)", // mapped to Tailwind or custom theme
  },
};

const RadarChartCustom = () => {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Radar Chart - Custom Label</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-h-[250px] aspect-square"
        >
          <RadarChart
            data={chartData}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis
              dataKey="month"
              tick={({ x, y, textAnchor, index, ...props }) => {
                const data = chartData[index];
                return (
                  <text
                    x={x}
                    y={index === 0 ? y - 10 : y}
                    textAnchor={textAnchor}
                    fontSize={13}
                    fontWeight={500}
                    {...props}
                  >
                    <tspan>{data.desktop}</tspan>
                    <tspan fill="var(--muted-foreground)"> / </tspan>
                    <tspan>{data.mobile}</tspan>
                    <tspan
                      x={x}
                      dy={"1rem"}
                      fontSize={12}
                      fill="var(--muted-foreground)"
                    >
                      {data.month}
                    </tspan>
                  </text>
                );
              }}
            />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              stroke="var(--chart-1)"
              fill="var(--chart-1)"
              fillOpacity={0.6}
            />
            <Radar
              dataKey="mobile"
              stroke="var(--chart-2)"
              fill="var(--chart-2)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-2 text-muted-foreground leading-none">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  );
};

export default RadarChartCustom;
