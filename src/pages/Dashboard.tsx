
import Card from "../components/Card";
import LineChartCard from "../components/charts/LineChartCard";
import BarChartCard from "../components/charts/BarChartCard";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Top Stats */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card title="Users" value="1,240" />
          <Card title="Sales" value="₹8,520" />
          <Card title="Revenue" value="₹21,300" />
          <Card title="Growth" value="14%" />
        </div>
      </div>

      {/* Charts Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Analytics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LineChartCard />
          <BarChartCard />
        </div>
      </div>
    </div>
  );
}








// import Card from "../components/Card";

// export default function Dashboard() {
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-6">Overview</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <Card title="Users" value="390" />
//         <Card title="Sales" value="₹80,000" />
//         <Card title="Revenue" value="₹1,90,000" />
//         <Card  title="Growth" value={<span className="text-green-600 font-semibold">14%</span>} />
//       </div>
//     </div>
//   )
// }
