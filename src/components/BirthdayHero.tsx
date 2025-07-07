import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Gift } from "lucide-react";

const BirthdayHero = () => {
  const [showLetter, setShowLetter] = useState(false);

  const toggleLetter = () => {
    setShowLetter(!showLetter);
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-celebration-pink opacity-20 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${12 + Math.random() * 8}px`,
            }}
          />
        ))}
      </div>

      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 animate-confetti-fall"
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: [
                "hsl(325, 85%, 65%)",
                "hsl(340, 80%, 70%)",
                "hsl(45, 90%, 70%)",
                "hsl(290, 70%, 75%)",
              ][Math.floor(Math.random() * 4)],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-8 z-10">
        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-romantic bg-clip-text text-transparent animate-pulse-heart">
            Happy Birthday
          </h1>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="text-celebration-gold animate-twinkle" size={32} />
            <h2 className="text-4xl md:text-6xl font-semibold text-primary">
              Madam Ji
            </h2>
            <Sparkles className="text-celebration-gold animate-twinkle" size={32} />
          </div>
        </div>

        {/* Birthday Card */}
        <Card className="max-w-lg mx-auto p-8 bg-gradient-memories shadow-celebration backdrop-blur-sm border-celebration-pink/20">
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-2 mb-4">
              <Heart className="text-celebration-rose animate-pulse" size={24} />
              <Gift className="text-celebration-gold animate-bounce-gentle" size={24} />
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-4">
              To the most amazing woman in my life
            </h3>
            
            {!showLetter ? (
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Every moment with you is a gift, and today we celebrate the greatest gift of all - YOU! 
                </p>
                <Button 
                  variant="surprise" 
                  size="lg" 
                  onClick={toggleLetter}
                  className="rounded-full font-semibold"
                >
                  <Heart className="mr-2" size={20} />
                  Read Your Special Letter
                </Button>
              </div>
            ) : (
              <div className="space-y-4 animate-fade-in">
                <div className="text-left space-y-3 text-foreground">
                  <p className="italic">My Dearest Madam Ji,</p>
                  <p className="leading-relaxed">
                    On this special day, I want you to know how incredibly blessed I feel to have you in my life. 
                    Your smile brightens my darkest days, your laughter fills my heart with joy, and your love 
                    gives my life meaning.
                  </p>
                  <p className="leading-relaxed">
                    You are not just my partner, but my best friend, my confidant, and my greatest source of 
                    happiness. Every day with you feels like a celebration, but today is extra special because 
                    it's all about YOU.
                  </p>
                  <p className="leading-relaxed">
                    I promise to keep making you smile, to cherish every moment we share, and to love you 
                    more with each passing day. You deserve all the happiness in the world, and I'm grateful 
                    to be the one who gets to celebrate you today and always.
                  </p>
                  <p className="italic font-semibold">Happy Birthday, My Love! ❤️</p>
                </div>
                <Button 
                  variant="ghost" 
                  onClick={toggleLetter}
                  className="text-muted-foreground hover:text-primary"
                >
                  ← Back to Card
                </Button>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BirthdayHero;