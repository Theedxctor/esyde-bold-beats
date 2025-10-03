import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Album {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
}

const albums: Album[] = [
  {
    id: 1,
    title: "Junkie",
    artist: "E-Side",
    coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Midnight Vibes",
    artist: "E-Side",
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Urban Dreams",
    artist: "E-Side",
    coverUrl: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop"
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
