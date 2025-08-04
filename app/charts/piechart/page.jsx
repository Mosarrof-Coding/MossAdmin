import ChartPieDonut from "@/components/charts/pieChart/ChartPieDonut";
import ChartPieInteractive from "@/components/charts/pieChart/ChartPieInteractive";
import ChartPieLabelCustom from "@/components/charts/pieChart/ChartPieLabelCustom";
import ChartPieStacked from "@/components/charts/pieChart/ChartPieStacked";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const PichartCustom = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center pb-8 text-sm">
        <h3 className="font-medium text-3xl">Charts</h3>
        <div className="flex items-center gap-1 text-lg">
          <Link href="/" className="">
            Home
          </Link>
          <ChevronRight className="inline-block mt-0.5" size={18} />
          <span className="font-semibold text-primary">Pie Charts</span>
        </div>
      </div>
      <div className="gap-4 lg:gap-6 grid grid-cols-1 lg:grid-cols-2">
        <ChartPieLabelCustom />
        <ChartPieDonut />
        <ChartPieInteractive />
        <ChartPieStacked />
      </div>
    </>
  );
};

export default PichartCustom;
