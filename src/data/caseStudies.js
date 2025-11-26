// Case studies data - using projects data
import CleanNFTImage from '../assets/CleanNFT.png';
import OpentelemetryImage from '../assets/Opentelemetry.png';
import WeekendlyImage from '../assets/Weekendly.png';
import MicroserviceCICDImage from '../assets/MicroserviceCICD.png';

export const caseStudies = [
  {
    id: 1,
    title: "CleanNFT",
    description: "Blockchain-based recycling reward system with mobile app, admin portal, and IoT integration. Users scan QR codes to earn NFT badges for recycling activities.",
    challenge: "Creating an innovative solution to incentivize recycling through blockchain technology while ensuring seamless user experience across mobile and web platforms.",
    solution: "Developed a comprehensive system using React Native for mobile app, Node.js for backend, Solidity for smart contracts, and AWS Lambda for serverless execution. Integrated IoT devices and QR code scanning for seamless user interaction.",
    results: [
      "Developed blockchain-based recycling reward system with mobile app + admin portal + IoT integration",
      "Users scan QR codes to earn NFT badges",
      "Built using React Native, Node.js, and Solidity smart contracts",
      "Admins manage users and track recycling statistics",
      "Integrated AWS Lambda for serverless backend execution"
    ],
    techStack: ["React Native", "Node.js", "Solidity", "AWS Lambda", "IoT", "QR Code scanning"],
    image: CleanNFTImage,
    liveLink: "https://cleannft.netlify.app/",
    githubLink: null
  },
  {
    id: 2,
    title: "Opentelemetry DevOps Project",
    description: "Deployed microservices-based e-commerce platform using 15+ services with CI/CD, auto-scaling, service discovery, and comprehensive observability via OpenTelemetry.",
    challenge: "Building a scalable, observable microservices architecture that can handle high traffic while maintaining visibility into system performance and debugging capabilities.",
    solution: "Designed and implemented a cloud-native architecture using Kubernetes, Docker, and GitHub Actions for CI/CD. Integrated OpenTelemetry for comprehensive logging and tracing across multiple programming languages.",
    results: [
      "Deployed microservices-based e-commerce platform using 15+ services",
      "Implemented CI/CD with GitHub Actions for automated testing & deployments",
      "Designed scalable cloud-native architecture with auto-scaling, service discovery & load balancing",
      "Integrated logging and tracing via OpenTelemetry",
      "Used multi-language microservices: Go, Node.js, Python, Java, Rust, C#"
    ],
    techStack: ["AWS", "Kubernetes", "Docker", "GitHub Actions", "Go", "Node.js", "Python", "Java", "Rust", "C#", "Microservices"],
    image: OpentelemetryImage,
    liveLink: null,
    githubLink: "https://github.com/SagarBarate/enterprise-microservices-devops-platform"
  },
  {
    id: 3,
    title: "Microservice CI/CD Pipeline",
    description: "Full CI/CD pipeline for a shipment-service microservice with automated build, test, code quality scans, and infrastructure provisioning using Ansible.",
    challenge: "Automating the entire software delivery lifecycle from code commit to production deployment while ensuring code quality and infrastructure consistency.",
    solution: "Implemented a comprehensive CI/CD pipeline using Jenkins, Maven, SonarQube, and Ansible. Automated infrastructure provisioning and deployment on AWS EC2 with idempotent configurations.",
    results: [
      "Implemented a full CI/CD pipeline for a shipment-service microservice",
      "Automated GitHub checkout → Maven build/test → SonarQube scans → artifact archive",
      "Provisioned infrastructure using Ansible playbooks",
      "Deployed Java microservice on AWS EC2",
      "Ensured idempotent server setup and automated service startup"
    ],
    techStack: ["Jenkins", "Maven", "SonarQube", "Ansible", "AWS EC2", "Java"],
    image: MicroserviceCICDImage,
    liveLink: null,
    githubLink: "https://github.com/sagarbarate/microservice-ci-cd"
  },
  {
    id: 4,
    title: "Weekend Planning Web App",
    description: "Highly-available MERN stack app with distributed microservices and fault-tolerant serverless architecture on AWS. Features automated scaling and intelligent load-balancing.",
    challenge: "Building a highly available web application that can scale automatically based on demand while maintaining fault tolerance and optimal performance.",
    solution: "Architected a serverless MERN stack application using AWS Lambda, API Gateway, and DynamoDB. Implemented distributed microservices with automated scaling and intelligent load balancing.",
    results: [
      "Architected a highly-available MERN stack app with distributed microservices",
      "Built fault-tolerant serverless architecture on AWS",
      "Implemented automated scaling and intelligent load-balancing",
      "Led testing, code review, and CI/CD pipeline setup",
      "Ensured optimized performance and user experience"
    ],
    techStack: ["MERN", "AWS Serverless", "Lambda", "API Gateway", "DynamoDB"],
    image: WeekendlyImage,
    liveLink: "https://planweekendly.netlify.app/",
    githubLink: null
  }
];

