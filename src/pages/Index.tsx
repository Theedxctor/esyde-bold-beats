import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import AlbumCarousel from "@/components/AlbumCarousel";
import MusicPlaylist from "@/components/MusicPlaylist";
import MusicPlayerBar from "@/components/MusicPlayerBar";
import ScrollAnimation from "@/components/ScrollAnimation";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { Button } from "@/components/ui/button";
import esydeLogo from "@/assets/esyde-logo.png";
import type { Track } from "@/components/MusicPlaylist";

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handlePlayTrack = (track: Track) => {
    setCurrentTrack(track);
  };

  const handleClosePlayer = () => {
    setCurrentTrack(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <BackgroundAnimation />
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-20 flex items-center relative z-10">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Text */}
            <ScrollAnimation>
              <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="hero-text text-foreground">
                  It's more than music
                </h1>
                <h1 className="hero-text bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  It's a culture
                </h1>
                <h1 className="hero-text text-foreground">
                  It's art
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                At E-Syde our primary goal is to revolutionize the entertainment 
                industry into something beyond your wildest imaginations.
              </p>

              <Button className="cta-button">
                Book Session
              </Button>
              </div>
            </ScrollAnimation>

            {/* Right Side - Logo & Carousel */}
            <ScrollAnimation delay={200}>
              <div className="space-y-12">
              <div className="flex justify-center">
                <img 
                  src={esydeLogo} 
                  alt="E-SYDE Entertainment Logo" 
                  className="w-64 h-64 object-contain drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                  Featured Releases
                </h2>
                <AlbumCarousel />
              </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Music Playlist Section */}
      <MusicPlaylist onPlayTrack={handlePlayTrack} />

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center bg-secondary/30 relative z-10">
        <div className="container mx-auto px-6 py-20">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                About E-SYDE
              </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We are more than just an entertainment company. We are a movement, 
              a collective of artists, producers, and visionaries pushing the 
              boundaries of what's possible in music and culture.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className="p-6 rounded-lg bg-card border border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-glow">
                <h3 className="text-2xl font-bold mb-4 text-primary">Innovation</h3>
                <p className="text-muted-foreground">
                  Pushing creative boundaries with cutting-edge production and unique sounds.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-glow">
                <h3 className="text-2xl font-bold mb-4 text-primary">Culture</h3>
                <p className="text-muted-foreground">
                  Building a community that celebrates art, music, and authentic expression.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-glow">
                <h3 className="text-2xl font-bold mb-4 text-primary">Excellence</h3>
                <p className="text-muted-foreground">
                  Delivering world-class productions that exceed expectations.
                </p>
              </div>
            </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="min-h-screen flex items-center relative z-10">
        <div className="container mx-auto px-6 py-20">
          <ScrollAnimation>
            <div className="text-center space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Our Work
              </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From production to performance, we bring vision to life.
            </p>
              <div className="pt-12">
                <AlbumCarousel />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center bg-secondary/30 relative z-10">
        <div className="container mx-auto px-6 py-20">
          <ScrollAnimation>
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Let's Create Together
              </h2>
            <p className="text-xl text-muted-foreground">
              Ready to take your project to the next level? Book a session with us today.
            </p>
            <Button className="cta-button text-xl px-12 py-6">
              Book Your Session Now
            </Button>
            <div className="pt-12 text-muted-foreground space-y-4">
              <p className="text-lg">Email: contact@esyde-entertainment.com</p>
              <p className="text-lg">Follow us on social media for updates</p>
            </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 relative z-10">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2025 E-SYDE Entertainment. All rights reserved.</p>
        </div>
      </footer>

      {/* Music Player Bar */}
      <MusicPlayerBar
        track={currentTrack}
        onClose={handleClosePlayer}
        onNext={() => {/* Next track logic */}}
        onPrevious={() => {/* Previous track logic */}}
      />
    </div>
  );
};

export default Index;
