import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ChartLineDefault from "@/components/charts/lineChart/ChartLineDefault";
import ChartLineStep from "@/components/charts/lineChart/ChartLineStep";
import LineChartMultile from "@/components/charts/lineChart/LineChartMultile";
import { ChartLineDotsCustom } from "@/components/charts/lineChart/LineDots";

const SimpleLinechart = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center pb-8 text-sm">
        <h3 className="font-medium text-3xl">Charts</h3>
        <div className="flex items-center gap-1 text-lg">
          <Link href="/" className="">
            Home
          </Link>
          <ChevronRight className="inline-block mt-0.5" size={18} />
          <span className="font-semibold text-primary">Line Charts</span>
        </div>
      </div>

      <div className="gap-6 md:gap-4 xl:gap-6 grid grid-cols-1 lg:grid-cols-2">
        <LineChartMultile />
        <ChartLineDefault />
        <ChartLineStep />
        <ChartLineDotsCustom />
      </div>
    </>
  );
};

export default SimpleLinechart;
