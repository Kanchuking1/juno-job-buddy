import { Project } from "@/types/resume-builder"

export const sampleProjects : Project[] = [
    {
        name: "Faculty Teaching Assignment Software ",
        startDate: "10-12-2025",
        endDate: "12-12-2025",
        features: [
            "Developed a Ruby on Rails application with JS, HTML, and CSS to automate teaching schedule generation.",
            "Implemented a linear programming-based optimization algorithm via linear programming (RLP) to assign courses based on professor preferences, room capacities, and time constraints.",
            "Implemented CI/CD with GitHub Actions and unit testing to ensure reliability and high code quality.",
            "Architected a PostgreSQL schema with indexing and relational constraints to support fast schedule generation and conflict detection."
        ],
        link: "https://github.com/tamu-edu-students/Faculty-Teaching-Assignment"
    }, {
        name: "Deep RL based Visual Tracker improvement",
        startDate: "10-12-2025",
        endDate: "12-12-2025",
        features: [
            "Executed the A2C algorithm using PyTorch, improving visual tracking accuracy by about 4%.",
            "Enhanced frame-level tracking for transformer and Siamese-network based trackers with RL.",
            "Devised a distillation-based method to handle temporal dependencies in tracking. "
        ],
        link: "https://github.com/tamu-edu-students/SLTRLProject"
    }
]