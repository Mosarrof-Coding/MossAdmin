"use client";

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ScatterChart,
  Scatter,
  RadialBarChart,
  RadialBar,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const COLORS = [
  "#4f46e5",
  "#22c55e",
  "#f97316",
  "#ec4899",
  "#3b82f6",
  "#f59e0b",
];

const areaData = [
  { name: "Jan", sales: 2400, profit: 1200 },
  { name: "Feb", sales: 1398, profit: 900 },
  { name: "Mar", sales: 9800, profit: 3900 },
  { name: "Apr", sales: 3908, profit: 2100 },
  { name: "May", sales: 4800, profit: 2500 },
  { name: "Jun", sales: 3800, profit: 1700 },
  { name: "Jul", sales: 4300, profit: 2100 },
];

const barData = [
  { name: "Shoes", stock: 800 },
  { name: "Bags", stock: 456 },
  { name: "Watches", stock: 124 },
  { name: "Jackets", stock: 300 },
];

const lineData = areaData; // reuse area data

const pieData = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 300 },
  { name: "Home Goods", value: 300 },
  { name: "Other", value: 200 },
];

const radarData = [
  { subject: "Design", A: 120, fullMark: 150 },
  { subject: "UX", A: 98, fullMark: 150 },
  { subject: "Dev", A: 86, fullMark: 150 },
  { subject: "SEO", A: 99, fullMark: 150 },
  { subject: "Marketing", A: 85, fullMark: 150 },
];

const scatterData = [
  { x: 100, y: 200 },
  { x: 120, y: 100 },
  { x: 170, y: 300 },
  { x: 140, y: 250 },
];

const radialBarData = [
  { name: "Users", uv: 31.47, fill: "#4f46e5" },
  { name: "Sessions", uv: 26.69, fill: "#22c55e" },
  { name: "Bounce", uv: 15.69, fill: "#f97316" },
  { name: "New", uv: 8.22, fill: "#ec4899" },
];

const composedData = [
  { name: "Page A", uv: 590, pv: 800, amt: 1400 },
  { name: "Page B", uv: 868, pv: 967, amt: 1506 },
  { name: "Page C", uv: 1397, pv: 1098, amt: 989 },
  { name: "Page D", uv: 1480, pv: 1200, amt: 1228 },
];

const ChartContainer = ({ title, children }) => (
  <section className="bg-card shadow p-4 rounded-xl w-full h-[320px]">
    <h3 className="mb-4 font-semibold text-lg">{title}</h3>
    <ResponsiveContainer width="100%" height="85%">
      {children}
    </ResponsiveContainer>
  </section>
);

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("option1");
  const [switchOn, setSwitchOn] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <main className="space-y-10 mx-auto p-3 md:p-5 max-w-7xl">
      <h1 className="mb-6 font-bold text-3xl">E-Commerce Dashboard</h1>

      {/* KPI summary cards */}
      <section className="gap-6 grid grid-cols-1 sm:grid-cols-3 mb-10">
        <div className="bg-card shadow p-6 rounded-xl text-center">
          <p className="mb-2 text-muted-foreground">Total Revenue</p>
          <h2 className="font-extrabold text-3xl">$97,658</h2>
        </div>
        <div className="bg-card shadow p-6 rounded-xl text-center">
          <p className="mb-2 text-muted-foreground">Orders</p>
          <h2 className="font-extrabold text-3xl">12,457</h2>
        </div>
        <div className="bg-card shadow p-6 rounded-xl text-center">
          <p className="mb-2 text-muted-foreground">New Users</p>
          <h2 className="font-extrabold text-3xl">2,345</h2>
        </div>
      </section>

      {/* Inputs and selectors */}
      <section className="gap-6 grid grid-cols-1 md:grid-cols-3 mb-10">
        <div>
          <Label htmlFor="search">Search Product</Label>
          <Input id="search" placeholder="Type product name..." />
        </div>
        <div>
          <Label>Choose Option</Label>
          <Select value={selectedOption} onValueChange={setSelectedOption}>
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-4">
          <Checkbox
            id="active"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <Label htmlFor="active">Active Product</Label>
        </div>
      </section>

      <section className="gap-6 grid grid-cols-1 md:grid-cols-2 mb-10">
        <div>
          <Label>Date Picker</Label>
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
        <div className="flex items-center space-x-4">
          <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
          <Label>Feature Enabled</Label>
        </div>
      </section>

      {/* Textarea */}
      <section className="mb-10">
        <Label htmlFor="notes" className="block mb-2">
          Admin Notes
        </Label>
        <Textarea id="notes" placeholder="Write notes or messages here..." />
      </section>

      {/* Charts Grid */}
      <section className="gap-8 grid grid-cols-1 lg:grid-cols-3">
        <ChartContainer title="Area Chart - Sales & Profit">
          <AreaChart data={areaData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sales"
              stroke={COLORS[0]}
              fill={COLORS[0]}
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke={COLORS[1]}
              fill={COLORS[1]}
              fillOpacity={0.2}
            />
          </AreaChart>
        </ChartContainer>

        <ChartContainer title="Bar Chart - Inventory Stock">
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="stock" fill={COLORS[2]} />
          </BarChart>
        </ChartContainer>

        <ChartContainer title="Line Chart - Sales Over Time">
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke={COLORS[3]} />
          </LineChart>
        </ChartContainer>

        <ChartContainer title="Pie Chart - Sales by Category">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ChartContainer>

        <ChartContainer title="Radar Chart - Team Skills">
          <RadarChart outerRadius={90} data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Score"
              dataKey="A"
              stroke={COLORS[4]}
              fill={COLORS[4]}
              fillOpacity={0.6}
            />
            <Tooltip />
          </RadarChart>
        </ChartContainer>

        <ChartContainer title="Scatter Chart - Engagement">
          <ScatterChart>
            <CartesianGrid />
            <XAxis dataKey="x" name="X Value" />
            <YAxis dataKey="y" name="Y Value" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={scatterData} fill={COLORS[5]} />
          </ScatterChart>
        </ChartContainer>

        <ChartContainer title="Radial Bar Chart - User Metrics">
          <RadialBarChart
            innerRadius="10%"
            outerRadius="90%"
            data={radialBarData}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar minAngle={15} background dataKey="uv" />
            <Legend
              iconSize={10}
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
            />
            <Tooltip />
          </RadialBarChart>
        </ChartContainer>

        <ChartContainer title="Composed Chart - Traffic Breakdown">
          <ComposedChart data={composedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill={COLORS[0]}
              stroke={COLORS[0]}
            />
            <Bar dataKey="pv" barSize={20} fill={COLORS[1]} />
            <Line type="monotone" dataKey="uv" stroke={COLORS[2]} />
          </ComposedChart>
        </ChartContainer>
      </section>

      {/* Action Button */}
      <section className="mt-12 text-center">
        <Button onClick={() => alert("Dashboard refreshed!")}>
          Refresh Dashboard
        </Button>
      </section>
    </main>
  );
};

export default Dashboard;
