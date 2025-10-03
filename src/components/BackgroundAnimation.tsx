const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px] animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '1s' }} />
      
      {/* Equalizer bars */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-2 px-4 pb-4">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="w-1 bg-gradient-to-t from-primary to-transparent rounded-full"
            style={{
              height: `${Math.random() * 100 + 20}px`,
              animation: `equalizer ${Math.random() * 0.5 + 0.5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundAnimation;
