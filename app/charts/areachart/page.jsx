import Area_Chart from "@/components/charts/areaChart/Area_Chart";
import AreaChartGradient from "@/components/charts/areaChart/AreaChartGradient";
import StackedAreaChart from "@/components/charts/areaChart/StackedAreaChart";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Area_ChartPage = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center pb-8 text-sm">
        <h3 className="font-medium text-3xl">Charts</h3>
        <div className="flex items-center gap-1 text-lg">
          <Link href="/" className="">
            Home
          </Link>
          <ChevronRight className="inline-block mt-0.5" size={18} />
          <span className="font-semibold text-primary">Area Chart</span>
        </div>
      </div>

      <div className="gap-6 grid">
        <Area_Chart />
        <AreaChartGradient />
        <StackedAreaChart />
      </div>
    </>
  );
};

export default Area_ChartPage;
