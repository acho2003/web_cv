import React, { useEffect, useRef, useState } from 'react';

const SpaceShooter: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let player = { x: canvas.width / 2, y: canvas.height - 30, width: 20, height: 20 };
    let bullets: { x: number; y: number }[] = [];
    let enemies: { x: number; y: number; speed: number }[] = [];
    let frames = 0;
    let isGameOver = false;
    let currentScore = 0;

    const gameLoop = () => {
      if (isGameOver) return;

      frames++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background stars
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (Math.random() < 0.1) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
      }

      // Player Movement (Mouse follows)
      // Done via event listener below, just drawing here
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.moveTo(player.x, player.y);
      ctx.lineTo(player.x - 10, player.y + 20);
      ctx.lineTo(player.x + 10, player.y + 20);
      ctx.fill();

      // Bullets
      ctx.fillStyle = '#f43f5e';
      bullets.forEach((b, i) => {
        b.y -= 5;
        ctx.fillRect(b.x - 2, b.y, 4, 10);
        if (b.y < 0) bullets.splice(i, 1);
      });

      // Enemies
      if (frames % 60 === 0) {
        enemies.push({
          x: Math.random() * (canvas.width - 20),
          y: -20,
          speed: Math.random() * 2 + 1
        });
      }

      ctx.fillStyle = '#94a3b8';
      enemies.forEach((e, i) => {
        e.y += e.speed;
        ctx.fillRect(e.x, e.y, 20, 20);

        // Collision with player
        if (
          player.x < e.x + 20 &&
          player.x + 20 > e.x &&
          player.y < e.y + 20 &&
          player.y + 20 > e.y
        ) {
          isGameOver = true;
          setGameOver(true);
        }

        // Collision with bullets
        bullets.forEach((b, bi) => {
          if (b.x > e.x && b.x < e.x + 20 && b.y > e.y && b.y < e.y + 20) {
            enemies.splice(i, 1);
            bullets.splice(bi, 1);
            currentScore += 10;
            setScore(currentScore);
          }
        });

        if (e.y > canvas.height) enemies.splice(i, 1);
      });

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      player.x = e.clientX - rect.left;
    };

    const handleClick = () => {
      if (!isGameOver) {
        bullets.push({ x: player.x, y: player.y });
      } else {
        // Restart logic handled by parent state for simplicity or reload
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    gameLoop();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
    };
  }, [gameOver]); // Re-run if gameOver resets (though we only set it to true here)

  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 text-sm text-slate-400">Mouse to move, Click to shoot</div>
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="bg-slate-900 rounded border border-slate-700 cursor-crosshair max-w-full"
        />
        {gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/70">
            <div className="text-center">
              <h3 className="text-xl font-bold text-red-500 mb-2">GAME OVER</h3>
              <p className="text-white">Score: {score}</p>
              <button
                onClick={() => {
                   setGameOver(false);
                   setScore(0);
                }}
                className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-slate-200"
              >
                Restart
              </button>
            </div>
          </div>
        )}
        <div className="absolute top-2 left-2 text-white font-mono text-sm">Score: {score}</div>
      </div>
    </div>
  );
};

export default SpaceShooter;