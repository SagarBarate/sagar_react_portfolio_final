import { useState, useEffect, useRef } from 'react';

/**
 * Ninja Runner Game Component
 * A fully functional infinite runner game with Naruto/Ninja theme
 * Similar to Chrome Dino Runner but with ninja-themed obstacles
 * 
 * Features:
 * - Double jump mechanic (jump once in air)
 * - Landing buffer/grace period (200ms after landing)
 * - Proper obstacle spacing (250-600px gaps)
 * - PNG ninja image support (easy to swap)
 */
const NinjaRunner = () => {
  // Game state
  const [score, setScore] = useState(0);
  
  // Refs for game elements
  const gameRef = useRef(null);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const ninjaImageRef = useRef(null);
  
  // Use refs for state that needs to be accessed in closures (event handlers, game loop)
  const gameStartedRef = useRef(false);
  const gameOverRef = useRef(false);
  
  // PNG Image path - EASY TO REPLACE: Just change this line to your PNG path
  // Place your ninja.png in the public folder or src/assets folder
  const ninjaImgSrc = "/assets/ninja.png"; // Change this to your PNG path when ready
  
  // Game state stored in ref to avoid re-renders
  const gameStateRef = useRef({
    ninjaY: 0,              // Current Y position of ninja
    ninjaVelocity: 0,      // Vertical velocity for jump physics
    obstacles: [],          // Array of active obstacles
    gameSpeed: 4,          // Base horizontal speed
    lastObstacleTime: 0,   // Timestamp of last obstacle creation
    lastObstacleX: 0,      // X position of last obstacle (for spacing)
    groundOffset: 0,       // Offset for treadmill ground animation
    frameCount: 0,         // Frame counter for animations
    jumpCount: 0,          // Current number of jumps used (0, 1, or 2)
    landingTime: 0         // Timestamp when ninja last landed (for landing buffer)
  });

  // Game constants
  const NINJA_SIZE = 60;           // Size of ninja character
  const NINJA_X = 100;              // Fixed X position of ninja
  const GROUND_HEIGHT = 50;         // Height of ground/treadmill
  const GRAVITY = 0.9;              // Gravity force
  const JUMP_POWER = -18;           // Jump velocity (negative = up)
  const MAX_JUMPS = 2;              // Maximum number of jumps (double jump)
  const MIN_OBSTACLE_GAP = 250;     // Minimum gap between obstacles (pixels) - safe spacing
  const MAX_OBSTACLE_GAP = 600;     // Maximum gap between obstacles (pixels)
  const LANDING_BUFFER_MS = 200;    // Landing grace period in milliseconds (prevents instant death)
  const TREADMILL_SPEED = 8;        // Speed of ground texture movement

  /**
   * Get ground Y position based on canvas height
   */
  const getGroundY = () => {
    if (!gameRef.current) return 0;
    const rect = gameRef.current.getBoundingClientRect();
    if (rect.height === 0) return 0; // Canvas not ready
    return rect.height - GROUND_HEIGHT - NINJA_SIZE;
  };

  /**
   * Check if ninja is currently on the ground
   */
  const isOnGround = () => {
    const groundY = getGroundY();
    return gameStateRef.current.ninjaY >= groundY - 1;
  };

  /**
   * Check if landing buffer is active (grace period after landing)
   */
  const isLandingBufferActive = () => {
    if (gameStateRef.current.landingTime === 0) return false;
    const now = Date.now();
    return (now - gameStateRef.current.landingTime) < LANDING_BUFFER_MS;
  };

  /**
   * Jump function - handles ninja jump physics with DOUBLE JUMP support
   * Allows: First jump on ground, second jump in air
   */
  const jump = () => {
    // Check game state using refs (not state) to avoid closure issues
    if (gameOverRef.current) {
      // Restart game on space press when game over
      startGame();
      return;
    }

    if (!gameStartedRef.current) {
      startGame();
      return;
    }

    // DOUBLE JUMP LOGIC
    const groundY = getGroundY();
    const isGrounded = isOnGround();
    
    if (isGrounded) {
      // First jump from ground - reset jump count
      gameStateRef.current.jumpCount = 1;
      gameStateRef.current.ninjaVelocity = JUMP_POWER;
    } else if (gameStateRef.current.jumpCount < MAX_JUMPS) {
      // Second jump in air (double jump) - only if jump count allows
      gameStateRef.current.jumpCount++;
      gameStateRef.current.ninjaVelocity = JUMP_POWER;
    }
    // If already used both jumps, do nothing until landing
  };

  /**
   * Start the game - reset all state and begin game loop
   */
  const startGame = () => {
    gameStartedRef.current = true;
    gameOverRef.current = false;
    setScore(0);
    
    // Reset game state
    const groundY = getGroundY();
    if (groundY === 0) {
      // Canvas not ready, try again after a short delay
      setTimeout(startGame, 100);
      return;
    }
    
    gameStateRef.current = {
      ninjaY: groundY,
      ninjaVelocity: 0,
      obstacles: [],
      gameSpeed: 4,
      lastObstacleTime: Date.now(),
      lastObstacleX: 0,
      groundOffset: 0,
      frameCount: 0,
      jumpCount: 0,
      landingTime: 0
    };

    // Start game loop
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    gameLoop();
  };

  /**
   * End the game - stop animations and show game over
   */
  const endGame = () => {
    gameOverRef.current = true;
    gameStartedRef.current = false;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    // Force a re-render to show game over screen
    gameLoop();
  };

  /**
   * Create a new obstacle with random type and PROPER SPACING
   * Ensures minimum safe gap between obstacles
   */
  const createObstacle = (canvasWidth) => {
    const types = ['kunai', 'shuriken', 'post'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    // Different sizes for different obstacle types
    const sizes = {
      kunai: 35,
      shuriken: 30,
      post: 45
    };
    
    const size = sizes[type];
    const groundY = getGroundY();
    
    // Calculate proper spacing from last obstacle
    // Ensure minimum gap for safe landing
    let x = canvasWidth;
    if (gameStateRef.current.lastObstacleX > 0) {
      const distanceFromLast = canvasWidth - gameStateRef.current.lastObstacleX;
      if (distanceFromLast < MIN_OBSTACLE_GAP) {
        // Not enough space, place it further
        x = gameStateRef.current.lastObstacleX + MIN_OBSTACLE_GAP + size;
      }
    }
    
    const obstacle = {
      x: x,
      y: groundY + NINJA_SIZE - size,
      type: type,
      size: size,
      passed: false
    };
    
    // Update last obstacle position for spacing calculation
    gameStateRef.current.lastObstacleX = x;
    
    return obstacle;
  };

  /**
   * Main game loop - handles all game logic and rendering
   * Uses requestAnimationFrame for smooth 60fps animation
   */
  const gameLoop = () => {
    if (!gameRef.current || !canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = gameRef.current.getBoundingClientRect();
    
    // Check if container has valid dimensions
    if (rect.width === 0 || rect.height === 0) {
      // Container not ready, try again
      animationFrameRef.current = requestAnimationFrame(gameLoop);
      return;
    }
    
    // Set canvas size to match container (use devicePixelRatio for crisp rendering)
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    // Now work with logical pixels
    const canvasWidth = rect.width;
    const canvasHeight = rect.height;
    const groundY = getGroundY();
    
    gameStateRef.current.frameCount++;

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw background
    ctx.fillStyle = '#FFF5E6';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw subtle background pattern
    ctx.strokeStyle = 'rgba(249, 115, 22, 0.08)';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvasWidth; i += 60) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvasHeight);
      ctx.stroke();
    }

    // Update and draw moving ground (treadmill effect)
    if (gameStartedRef.current && !gameOverRef.current) {
      gameStateRef.current.groundOffset += TREADMILL_SPEED;
      if (gameStateRef.current.groundOffset > 60) {
        gameStateRef.current.groundOffset = 0;
      }
    }

    // Draw ground/treadmill with moving texture
    const groundYPos = groundY + NINJA_SIZE;
    ctx.fillStyle = '#F97316';
    ctx.fillRect(0, groundYPos, canvasWidth, GROUND_HEIGHT);
    
    // Draw moving ground texture (treadmill effect)
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    for (let i = -gameStateRef.current.groundOffset; i < canvasWidth; i += 60) {
      ctx.beginPath();
      ctx.moveTo(i, groundYPos);
      ctx.lineTo(i, groundYPos + GROUND_HEIGHT);
      ctx.stroke();
    }
    
    // Draw ground border
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, groundYPos, canvasWidth, 3);

    // Update ninja physics (gravity and jump)
    if (gameStartedRef.current && !gameOverRef.current) {
      const wasOnGround = isOnGround();
      
      // Apply gravity
      gameStateRef.current.ninjaVelocity += GRAVITY;
      
      // Update position
      gameStateRef.current.ninjaY += gameStateRef.current.ninjaVelocity;
      
      // Ground collision detection
      const isGroundedNow = isOnGround();
      if (gameStateRef.current.ninjaY >= groundY) {
        gameStateRef.current.ninjaY = groundY;
        gameStateRef.current.ninjaVelocity = 0;
        
        // LANDING BUFFER: Reset jump count and set landing time
        if (!wasOnGround && isGroundedNow) {
          // Just landed - reset jump count and start landing buffer
          gameStateRef.current.jumpCount = 0;
          gameStateRef.current.landingTime = Date.now();
        }
      }

      // Create new obstacles with PROPER SPACING
      const now = Date.now();
      const timeSinceLastObstacle = now - gameStateRef.current.lastObstacleTime;
      
      // Calculate gap based on distance and time
      // Use both time-based and distance-based spacing for safety
      const minGapTime = MIN_OBSTACLE_GAP / gameStateRef.current.gameSpeed;
      const maxGapTime = MAX_OBSTACLE_GAP / gameStateRef.current.gameSpeed;
      const gapTime = minGapTime + Math.random() * (maxGapTime - minGapTime);
      
      // Also check distance from last obstacle
      const lastObstacle = gameStateRef.current.obstacles[gameStateRef.current.obstacles.length - 1];
      const distanceFromLast = lastObstacle 
        ? canvasWidth - lastObstacle.x 
        : Infinity;
      
      if (timeSinceLastObstacle > gapTime && distanceFromLast >= MIN_OBSTACLE_GAP) {
        gameStateRef.current.obstacles.push(createObstacle(canvasWidth));
        gameStateRef.current.lastObstacleTime = now;
      }

      // Update obstacles (move them left)
      gameStateRef.current.obstacles = gameStateRef.current.obstacles.map(obstacle => {
        obstacle.x -= gameStateRef.current.gameSpeed;
        
        // Update last obstacle X for spacing calculation
        if (obstacle.x + obstacle.size > gameStateRef.current.lastObstacleX) {
          gameStateRef.current.lastObstacleX = obstacle.x;
        }
        
        // Score when obstacle is passed
        if (!obstacle.passed && obstacle.x + obstacle.size < NINJA_X) {
          obstacle.passed = true;
          setScore(prev => prev + 1);
        }
        
        return obstacle;
      }).filter(obstacle => obstacle.x + obstacle.size > 0);

      // Gradually increase game speed
      gameStateRef.current.gameSpeed = 4 + (score * 0.015);

      // Collision detection between ninja and obstacles
      // LANDING BUFFER: Skip collision during grace period
      if (!isLandingBufferActive()) {
        const ninjaLeft = NINJA_X;
        const ninjaRight = NINJA_X + NINJA_SIZE;
        const ninjaTop = gameStateRef.current.ninjaY;
        const ninjaBottom = gameStateRef.current.ninjaY + NINJA_SIZE;

        for (const obstacle of gameStateRef.current.obstacles) {
          const obstacleLeft = obstacle.x;
          const obstacleRight = obstacle.x + obstacle.size;
          const obstacleTop = obstacle.y;
          const obstacleBottom = obstacle.y + obstacle.size;

          // AABB collision detection
          if (ninjaRight > obstacleLeft && 
              ninjaLeft < obstacleRight && 
              ninjaBottom > obstacleTop && 
              ninjaTop < obstacleBottom) {
            endGame();
            return;
          }
        }
      }
    }

    // Draw ninja character (with PNG support)
    drawNinja(ctx, gameStateRef.current.ninjaY, canvasWidth, canvasHeight);

    // Draw obstacles
    gameStateRef.current.obstacles.forEach(obstacle => {
      drawObstacle(ctx, obstacle);
    });

    // Draw UI overlays
    if (gameOverRef.current) {
      drawGameOver(ctx, canvasWidth, canvasHeight);
    } else if (!gameStartedRef.current) {
      drawStartScreen(ctx, canvasWidth, canvasHeight);
    }

    // Continue game loop - always request next frame
    animationFrameRef.current = requestAnimationFrame(gameLoop);
  };

  /**
   * Draw ninja character - supports PNG image or fallback to drawn sprite
   * EASY TO SWAP: Just change ninjaImgSrc constant at top of file
   */
  const drawNinja = (ctx, y, canvasWidth, canvasHeight) => {
    const x = NINJA_X;
    
    // Try to draw PNG image if loaded, otherwise draw sprite
    if (ninjaImageRef.current && ninjaImageRef.current.complete) {
      // Draw PNG image
      ctx.drawImage(
        ninjaImageRef.current,
        x,
        y,
        NINJA_SIZE,
        NINJA_SIZE
      );
    } else {
      // Fallback: Draw ninja sprite (stylized character)
      // Body (orange ninja suit) 🥷🏻
      ctx.fillStyle = '#F97316';
      ctx.beginPath();
      ctx.arc(x + NINJA_SIZE / 2, y + NINJA_SIZE / 2, NINJA_SIZE / 2, 0, Math.PI * 2);
      ctx.fill();
      
      // Headband
      ctx.fillStyle = '#000000';
      ctx.fillRect(x + 8, y + 8, NINJA_SIZE - 16, 10);
      
      // Eyes (white with black pupils)
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(x + 20, y + 25, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x + 40, y + 25, 6, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(x + 20, y + 25, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x + 40, y + 25, 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Mask/mouth area
      ctx.fillStyle = '#000000';
      ctx.fillRect(x + 18, y + 35, NINJA_SIZE - 36, 8);
      
      // Arms (running pose)
      const legFrame = Math.floor(gameStateRef.current.frameCount / 8) % 2;
      ctx.fillStyle = '#000000';
      if (legFrame === 0) {
        // Left arm up, right arm down
        ctx.fillRect(x - 5, y + 15, 8, 20);
        ctx.fillRect(x + NINJA_SIZE - 3, y + 20, 8, 20);
      } else {
        // Right arm up, left arm down
        ctx.fillRect(x - 5, y + 20, 8, 20);
        ctx.fillRect(x + NINJA_SIZE - 3, y + 15, 8, 20);
      }
      
      // Legs (running animation)
      ctx.fillStyle = '#000000';
      if (legFrame === 0) {
        ctx.fillRect(x + 12, y + NINJA_SIZE - 8, 10, 8);
        ctx.fillRect(x + 38, y + NINJA_SIZE - 5, 10, 5);
      } else {
        ctx.fillRect(x + 12, y + NINJA_SIZE - 5, 10, 5);
        ctx.fillRect(x + 38, y + NINJA_SIZE - 8, 10, 8);
      }
    }
  };

  /**
   * Draw obstacle based on type
   */
  const drawObstacle = (ctx, obstacle) => {
    ctx.fillStyle = '#000000';
    
    if (obstacle.type === 'kunai') {
      // Draw kunai (throwing knife)
      ctx.beginPath();
      ctx.moveTo(obstacle.x, obstacle.y);
      ctx.lineTo(obstacle.x + obstacle.size, obstacle.y + obstacle.size / 2);
      ctx.lineTo(obstacle.x, obstacle.y + obstacle.size);
      ctx.closePath();
      ctx.fill();
      // Handle
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(obstacle.x + obstacle.size - 8, obstacle.y + obstacle.size / 2 - 3, 6, 6);
    } else if (obstacle.type === 'shuriken') {
      // Draw shuriken (star/ninja star)
      const centerX = obstacle.x + obstacle.size / 2;
      const centerY = obstacle.y + obstacle.size / 2;
      const radius = obstacle.size / 2;
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const angle = (Math.PI / 4) * i;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
    } else if (obstacle.type === 'post') {
      // Draw wooden training post
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.size, obstacle.size);
      ctx.fillStyle = '#654321';
      ctx.fillRect(obstacle.x + 3, obstacle.y + 3, obstacle.size - 6, obstacle.size - 6);
      // Wood grain lines
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(obstacle.x + 5, obstacle.y + 8 + i * 10);
        ctx.lineTo(obstacle.x + obstacle.size - 5, obstacle.y + 8 + i * 10);
        ctx.stroke();
      }
    }
  };

  /**
   * Draw game over screen
   */
  const drawGameOver = (ctx, width, height) => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
    ctx.fillRect(0, 0, width, height);
    
    ctx.fillStyle = '#F97316';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Game Over', width / 2, height / 2 - 30);
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '18px Arial';
    ctx.fillText('Press SPACE to Restart', width / 2, height / 2 + 10);
    ctx.fillText(`Final Score: ${score}`, width / 2, height / 2 + 40);
  };

  /**
   * Draw start screen
   */
  const drawStartScreen = (ctx, width, height) => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, width, height);
    
    ctx.fillStyle = '#F97316';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Press SPACE to Start', width / 2, height / 2);
    ctx.font = '16px Arial';
    ctx.fillText('Double jump available! 🥷🏻', width / 2, height / 2 + 30);
  };

  // Load ninja PNG image and handle keyboard input
  useEffect(() => {
    // Load ninja PNG image (if provided)
    if (ninjaImgSrc) {
      const img = new Image();
      img.src = ninjaImgSrc;
      img.onload = () => {
        ninjaImageRef.current = img;
      };
      img.onerror = () => {
        // Image failed to load, will use fallback sprite
        console.log('Ninja PNG not found, using fallback sprite');
        ninjaImageRef.current = null;
      };
    }

    const handleKeyPress = (e) => {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        jump();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    
    // Initialize canvas and start render loop
    const initCanvas = () => {
      if (gameRef.current && canvasRef.current) {
        const rect = gameRef.current.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) {
          // Container not ready, try again
          setTimeout(initCanvas, 50);
          return;
        }
        
        // Start the render loop (it will handle initialization)
        if (!animationFrameRef.current) {
          gameLoop();
        }
      } else {
        setTimeout(initCanvas, 50);
      }
    };
    
    // Wait a bit for DOM to be ready
    setTimeout(initCanvas, 100);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, []); // Empty deps - only run on mount/unmount

  return (
    <div className="w-full">
      <div className="glass scroll-card p-6 rounded-2xl bg-navy-800/50 backdrop-blur-lg border-3d shadow-2xl">
        {/* Modern Header */}
        <div className="text-center mb-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 ninja-text text-transparent bg-clip-text bg-gradient-to-r from-dark-orange to-ninja-orange">
            Ninja Runner 🥷🏻
          </h3>
          
          {/* Stats Bar */}
          <div className="flex justify-between items-center mb-4 p-3 rounded-lg bg-navy-900/50 border border-orange-500/30">
            <div className="flex flex-col items-center">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Score</p>
              <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-orange to-ninja-orange">
                {score}
              </p>
            </div>
            <div className="h-12 w-px bg-orange-500/30"></div>
            <div className="flex flex-col items-center">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Controls</p>
              <p className="text-sm text-gray-300 font-semibold">
                SPACE: Jump
              </p>
            </div>
          </div>
        </div>

        {/* Game canvas container - Modern styling */}
        <div className="relative rounded-xl overflow-hidden border-3d shadow-inner bg-gradient-to-b from-navy-900/80 to-navy-900">
          <div
            ref={gameRef}
            className="relative w-full overflow-hidden bg-white/95"
            style={{ height: '500px', minHeight: '400px' }}
          >
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
              style={{ display: 'block' }}
            />
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-navy-900/10 to-transparent"></div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400 font-medium">
            Share your best score! 🎯
          </p>
          {score > 0 && !gameStartedRef.current && gameOverRef.current && (
            <p className="text-xs text-gray-500 mt-2">
              Press SPACE to restart
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NinjaRunner;
