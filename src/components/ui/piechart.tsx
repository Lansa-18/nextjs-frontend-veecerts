import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: number[];
  labels: string[];
  colors: string[];
  height?: number;
  width?: number;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  labels,
  colors,
  height = 20,
  width = 20,
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "My Dataset",
        data,
        backgroundColor: colors,
            hoverOffset: 4,
      },
    ],
  };

    return (
        <div style={{ width: "60px", height: "60px" }}>
    <Doughnut data={chartData} height={height} width={width} />

        </div>
    )
};

export default DoughnutChart;
