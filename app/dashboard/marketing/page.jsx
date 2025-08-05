"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import MarketingStats from "@/components/orders/MarketingStats";

const campaignData = [
  { name: "Jan", clicks: 2400 },
  { name: "Feb", clicks: 8398 },
  { name: "Mar", clicks: 9800 },
  { name: "Apr", clicks: 3908 },
  { name: "May", clicks: 7800 },
  { name: "Jun", clicks: 3800 },
  { name: "July", clicks: 8100 },
  { name: "August", clicks: 2100 },
  { name: "September", clicks: 12000 },
  { name: "October", clicks: 15089 },
  { name: "November", clicks: 13090 },
  { name: "December", clicks: 9090 },
];

const MarketingPage = () => {
  return (
    <div className="space-y-4 p-3 md:p-5">
      <div>
        <h1 className="font-semibold text-xl tracking-tight">Marketing</h1>
        <p className="text-muted-foreground">
          Track your campaigns, engagement, and conversions.
        </p>
      </div>

      <Separator />
      <MarketingStats />
      {/* Campaign Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Campaign Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={campaignData}>
              <XAxis dataKey="name" stroke="#888888" />
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
              <Bar dataKey="clicks" fill="#4f46e5" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Top Channel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-lg">Email Marketing</p>
            <p className="text-muted-foreground text-sm">42% of total reach</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-lg">7.8%</p>
            <p className="text-muted-foreground text-sm">
              Compared to 6.5% last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversion Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold text-lg">83%</p>
            <p className="text-muted-foreground text-sm">
              Almost reached target
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Active Campaigns */}
      <div>
        <h2 className="font-semibold text-xl">Active Campaigns</h2>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Spring Sale</CardTitle>
              <Badge variant="default">Running</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Reach: 25K | Clicks: 8.2K
              </p>
              <p className="text-sm">Budget: $3,500 | ROI: 180%</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Referral Boost</CardTitle>
              <Badge variant="outline">Running</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Reach: 11K | Clicks: 3.1K
              </p>
              <p className="text-sm">Budget: $1,200 | ROI: 210%</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
