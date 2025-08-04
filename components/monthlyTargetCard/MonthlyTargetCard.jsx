import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { PieChart, Pie, Cell, ResponsiveContainer, Text } from "recharts";

const targetValue = 20000;
const currentValue = 16300;
const percentage = Math.round((currentValue / targetValue) * 100);

const data = [
  { name: "Completed", value: currentValue },
  { name: "Remaining", value: targetValue - currentValue },
];

const COLORS = ["hsl(145, 60%, 45%)", "hsl(220, 10%, 80%)"];

const renderLabel = ({ cx, cy }) => {
  return (
    <text
      x={cx}
      y={cy + 20} // adjust vertical position to center
      textAnchor="middle"
      dominantBaseline="middle"
      className="fill-green-600 font-bold text-2xl"
      style={{ fontSize: 32, fontWeight: "bold", fill: "hsl(145, 60%, 45%)" }}
    >
      {percentage}%
    </text>
  );
};

const MonthlyTargetCard = () => {
  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle className="font-semibold text-lg">Monthly Target</CardTitle>
        <p className="mt-1 text-muted-foreground">
          Target you’ve set for each month
        </p>
      </CardHeader>

      <CardContent className="flex flex-col items-center space-y-6">
        {/* Half circle chart */}
        <div style={{ width: "300px", height: "200px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                startAngle={180}
                endAngle={0}
                innerRadius={70}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
                label={renderLabel}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Percentage + message */}
        <div className="text-center">
          <p className="font-bold text-green-600 text-xl">+10%</p>
          <p className="mx-auto mt-1 max-w-xs text-muted-foreground text-sm">
            You earn $3,287 today, it's higher than last month. Keep up your
            good work!
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 pt-4 border-t border-border w-full text-sm text-center">
          <div>
            <p className="text-muted-foreground">Target</p>
            <p className="font-semibold">$20K</p>
          </div>
          <div>
            <p className="text-muted-foreground">Revenue</p>
            <p className="font-semibold">$20K</p>
          </div>
          <div>
            <p className="text-muted-foreground">Today</p>
            <p className="font-semibold">$20K</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyTargetCard;
