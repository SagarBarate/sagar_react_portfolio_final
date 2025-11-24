// Case studies data

export const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Platform Migration",
    description: "Led the migration of a legacy e-commerce platform to a modern microservices architecture, resulting in 40% performance improvement and 60% reduction in infrastructure costs.",
    challenge: "The existing monolithic application was struggling with scalability and high maintenance costs.",
    solution: "Designed and implemented a microservices architecture using React, Node.js, and AWS services.",
    results: [
      "40% improvement in page load times",
      "60% reduction in infrastructure costs",
      "99.9% uptime achieved",
      "Improved developer productivity by 50%"
    ],
    techStack: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
    image: "https://via.placeholder.com/600x400?text=E-Commerce+Migration"
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    description: "Built a real-time analytics dashboard for a SaaS company that processes millions of events daily, providing instant insights to stakeholders.",
    challenge: "Need for real-time data visualization with minimal latency for business-critical decisions.",
    solution: "Implemented a real-time data pipeline using WebSockets, Redis, and React with optimized rendering.",
    results: [
      "Real-time data updates with <100ms latency",
      "Handles 1M+ events per day",
      "99.5% accuracy in data processing",
      "Reduced decision-making time by 70%"
    ],
    techStack: ["React", "WebSockets", "Redis", "Node.js", "D3.js"],
    image: "https://via.placeholder.com/600x400?text=Analytics+Dashboard"
  },
  {
    id: 3,
    title: "Mobile App Backend API",
    description: "Developed a scalable REST API backend for a mobile application serving 100K+ users with high availability and performance.",
    challenge: "Building a backend that can handle high traffic, maintain data consistency, and provide excellent user experience.",
    solution: "Created a RESTful API using Node.js, Express, MongoDB with caching, load balancing, and auto-scaling.",
    results: [
      "API response time <200ms (p95)",
      "99.99% uptime",
      "Successfully handles 10K+ concurrent users",
      "Zero data loss incidents"
    ],
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "AWS"],
    image: "https://via.placeholder.com/600x400?text=API+Backend"
  }
];

