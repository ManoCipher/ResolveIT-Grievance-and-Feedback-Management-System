import { AlertCircle, Clock, CheckCircle, FileText } from "lucide-react";

export function ResolverDashboard() {
  const stats = [
    { label: "Assigned to Me", value: "0", icon: FileText, color: "text-primary" },
    { label: "In Progress", value: "0", icon: Clock, color: "text-secondary" },
    { label: "Resolved This Week", value: "0", icon: CheckCircle, color: "text-primary" },
    { label: "High Priority", value: "0", icon: AlertCircle, color: "text-destructive" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Welcome, Department Authority</h2>
        <p className="text-muted-foreground">Grievance Resolver Portal</p>
      </div>

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

      {/* Assigned Grievances */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">My Assigned Grievances</h3>
        </div>
        <div className="text-center py-12">
          <FileText className="w-16 h-16 mx-auto mb-4 text-muted" />
          <p className="text-muted-foreground">No grievances assigned yet</p>
          <p className="text-sm text-muted-foreground mt-2">
            Assigned grievances will appear here
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Priority Actions</h3>
          <div className="text-center py-8">
            <AlertCircle className="w-12 h-12 mx-auto mb-4 text-muted" />
            <p className="text-sm text-muted-foreground">No priority actions</p>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Performance Summary</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Resolution Rate</span>
                <span className="font-semibold">0%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "0%" }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Avg. Response Time</span>
                <span className="font-semibold">0 hours</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "0%" }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Student Satisfaction</span>
                <span className="font-semibold">0/5</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "0%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
