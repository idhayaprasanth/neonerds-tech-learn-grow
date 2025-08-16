import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Users, 
  Lightbulb, 
  Award, 
  Clock, 
  Target 
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "Years of experience in delivering reliable IT solutions and educational services with proven track record.",
    badge: "Enterprise Grade"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with deep industry knowledge and hands-on experience in cutting-edge technologies.",
    badge: "Certified"
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We leverage the latest technologies and methodologies to deliver modern, scalable solutions.",
    badge: "Future-Ready"
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous quality standards ensuring excellence in every project and educational program we deliver.",
    badge: "ISO Certified"
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Committed to meeting deadlines with efficient project management and agile development practices.",
    badge: "On-Time"
  },
  {
    icon: Target,
    title: "Result Oriented",
    description: "Focused on delivering measurable outcomes that drive business growth and student success.",
    badge: "ROI Focused"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
            Why Choose <span className="hero-accent">NeoNerds</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical excellence with educational innovation to deliver exceptional value for businesses and students alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-hover group bg-card border-card-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}