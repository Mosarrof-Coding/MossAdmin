"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  User,
  DollarSign,
  Clock,
  Inbox,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Monthly Revenue",
    value: "$21,452",
    icon: <DollarSign className="text-green-500" />,
    change: "+12.5%",
  },
  {
    title: "Active Users",
    value: "5,830",
    icon: <User className="text-blue-500" />,
    change: "+3.2%",
  },
  {
    title: "New Subscriptions",
    value: "743",
    icon: <Inbox className="text-purple-500" />,
    change: "+9.1%",
  },
  {
    title: "Avg. Response Time",
    value: "1.8h",
    icon: <Clock className="text-orange-500" />,
    change: "-5.7%",
  },
];

const chartData = [
  { name: "Jan", revenue: 4000, users: 2400 },
  { name: "Feb", revenue: 3000, users: 2210 },
  { name: "Mar", revenue: 5000, users: 2290 },
  { name: "Apr", revenue: 4780, users: 2000 },
  { name: "May", revenue: 5890, users: 2181 },
  { name: "Jun", revenue: 4390, users: 2500 },
  { name: "Jul", revenue: 6490, users: 3000 },
];

const subscriptions = [
  {
    plan: "Basic",
    price: "$29/month",
    users: "1,230",
    trend: "+4.2%",
  },
  {
    plan: "Pro",
    price: "$59/month",
    users: "2,875",
    trend: "+6.8%",
  },
  {
    plan: "Enterprise",
    price: "$149/month",
    users: "1,005",
    trend: "+2.1%",
  },
];

const schedule = [
  {
    title: "Onboarding Webinar",
    time: "Today • 4:00 PM",
    type: "Live Event",
  },
  {
    title: "Marketing Sync",
    time: "Tomorrow • 10:00 AM",
    type: "Internal",
  },
  {
    title: "Client Demo Call",
    time: "Friday • 1:00 PM",
    type: "Meeting",
  },
];

const recentActivity = [
  { action: "New user signed up", time: "2 minutes ago" },
  { action: "Payment received: $149", time: "10 minutes ago" },
  { action: "Subscription upgraded to Pro", time: "30 minutes ago" },
  { action: "Ticket closed by Support", time: "1 hour ago" },
];

const SassPage = () => {
  return (
    <div className="space-y-4 p-3 md:p-5">
      {/* Page Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 pb-4">
        <div>
          <h3 className="font-bold text-2xl">Sass</h3>
        </div>
        <div className="flex items-center gap-2">
          <Link href={"/"} className="text-xl">
            Home
          </Link>
          <ChevronRight size={18} />
          <h3 className="text-primary text-xl">Sass</h3>
        </div>
      </div>

      {/* Statistics */}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
              <CardTitle className="font-medium text-sm">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="font-bold text-2xl">{stat.value}</div>
              <p className="text-muted-foreground text-xs">
                {stat.change} this month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue & User Growth</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
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
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#4ade80" />
              <Line type="monotone" dataKey="users" stroke="#60a5fa" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Subscription Plans */}
      <div className="gap-4 grid grid-cols-1 md:grid-cols-3">
        {subscriptions.map((sub, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{sub.plan}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold text-xl">{sub.price}</p>
              <p className="text-muted-foreground text-sm">{sub.users} users</p>
              <p className="mt-1 text-green-500 text-xs">Trend: {sub.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upcoming Schedule & Recent Activity */}
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        {/* Upcoming Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {schedule.map((item, i) => (
                <li key={i} className="bg-muted p-3 border rounded-lg">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-muted-foreground text-sm">{item.time}</p>
                  <span className="text-blue-500 text-xs">{item.type}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recentActivity.map((item, i) => (
                <li
                  key={i}
                  className="flex justify-between py-1 border-b text-sm"
                >
                  <span>{item.action}</span>
                  <span className="text-muted-foreground text-xs">
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Support Tickets */}
      <Card>
        <CardHeader>
          <CardTitle>Open Support Tickets</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between pb-2 border-b">
            <span>#2311 – Login issues</span>
            <Button size="sm" variant="outline">
              View
            </Button>
          </div>
          <div className="flex justify-between pb-2 border-b">
            <span>#2308 – Billing error</span>
            <Button size="sm" variant="outline">
              View
            </Button>
          </div>
          <div className="flex justify-between">
            <span>#2305 – Feature request</span>
            <Button size="sm" variant="outline">
              View
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SassPage;
