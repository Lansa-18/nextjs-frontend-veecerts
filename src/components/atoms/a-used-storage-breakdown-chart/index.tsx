"use client";

import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartConfig = {
  videos: {
    label: "Videos",
    color: "hsl(var(--chart-1))",
  },
  images: {
    label: "Images",
    color: "hsl(var(--chart-2))",
  },
  documents: {
    label: "Documents",
    color: "hsl(var(--chart-4))",
  },
  audio: {
    label: "Audio",
    color: "hsl(var(--chart-5))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

interface Props {
  videos: number;
  images: number;
  documents: number;
  audio: number;
  other: number;
}

function UsedStorageChartBreakdown(props: Props) {
  const id = "pie-interactive";
  const chartData = React.useMemo(() => {
    return [
      { item: "videos", size: props.videos, fill: "var(--color-videos)" },
      { item: "images", size: props.images, fill: "var(--color-images)" },
      {
        item: "documents",
        size: props.documents,
        fill: "var(--color-documents)",
      },
      { item: "audio", size: props.audio, fill: "var(--color-audio)" },
      { item: "other", size: props.other, fill: "var(--color-other)" },
    ];
  }, [props]);
  const [activeItem, setActiveItem] = React.useState(chartData[0].item);

  const activeIndex = React.useMemo(
    () => chartData.findIndex((item) => item.item === activeItem),
    [chartData, activeItem],
  );
  const months = React.useMemo(
    () => chartData.map((item) => item.item),
    [chartData],
  );

  return (
    <Card data-chart={id} className="flex flex-col shadow-none">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardDescription>Storage Usage Breakdown</CardDescription>
        </div>
        <Select value={activeItem} onValueChange={setActiveItem}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {months.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig];

              if (!config) {
                return null;
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="size"
              nameKey="item"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
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
                          {(chartData[activeIndex].size / 1024).toFixed(2)}
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

export default UsedStorageChartBreakdown;
