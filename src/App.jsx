import { BrowserRouter, Routes, Route } from "react-router-dom";

function AdminDashboard() {
  return <div className="p-6 text-2xl">Admin Dashboard</div>;
}

function StudentDashboard() {
  return <div className="p-6 text-2xl">Student Dashboard</div>;
}

function ResolverDashboard() {
  return <div className="p-6 text-2xl">Resolver Dashboard</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/resolver" element={<ResolverDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;