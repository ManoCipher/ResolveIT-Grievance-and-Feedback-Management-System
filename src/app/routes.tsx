import { createBrowserRouter } from "react-router";
import { LoginPage } from "./pages/login";
import { StudentDashboard } from "./pages/student/dashboard";
import { SubmitGrievance } from "./pages/student/submit-grievance";
import { TrackStatus } from "./pages/student/track-status";
import { ProvideFeedback } from "./pages/student/provide-feedback";
import { AdminDashboard } from "./pages/admin/dashboard";
import { GrievanceList } from "./pages/admin/grievance-list";
import { AdminGrievanceDetail } from "./pages/admin/grievance-detail";
import { ReportsAnalytics } from "./pages/admin/reports-analytics";
import { UserManagement } from "./pages/admin/user-management";
import { ResolverDashboard } from "./pages/resolver/dashboard";
import { ResolverGrievanceDetail } from "./pages/resolver/grievance-detail";
import { UpdateStatus } from "./pages/resolver/update-status";
import { DashboardLayout } from "./components/dashboard-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/student",
    Component: DashboardLayout,
    children: [
      { index: true, Component: StudentDashboard },
      { path: "submit", Component: SubmitGrievance },
      { path: "track", Component: TrackStatus },
      { path: "feedback", Component: ProvideFeedback },
    ],
  },
  {
    path: "/admin",
    Component: DashboardLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "grievances", Component: GrievanceList },
      { path: "grievances/:id", Component: AdminGrievanceDetail },
      { path: "reports", Component: ReportsAnalytics },
      { path: "users", Component: UserManagement },
    ],
  },
  {
    path: "/resolver",
    Component: DashboardLayout,
    children: [
      { index: true, Component: ResolverDashboard },
      { path: "grievances/:id", Component: ResolverGrievanceDetail },
      { path: "update/:id", Component: UpdateStatus },
    ],
  },
]);
