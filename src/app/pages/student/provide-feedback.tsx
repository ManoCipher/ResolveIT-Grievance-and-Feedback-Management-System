import { useState } from "react";
import { Star, Send } from "lucide-react";

export function ProvideFeedback() {
  const [selectedGrievance, setSelectedGrievance] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setSelectedGrievance("");
    setRating(0);
    setComment("");
  };

  return (
    <div className="max-w-4xl">
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-6">Provide Feedback</h3>
        
        <div className="text-center py-12">
          <Star className="w-16 h-16 mx-auto mb-4 text-muted" />
          <p className="text-muted-foreground">No resolved grievances available</p>
          <p className="text-sm text-muted-foreground mt-2">
            You can provide feedback once your grievances are resolved
          </p>
        </div>
      </div>
    </div>
  );
}
