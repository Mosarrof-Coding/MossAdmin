"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  TrendingDown,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const stockSummary = [
  {
    title: "Total Portfolio Value",
    value: "$152,340",
    change: "+5.2%",
    up: true,
  },
  { title: "Daily Change", value: "+$1,250", change: "+0.8%", up: true },
  { title: "Monthly Change", value: "+$5,600", change: "+3.8%", up: true },
  { title: "Annual Change", value: "-$1,200", change: "-0.9%", up: false },
];

const stockPriceData = [
  { date: "01 Jul", price: 320 },
  { date: "02 Jul", price: 330 },
  { date: "03 Jul", price: 315 },
  { date: "04 Jul", price: 340 },
  { date: "05 Jul", price: 360 },
  { date: "06 Jul", price: 355 },
  { date: "07 Jul", price: 370 },
];

const portfolioAllocation = [
  { name: "Tech", value: 45 },
  { name: "Finance", value: 25 },
  { name: "Healthcare", value: 15 },
  { name: "Energy", value: 10 },
  { name: "Other", value: 5 },
];

const topGainers = [
  { symbol: "AAPL", name: "Apple Inc.", change: "+3.5%" },
  { symbol: "TSLA", name: "Tesla Inc.", change: "+2.8%" },
  { symbol: "NVDA", name: "NVIDIA Corp.", change: "+2.1%" },
];

const topLosers = [
  { symbol: "FB", name: "Meta Platforms", change: "-1.5%" },
  { symbol: "BA", name: "Boeing Co.", change: "-2.3%" },
  { symbol: "NFLX", name: "Netflix Inc.", change: "-1.8%" },
];

const transactions = [
  {
    id: "TX001",
    stock: "AAPL",
    type: "Buy",
    shares: 10,
    price: "$145",
    date: "2025-07-19",
  },
  {
    id: "TX002",
    stock: "TSLA",
    type: "Sell",
    shares: 5,
    price: "$710",
    date: "2025-07-18",
  },
  {
    id: "TX003",
    stock: "NVDA",
    type: "Buy",
    shares: 8,
    price: "$198",
    date: "2025-07-17",
  },
  {
    id: "TX004",
    stock: "FB",
    type: "Sell",
    shares: 12,
    price: "$320",
    date: "2025-07-16",
  },
];

const COLORS = ["#4ade80", "#60a5fa", "#facc15", "#f87171", "#a78bfa"];

const StocksPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredTxns =
    filter === "All"
      ? transactions
      : transactions.filter((txn) => txn.type === filter);

  return (
    <div className="flex flex-col gap-6 md:gap-8 px-4 py-6 md:py-12">
      {/* Page Header */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h3 className="font-semibold text-primary text-2xl md:text-3xl">
            Stocks
          </h3>
          <Badge variant="outline">Updated:{new Date().toLocaleString()}</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Link href={"/"} className="font-bold text-lg">
            Home
          </Link>
          <ChevronRight size={18} />
          <h3 className="text-primary text-lg">Stocks</h3>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stockSummary.map(({ title, value, change, up }, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p className="font-semibold text-2xl">{value}</p>
              <span
                className={`flex items-center gap-1 text-sm ${
                  up ? "text-green-600" : "text-red-600"
                }`}
              >
                {change}{" "}
                {up ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Stock Price Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Stock Price (Last 7 days)</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={stockPriceData}>
              <XAxis dataKey="date" />
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
              <Line
                type="monotone"
                dataKey="price"
                stroke="#4f46e5"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Portfolio Allocation & Top Gainers/Losers */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
        {/* Portfolio Allocation */}
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Allocation</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div style={{ width: 260, height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioAllocation}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >
                    {portfolioAllocation.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="gap-4 grid grid-cols-2 mt-4 w-full text-muted-foreground text-sm">
              {portfolioAllocation.map((cat, idx) => (
                <div key={idx} className="text-center">
                  <p>{cat.name}</p>
                  <p className="font-semibold">{cat.value}%</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Gainers */}
        <Card>
          <CardHeader>
            <CardTitle>Top Gainers</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-border">
              {topGainers.map(({ symbol, name, change }) => (
                <li
                  key={symbol}
                  className="flex justify-between items-center py-2"
                >
                  <div>
                    <p className="font-semibold">{symbol}</p>
                    <p className="text-muted-foreground text-sm">{name}</p>
                  </div>
                  <Badge
                    variant="default"
                    className="bg-green-100 text-green-600"
                  >
                    {change}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Top Losers */}
        <Card>
          <CardHeader>
            <CardTitle>Top Losers</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-border">
              {topLosers.map(({ symbol, name, change }) => (
                <li
                  key={symbol}
                  className="flex justify-between items-center py-2"
                >
                  <div>
                    <p className="font-semibold">{symbol}</p>
                    <p className="text-muted-foreground text-sm">{name}</p>
                  </div>
                  <Badge variant="default" className="bg-red-100 text-red-600">
                    {change}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Recent Transactions</CardTitle>
          <div className="flex items-center gap-2">
            <select
              className="bg-background px-3 py-1 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm cursor-pointer"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Buy">Buy</option>
              <option value="Sell">Sell</option>
            </select>
            <Button variant="primary">See All</Button>
          </div>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="border border-border w-full text-sm border-collapse">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="px-3 py-2 border border-border text-left">ID</th>
                <th className="px-3 py-2 border border-border text-left">
                  Stock
                </th>
                <th className="px-3 py-2 border border-border text-left">
                  Type
                </th>
                <th className="px-3 py-2 border border-border text-left">
                  Shares
                </th>
                <th className="px-3 py-2 border border-border text-left">
                  Price
                </th>
                <th className="px-3 py-2 border border-border text-left">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTxns.map(({ id, stock, type, shares, price, date }) => (
                <tr key={id} className="hover:bg-accent">
                  <td className="px-3 py-2 border border-border">{id}</td>
                  <td className="px-3 py-2 border border-border">{stock}</td>
                  <td className="px-3 py-2 border border-border">{type}</td>
                  <td className="px-3 py-2 border border-border">{shares}</td>
                  <td className="px-3 py-2 border border-border">{price}</td>
                  <td className="px-3 py-2 border border-border">{date}</td>
                </tr>
              ))}
              {filteredTxns.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="p-4 text-muted-foreground text-center"
                  >
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default StocksPage;
