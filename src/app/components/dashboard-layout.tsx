import { Outlet, useLocation, Link } from "react-router";
import { 
  LayoutDashboard, 
  FileText, 
  Search, 
  MessageSquare, 
  BarChart3, 
  Users, 
  LogOut,
  CheckCircle,
  Settings
} from "lucide-react";

export function DashboardLayout() {
  const location = useLocation();
  const role = location.pathname.split("/")[1]; // student, admin, or resolver

  const getNavItems = () => {
    switch (role) {
      case "student":
        return [
          { path: "/student", icon: LayoutDashboard, label: "Dashboard" },
          { path: "/student/submit", icon: FileText, label: "Submit Grievance" },
          { path: "/student/track", icon: Search, label: "Track Status" },
          { path: "/student/feedback", icon: MessageSquare, label: "Feedback" },
        ];
      case "admin":
        return [
          { path: "/admin", icon: LayoutDashboard, label: "Dashboard" },
          { path: "/admin/grievances", icon: FileText, label: "Grievances" },
          { path: "/admin/reports", icon: BarChart3, label: "Reports" },
          { path: "/admin/users", icon: Users, label: "User Management" },
        ];
      case "resolver":
        return [
          { path: "/resolver", icon: LayoutDashboard, label: "Dashboard" },
          { path: "/resolver/grievances/1", icon: FileText, label: "Grievances" },
          { path: "/resolver/update/1", icon: CheckCircle, label: "Update Status" },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  const getRoleTitle = () => {
    switch (role) {
      case "student":
        return "Student Portal";
      case "admin":
        return "Administrator";
      case "resolver":
        return "Department Authority";
      default:
        return "ResolveIT";
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="text-2xl font-bold text-primary">ResolveIT</h1>
          <p className="text-sm text-muted-foreground mt-1">{getRoleTitle()}</p>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors mt-2"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-foreground">
              {navItems.find((item) => item.path === location.pathname)?.label || "Dashboard"}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                {role === "student" ? "S" : role === "admin" ? "A" : "R"}
              </div>
              <div>
                <p className="text-sm font-medium">
                  {role === "student" ? "John Student" : role === "admin" ? "Admin User" : "Resolver"}
                </p>
                <p className="text-xs text-muted-foreground capitalize">{role}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
