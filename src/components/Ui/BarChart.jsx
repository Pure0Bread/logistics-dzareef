import { ResponsiveBar } from "@nivo/bar";

const data = [
  { month: "May", commission: 42000 },
  { month: "Jun", commission: 55000 },
  { month: "Jul", commission: 48000 },
  { month: "Aug", commission: 62000 },
  { month: "Sep", commission: 68000 },
  { month: "Oct", commission: 15000 },
];

export const BarChart = () => (
  <div className="h-64 w-full">
    <ResponsiveBar
      data={data}
      keys={["commission"]}
      indexBy="month"
      margin={{ top: 10, right: 10, bottom: 30, left: 40 }}
      padding={0.4}
      colors={["#8b5cf6"]} // Solid Purple
      borderRadius={2}
      enableLabel={false}
      axisLeft={{
         format: e => `${e / 1000}k` 
      }}
    />
  </div>
);