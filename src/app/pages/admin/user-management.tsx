import { useState } from "react";
import { Search, UserPlus, Shield } from "lucide-react";

export function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or email..."
              className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex items-center gap-2">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Roles</option>
              <option value="Student">Student</option>
              <option value="Resolver">Resolver</option>
              <option value="Administrator">Administrator</option>
            </select>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
              <UserPlus className="w-5 h-5" />
              Add User
            </button>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">User Management</h3>
        </div>
        <div className="text-center py-12">
          <Shield className="w-16 h-16 mx-auto mb-4 text-muted" />
          <p className="text-muted-foreground">No users found</p>
          <p className="text-sm text-muted-foreground mt-2">
            Add users to manage system access
          </p>
        </div>
      </div>

      {/* Role Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold">Students</h4>
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <p className="text-3xl font-bold mb-1">0</p>
          <p className="text-sm text-muted-foreground">Active student accounts</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold">Resolvers</h4>
            <Shield className="w-5 h-5 text-secondary" />
          </div>
          <p className="text-3xl font-bold mb-1">0</p>
          <p className="text-sm text-muted-foreground">Department authorities</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold">Administrators</h4>
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <p className="text-3xl font-bold mb-1">0</p>
          <p className="text-sm text-muted-foreground">System administrators</p>
        </div>
      </div>
    </div>
  );
}
