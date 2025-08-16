import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone,
  TrendingUp,
  Globe,
  Brain,
  Shield,
  Clock,
  Users,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    icon: Code,
    title: "Full Stack Web Development",
    description: "Master modern web development with React, Node.js, and databases. Build complete web applications from frontend to backend.",
    duration: "6 months",
    level: "Beginner to Advanced",
    students: "500+",
    rating: 4.9,
    price: "₹25,000",
    originalPrice: "₹35,000",
    features: [
      "HTML, CSS, JavaScript",
      "React.js & Redux",
      "Node.js & Express",
      "MongoDB & SQL",
      "Deployment & DevOps",
      "Portfolio Projects"
    ],
    popular: true
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    description: "Learn data analysis, machine learning, and statistical modeling using Python, R, and modern data science tools.",
    duration: "5 months",
    level: "Intermediate",
    students: "300+",
    rating: 4.8,
    price: "₹30,000",
    originalPrice: "₹40,000",
    features: [
      "Python for Data Science",
      "Machine Learning",
      "Data Visualization",
      "Statistical Analysis",
      "Big Data Tools",
      "Real-world Projects"
    ],
    popular: false
  },
  {
    icon: Cloud,
    title: "Cloud Computing (AWS/Azure)",
    description: "Comprehensive cloud computing course covering AWS and Azure services, DevOps practices, and cloud architecture.",
    duration: "4 months",
    level: "Intermediate",
    students: "250+",
    rating: 4.7,
    price: "₹28,000",
    originalPrice: "₹38,000",
    features: [
      "AWS/Azure Fundamentals",
      "Cloud Architecture",
      "DevOps & CI/CD",
      "Container Technologies",
      "Security Best Practices",
      "Certification Prep"
    ],
    popular: false
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Create native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
    duration: "5 months",
    level: "Beginner to Advanced",
    students: "400+",
    rating: 4.8,
    price: "₹27,000",
    originalPrice: "₹37,000",
    features: [
      "React Native",
      "Flutter Development",
      "Native iOS/Android",
      "App Store Deployment",
      "Push Notifications",
      "Monetization Strategies"
    ],
    popular: true
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Master digital marketing strategies including SEO, social media marketing, PPC, and analytics for business growth.",
    duration: "3 months",
    level: "Beginner",
    students: "600+",
    rating: 4.6,
    price: "₹18,000",
    originalPrice: "₹25,000",
    features: [
      "SEO & SEM",
      "Social Media Marketing",
      "Content Marketing",
      "Google Analytics",
      "Email Marketing",
      "Campaign Management"
    ],
    popular: false
  },
  {
    icon: Brain,
    title: "Artificial Intelligence & ML",
    description: "Deep dive into AI and machine learning concepts, neural networks, and practical implementation using modern frameworks.",
    duration: "6 months",
    level: "Advanced",
    students: "200+",
    rating: 4.9,
    price: "₹35,000",
    originalPrice: "₹45,000",
    features: [
      "Machine Learning Algorithms",
      "Deep Learning",
      "Neural Networks",
      "Computer Vision",
      "Natural Language Processing",
      "AI Project Development"
    ],
    popular: false
  },
  {
    icon: Shield,
    title: "Cybersecurity Fundamentals",
    description: "Learn essential cybersecurity concepts, ethical hacking, network security, and security best practices.",
    duration: "4 months",
    level: "Beginner to Intermediate",
    students: "300+",
    rating: 4.7,
    price: "₹22,000",
    originalPrice: "₹30,000",
    features: [
      "Network Security",
      "Ethical Hacking",
      "Security Assessment",
      "Incident Response",
      "Compliance & Governance",
      "Hands-on Labs"
    ],
    popular: false
  },
  {
    icon: Globe,
    title: "UI/UX Design",
    description: "Master user interface and user experience design principles, tools, and best practices for digital products.",
    duration: "4 months",
    level: "Beginner",
    students: "450+",
    rating: 4.8,
    price: "₹20,000",
    originalPrice: "₹28,000",
    features: [
      "Design Principles",
      "Figma & Adobe XD",
      "User Research",
      "Prototyping",
      "Usability Testing",
      "Portfolio Development"
    ],
    popular: true
  }
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-surface">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6">Online Courses</Badge>
              <h1 className="text-5xl md:text-6xl font-bold hero-text mb-6">
                Advance Your <span className="hero-accent">Career</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Professional development courses designed to enhance your skills and accelerate your career growth in technology and digital domains.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">3000+</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.8</div>
                  <div className="text-sm text-muted-foreground">Avg Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Job Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-24">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
                Available <span className="hero-accent">Courses</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our comprehensive selection of courses designed by industry experts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card 
                  key={course.title} 
                  className={`card-hover border-card-border relative overflow-hidden ${
                    course.popular ? 'ring-2 ring-primary/50' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {course.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                      Popular
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-gradient-primary text-primary-foreground">
                        <course.icon className="h-6 w-6" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{course.price}</div>
                        <div className="text-sm text-muted-foreground line-through">{course.originalPrice}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-muted-foreground text-sm">{course.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Course Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        {course.students}
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-primary" />
                        {course.rating} Rating
                      </div>
                      <Badge variant="outline" className="text-xs w-fit">
                        {course.level}
                      </Badge>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-primary">What You'll Learn:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {course.features.slice(0, 4).map((feature) => (
                          <div key={feature} className="flex items-center text-xs text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-primary mr-2 shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {course.features.length > 4 && (
                          <div className="text-xs text-primary">
                            +{course.features.length - 4} more topics
                          </div>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button className="w-full group" asChild>
                      <Link to="/contact">
                        Enroll Now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-surface">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
                Why Choose Our <span className="hero-accent">Courses</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-card-border">
                <CardContent className="p-8">
                  <div className="p-4 rounded-full bg-gradient-primary text-primary-foreground w-fit mx-auto mb-6">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Expert Instructors</h3>
                  <p className="text-muted-foreground">Learn from industry professionals with years of real-world experience.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-card-border">
                <CardContent className="p-8">
                  <div className="p-4 rounded-full bg-gradient-accent text-accent-foreground w-fit mx-auto mb-6">
                    <Code className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Hands-on Projects</h3>
                  <p className="text-muted-foreground">Build real-world projects that you can showcase in your portfolio.</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-card-border">
                <CardContent className="p-8">
                  <div className="p-4 rounded-full bg-gradient-primary text-primary-foreground w-fit mx-auto mb-6">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Job Support</h3>
                  <p className="text-muted-foreground">Get career guidance and job placement assistance after course completion.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-dark text-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start <span className="text-primary-glow">Learning</span>?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of students who have already transformed their careers with our courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary-glow hover:bg-primary text-white" asChild>
                  <Link to="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground" asChild>
                  <Link to="/about">
                    Learn More
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