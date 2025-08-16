import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Zap,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions."
  },
  {
    icon: Heart,
    title: "Excellence",
    description: "Quality is at the core of everything we do."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnerships."
  },
  {
    icon: Zap,
    title: "Agility",
    description: "We adapt quickly to changing technologies and market needs."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-surface">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6">About NeoNerds</Badge>
              <h1 className="text-5xl md:text-6xl font-bold hero-text mb-6">
                Transforming the Future with <span className="hero-accent">Technology</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are a passionate team of technology enthusiasts dedicated to delivering exceptional IT solutions and educational services that drive innovation and growth.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="card-hover bg-gradient-primary text-primary-foreground border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-8 w-8" />
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed opacity-90">
                    To empower businesses and individuals with innovative technology solutions that drive digital transformation, enhance productivity, and create sustainable growth in an ever-evolving digital landscape.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover bg-gradient-accent text-accent-foreground border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="h-8 w-8" />
                    <h2 className="text-3xl font-bold">Our Vision</h2>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed opacity-90">
                    To be the leading technology partner recognized globally for excellence in IT solutions and educational innovation, fostering a world where technology seamlessly integrates with human potential.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-surface">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold hero-text text-center mb-12">
                Our <span className="hero-accent">Story</span>
              </h2>
              
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions, NeoNerds began as a small team of passionate developers and educators who believed in the transformative power of technology.
                </p>
                
                <p>
                  Over the years, we have evolved into a comprehensive technology partner, serving businesses across various industries while simultaneously nurturing the next generation of tech professionals through our educational initiatives.
                </p>
                
                <p>
                  Today, NeoNerds stands as a testament to what can be achieved when innovation meets dedication. We continue to push boundaries, explore new technologies, and deliver solutions that not only meet current needs but anticipate future challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
                Our <span className="hero-accent">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide our decisions and define our culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={value.title} 
                  className="card-hover text-center border-card-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="p-4 rounded-full bg-gradient-primary text-primary-foreground w-fit mx-auto mb-6">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-24 bg-gradient-dark text-white">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-primary-glow">Team</span>
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                A diverse group of professionals united by our passion for technology and commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-glow mb-2">25+</div>
                <div className="text-sm opacity-80">Expert Developers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-glow mb-2">10+</div>
                <div className="text-sm opacity-80">Industry Verticals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-glow mb-2">5+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-glow mb-2">100%</div>
                <div className="text-sm opacity-80">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
                Ready to Work with <span className="hero-accent">Us</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can help transform your business or advance your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="button-glow" asChild>
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">
                    View Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}