import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import type { Track } from "./MusicPlaylist";

interface MusicPlayerBarProps {
  track: Track | null;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

const MusicPlayerBar = ({ track, onClose, onNext, onPrevious }: MusicPlayerBarProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(75);

  useEffect(() => {
    if (!track) return;
    
    setIsPlaying(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false);
          return 100;
        }
        return prev + 0.5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [track]);

  if (!track) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-primary/30 shadow-[0_-10px_40px_rgba(220,38,38,0.3)] z-50 animate-slide-in-from-bottom"
      style={{
        animation: 'slideInFromBottom 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
    >
      {/* Progress Bar */}
      <div className="w-full h-1 bg-secondary">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Track Info */}
          <div className="flex items-center gap-4 min-w-0 flex-1">
            <img
              src={track.coverUrl}
              alt={track.title}
              className="w-16 h-16 rounded-lg border-2 border-primary/30 object-cover shadow-lg"
            />
            <div className="min-w-0">
              <h3 className="font-bold text-lg text-foreground truncate">{track.title}</h3>
              <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={onPrevious}
                className="hover:text-primary transition-colors"
              >
                <SkipBack className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-primary hover:bg-primary-glow text-white w-12 h-12 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)]"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6 fill-white" />
                ) : (
                  <Play className="h-6 w-6 fill-white ml-0.5" />
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={onNext}
                className="hover:text-primary transition-colors"
              >
                <SkipForward className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="text-xs text-muted-foreground">
              {Math.floor(progress / 100 * 230)}s / {track.duration}
            </div>
          </div>

          {/* Volume & Close */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <div className="hidden md:flex items-center gap-2">
              <Volume2 className="h-5 w-5 text-muted-foreground" />
              <Slider
                value={[volume]}
                onValueChange={(val) => setVolume(val[0])}
                max={100}
                step={1}
                className="w-24"
              />
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:text-destructive transition-colors"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerBar;
