import { Project } from "@/types/resume-builder" 
import { Button } from "@/components/ui/button"

export function ProjectTab({ project, index }: { project: Project, index: number }) {
  return <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm">
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold">{project.name}</h3>
      <Button variant="outline" size="sm">Edit</Button>
    </div>
    <p className="text-sm text-gray-600">{project.startDate} - {project.endDate || "Present"}</p>
    <ul className="list-disc list-inside mt-2">
      {project.features.map((responsibility, idx) => (
        <li key={idx}>{responsibility}</li>
      ))}
    </ul>
  </div>
}