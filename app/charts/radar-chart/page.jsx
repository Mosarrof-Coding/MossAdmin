import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import RadarChartSimple from "@/components/charts/radarChart/Radar_chartBasic";
import RadarChartCustome from "@/components/charts/radarChart/RadarChartCustome";
import RadarChartLine from "@/components/charts/radarChart/RadarChartLine";
import RadarChartCircle from "@/components/charts/radarChart/RadarChartCircle";

const RadarC = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center pb-8 text-sm">
        <h3 className="font-medium text-3xl">Charts</h3>
        <div className="flex items-center gap-1 text-lg">
          <Link href="/" className="">
            Home
          </Link>
          <ChevronRight className="inline-block mt-0.5" size={18} />
          <span className="font-semibold text-primary">Radar Charts</span>
        </div>
      </div>

      <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
        <RadarChartSimple />
        <RadarChartLine />
        <RadarChartCustome />
        <RadarChartCircle />
      </div>
    </>
  );
};

export default RadarC;
