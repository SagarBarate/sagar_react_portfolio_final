import { useState, useEffect, useRef } from 'react';

const ClickGame = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameActive, setGameActive] = useState(false);
  const [targetPosition, setTargetPosition] = useState({ x: 50, y: 50 });
  const gameAreaRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setGameActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [gameActive, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setGameActive(true);
    moveTarget();
  };

  const moveTarget = () => {
    if (gameAreaRef.current) {
      const area = gameAreaRef.current;
      const maxX = area.clientWidth - 40;
      const maxY = area.clientHeight - 40;
      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;
      setTargetPosition({ x: newX, y: newY });
    }
  };

  const handleClick = () => {
    if (gameActive) {
      setScore((prev) => prev + 1);
      moveTarget();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 glass border-3d rounded-2xl bg-navy-800/50 backdrop-blur-lg shadow-2xl">
      <div className="text-center mb-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-dark-orange to-ninja-orange">
          Click Challenge 🎯
        </h3>
        <p className="text-sm text-gray-400 mb-4">Share your best score!</p>
        
        {/* Modern Stats Bar */}
        <div className="flex justify-between items-center mb-4 p-3 rounded-lg bg-navy-900/50 border border-orange-500/30">
          <div className="flex flex-col items-center flex-1">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Score</p>
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-orange to-ninja-orange">
              {score}
            </p>
          </div>
          <div className="h-12 w-px bg-orange-500/30 mx-2"></div>
          <div className="flex flex-col items-center flex-1">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Time</p>
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-orange to-ninja-orange">
              {timeLeft}s
            </p>
          </div>
        </div>
      </div>

      {/* Modern Game Area */}
      <div
        ref={gameAreaRef}
        className="relative w-full h-64 bg-gradient-to-br from-navy-900/90 to-navy-900 rounded-xl overflow-hidden border-3d shadow-inner"
        onClick={handleClick}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(204, 85, 0, 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        {gameActive ? (
          <>
            <div
              className="absolute w-12 h-12 bg-gradient-to-br from-dark-orange to-ninja-orange rounded-full cursor-pointer shadow-2xl transform transition-all duration-200 hover:scale-125 border-4 border-white/30 animate-pulse"
              style={{
                left: `${targetPosition.x}px`,
                top: `${targetPosition.y}px`,
                boxShadow: '0 0 20px rgba(204, 85, 0, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2)'
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
            >
              {/* Inner glow */}
              <div className="absolute inset-2 rounded-full bg-white/20"></div>
            </div>
            {/* Click indicator animation */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-16 h-16 border-2 border-dark-orange/50 rounded-full animate-ping" 
                   style={{
                     left: `${targetPosition.x - 2}px`,
                     top: `${targetPosition.y - 2}px`,
                     animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
                   }}></div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-900/50 backdrop-blur-sm">
            <button
              onClick={startGame}
              className="px-8 py-4 kunai-button font-semibold transition-all transform hover:scale-105 text-lg rounded-xl shadow-lg"
            >
              {score > 0 ? 'Play Again' : 'Start Game'}
            </button>
          </div>
        )}
      </div>

      {!gameActive && score > 0 && (
        <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-dark-orange/20 to-ninja-orange/20 border border-orange-500/30">
          <p className="text-center text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-dark-orange to-ninja-orange">
            Final Score: {score}
          </p>
        </div>
      )}
    </div>
  );
};

export default ClickGame;

