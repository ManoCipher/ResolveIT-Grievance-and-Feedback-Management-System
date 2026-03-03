import { useParams } from "react-router";
import { FileText, User, Calendar, AlertCircle, MessageSquare, CheckCircle } from "lucide-react";

export function AdminGrievanceDetail() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <div className="text-center py-12">
          <FileText className="w-16 h-16 mx-auto mb-4 text-muted" />
          <p className="text-muted-foreground">Grievance not found</p>
          <p className="text-sm text-muted-foreground mt-2">
            The grievance with ID {id} does not exist
          </p>
        </div>
      </div>
    </div>
  );
}
