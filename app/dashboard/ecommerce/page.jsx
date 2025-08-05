"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  // AreaChart
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import MonthlyTargetCard from "@/components/monthlyTargetCard/MonthlyTargetCard";
import RecentOrders from "@/components/orders/RecentOrders";
import {
  CalendarArrowDown,
  ChevronRight,
  ShieldCheck,
  TicketSlash,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

const monthlySales = [
  { month: "Jan", revenue: 12500 },
  { month: "Feb", revenue: 14200 },
  { month: "Mar", revenue: 17800 },
  { month: "Apr", revenue: 11000 },
  { month: "May", revenue: 20200 },
  { month: "Jun", revenue: 18500 },
];

const targetValue = 20000;
const currentValue = 16300;

const data = [
  { name: "Completed", value: currentValue },
  { name: "Remaining", value: targetValue - currentValue },
];

const COLORS = ["hsl(145, 60%, 45%)", "hsl(220, 10%, 80%)"];

const Ecommerce = () => {
  return (
    <div className="space-y-4 p-3 md:p-5">
      {/* Page Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 pb-4">
        <h3 className="font-bold text-2xl">E-Commerce</h3>
        <div className="flex items-center gap-2">
          <Link href={"/"} className="text-xl">
            Home
          </Link>
          <ChevronRight size={18} />
          <h3 className="text-primary text-xl">E-Commerce</h3>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
          <Card className="">
            <CardHeader>
              <ShieldCheck className="mb-6 size-20" />
              <CardTitle className="text-muted-foreground text-sm">
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-foreground text-2xl">$84,230</p>
              <p className="mt-1 text-muted-foreground text-xs">
                ↑ 15.2% this month
              </p>
            </CardContent>
          </Card>
          <Card className="">
            <CardHeader>
              <CalendarArrowDown className="mb-6 size-20" />
              <CardTitle className="text-muted-foreground text-sm">
                Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-foreground text-2xl">1,254</p>
              <p className="mt-1 text-muted-foreground text-xs">
                ↑ 6.4% new orders
              </p>
            </CardContent>
          </Card>
          <Card className="">
            <CardHeader>
              <UsersRound className="mb-6 size-20" />
              <CardTitle className="text-muted-foreground text-sm">
                Customers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-foreground text-2xl">872</p>
              <p className="mt-1 text-muted-foreground text-xs">
                ↑ 8.9% increase
              </p>
            </CardContent>
          </Card>
          <Card className="">
            <CardHeader>
              <TicketSlash className="mb-6 size-20" />
              <CardTitle className="text-muted-foreground text-sm">
                Refunds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-foreground text-2xl">$1,234</p>
              <p className="mt-1 text-muted-foreground text-xs">
                ↓ 2.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        {/* monethly target */}
        <MonthlyTargetCard />
      </div>
      {/* Sales Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="font-medium text-foreground text-lg">
            Monthly Revenue
          </CardTitle>
        </CardHeader>
        <CardContent className="h-70 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlySales}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(220, 60%, 45%)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(220, 60%, 45%)"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="hsl(220, 10%, 60%)" />
              <YAxis stroke="hsl(220, 10%, 60%)" />
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
                dataKey="revenue"
                stroke="hsl(220, 60%, 45%)"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* recent orders */}
      <RecentOrders />
    </div>
  );
};
export default Ecommerce;
