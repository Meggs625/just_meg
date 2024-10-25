import tofwerkLogo from '../assets/Tofwerk.jpeg';
import sedaiLogo from '../assets/sedai_logo.jpeg';
import intradoLogo from '../assets/intrado_corp_logo.jpeg';

const workHistoryData = [
    {
        id: crypto.randomUUID(),
        company: "Tofwerk",
        img: tofwerkLogo,
        mainDetails: {
            company: "Tofwerk",
            jobTitle: "Software Developer",
            startDate: "November, 2022",
            endDate: "present",
            techStack: ['React', 'CSS Modules', 'Cypress', 'GitLab', 'GitKracken', 'Jira', 'SciChart', 'Socket.IO', 'Teams'],
        },
        mainProject: "One of the largest projects I enjoyed working on while at Tofwerk was a new view for a specific instance use of the software. This view required a new chart that would have to display multiple kinds of data, allow the user to toggle the data views and link to a separate component to alter the source of the data. This allowed for a combination of creating new components as well as interweave existing components where possible. I worked closely with one of our backend developers to create a smooth handshake. We were also responsible for attending weekly feedback meetings and applying the requested changes or bug fixes that were identified. The collaboration and communication were key to the end result's success."
        ,
        otherDetails: {
            workEnvironment: "Hybrid",
            teamSize: "Close knit with 2 FE and between 2 -3 backend during my time there",
            tickets: "Managed via Jira with guidelines but allowing for creative implementation",
        },
        otherExperiences: [
            'Participated in revising, modularizing and updating old code bases to modern development standards, reducing operating costs, and improving functionality',
            'Refactored project styling using CSS module format by 10% as well as removed unused styles, consolidated repetitive code, and prevented undesired style overlap',
            'Completed 68 issues in my first full year with the company, a combination of new features, improvements, and bug fixes. Have completed 110 issues total in my tenure with Tofwerk'
        ]
    },
    {
        id: crypto.randomUUID(),
        company: "Sedai",
        img: sedaiLogo,
        mainDetails: {
            company: "Sedai",
            jobTitle: "Software Engineer",
            startDate: "November 2021",
            endDate: "November 2022",
            techStack: ['React', 'JSS', 'GitHub Projects', 'GitHub Actions', 'Storybook', 'BugSnag', 'Slack']
        },
        mainProject: "Collaborating with the UX/UI design team, we began to create an internal design system. Utilizing the designs they created in Figma, we used the React Aria library to create accessible and beautiful components. During the project, we also utilized Storybook to be able to test and track the changes made for each component variant as they were being created. I completed over 5 component transitions and their accompanying stories.",
        otherDetails: {
            workEnvironment: "Remote",
            teamSize: "Small startup environment with one other very experienced frontend developer and two person UX/UI team",
            tickets: "Initially managed with GitHub Projects, but moved to Jira shortly before my departure. Included a good amount of detail and mockups"
        },
        otherExperiences: [
            'Implemented various GitHub actions for faster, more uniform PR process as well as creation of a change log for each release',
            'Collaborated with UX and backend teams on feature implementation allowing user to see data trends for faster issue identification and resolution',
            'Implemented BugSnag software for improved management of bugs in both development and production'
        ]
    },
    {
        id: crypto.randomUUID(),
        company: "Intrado",
        img: intradoLogo,
        mainDetails: {
            company: "Intrado",
            jobTitle: "Supervisor/QA and Training Specialist/Data Analyst",
            startDate: "November 2013",
            endDate: "April 2021",
            techStack: ["None"],
        },
        mainProject: "There are many projects to choose from during my time with Intrado, but one that stands out was during my time as the QA and Training Specialist. I was tasked with cross-training teams in other departments to assist on a large backlog in my department. Within a few weeks, I built a training from the ground up and personalized it to the skill set of the different departments. With each training group, I was able to iterate and streamline the process. Overall, I was able to train over 15 individuals in multiple departments and enjoyed doing so greatly",
        otherDetails: {
            workEnvironment: "Onsite until the pandemic, then fully remote",
            teamSize: "Between 20-30 analysts",
            tickets: "Tasks varied wildly with my different titles",
        },
        otherExperiences: [
            'Collaborated with Program Manager on year long migration of Tier1 customer resulting in $15 M revenue',
            'Maintained all and composed many training documents for the tasks performed by the team both small and large',
            'Analyzed large amounts of data to identify trends and find patterns, signals, and hidden stories within data'
        ]
    }

];

export default workHistoryData;