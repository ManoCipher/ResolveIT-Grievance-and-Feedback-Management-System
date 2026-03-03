import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { CheckCircle, AlertCircle, Send } from "lucide-react";

export function UpdateStatus() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [status, setStatus] = useState("in-progress");
  const [resolution, setResolution] = useState("");
  const [internalNote, setInternalNote] = useState("");
  const [notifyStudent, setNotifyStudent] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Status updated successfully!");
    navigate("/resolver");
  };

  const getStatusColor = (statusValue: string) => {
    switch (statusValue) {
      case "resolved": return "bg-primary/20 text-primary";
      case "in-progress": return "bg-secondary/20 text-secondary";
      case "pending": return "bg-muted text-muted-foreground";
      case "escalated": return "bg-destructive/20 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="max-w-4xl">
      <div className="bg-card border border-border rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-2">Update Grievance Status</h2>
        <div className="flex items-center gap-4">
          <p className="text-muted-foreground">Grievance ID: {id}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Update Status */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">New Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="relative cursor-pointer">
              <input
                type="radio"
                name="status"
                value="in-progress"
                checked={status === "in-progress"}
                onChange={(e) => setStatus(e.target.value)}
                className="peer sr-only"
              />
              <div className="border-2 border-border peer-checked:border-secondary peer-checked:bg-secondary/10 rounded-lg p-4 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="font-medium">In Progress</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Currently working on resolution</p>
              </div>
            </label>

            <label className="relative cursor-pointer">
              <input
                type="radio"
                name="status"
                value="pending"
                checked={status === "pending"}
                onChange={(e) => setStatus(e.target.value)}
                className="peer sr-only"
              />
              <div className="border-2 border-border peer-checked:border-muted peer-checked:bg-muted/10 rounded-lg p-4 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-muted" />
                  <span className="font-medium">Pending</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Awaiting additional information</p>
              </div>
            </label>

            <label className="relative cursor-pointer">
              <input
                type="radio"
                name="status"
                value="resolved"
                checked={status === "resolved"}
                onChange={(e) => setStatus(e.target.value)}
                className="peer sr-only"
              />
              <div className="border-2 border-border peer-checked:border-primary peer-checked:bg-primary/10 rounded-lg p-4 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="font-medium">Resolved</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Issue has been fixed</p>
              </div>
            </label>

            <label className="relative cursor-pointer">
              <input
                type="radio"
                name="status"
                value="escalated"
                checked={status === "escalated"}
                onChange={(e) => setStatus(e.target.value)}
                className="peer sr-only"
              />
              <div className="border-2 border-border peer-checked:border-destructive peer-checked:bg-destructive/10 rounded-lg p-4 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <span className="font-medium">Escalated</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Requires higher authority</p>
              </div>
            </label>
          </div>
        </div>

        {/* Resolution Details */}
        {status === "resolved" && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Resolution Details</h3>
                <p className="text-sm text-muted-foreground">Provide details about how the issue was resolved</p>
              </div>
            </div>
            <textarea
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
              placeholder="Describe the actions taken and how the grievance was resolved..."
              required={status === "resolved"}
            />
          </div>
        )}

        {/* Escalation Reason */}
        {status === "escalated" && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-destructive mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Escalation Reason</h3>
                <p className="text-sm text-muted-foreground">Explain why this case needs to be escalated</p>
              </div>
            </div>
            <textarea
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
              placeholder="Provide reason for escalation and recommended next steps..."
              required={status === "escalated"}
            />
          </div>
        )}

        {/* Internal Notes */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Internal Notes</h3>
          <p className="text-sm text-muted-foreground mb-3">
            These notes are only visible to department authorities and administrators
          </p>
          <textarea
            value={internalNote}
            onChange={(e) => setInternalNote(e.target.value)}
            className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
            placeholder="Add any internal notes about this update..."
          />
        </div>

        {/* Notification Settings */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={notifyStudent}
              onChange={(e) => setNotifyStudent(e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary"
            />
            <div>
              <p className="font-medium">Notify Student</p>
              <p className="text-sm text-muted-foreground">
                Send an email notification to the student about this status update
              </p>
            </div>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Update Status & {notifyStudent ? "Notify" : "Save"}
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
