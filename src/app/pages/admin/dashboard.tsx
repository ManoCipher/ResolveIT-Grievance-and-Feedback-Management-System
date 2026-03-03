import { FileText, AlertCircle, TrendingUp, Clock } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export function AdminDashboard() {
  const stats = [
    { label: "Total Grievances", value: "0", change: "0%", icon: FileText, color: "text-primary" },
    { label: "Active Cases", value: "0", change: "0%", icon: Clock, color: "text-secondary" },
    { label: "Resolved Today", value: "0", change: "0%", icon: TrendingUp, color: "text-primary" },
    { label: "Critical", value: "0", change: "0%", icon: AlertCircle, color: "text-destructive" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 ${stat.color}`} />
                <span className="text-sm text-muted-foreground">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Grievance Trends Chart */}
        <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-6">Grievance Trends</h3>
          <div className="text-center py-12">
            <TrendingUp className="w-16 h-16 mx-auto mb-4 text-muted" />
            <p className="text-muted-foreground">No data available yet</p>
            <p className="text-sm text-muted-foreground mt-2">
              Trends will appear as grievances are submitted
            </p>
          </div>
        </div>

        {/* AI Insights Panel */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4">AI Insights</h3>
          <div className="text-center py-12">
            <AlertCircle className="w-12 h-12 mx-auto mb-4 text-muted" />
            <p className="text-sm text-muted-foreground">No insights available</p>
          </div>
        </div>
      </div>

      {/* Category Distribution */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-6">Grievances by Category</h3>
        <div className="text-center py-12">
          <BarChart className="w-16 h-16 mx-auto mb-4 text-muted" />
          <p className="text-muted-foreground">No category data available</p>
          <p className="text-sm text-muted-foreground mt-2">
            Distribution will be shown once grievances are categorized
          </p>
        </div>
      </div>
    </div>
  );
}
