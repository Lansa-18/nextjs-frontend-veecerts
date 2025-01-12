import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  used: {
    label: "Used",
    color: "hsl(var(--chart-1))",
  },
  free: {
    label: "Free",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface Props {
  free: number;
  used: number;
}

function UsedStorageChart({ free, used }: Props) {
  const chartData = React.useMemo(
    () => [
      { variant: "used", size: used, fill: "var(--color-used)" },
      { variant: "free", size: free, fill: "var(--color-free)" },
    ],
    [free, used],
  );

  const totalStorage = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.size, 0);
  }, [chartData]);

  return (
    <Card className="flex shadow-none flex-col">
      <CardHeader className="items-center pb-0">
        <CardDescription>Storage Usage Summary</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="size"
              nameKey="variant"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {(totalStorage / 1024).toFixed(2)}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          GB
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default UsedStorageChart;
