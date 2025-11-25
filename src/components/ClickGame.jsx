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
    <div className="w-full max-w-md mx-auto p-6 glass border-3d rounded-2xl bg-navy-800/40">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold mb-2 text-white">Click Challenge Game Share me your best score</h3>
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-300">Score</p>
            <p className="text-2xl font-bold text-dark-orange">{score}</p>
          </div>
          <div>
            <p className="text-sm text-gray-300">Time</p>
            <p className="text-2xl font-bold text-dark-orange">{timeLeft}s</p>
          </div>
        </div>
      </div>

      <div
        ref={gameAreaRef}
        className="relative w-full h-64 bg-navy-900 rounded-xl overflow-hidden border-2 border-orange-500/40"
        onClick={handleClick}
      >
        {gameActive ? (
          <div
            className="absolute w-10 h-10 bg-dark-orange rounded-full cursor-pointer shadow-lg transform transition-all duration-200 hover:scale-110 animate-pulse border-2 border-orange-500"
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
              className="px-6 py-3 kunai-button font-semibold transition-colors"
            >
              {score > 0 ? 'Play Again' : 'Start Game'}
            </button>
          </div>
        )}
      </div>

      {!gameActive && score > 0 && (
        <p className="text-center mt-4 text-lg font-semibold text-dark-orange">
          Final Score: {score}
        </p>
      )}
    </div>
  );
};

export default ClickGame;

