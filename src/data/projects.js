// Projects data
import CleanNFTImage from '../assets/CleanNFT.png';
import OpentelemetryImage from '../assets/Opentelemetry.png';
import WeekendlyImage from '../assets/Weekendly.png';
import MicroserviceCICDImage from '../assets/MicroserviceCICD.png';

export const projects = [
  {
    id: 1,
    title: "CleanNFT",
    description: "Blockchain-based recycling reward system with mobile app, admin portal, and IoT integration. Users scan QR codes to earn NFT badges for recycling activities.",
    techStack: ["React Native", "Node.js", "Solidity", "AWS Lambda", "IoT", "QR Code scanning"],
    highlights: [
      "Developed blockchain-based recycling reward system with mobile app + admin portal + IoT integration",
      "Users scan QR codes to earn NFT badges",
      "Built using React Native, Node.js, and Solidity smart contracts",
      "Admins manage users and track recycling statistics",
      "Integrated AWS Lambda for serverless backend execution"
    ],
    liveLink: "https://cleannft.netlify.app/",
    githubLink: null,
    image: CleanNFTImage
  },
  {
    id: 2,
    title: "Opentelemetry DevOps Project",
    description: "Deployed microservices-based e-commerce platform using 15+ services with CI/CD, auto-scaling, service discovery, and comprehensive observability via OpenTelemetry.",
    techStack: ["AWS", "Kubernetes", "Docker", "GitHub Actions", "Go", "Node.js", "Python", "Java", "Rust", "C#", "Microservices"],
    highlights: [
      "Deployed microservices-based e-commerce platform using 15+ services",
      "Implemented CI/CD with GitHub Actions for automated testing & deployments",
      "Designed scalable cloud-native architecture with auto-scaling, service discovery & load balancing",
      "Integrated logging and tracing via OpenTelemetry",
      "Used multi-language microservices: Go, Node.js, Python, Java, Rust, C#"
    ],
    liveLink: null,
    githubLink: "https://github.com/SagarBarate/enterprise-microservices-devops-platform",
    image: OpentelemetryImage
  },
  {
    id: 3,
    title: "Microservice CI/CD Pipeline",
    description: "Full CI/CD pipeline for a shipment-service microservice with automated build, test, code quality scans, and infrastructure provisioning using Ansible.",
    techStack: ["Jenkins", "Maven", "SonarQube", "Ansible", "AWS EC2", "Java"],
    highlights: [
      "Implemented a full CI/CD pipeline for a shipment-service microservice",
      "Automated GitHub checkout → Maven build/test → SonarQube scans → artifact archive",
      "Provisioned infrastructure using Ansible playbooks",
      "Deployed Java microservice on AWS EC2",
      "Ensured idempotent server setup and automated service startup"
    ],
    liveLink: null,
    githubLink: "https://github.com/sagarbarate/microservice-ci-cd",
    image: MicroserviceCICDImage
  },
  {
    id: 4,
    title: "Weekend Planning Web App",
    description: "Highly-available MERN stack app with distributed microservices and fault-tolerant serverless architecture on AWS. Features automated scaling and intelligent load-balancing.",
    techStack: ["MERN", "AWS Serverless", "Lambda", "API Gateway", "DynamoDB"],
    highlights: [
      "Architected a highly-available MERN stack app with distributed microservices",
      "Built fault-tolerant serverless architecture on AWS",
      "Implemented automated scaling and intelligent load-balancing",
      "Led testing, code review, and CI/CD pipeline setup",
      "Ensured optimized performance and user experience"
    ],
    liveLink: "https://planweekendly.netlify.app/",
    githubLink: null,
    image: WeekendlyImage
  }
];

