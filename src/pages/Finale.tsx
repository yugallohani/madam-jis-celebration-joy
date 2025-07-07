import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Gift, Heart, PartyPopper, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

const FinalePage = () => {
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
        {/* Navigation Header */}
        <div className="flex justify-between items-center w-full mb-8">
          <Link to="/celebrate">
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-white/80 hover:text-white"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back
            </Button>
          </Link>
          <Link to="/">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white/20 text-white border-white/20 hover:bg-white/30"
            >
              <Home className="mr-2" size={20} />
              Start Over
            </Button>
          </Link>
        </div>

        {/* Main Message */}
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg animate-pulse-heart">
            The Celebration
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white/90">
            Never Ends...
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
              Every page, every click, every moment of this celebration has been crafted with love. 
              Your birthday deserves nothing less than pure magic, and this journey can begin anew anytime!
            </p>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button 
                    variant="celebration" 
                    size="lg" 
                    className="rounded-full font-bold text-lg px-8 py-4 animate-bounce-gentle hover:animate-pulse-heart"
                  >
                    Start the Journey Again
                    <ArrowRight className="ml-3 animate-pulse" size={20} />
                  </Button>
                </Link>
                
                <Link to="/memories">
                  <Button 
                    variant="memory" 
                    size="lg" 
                    className="rounded-full font-semibold text-lg px-8 py-4"
                  >
                    Revisit Memories
                    <Heart className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Relive these beautiful moments anytime you want ✨
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

        {/* Page Navigation Menu */}
        <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
          <h5 className="text-white font-semibold mb-4">Jump to any celebration moment:</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10 w-full">
                Birthday
              </Button>
            </Link>
            <Link to="/memories">
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10 w-full">
                Memories
              </Button>
            </Link>
            <Link to="/celebrate">
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10 w-full">
                Lights
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="text-white/50 cursor-not-allowed w-full" disabled>
              Finale
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FinalePage;