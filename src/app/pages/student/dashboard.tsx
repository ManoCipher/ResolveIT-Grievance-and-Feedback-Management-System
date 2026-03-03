import { FileText, Clock, CheckCircle, AlertCircle } from "lucide-react";

export function StudentDashboard() {
  const stats = [
    { label: "Total Grievances", value: "0", icon: FileText, color: "text-primary" },
    { label: "Pending", value: "0", icon: Clock, color: "text-secondary" },
    { label: "Resolved", value: "0", icon: CheckCircle, color: "text-primary" },
    { label: "Escalated", value: "0", icon: AlertCircle, color: "text-destructive" },
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
              </div>
              <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Grievances */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Recent Grievances</h3>
        <div className="text-center py-12">
          <FileText className="w-16 h-16 mx-auto mb-4 text-muted" />
          <p className="text-muted-foreground">No grievances submitted yet</p>
          <p className="text-sm text-muted-foreground mt-2">
            Your recent grievances will appear here
          </p>
        </div>
      </div>
    </div>
  );
}
