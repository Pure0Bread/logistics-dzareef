import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "Enquiries",
    data: [
      { x: "May", y: 9 }, { x: "Jun", y: 11 }, { x: "Jul", y: 10 },
      { x: "Aug", y: 14 }, { x: "Sep", y: 12 }, { x: "Oct", y: 3 },
    ],
  },
  {
    id: "Converted",
    data: [
      { x: "May", y: 18 }, { x: "Jun", y: 22 }, { x: "Jul", y: 19 },
      { x: "Aug", y: 26 }, { x: "Sep", y: 24 }, { x: "Oct", y: 8 },
    ],
  },
];

export const LineChart = () => (
  <div className="h-64 w-full">
    <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 20, bottom: 30, left: 30 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", min: 0, max: "auto" }}
      curve="cardinal"
      axisTop={null}
      axisRight={null}
      enableGridX={true}
      enableGridY={true}
      colors={["#a78bfa", "#fca5a5"]} // Purple and Red/Orange
      enableArea={true} // Makes it an area chart
      areaOpacity={0.15}
      enablePoints={true}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      useMesh={true}
      enableSlices="x"
    />
  </div>
);