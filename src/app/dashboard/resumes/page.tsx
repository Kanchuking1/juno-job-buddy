import { WorkExperienceTab } from "@/components/resume-builder/WorkExperience"
import { EducationTab } from "@/components/resume-builder/Education"

import { WorkExperience, Education } from "@/types/resume-builder";

import { sampleWorkExperience } from "@/app/test_data/work_experience";
import { sampleEducation } from "@/app/test_data/education";

export default async function ResumePage() {
  return (
    <>
      <div className="m-2">
        <div className="flex flex-col mb-6">
          <div className="m-2 flex items-center justify-between">
            <h1 className="text-3xl font-semibold mb-2">Resume Builder</h1>
          </div>
          <section className="mt-6 mx-4">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            {sampleEducation.map(
              (education: Education, index: number) => <EducationTab
                education={education}
                key={index}
                index={index}
              />
            )}
          </section>
          <section className="mx-4">
            <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
            {sampleWorkExperience.map(
              (experience: WorkExperience, index: number) =>
                <WorkExperienceTab
                  key={index}
                  experience={experience}
                  index={index}
                />
            )}
          </section>
        </div>
      </div>
    </>
  );
}