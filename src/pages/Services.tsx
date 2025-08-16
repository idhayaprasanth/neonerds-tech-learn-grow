import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Cloud, 
  Smartphone, 
  Database,
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Cpu,
  Wifi,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const itServices = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions built with modern technologies to meet your specific business requirements.",
    features: ["Web Applications", "Desktop Software", "API Development", "System Integration"],
    pricing: "Starting from ₹50,000"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Comprehensive cloud services including migration, deployment, and management on AWS, Azure, and GCP.",
    features: ["Cloud Migration", "DevOps", "Infrastructure Management", "Monitoring & Support"],
    pricing: "Starting from ₹25,000"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.",
    features: ["iOS Development", "Android Development", "React Native", "Flutter"],
    pricing: "Starting from ₹75,000"
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Database design, optimization, and management services for scalable data storage and retrieval.",
    features: ["Database Design", "Performance Optimization", "Data Migration", "Backup Solutions"],
    pricing: "Starting from ₹20,000"
  }
];

const edtechServices = [
  {
    icon: GraduationCap,
    title: "Learning Management Systems",
    description: "Complete LMS solutions for educational institutions with advanced features and analytics.",
    features: ["Student Portal", "Course Management", "Assessment Tools", "Progress Tracking"],
    pricing: "Starting from ₹1,00,000"
  },
  {
    icon: BookOpen,
    title: "Educational Content Development",
    description: "Interactive educational content, e-learning modules, and digital curriculum development.",
    features: ["Interactive Content", "Video Lectures", "Assessment Creation", "Gamification"],
    pricing: "Starting from ₹30,000"
  },
  {
    icon: Users,
    title: "Virtual Classroom Solutions",
    description: "Real-time online classroom platforms with collaboration tools and interactive features.",
    features: ["Live Streaming", "Screen Sharing", "Interactive Whiteboard", "Recording"],
    pricing: "Starting from ₹40,000"
  },
  {
    icon: Award,
    title: "Educational Analytics",
    description: "Advanced analytics and reporting tools to track student performance and engagement.",
    features: ["Performance Analytics", "Progress Reports", "Predictive Analytics", "Custom Dashboards"],
    pricing: "Starting from ₹35,000"
  }
];

const projectServices = [
  {
    icon: Cpu,
    title: "IoT Project Development",
    description: "End-to-end IoT solutions including hardware integration, sensor networks, and data analytics.",
    features: ["Sensor Integration", "Data Collection", "Real-time Monitoring", "Mobile Apps"],
    pricing: "Starting from ₹15,000"
  },
  {
    icon: Globe,
    title: "Web Development Projects",
    description: "Modern, responsive websites and web applications using latest frameworks and technologies.",
    features: ["React/Angular", "Node.js Backend", "Database Integration", "Responsive Design"],
    pricing: "Starting from ₹10,000"
  },
  {
    icon: Wifi,
    title: "Embedded Systems",
    description: "Microcontroller programming, embedded software development, and hardware interfacing.",
    features: ["Arduino/Raspberry Pi", "Sensor Programming", "Communication Protocols", "PCB Design"],
    pricing: "Starting from ₹12,000"
  },
  {
    icon: Zap,
    title: "AI/ML Projects",
    description: "Machine learning models, data analysis, and AI-powered applications for college projects.",
    features: ["Data Analysis", "ML Models", "Neural Networks", "Computer Vision"],
    pricing: "Starting from ₹20,000"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-surface">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6">Our Services</Badge>
              <h1 className="text-5xl md:text-6xl font-bold hero-text mb-6">
                Comprehensive <span className="hero-accent">Technology Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From enterprise-grade IT solutions to innovative EdTech services and specialized college project support, we deliver excellence across all domains.
              </p>
            </div>
          </div>
        </section>

        {/* IT Solutions */}
        <section className="py-24">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
                IT Solutions & <span className="hero-accent">Consulting</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Enterprise-grade technology solutions designed to transform your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {itServices.map((service, index) => (
                <Card 
                  key={service.title} 
                  className="card-hover border-card-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary">{service.pricing}</Badge>
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* EdTech Solutions */}
        <section className="py-24 bg-surface">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
                EdTech <span className="hero-accent">Solutions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Innovative educational technology solutions to enhance learning experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {edtechServices.map((service, index) => (
                <Card 
                  key={service.title} 
                  className="card-hover border-card-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-gradient-accent text-accent-foreground">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary">{service.pricing}</Badge>
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* College Projects */}
        <section className="py-24">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
                College Projects & <span className="hero-accent">IoT</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized support for academic projects across various technology domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {projectServices.map((service, index) => (
                <Card 
                  key={service.title} 
                  className="card-hover border-card-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary">{service.pricing}</Badge>
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-dark text-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get <span className="text-primary-glow">Started</span>?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Let's discuss your project requirements and find the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary-glow hover:bg-primary text-white" asChild>
                  <Link to="/contact">
                    Request Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground" asChild>
                  <Link to="/projects">
                    View Portfolio
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