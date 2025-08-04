"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  ComposedChart,
  ScatterChart,
  Scatter,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
import RecentOrders from "@/components/orders/RecentOrders";
import { BadgeDollarSign, CalendarArrowDown, Users } from "lucide-react";
import StackedRadial from "@/components/charts/radialChart/StackedRadial";
import MetricsOverview from "@/components/MetricsOverview";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#14b8a6",
  "#f43f5e",
];

const areaData = [
  { name: "Jan", sales: 2400, profit: 1200 },
  { name: "Feb", sales: 1398, profit: 1100 },
  { name: "Mar", sales: 9800, profit: 4300 },
  { name: "Apr", sales: 3908, profit: 2000 },
  { name: "May", sales: 4800, profit: 2500 },
  { name: "Jun", sales: 3800, profit: 2100 },
  { name: "Jul", sales: 4300, profit: 2400 },
];

const radarData = [
  { subject: "Design", A: 120, fullMark: 150 },
  { subject: "UX", A: 98, fullMark: 150 },
  { subject: "Dev", A: 86, fullMark: 150 },
  { subject: "SEO", A: 99, fullMark: 150 },
  { subject: "Marketing", A: 85, fullMark: 150 },
];

const pieData = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 300 },
  { name: "Home Goods", value: 300 },
  { name: "Other", value: 200 },
];

const barData = [
  { name: "Shoes", stock: 800 },
  { name: "Bags", stock: 456 },
  { name: "Watches", stock: 424 },
  { name: "Jackets", stock: 300 },
  { name: "Skirts", stock: 500 },
  { name: "Bat", stock: 120 },
  { name: "Ball", stock: 720 },
  { name: "Mouse", stock: 228 },
  { name: "Laptop", stock: 622 },
];

const composedData = [
  { name: "Page A", uv: 590, pv: 800, amt: 1400 },
  { name: "Page B", uv: 868, pv: 967, amt: 1506 },
  { name: "Page C", uv: 1397, pv: 1098, amt: 989 },
  { name: "Page D", uv: 1480, pv: 1200, amt: 1228 },
];

const radialBarData = [
  { name: "Users", uv: 31.47, fill: "#8884d8" },
  { name: "Sessions", uv: 26.69, fill: "#82ca9d" },
  { name: "Bounce", uv: 15.69, fill: "#ffc658" },
  { name: "New", uv: 8.22, fill: "#ff8042" },
];

const scatterData = [
  { x: 100, y: 200 },
  { x: 120, y: 100 },
  { x: 170, y: 300 },
  { x: 140, y: 250 },
];

