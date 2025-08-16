import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  GraduationCap, 
  Cpu, 
  BookOpen,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "IT Solutions & Consulting",
    description: "Enterprise-grade IT consulting, software development, cloud solutions, and digital transformation services for businesses of all sizes.",
    features: ["Custom Software Development", "Cloud Migration", "System Integration", "Digital Transformation"],
    color: "primary",
    href: "/services"
  },
  {
    icon: GraduationCap,
    title: "EdTech Solutions",
    description: "Comprehensive educational technology solutions designed to enhance learning experiences for students and educational institutions.",
    features: ["Learning Management Systems", "Educational Apps", "Online Assessment Tools", "Virtual Classrooms"],
    color: "accent",
    href: "/services"
  },
  {
    icon: Cpu,
    title: "College Projects & IoT",
    description: "Specialized support for college projects including web development, IoT solutions, mobile apps, and emerging technology implementations.",
    features: ["IoT Project Development", "Web Applications", "Mobile App Development", "Embedded Systems"],
    color: "primary",
    href: "/projects"
  },
  {
    icon: BookOpen,
    title: "Online Courses",
    description: "Professional development courses designed to enhance skills and accelerate career growth in technology and related fields.",
    features: ["Web Development", "Data Science", "Cloud Computing", "Digital Marketing"],
    color: "accent",
    href: "/courses"
  }
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            What We Provide
          </div>
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
            Our <span className="hero-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From cutting-edge IT solutions to comprehensive educational programs, we deliver excellence across all domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="card-hover group overflow-hidden bg-card border-card-border"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className={`p-4 rounded-2xl ${
                    service.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-accent'
                  } text-white group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Popular
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full group/btn" asChild>
                  <Link to={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="button-glow" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}