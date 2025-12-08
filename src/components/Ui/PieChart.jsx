import { ResponsivePie } from "@nivo/pie";

// If you pass 'data' props, use that, otherwise use default
export const PieChart = ({ data, colors }) => {
  const defaultData = [
    { id: "Land", label: "Land", value: 342, color: "#fca5a5" },
    { id: "Sea", label: "Sea", value: 120, color: "#60a5fa" },
    { id: "Air", label: "Air", value: 80, color: "#8b5cf6" },
  ];

  return (
    <div className="h-64 w-full">
      <ResponsivePie
        data={data || defaultData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        innerRadius={0.7} // Makes it a donut
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={colors ? { datum: "data.color" } : { scheme: 'nivo' }} 
        // If specific colors passed in data, use them
        enableArcLinkLabels={false}
        enableArcLabels={false} 
        // Central text logic usually requires a custom layer in Nivo, 
        // for simplicity we will just show the donut here.
      />
    </div>
  );
};