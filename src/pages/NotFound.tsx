import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft">
      <div className="text-center space-y-8 p-8">
        {/* Floating Hearts */}
        <div className="relative">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-celebration-pink/20 animate-float"
              style={{
                left: `${-50 + Math.random() * 100}px`,
                top: `${-50 + Math.random() * 100}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
              size={16 + Math.random() * 12}
            />
          ))}
          <h1 className="text-6xl font-bold bg-gradient-romantic bg-clip-text text-transparent">404</h1>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-primary">Oops! Page not found</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            It seems you've wandered away from the birthday celebration!
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button variant="celebration" size="lg" className="rounded-full font-semibold">
              <Home className="mr-2" size={20} />
              Return to Celebration
            </Button>
          </Link>
          
          <div className="text-sm text-muted-foreground">
            Let's get back to the party! 🎉
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
