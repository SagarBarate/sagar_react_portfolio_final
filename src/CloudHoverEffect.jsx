import React, { useState, useEffect } from "react";
import "./App.css"; // Import the global CSS

const CloudHoverEffect = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    console.log("Hover State:", isHovered);
  }, [isHovered]);
  // Define the cloud shape as an array of relative positions
  const cloudShape = [
    [0, 0], [1, 0], [2, 0], [3, 0], [4, 0],
    [0, 1], [1, 1], [2, 1], [3, 1], [4, 1],
    [1, 2], [2, 2], [3, 2],
    [2, 3]
  ];

  // Function to generate dots
  const generateDots = () => {
    const dots = [];
    const dotSpacing = 20; // Adjust spacing between dots
    const gridWidth = Math.floor(window.innerWidth / dotSpacing);
    const gridHeight = Math.floor(document.body.scrollHeight / dotSpacing); // Use scrollHeight for full page height

    for (let y = 0; y < gridHeight; y++) {
      for (let x = 0; x < gridWidth; x++) {
        const isInCloud = cloudShape.some(([dx, dy]) => x === dx && y === dy);
        const offsetX = isInCloud ? (x - 2) * dotSpacing : 0;
        const offsetY = isInCloud ? (y - 1) * dotSpacing : 0;

        dots.push(
          <div
            key={`${x}-${y}`}
            className="dot"
            style={{
              left: `${x * dotSpacing}px`,
              top: `${y * dotSpacing}px`,
              "--cloud-offset-x": `${offsetX}px`,
              "--cloud-offset-y": `${offsetY}px`,
            }}
          ></div>
        );
      }
    }

    return dots;
  };

  return (
    <div
      className={`cloud-hover-effect ${isHovered ? "active" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {generateDots()}
    </div>
  );
};

export default CloudHoverEffect;