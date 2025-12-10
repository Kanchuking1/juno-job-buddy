import { ContactInformationTab } from "@/components/resume-builder/ContactInformation"
import { WorkExperienceTab } from "@/components/resume-builder/WorkExperience"
import { EducationTab } from "@/components/resume-builder/Education"
import { ProjectTab } from "@/components/resume-builder/Project"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { WorkExperience, Education, Project, ContactInformation } from "@/types/resume-builder";

import { sampleWorkExperience } from "@/app/test_data/work_experience";
import { sampleEducation } from "@/app/test_data/education";
import { sampleProjects } from "@/app/test_data/projects";


export default async function ResumePage() {
  return (
    <div className="mx-6 flex flex-col w-full">
      <div className="m-2 flex items-center justify-between">
        <h1 className="text-3xl font-semibold mb-2">Resume Builder</h1>
      </div>
      <Accordion
        type="multiple"
        className="w-5/6"
      >
        <AccordionItem value="contact-info">
          <AccordionTrigger className="text-2xl font-semibold mb-4">Contact Information</AccordionTrigger>
          <AccordionContent>
            <ContactInformationTab />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="education">
          <AccordionTrigger className="text-2xl font-semibold mb-4">Education</AccordionTrigger>
          <AccordionContent>
            {sampleEducation.map(
              (education: Education, index: number) => <EducationTab
                education={education}
                key={index}
                index={index}
              />
            )}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="work-ex">
          <AccordionTrigger className="text-2xl font-semibold mb-4">Work Experience</AccordionTrigger>
          <AccordionContent>
            {sampleWorkExperience.map(
              (experience: WorkExperience, index: number) =>
                <WorkExperienceTab
                  key={index}
                  experience={experience}
                  index={index}
                />
            )}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="projects">
          <AccordionTrigger className="text-2xl font-semibold mb-4">Projects</AccordionTrigger>
          <AccordionContent>
            {sampleProjects.map(
              (project: Project, index: number) =>
                <ProjectTab
                  key={index}
                  project={project}
                  index={index}
                />
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}