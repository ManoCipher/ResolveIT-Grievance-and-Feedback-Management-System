import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, TrendingDown, Clock, CheckCircle } from "lucide-react";

export function ReportsAnalytics() {
  const resolutionMetrics = [
    { label: "Avg. Resolution Time", value: "0 days", change: "0%", icon: Clock, trend: "neutral" },
    { label: "Resolution Rate", value: "0%", change: "0%", icon: CheckCircle, trend: "neutral" },
    { label: "First Response Time", value: "0 hrs", change: "0%", icon: TrendingUp, trend: "neutral" },
    { label: "Customer Satisfaction", value: "0/5", change: "0", icon: TrendingUp, trend: "neutral" },
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resolutionMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-8 h-8 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {metric.change}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-1">{metric.value}</h3>
              <p className="text-muted-foreground text-sm">{metric.label}</p>
            </div>
          );
        })}
      </div>

      {/* Monthly Trends */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-6">Monthly Trends</h3>
        <div className="text-center py-12">
          <TrendingUp className="w-16 h-16 mx-auto mb-4 text-muted" />
          <p className="text-muted-foreground">No trend data available</p>
          <p className="text-sm text-muted-foreground mt-2">
            Trends will be visible once data is collected
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Status Distribution */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-6">Status Distribution</h3>
          <div className="text-center py-12">
            <BarChart className="w-16 h-16 mx-auto mb-4 text-muted" />
            <p className="text-muted-foreground">No status data available</p>
          </div>
        </div>

        {/* Priority Distribution */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-6">Priority Distribution</h3>
          <div className="text-center py-12">
            <PieChart className="w-16 h-16 mx-auto mb-4 text-muted" />
            <p className="text-muted-foreground">No priority data available</p>
          </div>
        </div>
      </div>

      {/* Department Performance */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-6">Department Performance</h3>
        <div className="text-center py-12">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-muted" />
          <p className="text-muted-foreground">No department data available</p>
          <p className="text-sm text-muted-foreground mt-2">
            Performance metrics will be shown as departments handle grievances
          </p>
        </div>
      </div>
    </div>
  );
}
