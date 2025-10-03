import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import missCoverArt from "@/assets/misscoverart.png";
import junkieCoverArt from "@/assets/junkiecoverart.png";
import sibanjiCoverArt from "@/assets/sibanjicoverart.png";
import silahaCoverArt from "@/assets/silahacoverart.png";
import ketepaCoverArt from "@/assets/Ketepacoverart.png";

interface Album {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
}

const albums: Album[] = [
  {
    id: 3,
    title: "Sibanji",
    artist: "Toxic Lyrikali x Taliwan x Beat Kidd",
    coverUrl: sibanjiCoverArt,
  },
  {
    id: 1,
    title: "Miss",
    artist: "Toxic Lyrikali x Taiwan",
    coverUrl: missCoverArt,
  },
  {
    id: 2,
    title: "Junkie",
    artist: "Toxic Lyrikali x Taiwan x Lastie",
    coverUrl: junkieCoverArt,
  },
  {
    id: 4,
    title: "Silaha-Remix",
    artist: "Alex Msafiri ft Scar Mkadinali x Taliwan",
    coverUrl: silahaCoverArt,
  },
  {
    id: 5,
    title: "Ketepa Riddim",
    artist: "Beat Kidd x Taliwan",
    coverUrl: ketepaCoverArt,
  },
];

const AlbumCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % albums.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + albums.length) % albums.length);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {albums.map((album) => (
            <div key={album.id} className="min-w-full">
              <div className="group relative aspect-square overflow-hidden rounded-lg border-2 border-primary/20 hover:border-primary transition-all duration-300">
                <img
                  src={album.coverUrl}
                  alt={`${album.title} by ${album.artist}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{album.title}</h3>
                    <p className="text-gray-300">{album.artist}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="bg-secondary border-primary/20 hover:bg-primary hover:border-primary"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="flex gap-2">
          {albums.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "w-8 bg-primary" 
                  : "w-2 bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="bg-secondary border-primary/20 hover:bg-primary hover:border-primary"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default AlbumCarousel;
