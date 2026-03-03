import { useParams } from "react-router";
import { FileText } from "lucide-react";

export function ResolverGrievanceDetail() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <div className="text-center py-12">
          <FileText className="w-16 h-16 mx-auto mb-4 text-muted" />
          <p className="text-muted-foreground">Grievance not found</p>
          <p className="text-sm text-muted-foreground mt-2">
            The grievance with ID {id} does not exist or is not assigned to you
          </p>
        </div>
      </div>
    </div>
  );
}