const Home = () => {
  const [date, setDate] = useState(new Date());

  return (
    <main className="p-6 space-y-12">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card p-4 rounded-xl shadow flex flex-col gap-4">
          <BadgeDollarSign size={28} className="inline-block" />
          <p className="text-muted-foreground">Total Revenue</p>
          <h2 className="text-2xl font-bold">$9,758</h2>
        </div>
        <div className="bg-card p-4 rounded-xl shadow flex flex-col gap-4">
          <CalendarArrowDown size={28} className="inline-block" />
          <p className="text-muted-foreground">Orders</p>
          <h2 className="text-2xl font-bold">1,245</h2>
        </div>
        <div className="bg-card p-4 rounded-xl shadow flex flex-col gap-4">
          <Users size={28} className="inline-block" />
          <p className="text-muted-foreground">Customers</p>
          <h2 className="text-2xl font-bold">372</h2>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <StackedRadial />
        <MetricsOverview />
      </div>
      <RecentOrders />
      {/* Area Chart - Sales & Profit */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h4 className="text-xl font-semibold my-4">Monthly Sales & Profit</h4>
          <ChartWrapper title="">
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                wrapperStyle={{ borderRadius: "0.75rem" }}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  borderRadius: "0.75rem",
                  padding: "0.75rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                labelStyle={{
                  color: "var(--muted-foreground)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
                itemStyle={{
                  color: "var(--primary)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
              />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#4f46e5"
                fillOpacity={1}
                fill="url(#colorSales)"
              />
              <Area
                type="monotone"
                dataKey="profit"
                stroke="#f97316"
                fillOpacity={1}
                fill="url(#colorProfit)"
              />
            </AreaChart>
          </ChartWrapper>
        </div>
        {/* RadarChart */}
        <div>
          <h4 className="text-xl font-semibold my-4">Team Performance</h4>
          <ChartWrapper title="">
            <RadarChart outerRadius={90} data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Score"
                dataKey="A"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={0.6}
              />
              <Tooltip
                wrapperStyle={{ borderRadius: "0.75rem" }}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  borderRadius: "0.75rem",
                  padding: "0.75rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                labelStyle={{
                  color: "var(--muted-foreground)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
                itemStyle={{
                  color: "var(--primary)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
              />
            </RadarChart>
          </ChartWrapper>
        </div>
        {/* PieChart */}
        <div>
          <h4 className="text-xl font-semibold my-4">Sales by Category</h4>
          <ChartWrapper title="">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                wrapperStyle={{ borderRadius: "0.75rem" }}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  borderRadius: "0.75rem",
                  padding: "0.75rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                labelStyle={{
                  color: "var(--muted-foreground)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
                itemStyle={{
                  color: "var(--primary)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
              />
            </PieChart>
          </ChartWrapper>
        </div>
        {/* BarChart */}
        <div>
          <h4 className="text-xl font-semibold my-4">Inventory Stock</h4>
          <ChartWrapper title="">
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                wrapperStyle={{ borderRadius: "0.75rem" }}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  borderRadius: "0.75rem",
                  padding: "0.75rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                labelStyle={{
                  color: "var(--muted-foreground)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
                itemStyle={{
                  color: "var(--primary)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
              />
              <Bar dataKey="stock" fill="#10b981" />
            </BarChart>
          </ChartWrapper>
        </div>
        {/* LineChart */}
        <div>
          <h4 className="text-xl font-semibold my-4">User Growth</h4>
          <ChartWrapper title="">
            <LineChart data={areaData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                wrapperStyle={{ borderRadius: "0.75rem" }}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  borderRadius: "0.75rem",
                  padding: "0.75rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                labelStyle={{
                  color: "var(--muted-foreground)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
                itemStyle={{
                  color: "var(--primary)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
              />
              <Line type="monotone" dataKey="sales" stroke="#ef4444" />
            </LineChart>
          </ChartWrapper>
        </div>
        {/* ComposedChart */}
        <div>
          <h4 className="text-xl font-semibold my-4">Traffic Breakdown</h4>
          <ChartWrapper title="">
            <ComposedChart data={composedData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                wrapperStyle={{ borderRadius: "0.75rem" }}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  borderRadius: "0.75rem",
                  padding: "0.75rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                labelStyle={{
                  color: "var(--muted-foreground)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
                itemStyle={{
                  color: "var(--primary)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
              />
              <Area
                type="monotone"
                dataKey="amt"
                fill="#d946ef"
                stroke="#d946ef"
              />
              <Bar dataKey="pv" barSize={20} fill="#3b82f6" />
              <Line type="monotone" dataKey="uv" stroke="#16a34a" />
            </ComposedChart>
          </ChartWrapper>
        </div>
        {/* ScatterChart */}
        <div>
          <h4 className="text-xl font-semibold my-4">Engagement Scatter</h4>
          <ChartWrapper title="">
            <ScatterChart>
              <XAxis dataKey="x" />
              <YAxis dataKey="y" />
              <Tooltip
                wrapperStyle={{ borderRadius: "0.75rem" }}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  borderRadius: "0.75rem",
                  padding: "0.75rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                labelStyle={{
                  color: "var(--muted-foreground)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
                itemStyle={{
                  color: "var(--primary)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
              />
              <Scatter data={scatterData} fill="#f59e0b" />
            </ScatterChart>
          </ChartWrapper>
        </div>
        {/* RadialBarChart */}
        <div>
          <h4 className="text-xl font-semibold my-4">User Metrics</h4>
          <ChartWrapper title="">
            <RadialBarChart
              innerRadius="10%"
              outerRadius="90%"
              data={radialBarData}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar
                minAngle={15}
                background
                label={{ fill: "#fff", position: "insideStart" }}
                dataKey="uv"
              />
              <Legend
                iconSize={10}
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
              />
              <Tooltip
                wrapperStyle={{ borderRadius: "0.75rem" }}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  borderRadius: "0.75rem",
                  padding: "0.75rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                labelStyle={{
                  color: "var(--muted-foreground)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
                itemStyle={{
                  color: "var(--primary)",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                }}
              />
            </RadialBarChart>
          </ChartWrapper>
        </div>
      </div>
    </main>
  );
};

const ChartWrapper = ({ title, children }) => (
  <section className="bg-card p-4 rounded-xl shadow w-full h-[300px]">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <ResponsiveContainer width="100%" height="100%">
      {children}
    </ResponsiveContainer>
  </section>
);

export default Home;
