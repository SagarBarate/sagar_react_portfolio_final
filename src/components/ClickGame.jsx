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
    <div className="w-full max-w-md mx-auto p-6 glass rounded-2xl">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold mb-2">Click Challenge Game Share me your best score</h3>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Score</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{score}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Time</p>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{timeLeft}s</p>
          </div>
        </div>
      </div>

      <div
        ref={gameAreaRef}
        className="relative w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl overflow-hidden border-2 border-blue-300 dark:border-blue-700"
        onClick={handleClick}
      >
        {gameActive ? (
          <div
            className="absolute w-10 h-10 bg-red-500 rounded-full cursor-pointer shadow-lg transform transition-all duration-200 hover:scale-110 animate-pulse"
            style={{
              left: `${targetPosition.x}px`,
              top: `${targetPosition.y}px`,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={startGame}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-lg"
            >
              {score > 0 ? 'Play Again' : 'Start Game'}
            </button>
          </div>
        )}
      </div>

      {!gameActive && score > 0 && (
        <p className="text-center mt-4 text-lg font-semibold text-green-600 dark:text-green-400">
          Final Score: {score}
        </p>
      )}
    </div>
  );
};

export default ClickGame;

