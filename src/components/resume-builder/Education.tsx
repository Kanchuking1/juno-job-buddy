import { Education } from "@/types/resume-builder" 
import { Button } from "@/components/ui/button"

export function EducationTab({ education, index }: { education: Education, index: number }) {
  return <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold">{education.level} in {education.concentration} from {education.institution}</h3>
      <Button variant="outline" size="sm">Edit</Button>
    </div>
    <p className="text-sm text-gray-600">{education.startDate} - {education.endDate || "Present"}</p>
  </div>
}