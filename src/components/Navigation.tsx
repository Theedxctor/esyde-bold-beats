import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">E-SYDE</div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About Us
            </button>
            <button onClick={() => scrollToSection('work')} className="nav-link">
              Our Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact Us
            </button>
          </div>

          <Button 
            className="cta-button"
            onClick={() => scrollToSection('contact')}
          >
            Book Session
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
