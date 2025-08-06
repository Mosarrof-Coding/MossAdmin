"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
} from "recharts";
import {
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Filter,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const pieColors = ["#4ade80", "#facc15", "#60a5fa", "#f87171"];

const crmData = {
  insights: {
    clients: 2480,
    newLeads: 187,
    tasks: 35,
    rating: 7.8,
  },
  conversions: [
    { month: "Jan", conversion: 22 },
    { month: "Feb", conversion: 30 },
    { month: "Mar", conversion: 45 },
    { month: "Apr", conversion: 38 },
    { month: "May", conversion: 50 },
  ],
  pieSales: [
    { name: "Retail", value: 45 },
    { name: "Wholesale", value: 25 },
    { name: "Online", value: 20 },
    { name: "Other", value: 10 },
  ],
  schedule: [
    { id: 1, title: "Client Meeting - John Doe", date: "2025-07-23 10:00 AM" },
    { id: 2, title: "Proposal Review", date: "2025-07-24 2:00 PM" },
    { id: 3, title: "Sales Team Call", date: "2025-07-25 11:00 AM" },
  ],
  recentOrders: [
    {
      id: "ORD001",
      product: "Product A",
      category: "Retail",
      price: "$120.00",
      status: "Delivered",
      action: "Delete",
    },
    {
      id: "ORD002",
      product: "Product B",
      category: "Wholesale",
      price: "$2,300.00",
      status: "Processing",
      action: "Delete",
    },
    {
      id: "ORD003",
      product: "Product C",
      category: "Online",
      price: "$560.00",
      status: "Cancelled",
      action: "Delete",
    },
    {
      id: "ORD004",
      product: "Product D",
      category: "Retail",
      price: "$780.00",
      status: "Delivered",
      action: "Delete",
    },
  ],
};

const statusColors = {
  Delivered: "bg-green-100 text-green-800",
  Processing: "bg-yellow-100 text-yellow-800",
  Cancelled: "bg-red-100 text-red-800",
};

const CRMPage = () => {
  const [filter, setFilter] = useState("All");
  // Filter recent orders by category
  const filteredOrders =
    filter === "All"
      ? crmData.recentOrders
      : crmData.recentOrders.filter((order) => order.category === filter);

  return (
    <div className="flex flex-col gap-4 px-4 py-6 md:py-12">
      {/* Page Header */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h3 className="font-bold text-2xl md:text-3xl">CRM</h3>
          <Badge variant="outline">Updated:{new Date().toLocaleString()}</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Link href={"/"} className="text-lg">
            Home
          </Link>
          <ChevronRight size={18} />
          <h3 className="text-primary text-lg">Crm</h3>
        </div>
      </div>

      {/* Statistics */}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Clients</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <p className="font-semibold text-2xl">{crmData.insights.clients}</p>
            <span className="flex items-center gap-1 text-green-600 text-sm">
              +15% <ArrowUpRight className="w-4 h-4" />
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>New Leads</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <p className="font-semibold text-2xl">
              {crmData.insights.newLeads}
            </p>
            <span className="flex items-center gap-1 text-blue-600 text-sm">
              +8% <ArrowUpRight className="w-4 h-4" />
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <p className="font-semibold text-2xl">{crmData.insights.tasks}</p>
            <span className="flex items-center gap-1 text-yellow-600 text-sm">
              -5% <ArrowDownRight className="w-4 h-4" />
            </span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Avg. Rating</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <p className="font-semibold text-2xl">
              {crmData.insights.rating}/10
            </p>
            <span className="flex items-center gap-1 text-green-600 text-sm">
              +20% <ArrowUpRight className="w-4 h-4" />
            </span>
          </CardContent>
        </Card>
      </div>

      {/* Estimated Revenue */}
      <Card>
        <CardHeader>
          <CardTitle>Estimated Revenue</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={crmData.conversions}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
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
                dataKey="conversion"
                stroke="#4f46e5"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Sales Category */}
      <Card>
        <CardHeader>
          <CardTitle>Sales Category</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div style={{ width: 260, height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={crmData.pieSales}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {crmData.pieSales.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={pieColors[index % pieColors.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <Separator className="my-4" />
          <div className="gap-4 grid grid-cols-2 w-full text-muted-foreground text-sm">
            {crmData.pieSales.map((cat, i) => (
              <div key={i} className="text-center">
                <p>{cat.name}</p>
                <p className="font-semibold text-lg">{cat.value}%</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="divide-y divide-border">
            {crmData.schedule.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 hover:bg-accent px-2 py-2 rounded-md text-sm cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-muted-foreground">{item.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Recent Orders */}
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>Recent Orders</CardTitle>
          <div className="flex items-center gap-2">
            <select
              className="bg-background px-3 py-1 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary text-sm cursor-pointer"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>All</option>
              <option>Retail</option>
              <option>Wholesale</option>
              <option>Online</option>
            </select>
            <button className="bg-primary hover:bg-primary/90 px-3 py-1 rounded text-primary-foreground transition">
              See All
            </button>
          </div>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="border border-border w-full text-sm border-collapse">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="px-3 py-2 border border-border text-left">
                  Order ID
                </th>
                <th className="px-3 py-2 border border-border text-left">
                  Product
                </th>
                <th className="px-3 py-2 border border-border text-left">
                  Category
                </th>
                <th className="px-3 py-2 border border-border text-left">
                  Price
                </th>
                <th className="px-3 py-2 border border-border text-left">
                  Status
                </th>
                <th className="px-3 py-2 border border-border text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="">
                  <td className="px-3 py-2 border border-border">{order.id}</td>
                  <td className="px-3 py-2 border border-border">
                    {order.product}
                  </td>
                  <td className="px-3 py-2 border border-border">
                    {order.category}
                  </td>
                  <td className="px-3 py-2 border border-border">
                    {order.price}
                  </td>
                  <td className="px-3 py-2 border border-border">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                        statusColors[order.status] ||
                        "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-3 py-2 border border-border">
                    <span
                      className={`inline-block px-4 py-1 rounded text-xs font-semibold bg-destructive text-background active:opacity-80 cursor-pointer`}
                    >
                      {order.action}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredOrders.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="p-4 text-muted-foreground text-center"
                  >
                    No orders found.
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

export default CRMPage;
