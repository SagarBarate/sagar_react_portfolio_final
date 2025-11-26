// Sample blogs data - replace with your actual blog posts

export const blogs = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to manage state and side effects in functional components. This guide covers useState, useEffect, and custom hooks.",
    content: `
# Getting Started with React Hooks

React Hooks revolutionized how we write React components. They allow us to use state and other React features in functional components without writing a class.

## What are Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8.

## useState Hook

The \`useState\` hook lets you add state to functional components:

\`\`\`javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

The \`useEffect\` hook lets you perform side effects in functional components:

\`\`\`javascript
import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Conclusion

Hooks provide a more direct API to the React concepts you already know. They make your code more reusable and easier to understand.
    `,
    date: "2024-01-15",
    author: "Sagar Gopalbarate",
    tags: ["React", "JavaScript", "Web Development"]
  },
  {
    id: 2,
    title: "Building Scalable Cloud Applications",
    excerpt: "Explore best practices for building cloud-native applications that scale efficiently. Learn about microservices, containerization, and cloud architecture patterns.",
    content: `
# Building Scalable Cloud Applications

Cloud computing has transformed how we build and deploy applications. In this post, we'll explore key strategies for building scalable cloud applications.

## Microservices Architecture

Microservices break down applications into smaller, independent services that can be developed, deployed, and scaled independently.

### Benefits:
- **Independent Deployment**: Each service can be updated without affecting others
- **Technology Diversity**: Use the best technology for each service
- **Scalability**: Scale individual services based on demand

## Containerization

Containers package applications with their dependencies, ensuring consistency across different environments.

### Docker Basics:
\`\`\`dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## Cloud Architecture Patterns

### 1. Load Balancing
Distribute incoming requests across multiple servers to ensure high availability.

### 2. Auto-scaling
Automatically adjust resources based on demand.

### 3. Caching
Implement caching strategies to reduce database load and improve response times.

## Best Practices

1. **Design for Failure**: Assume components will fail and design accordingly
2. **Monitor Everything**: Implement comprehensive logging and monitoring
3. **Security First**: Apply security best practices from the start
4. **Cost Optimization**: Monitor and optimize cloud costs regularly

## Conclusion

Building scalable cloud applications requires careful planning and the right architectural decisions. By following these patterns and best practices, you can create applications that grow with your needs.
    `,
    date: "2024-02-20",
    author: "Sagar Gopalbarate",
    tags: ["Cloud", "DevOps", "Architecture"]
  },
  {
    id: 3,
    title: "Building CleanNFT: A Blockchain-Based Recycling Reward System",
    excerpt: "Discover how I developed CleanNFT, an innovative blockchain-based recycling reward system that combines mobile app development, IoT integration, and smart contracts to incentivize sustainable practices.",
    content: `
# Building CleanNFT: A Blockchain-Based Recycling Reward System

CleanNFT is a revolutionary project that combines blockchain technology, mobile app development, and IoT integration to create an innovative recycling reward system. In this blog post, I'll share the journey of building this comprehensive solution.

## Project Overview

CleanNFT is a blockchain-based recycling reward system that incentivizes users to recycle by rewarding them with NFT badges. The system consists of three main components:

1. **Mobile App** - Built with React Native for cross-platform compatibility
2. **Admin Portal** - Web-based dashboard for managing users and tracking statistics
3. **IoT Integration** - QR code scanning system for seamless user interaction

## The Challenge

The main challenge was creating a seamless experience that connects:
- Mobile users scanning QR codes
- Blockchain smart contracts for NFT minting
- Backend services for processing and validation
- Admin dashboard for monitoring and management

## Technical Architecture

### Frontend - React Native Mobile App

The mobile app was built using React Native to ensure cross-platform compatibility for both iOS and Android users. Key features include:

- **QR Code Scanning**: Integrated QR code scanner for easy recycling activity logging
- **Wallet Integration**: Seamless connection to blockchain wallets
- **NFT Gallery**: Display of earned recycling badges
- **User Dashboard**: Track recycling statistics and achievements

### Backend - Node.js & AWS Lambda

The backend architecture leverages serverless computing for scalability:

- **AWS Lambda Functions**: Serverless execution for cost-effectiveness and auto-scaling
- **RESTful APIs**: Clean API design for mobile and web clients
- **Database Integration**: Efficient data storage and retrieval
- **Smart Contract Integration**: Secure interaction with blockchain networks

### Blockchain - Solidity Smart Contracts

Smart contracts handle the core logic of the reward system:

\`\`\`solidity
// Simplified smart contract structure
contract CleanNFT {
    struct Badge {
        uint256 id;
        string name;
        address owner;
        uint256 timestamp;
    }
    
    mapping(uint256 => Badge) public badges;
    
    function mintBadge(address user, string memory badgeName) public {
        // NFT minting logic
    }
}
\`\`\`

### IoT Integration

The IoT component enables real-time tracking:

- **QR Code System**: Unique QR codes for different recycling activities
- **Device Integration**: Connect with IoT devices for automated tracking
- **Data Collection**: Real-time data gathering and processing

## Key Features Implemented

### 1. QR Code Scanning System

Users can scan QR codes at recycling stations to log their recycling activities. The system:
- Validates QR code authenticity
- Records recycling activity
- Triggers smart contract execution
- Mints NFT badges as rewards

### 2. NFT Badge System

Each recycling activity earns users NFT badges:
- **Unique Badges**: Different badges for different recycling types
- **Rarity Levels**: Common, rare, and legendary badges
- **Collectible System**: Users can collect and trade badges
- **Achievement Tracking**: Track progress and milestones

### 3. Admin Portal

The admin portal provides comprehensive management:
- **User Management**: View and manage user accounts
- **Statistics Dashboard**: Track recycling metrics and trends
- **Badge Management**: Control badge types and distribution
- **Analytics**: Detailed insights into user engagement

### 4. Serverless Backend

AWS Lambda provides:
- **Auto-scaling**: Handles traffic spikes automatically
- **Cost Efficiency**: Pay only for actual usage
- **High Availability**: Built-in redundancy and failover
- **Easy Integration**: Seamless connection with other AWS services

## Development Process

### Phase 1: Planning & Design
- Defined system requirements
- Designed database schema
- Created smart contract architecture
- Planned API endpoints

### Phase 2: Smart Contract Development
- Wrote and tested Solidity contracts
- Implemented NFT minting logic
- Added security measures
- Deployed to test network

### Phase 3: Backend Development
- Built Node.js API services
- Implemented AWS Lambda functions
- Created database models
- Integrated blockchain interaction

### Phase 4: Mobile App Development
- Developed React Native app
- Integrated QR code scanner
- Connected wallet functionality
- Implemented UI/UX design

### Phase 5: Admin Portal
- Built web dashboard
- Created analytics views
- Implemented user management
- Added reporting features

### Phase 6: Testing & Deployment
- Comprehensive testing across all components
- Security audits
- Performance optimization
- Production deployment

## Technologies Used

- **Frontend**: React Native, React.js
- **Backend**: Node.js, Express.js
- **Blockchain**: Solidity, Web3.js
- **Cloud**: AWS Lambda, AWS API Gateway
- **Database**: MongoDB, DynamoDB
- **IoT**: QR Code scanning, Device integration
- **DevOps**: CI/CD pipelines, Automated testing

## Key Learnings

### 1. Blockchain Integration Challenges

Integrating blockchain with traditional web applications required:
- Understanding gas fees and transaction costs
- Handling wallet connections securely
- Managing network congestion
- Implementing proper error handling

### 2. Mobile Development Best Practices

Building cross-platform apps taught me:
- Importance of responsive design
- Handling different screen sizes
- Optimizing for performance
- Managing app state efficiently

### 3. Serverless Architecture Benefits

Using AWS Lambda provided:
- Significant cost savings
- Automatic scaling
- Reduced operational overhead
- Faster development cycles

## Results & Impact

CleanNFT successfully demonstrates:
- **Innovation**: Combining blockchain, mobile, and IoT technologies
- **Scalability**: Serverless architecture handles growth
- **User Engagement**: Gamification through NFT rewards
- **Sustainability**: Encouraging recycling through incentives

## Future Enhancements

Potential improvements include:
- Machine learning for fraud detection
- Social features for community engagement
- Integration with more recycling centers
- Expansion to other sustainability activities

## Conclusion

Building CleanNFT was an incredible learning experience that combined multiple cutting-edge technologies. The project showcases how blockchain, mobile development, and IoT can work together to create meaningful solutions for environmental sustainability.

The system is live at [cleannft.netlify.app](https://cleannft.netlify.app/) and continues to evolve with new features and improvements.

## Resources

- **Live Demo**: [cleannft.netlify.app](https://cleannft.netlify.app/)
- **Tech Stack**: React Native, Node.js, Solidity, AWS Lambda, IoT
- **Project Type**: Blockchain, Mobile App, IoT Integration
    `,
    date: "2024-03-15",
    author: "Sagar Gopalbarate",
    tags: ["Blockchain", "React Native", "IoT", "AWS", "Solidity", "Mobile Development"]
  }
];

