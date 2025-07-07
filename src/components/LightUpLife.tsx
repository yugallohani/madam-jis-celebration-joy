import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lightbulb, Star, Sparkles, Zap } from "lucide-react";
import birthdayCake from "@/assets/birthday-cake.jpg";

const LightUpLife = () => {
  const [lightsOn, setLightsOn] = useState(false);

  const toggleLights = () => {
    setLightsOn(!lightsOn);
  };

  return (
    <div className={`min-h-screen transition-all duration-1000 ${
      lightsOn ? 'bg-gradient-celebration' : 'bg-gradient-soft'
    } flex flex-col items-center justify-center p-4 relative overflow-hidden`}>
      
      {/* Animated Lights */}
      <div className="absolute inset-0 pointer-events-none">
        {lightsOn && [...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <Star 
              className="text-celebration-gold" 
              size={8 + Math.random() * 16}
            />
          </div>
        ))}
      </div>

      {/* Sparkle Effects */}
      {lightsOn && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-celebration-purple animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${12 + Math.random() * 20}px`,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center space-y-12 z-10">
        {/* Section Header */}
        <div className="space-y-6">
          <h2 className={`text-5xl md:text-6xl font-bold transition-all duration-1000 ${
            lightsOn 
              ? 'text-white drop-shadow-lg animate-pulse-heart' 
              : 'bg-gradient-romantic bg-clip-text text-transparent'
          }`}>
            Let's Celebrate! 
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Lightbulb 
              className={`transition-all duration-500 ${
                lightsOn ? 'text-celebration-gold animate-pulse' : 'text-muted-foreground'
              }`} 
              size={32} 
            />
            <span className={`text-2xl font-semibold transition-colors duration-500 ${
              lightsOn ? 'text-white' : 'text-primary'
            }`}>
              Light Up My Life
            </span>
            <Lightbulb 
              className={`transition-all duration-500 ${
                lightsOn ? 'text-celebration-gold animate-pulse' : 'text-muted-foreground'
              }`} 
              size={32} 
            />
          </div>
        </div>

        {/* Birthday Cake Section */}
        <Card className={`relative overflow-hidden transition-all duration-1000 ${
          lightsOn 
            ? 'shadow-glow ring-4 ring-celebration-gold/50 animate-pulse-heart' 
            : 'shadow-romantic'
        }`}>
          <div className="aspect-video md:aspect-square relative">
            <img 
              src={birthdayCake} 
              alt="Birthday Cake"
              className={`w-full h-full object-cover transition-all duration-1000 ${
                lightsOn ? 'brightness-110 saturate-110' : 'brightness-100'
              }`}
            />
            <div className={`absolute inset-0 transition-all duration-1000 ${
              lightsOn 
                ? 'bg-gradient-to-t from-celebration-gold/20 via-transparent to-celebration-purple/20' 
                : 'bg-gradient-to-t from-black/40 via-transparent to-transparent'
            }`} />
            
            {/* Floating Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`text-center transition-all duration-1000 ${
                lightsOn ? 'text-white drop-shadow-lg' : 'text-white'
              }`}>
                <h3 className="text-3xl font-bold mb-2">Make a Wish!</h3>
                <p className="text-lg opacity-90">Blow out the candles and let the celebration begin</p>
              </div>
            </div>

            {/* Light Effect Overlay */}
            {lightsOn && (
              <div className="absolute inset-0 bg-gradient-radial from-celebration-gold/30 via-transparent to-transparent animate-pulse" />
            )}
          </div>
        </Card>

        {/* Control Button */}
        <div className="space-y-4">
          <Button 
            variant={lightsOn ? "surprise" : "celebration"} 
            size="lg" 
            onClick={toggleLights}
            className={`rounded-full font-bold text-lg px-8 py-4 transition-all duration-500 ${
              lightsOn ? 'animate-bounce-gentle' : ''
            }`}
          >
            {lightsOn ? (
              <>
                <Zap className="mr-2 animate-pulse" size={24} />
                Lights are ON! ✨
              </>
            ) : (
              <>
                <Lightbulb className="mr-2" size={24} />
                Turn On the Lights
              </>
            )}
          </Button>
          
          {lightsOn && (
            <p className="text-white font-semibold text-lg animate-fade-in drop-shadow-lg">
              You light up my world every single day! 💝
            </p>
          )}
        </div>

        {/* Celebration Message */}
        {lightsOn && (
          <Card className="max-w-2xl mx-auto p-6 bg-white/90 backdrop-blur-sm shadow-glow animate-fade-in">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                This is How You Make Me Feel Every Day
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Just like these lights brighten up this space, you brighten up my entire world. 
                Your presence brings warmth, joy, and endless happiness to every moment we share. 
                Today, we celebrate not just your birthday, but the incredible light you bring to everyone around you.
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default LightUpLife;