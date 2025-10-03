import { useState } from "react";
import { Play } from "lucide-react";

interface Track {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
  duration: string;
}

interface MusicPlaylistProps {
  onPlayTrack: (track: Track) => void;
}

const tracks: Track[] = [
  {
    id: 1,
    title: "Junkie",
    artist: "E-Side",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    duration: "3:45"
  },
  {
    id: 2,
    title: "Midnight Vibes",
    artist: "E-Side",
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    duration: "4:12"
  },
  {
    id: 3,
    title: "Urban Dreams",
    artist: "E-Side",
    coverUrl: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop",
    duration: "3:28"
  },
  {
    id: 4,
    title: "Neon Nights",
    artist: "E-Side",
    coverUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop",
    duration: "4:05"
  },
  {
    id: 5,
    title: "Street Symphony",
    artist: "E-Side",
    coverUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
    duration: "3:52"
  },
  {
    id: 6,
    title: "Bass Lines",
    artist: "E-Side",
    coverUrl: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop",
    duration: "4:20"
  },
];

const MusicPlaylist = ({ onPlayTrack }: MusicPlaylistProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="w-full py-20 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Latest Releases
        </h2>
        
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="flex-shrink-0 w-64 snap-center group cursor-pointer"
                onMouseEnter={() => setHoveredId(track.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onPlayTrack(track)}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-primary/20 transition-all duration-500 group-hover:border-primary group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]">
                  <img
                    src={track.coverUrl}
                    alt={`${track.title} by ${track.artist}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Track Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-1">{track.title}</h3>
                    <p className="text-gray-300 text-sm">{track.artist}</p>
                    <p className="text-gray-400 text-xs mt-1">{track.duration}</p>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div 
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      hoveredId === track.id 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-75'
                    }`}
                  >
                    <div className="bg-primary/90 rounded-full p-6 backdrop-blur-sm animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(220,38,38,0.8)]">
                      <Play className="h-12 w-12 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlaylist;
export type { Track };
