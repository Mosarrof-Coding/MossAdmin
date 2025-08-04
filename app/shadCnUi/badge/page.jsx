"use client";

import {
  CheckCircle,
  Info,
  AlertCircle,
  AlertTriangle,
  Sun,
  Moon,
} from "lucide-react";

const badgeStyles = {
  base: "inline-flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full border",
  variants: {
    primary: "text-primary border-primary bg-primary/10",
    success: "text-green-600 border-green-600 bg-green-100",
    error: "text-red-600 border-red-600 bg-red-100",
    warning: "text-yellow-600 border-yellow-600 bg-yellow-100",
    info: "text-blue-600 border-blue-600 bg-blue-100",
    light: "text-gray-600 border-gray-400 bg-gray-100",
    dark: "text-white border-gray-800 bg-gray-800",
  },
  solidVariants: {
    primary: "bg-primary text-white border-primary",
    success: "bg-green-600 text-white border-green-600",
    error: "bg-red-600 text-white border-red-600",
    warning: "bg-yellow-500 text-white border-yellow-500",
    info: "bg-blue-600 text-white border-blue-600",
    light: "bg-gray-200 text-gray-800 border-gray-200",
    dark: "bg-gray-900 text-white border-gray-900",
  },
};

const labels = [
  "Primary",
  "Success",
  "Error",
  "Warning",
  "Info",
  "Light",
  "Dark",
];
const icons = {
  Primary: <CheckCircle className="w-4 h-4" />,
  Success: <CheckCircle className="w-4 h-4" />,
  Error: <AlertCircle className="w-4 h-4" />,
  Warning: <AlertTriangle className="w-4 h-4" />,
  Info: <Info className="w-4 h-4" />,
  Light: <Sun className="w-4 h-4" />,
  Dark: <Moon className="w-4 h-4" />,
};

const Badge = () => {
  return (
    <div className="space-y-8 p-6">
      <h2 className="font-semibold text-2xl">Badges</h2>

      {/* With Light Background */}
      <div>
        <h3 className="mb-3 text-xl">With Light Background</h3>
        <div className="flex flex-wrap gap-2">
          {labels.map((label) => (
            <span
              key={label}
              className={`${badgeStyles.base} ${
                badgeStyles.variants[label.toLowerCase()]
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* With Solid Background */}
      <div>
        <h3 className="mb-3 text-xl">With Solid Background</h3>
        <div className="flex flex-wrap gap-2">
          {labels.map((label) => (
            <span
              key={label}
              className={`${badgeStyles.base} ${
                badgeStyles.solidVariants[label.toLowerCase()]
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Light Background with Left Icon */}
      <div>
        <h3 className="mb-3 text-xl">Light Background with Left Icon</h3>
        <div className="flex flex-wrap gap-2">
          {labels.map((label) => (
            <span
              key={label}
              className={`${badgeStyles.base} ${
                badgeStyles.variants[label.toLowerCase()]
              }`}
            >
              {icons[label]} {label}
            </span>
          ))}
        </div>
      </div>

      {/* Solid Background with Left Icon */}
      <div>
        <h3 className="mb-3 text-xl">Solid Background with Left Icon</h3>
        <div className="flex flex-wrap gap-2">
          {labels.map((label) => (
            <span
              key={label}
              className={`${badgeStyles.base} ${
                badgeStyles.solidVariants[label.toLowerCase()]
              }`}
            >
              {icons[label]} {label}
            </span>
          ))}
        </div>
      </div>

      {/* Light Background with Right Icon */}
      <div>
        <h3 className="mb-3 text-xl">Light Background with Right Icon</h3>
        <div className="flex flex-wrap gap-2">
          {labels.map((label) => (
            <span
              key={label}
              className={`${badgeStyles.base} ${
                badgeStyles.variants[label.toLowerCase()]
              }`}
            >
              {label} {icons[label]}
            </span>
          ))}
        </div>
      </div>

      {/* Solid Background with Right Icon */}
      <div>
        <h3 className="mb-3 text-xl">Solid Background with Right Icon</h3>
        <div className="flex flex-wrap gap-2">
          {labels.map((label) => (
            <span
              key={label}
              className={`${badgeStyles.base} ${
                badgeStyles.solidVariants[label.toLowerCase()]
              }`}
            >
              {label} {icons[label]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Badge;
