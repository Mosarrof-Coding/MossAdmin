import BarChartCustom from "@/components/charts/barChart/BarChartCustom";
import BarChartNegative from "@/components/charts/barChart/barChartNegative";
import ChartBarInteractive from "@/components/charts/barChart/ChartBarInteractive";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Barchart = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center pb-8 text-sm">
        <h3 className="font-medium text-3xl">Charts</h3>
        <div className="flex items-center gap-1 text-lg">
          <Link href="/" className="">
            Home
          </Link>
          <ChevronRight className="inline-block mt-0.5" size={18} />
          <span className="font-semibold text-primary">Bar Chart</span>
        </div>
      </div>

      <div className="gap-6 grid">
        <ChartBarInteractive />
        <BarChartCustom />
        <BarChartNegative />
      </div>
    </>
  );
};

export default Barchart;
