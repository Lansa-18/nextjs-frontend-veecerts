import PieChart from "@/components/ui/piechart";
import React from "react";

interface CardProps {
  title?: string;
  count?: number;
  colors: string[];
  data: number[];
  labels?: string[];
}

const ChartCard: React.FC<CardProps> = ({
  title,
  count,
  colors,
  data,
  labels,
}) => {
  return (
    <div className="bg-white w-[207px] h-[110px] rounded-2xl px-6 py-5 ">
      <div className="flex grid grid-cols-2 gap-5">
        <div className="flex flex-col space-y-2">
          <span className='text-slate-500 font-normal'>{title}</span>
          <span className='font-semibold text-2xl'>{count}</span>
        </div>
        <div>
          <PieChart
            data={data}
            labels={labels}
            colors={colors}
            height={20}
            width={20}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
