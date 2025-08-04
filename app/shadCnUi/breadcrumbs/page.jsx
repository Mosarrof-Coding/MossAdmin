"use client";

import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils"; // If you're using ShadCN's utils

const Breadcrumbs = () => {
  const baseStyle =
    "flex items-center gap-2 text-sm px-3 py-2 rounded-md transition-colors";
  const themeClasses = {
    primary: "bg-primary/10 text-primary",
    success: "bg-green-100 text-green-700",
    error: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-800",
    info: "bg-blue-100 text-blue-700",
    dark: "bg-gray-800 text-white",
  };

  const breadcrumbs = [
    { label: "Home", icon: <Home className="w-4 h-4" />, href: "/" },
    { label: "Components", href: "/components" },
    { label: "Breadcrumb", href: "/components/breadcrumb" },
  ];

  return (
    <div className="space-y-8 p-6">
      <h2 className="font-semibold text-2xl">Breadcrumbs</h2>

      {/* Default Breadcrumb */}
      <div className="flex items-center gap-2 text-muted-foreground">
        {breadcrumbs.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {index !== 0 && <ChevronRight className="w-4 h-4" />}
            {item.icon ? (
              <a
                href={item.href}
                className="flex items-center gap-1 hover:underline"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ) : (
              <a href={item.href} className="hover:underline">
                {item.label}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Colored Variants */}
      <div className="gap-4 grid grid-cols-2 sm:grid-cols-3">
        {Object.entries(themeClasses).map(([name, style]) => (
          <div key={name} className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            <div className={cn(baseStyle, style)}>
              {name.charAt(0).toUpperCase() + name.slice(1)} / Breadcrumb
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
