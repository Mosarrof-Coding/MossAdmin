"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An area chart with sales vs profit";

const chartData = [
  { day: "Mon", sales: 3000, profit: 1200 },
  { day: "Tue", sales: 2800, profit: 1100 },
  { day: "Wed", sales: 3500, profit: 1400 },
  { day: "Thu", sales: 2700, profit: 900 },
  { day: "Fri", sales: 4000, profit: 1700 },
  { day: "Sat", sales: 3200, profit: 1500 },
  { day: "Sun", sales: 2500, profit: 800 },
];

const chartConfig = {
  sales: {
    label: "Sales",
    color: "var(--chart-1)",
  },
  profit: {
    label: "Profit",
    color: "var(--chart-2)",
  },
};

const Area_Chart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Sales vs Profit</CardTitle>
        <CardDescription>
          Showing daily sales and profit performance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="sales"
              type="natural"
              fill="var(--color-sales)"
              fillOpacity={0.4}
              stroke="var(--color-sales)"
              stackId="a"
            />
            <Area
              dataKey="profit"
              type="natural"
              fill="var(--color-profit)"
              fillOpacity={0.4}
              stroke="var(--color-profit)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex items-start gap-2 w-full text-sm">
          <div className="gap-2 grid">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this week <TrendingUp className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2 text-muted-foreground leading-none">
              Last 7 days
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
export default Area_Chart;
