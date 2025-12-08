import { WorkExperience } from "@/types/resume-builder";

export const sampleWorkExperience: Array<WorkExperience> = [
  {
    company: "Tech Solutions Inc.",
    position: "Software Engineer",
    startDate: "2020-06-01",
    endDate: "2022-08-31",
    location: "New York, NY",
    responsibilities: [
        "Developed and maintained web applications using React and Node.js.",
        "Collaborated with cross-functional teams to define project requirements and deliverables.",
        "Implemented responsive design principles to ensure optimal user experience across devices."]
    },
    {
    company: "Innovatech LLC",
    position: "Frontend Developer",
    startDate: "2022-09-01",  
    location: "San Francisco, CA",  
    responsibilities: [
        "Designed and implemented user interfaces with a focus on usability and performance.",
        "Worked closely with designers to translate wireframes into functional web pages.",
        "Optimized application performance by identifying and addressing bottlenecks."
    ]
    }
];