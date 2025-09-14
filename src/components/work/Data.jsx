import Work1 from '../../assets/work1.jpg'
import Work2 from '../../assets/work2.jpg'
import Work3 from '../../assets/work3.jpg'
import Work4 from '../../assets/work4.jpg'
import Work5 from '../../assets/work5.jpg'
export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: "CleanNFT - Blockchain Recycling System",
        description: "A comprehensive blockchain-based recycling reward system that incentivizes proper waste disposal through NFT badges and rewards. Features mobile app, admin portal, smart contracts, and IoT integration.",
        category: "Blockchain",
        technologies: ["Solidity", "React Native", "Node.js", "AWS Lambda", "Hardhat", "MQTT", "TypeScript"],
        githubLink: "https://github.com/SagarBarate/CleanNFT",
        demoLink: null
    },
    {
        id: 2,
        image: Work2,
        title: "Hungry-Heart-Master",
        description: "A comprehensive food delivery application with user authentication, menu browsing, and order management features.",
        category: "Front End",
        technologies: ["React", "JavaScript", "CSS3", "HTML5"],
        githubLink: "https://github.com/SagarBarate/Hungry-Heart-master",
        demoLink: null
    },
    {
        id: 3,
        image: Work2,
        title: "Chat Application",
        description: "Real-time messaging application with user authentication, group chats, and message history.",
        category: "Front End",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
        githubLink: "https://github.com/SagarBarate/chatapp",
        demoLink: null
    },
    {
        id: 4,
        image: Work3,
        title: "Dockerized Microservice Orchestration",
        description: "Containerized Maven application using Docker Compose, Swarm, Kubernetes with ELK stack implementation for monitoring and logging.",
        category: "DevOps",
        technologies: ["Docker", "Kubernetes", "ELK Stack", "Maven", "Java"],
        githubLink: "https://github.com/SagarBarate/dockerized-microservice-orchestration",
        demoLink: null
    },
    {
        id: 5,
        image: Work4,
        title: "Proxima - Project Management Tool",
        description: "Full-stack project management application with Scrum methodology, task tracking, and team collaboration features.",
        category: "Backend",
        technologies: ["React", "Java", "Spring Boot", "MySQL", "REST API"],
        githubLink: "https://github.com/SagarBarate/scrum-task-manager",
        demoLink: null
    },
    {
        id: 6,
        image: Work5,
        title: "FramerFlow - Video Asset Management",
        description: "Cloud-based video asset management system with version control, automated processing, and CDN distribution.",
        category: "Backend",
        technologies: ["AWS S3", "AWS Lambda", "DynamoDB", "CloudFront", "Python"],
        githubLink: "https://github.com/SagarBarate/FramerFlow",
        demoLink: null
    },
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'Blockchain',
    },
    {
        name: 'Front End',
    },
    {
        name: 'DevOps',
    },
    {
        name: 'Backend',
    },
];