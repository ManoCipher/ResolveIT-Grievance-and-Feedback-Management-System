import { useState } from "react";
import { Upload, Send } from "lucide-react";

export function SubmitGrievance() {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    priority: "medium",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Grievance submitted successfully!");
  };

  return (
    <div className="max-w-4xl">
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-6">Submit New Grievance</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="category" className="block text-sm mb-2">
                Category
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Select a category</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="academics">Academics</option>
                <option value="administration">Administration</option>
                <option value="facilities">Facilities</option>
                <option value="hostel">Hostel</option>
                <option value="canteen">Canteen</option>
                <option value="library">Library</option>
                <option value="transport">Transport</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="priority" className="block text-sm mb-2">
                Priority Level
              </label>
              <select
                id="priority"
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="title" className="block text-sm mb-2">
              Grievance Title
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Brief title for your grievance"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm mb-2">
              Detailed Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px]"
              placeholder="Provide a detailed description of your grievance..."
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">
              Upload Supporting Documents (Optional)
            </label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
              <Upload className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
              <p className="text-muted-foreground mb-2">
                Drag and drop files here, or click to browse
              </p>
              <p className="text-xs text-muted-foreground">
                Maximum file size: 10MB (PDF, JPG, PNG)
              </p>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                multiple
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Submit Grievance
            </button>
            <button
              type="button"
              className="border border-border px-6 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              Save as Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
