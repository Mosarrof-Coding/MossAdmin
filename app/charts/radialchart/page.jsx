import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ChartRadial from "@/components/charts/radialChart/ChartRadial";
import ChartRadialLabel from "@/components/charts/radialChart/ChartRadialLabel";
import ShapRadial from "@/components/charts/radialChart/ShapRadial";
import StackedRadial from "@/components/charts/radialChart/StackedRadial";

const RadialChartHome = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center pb-8 text-sm">
        <h3 className="font-medium text-3xl">Charts</h3>
        <div className="flex items-center gap-1 text-lg">
          <Link href="/" className="">
            Home
          </Link>
          <ChevronRight className="inline-block mt-0.5" size={18} />
          <span className="font-semibold text-primary">Radial Charts</span>
        </div>
      </div>
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        <ChartRadial />
        <ChartRadialLabel />
        <ShapRadial />
        <StackedRadial />
      </div>
    </>
  );
};

export default RadialChartHome;
