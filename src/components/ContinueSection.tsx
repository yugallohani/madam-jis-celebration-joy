import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Gift, Heart, PartyPopper } from "lucide-react";

const ContinueSection = () => {
  const handleContinue = () => {
    // In a real app, this would navigate to the next page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-celebration flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Celebration Icons Floating */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const icons = [Gift, Heart, PartyPopper];
          const Icon = icons[Math.floor(Math.random() * icons.length)];
          return (
            <Icon
              key={i}
              className="absolute text-white/20 animate-float"
              size={20 + Math.random() * 30}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-12 z-10">
        {/* Main Message */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg animate-pulse-heart">
            The Celebration
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white/90">
            Continues...
          </h3>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            This is just the beginning of your special day! There's so much more love, 
            surprises, and joy waiting for you ahead.
          </p>
        </div>

        {/* Celebration Card */}
        <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-glow border-0">
          <div className="space-y-6">
            <div className="flex justify-center gap-4">
              <PartyPopper className="text-celebration-gold animate-bounce-gentle" size={32} />
              <Gift className="text-celebration-rose animate-pulse" size={32} />
              <Heart className="text-celebration-purple animate-float" size={32} />
            </div>
            
            <h4 className="text-3xl font-bold text-primary">
              Ready for More Magic?
            </h4>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every scroll, every click, every moment of this celebration has been crafted with love. 
              Your birthday deserves nothing less than pure magic, and this journey is far from over!
            </p>

            <div className="space-y-4">
              <Button 
                variant="celebration" 
                size="lg" 
                onClick={handleContinue}
                className="rounded-full font-bold text-xl px-12 py-6 animate-bounce-gentle hover:animate-pulse-heart"
              >
                Continue to Next Page
                <ArrowRight className="ml-3 animate-pulse" size={24} />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Click to relive these beautiful moments from the beginning ✨
              </p>
            </div>
          </div>
        </Card>

        {/* Final Message */}
        <div className="space-y-4">
          <p className="text-2xl font-semibold text-white drop-shadow-lg">
            Happy Birthday, Beautiful! 
          </p>
          <p className="text-lg text-white/90">
            May your day be filled with endless love, laughter, and unforgettable moments 💕
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContinueSection;