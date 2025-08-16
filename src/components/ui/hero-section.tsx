import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-surface" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05),transparent_70%)]" />
      
      {/* Content */}
      <div className="relative z-10 container px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in">
            <Sparkles className="h-4 w-4" />
            Modern IT Solutions & EdTech Excellence
          </div>

          {/* Main Heading */}
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="hero-text">Welcome to </span>
              <span className="hero-accent block mt-2">NeoNerds</span>
            </h1>
            <div className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming businesses with cutting-edge IT solutions and empowering students with comprehensive EdTech services for tomorrow's digital world.
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-scale-in">
            <Button size="lg" className="button-glow group" asChild>
              <Link to="/services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <Link to="/courses">
                View Courses
                <Zap className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">1000+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Courses Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse" />
    </section>
  );
}