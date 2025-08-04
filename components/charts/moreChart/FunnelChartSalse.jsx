"use client";

import React from "react";
import {
  FunnelChart,
  Funnel,
  LabelList,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  { day: "Monday", sales: 3000, profit: 1200 },
  { day: "Tuesday", sales: 2800, profit: 1100 },
  { day: "Wednesday", sales: 3500, profit: 1400 },
  { day: "Thursday", sales: 2700, profit: 900 },
  { day: "Friday", sales: 4000, profit: 1700 },
  { day: "Saturday", sales: 3200, profit: 1500 },
  { day: "Sunday", sales: 2500, profit: 800 },
];

const FunnelChartSalse = () => {
  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <CardTitle>7 Days Funnel: Sales vs Profit</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <FunnelChart>
            <Tooltip />
            {/* Sales Funnel */}
            <Funnel
              dataKey="sales"
              data={data}
              nameKey="day"
              fill="var(--chart-1)"
              isAnimationActive
            >
              <LabelList
                position="right"
                fill="#888"
                stroke="none"
                dataKey="day"
              />
            </Funnel>
            {/* Profit Funnel */}
            <Funnel
              dataKey="profit"
              data={data}
              nameKey="day"
              fill="var(--chart-3)"
              isAnimationActive
            >
              <LabelList
                position="left"
                fill="#333"
                stroke="none"
                formatter={(value) => `$${value}`}
              />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default FunnelChartSalse;
