"use client";

import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Flag, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const customers = [
  {
    flag: "🇺🇸",
    country: "USA",
    iso: "USA",
    customers: 2379,
    percentage: 79,
    color: "bg-primary",
  },
  {
    flag: "🇫🇷",
    country: "France",
    iso: "FRA",
    customers: 589,
    percentage: 23,
    color: "bg-pink-500",
  },
  {
    flag: "🇩🇪",
    country: "Germany",
    iso: "DEU",
    customers: 321,
    percentage: 11,
    color: "bg-yellow-500",
  },
];

export default function CustomersDemographic() {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <>
      <CardHeader className="flex items-center gap-3 m-0 pb-4">
        <Users className="text-primary" />
        <div>
          <CardTitle className="font-bold text-lg">
            Customers Demographic
          </CardTitle>
          <p className="text-muted-foreground text-sm">
            World map and customer count by country
          </p>
        </div>
      </CardHeader>

      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        <Card className="shadow-md mx-auto rounded-2xl w-full">
          <CardContent className="space-y-6">
            {/* 🌍 Interactive Map */}
            <div className="bg-background border rounded-lg overflow-hidden">
              <ComposableMap
                projection="geoEqualEarth"
                width={800}
                height={500}
                className="w-full h-auto"
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const iso = geo.properties.ISO_A3;
                      const match = customers.find((c) => c.iso === iso);
                      const isActive = !match;

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() => {
                            if (match) {
                              setHoveredCountry({
                                name: geo.properties.NAME,
                                ...match,
                              });
                            } else {
                              setHoveredCountry({
                                name: geo.properties.NAME,
                                customers: 100,
                                percentage: 30,
                              });
                            }
                          }}
                          onMouseLeave={() => setHoveredCountry(null)}
                          style={{
                            default: {
                              fill: isActive ? "#6366f1" : "#e5e7eb", // theme purple or muted
                              outline: "none",
                              stroke: "#fff",
                            },
                            hover: {
                              fill: isActive ? "#4338ca" : "#d1d5db",
                              outline: "none",
                            },
                            pressed: {
                              fill: "#2563eb",
                              outline: "none",
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
              </ComposableMap>
            </div>

            {/* Tooltip Panel */}
            {hoveredCountry && (
              <div className="space-y-2 bg-muted p-4 border rounded-lg">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-sm">{hoveredCountry.name}</h4>
                  <span className="text-muted-foreground text-sm">
                    {hoveredCountry.customers.toLocaleString()} Customers
                  </span>
                </div>
                <Progress
                  value={hoveredCountry.percentage}
                  indicatorClassName="bg-primary"
                  className="h-2"
                />
                <div className="text-muted-foreground text-sm text-right">
                  {hoveredCountry.percentage}%
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        {/* Country-wise summary below map */}
        <div className="space-y-4 shadow-md mx-auto p-6 border rounded-2xl w-full">
          <h3 className="font-bold text-popover-foreground text-xl">
            Top Countries
          </h3>
          {customers.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 font-medium">
                  <span className="text-xl">
                    <Flag />
                  </span>
                  <span>{item.country}</span>
                </div>
                <span className="text-muted-foreground text-sm">
                  {item.customers.toLocaleString()} Customers
                </span>
              </div>

              <Progress
                value={item.percentage}
                className="h-2"
                indicatorClassName={item.color}
              />
              <div className="text-muted-foreground text-sm text-right">
                {item.percentage}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
