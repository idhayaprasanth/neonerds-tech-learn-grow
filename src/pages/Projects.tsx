import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Cpu,
  Database,
  Brain,
  Shield,
  Cloud,
  ExternalLink,
  Github,
  Filter
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Learning Platform",
    description: "Complete learning management system with video streaming, assessments, and progress tracking.",
    image: "/placeholder.svg",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    domain: "Education",
    client: "Educational Institute",
    year: "2024",
    icon: Globe
  },
  {
    id: 2,
    title: "Smart Home IoT System",
    description: "IoT-based home automation system with mobile app control and sensor monitoring.",
    image: "/placeholder.svg",
    category: "IoT",
    technologies: ["Arduino", "React Native", "Firebase", "ESP32"],
    domain: "Home Automation",
    client: "College Project",
    year: "2024",
    icon: Cpu
  },
  {
    id: 3,
    title: "Healthcare Management App",
    description: "Mobile application for patient management, appointment scheduling, and medical records.",
    image: "/placeholder.svg",
    category: "Mobile Development",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    domain: "Healthcare",
    client: "Medical Clinic",
    year: "2023",
    icon: Smartphone
  },
  {
    id: 4,
    title: "Inventory Management System",
    description: "Web-based inventory tracking system with real-time updates and analytics dashboard.",
    image: "/placeholder.svg",
    category: "Web Development",
    technologies: ["Angular", "Express.js", "PostgreSQL", "Chart.js"],
    domain: "Retail",
    client: "Retail Business",
    year: "2023",
    icon: Database
  },
  {
    id: 5,
    title: "AI Chatbot for Customer Support",
    description: "Intelligent chatbot using natural language processing for automated customer service.",
    image: "/placeholder.svg",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "React", "REST API"],
    domain: "Customer Service",
    client: "Tech Company",
    year: "2024",
    icon: Brain
  },
  {
    id: 6,
    title: "Cybersecurity Assessment Tool",
    description: "Network security scanning and vulnerability assessment tool with detailed reporting.",
    image: "/placeholder.svg",
    category: "Cybersecurity",
    technologies: ["Python", "Nmap", "Django", "PostgreSQL"],
    domain: "Security",
    client: "Security Firm",
    year: "2023",
    icon: Shield
  },
  {
    id: 7,
    title: "Cloud Migration Platform",
    description: "Tool for seamless migration of on-premise applications to cloud infrastructure.",
    image: "/placeholder.svg",
    category: "Cloud Computing",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    domain: "Infrastructure",
    client: "Enterprise",
    year: "2024",
    icon: Cloud
  },
  {
    id: 8,
    title: "Smart Agriculture System",
    description: "IoT-based crop monitoring system with soil sensors and automated irrigation control.",
    image: "/placeholder.svg",
    category: "IoT",
    technologies: ["Raspberry Pi", "Python", "React", "LoRaWAN"],
    domain: "Agriculture",
    client: "Farm Cooperative",
    year: "2023",
    icon: Cpu
  }
];

const categories = ["All", "Web Development", "Mobile Development", "IoT", "AI/ML", "Cybersecurity", "Cloud Computing"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-surface">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6">Our Portfolio</Badge>
              <h1 className="text-5xl md:text-6xl font-bold hero-text mb-6">
                Our <span className="hero-accent">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our diverse portfolio of successful projects across various technology domains and industries.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-surface">
          <div className="container px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="h-4 w-4" />
                Filter by:
              </div>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="card-hover group overflow-hidden border-card-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-surface overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <project.icon className="h-16 w-16 text-primary/30" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="text-xs">
                        {project.year}
                      </Badge>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button size="sm" variant="secondary" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        View
                      </Button>
                      <Button size="sm" variant="secondary" className="gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-primary">Domain:</span>
                        <div className="text-muted-foreground">{project.domain}</div>
                      </div>
                      <div>
                        <span className="font-medium text-primary">Client:</span>
                        <div className="text-muted-foreground">{project.client}</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <span className="font-medium text-primary text-sm">Technologies:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No projects found for the selected category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Project Stats */}
        <section className="py-24 bg-gradient-dark text-white">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Project <span className="text-primary-glow">Statistics</span>
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Numbers that showcase our commitment to delivering exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-glow mb-2">500+</div>
                <div className="text-sm opacity-80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-glow mb-2">50+</div>
                <div className="text-sm opacity-80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-glow mb-2">7</div>
                <div className="text-sm opacity-80">Technology Domains</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-glow mb-2">99%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
                Have a Project in <span className="hero-accent">Mind</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your project requirements and bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="button-glow" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">View Services</Link>
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