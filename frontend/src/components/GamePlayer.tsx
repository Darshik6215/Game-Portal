'use client';

import { useState, useEffect } from 'react';
import { Maximize, Minimize, RotateCcw, Play, Loader2 } from 'lucide-react';

interface GamePlayerProps {
  gameUrl: string;
  title: string;
  onPlay?: () => void;
}

export default function GamePlayer({ gameUrl, title, onPlay }: GamePlayerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    const container = document.getElementById('game-container');
    if (!container) return;

    try {
      if (!document.fullscreenElement) {
        await container.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };

  const reloadGame = () => {
    setKey(prev => prev + 1);
    setIsLoading(true);
    setHasStarted(false);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handlePlayClick = () => {
    setHasStarted(true);
    if (onPlay) {
      onPlay();
    }
  };

  return (
    <div 
      id="game-container"
      className="relative w-full aspect-video bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Loading Overlay */}
      {isLoading && hasStarted && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="text-center">
            <Loader2 className="h-12 w-12 text-primary animate-spin mx-auto mb-4" />
            <p className="text-white font-medium">Loading {title}...</p>
          </div>
        </div>
      )}

      {/* Play Button Overlay (Before Game Starts) */}
      {!hasStarted && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-br from-black/60 to-black/80 backdrop-blur-sm">
          <div className="text-center px-4">
            <button
              onClick={handlePlayClick}
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
              <div className="relative bg-primary hover:bg-primary/90 text-white p-8 rounded-full shadow-2xl transition-all group-hover:scale-110">
                <Play className="h-16 w-16 fill-current" />
              </div>
            </button>
            <h2 className="text-3xl font-bold text-white mt-6 mb-2">Click to Play</h2>
            <p className="text-slate-300 text-lg">{title}</p>
          </div>
        </div>
      )}

      {/* Game Controls */}
      {hasStarted && (
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <button
            onClick={reloadGame}
            className="p-3 bg-white/90 hover:bg-white rounded-xl shadow-lg transition-all hover:scale-105 group"
            title="Reload Game"
          >
            <RotateCcw className="h-5 w-5 text-slate-700 group-hover:rotate-180 transition-transform duration-500" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-3 bg-white/90 hover:bg-white rounded-xl shadow-lg transition-all hover:scale-105"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? (
              <Minimize className="h-5 w-5 text-slate-700" />
            ) : (
              <Maximize className="h-5 w-5 text-slate-700" />
            )}
          </button>
        </div>
      )}

      {/* Game Iframe */}
      {hasStarted && (
        <iframe
          key={key}
          id="game-iframe"
          src={gameUrl}
          title={title}
          className="w-full h-full border-0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-pointer-lock"
          onLoad={handleIframeLoad}
        />
      )}
    </div>
  );
}
