import { WorkExperience } from "@/types/resume-builder" 
import { Button } from "@/components/ui/button"

export function WorkExperienceTab({ experience, index }: { experience: WorkExperience, index: number }) {
  return <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold">{experience.position} at {experience.company}</h3>
      <Button variant="outline" size="sm">Edit</Button>
    </div>
    <p className="text-md text-gray-700">{experience.location}</p>
    <p className="text-sm text-gray-600">{experience.startDate} - {experience.endDate || "Present"}</p>
    <ul className="list-disc list-inside mt-2">
      {experience.responsibilities.map((responsibility, idx) => (
        <li key={idx}>{responsibility}</li>
      ))}
    </ul>
  </div>
}