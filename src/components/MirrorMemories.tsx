import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Heart, Camera } from "lucide-react";
import coupleMemory1 from "@/assets/couple-memory-1.jpg";
import coupleMemory2 from "@/assets/couple-memory-2.jpg";

const MirrorMemories = () => {
  const [selectedMemory, setSelectedMemory] = useState(0);

  const memories = [
    {
      image: coupleMemory1,
      title: "Our Love Story Continues...",
      description: "Every sunset reminds me of the golden moments we share together."
    },
    {
      image: coupleMemory2,
      title: "This Smile... My Forever Favorite",
      description: "Your laughter is the soundtrack of my happiness."
    }
  ];

  const downloadMemory = () => {
    // In a real app, this would trigger an actual download
    const link = document.createElement('a');
    link.href = memories[selectedMemory].image;
    link.download = `birthday-memory-${selectedMemory + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-memories flex flex-col items-center justify-center p-4 relative">
      {/* Decorative Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-celebration-rose/10 animate-float"
            size={20 + Math.random() * 30}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 z-10">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-romantic bg-clip-text text-transparent">
            Mirror of Memories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reflecting on the beautiful moments that make our love story unforgettable
          </p>
        </div>

        {/* Memory Gallery */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {memories.map((memory, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 ${
                selectedMemory === index ? 'ring-4 ring-celebration-pink shadow-glow' : 'shadow-romantic'
              }`}
              onClick={() => setSelectedMemory(index)}
            >
              <div className="aspect-square relative">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{memory.title}</h3>
                  <p className="text-sm opacity-90">{memory.description}</p>
                </div>
                {selectedMemory === index && (
                  <div className="absolute top-4 right-4">
                    <Camera className="text-white animate-pulse" size={24} />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Selected Memory Details */}
        <Card className="max-w-2xl mx-auto p-6 bg-white/80 backdrop-blur-sm shadow-celebration">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-primary">
              {memories[selectedMemory].title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {memories[selectedMemory].description}
            </p>
            <Button 
              variant="memory" 
              size="lg" 
              onClick={downloadMemory}
              className="rounded-full font-semibold"
            >
              <Download className="mr-2" size={20} />
              Download this Memory
            </Button>
          </div>
        </Card>

        {/* Additional Memory Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i}
              className="aspect-square bg-gradient-soft rounded-lg border-2 border-dashed border-celebration-pink/30 flex items-center justify-center opacity-50 hover:opacity-75 transition-opacity"
            >
              <div className="text-center text-muted-foreground">
                <Camera size={32} className="mx-auto mb-2" />
                <p className="text-xs">More memories<br />coming soon...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MirrorMemories;