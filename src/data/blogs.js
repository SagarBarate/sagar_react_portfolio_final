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
  }
];

