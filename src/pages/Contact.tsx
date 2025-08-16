import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Users
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    contact: "info@neonerds.com",
    link: "mailto:info@neonerds.com"
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "Monday to Saturday",
    contact: "9:00 AM - 6:00 PM IST",
    link: "#"
  }
];

const services = [
  { name: "IT Consulting", description: "Strategic technology consulting" },
  { name: "Web Development", description: "Custom web applications" },
  { name: "Mobile Apps", description: "iOS and Android development" },
  { name: "Cloud Solutions", description: "Cloud migration and management" },
  { name: "EdTech Solutions", description: "Educational technology platforms" },
  { name: "IoT Projects", description: "Internet of Things solutions" },
  { name: "Course Enrollment", description: "Professional development courses" },
  { name: "College Projects", description: "Academic project support" }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-surface">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6">Get In Touch</Badge>
              <h1 className="text-5xl md:text-6xl font-bold hero-text mb-6">
                Contact <span className="hero-accent">NeoNerds</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to transform your business or start your learning journey? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-24">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title} 
                  className="card-hover text-center border-card-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="p-4 rounded-full bg-gradient-primary text-primary-foreground w-fit mx-auto mb-6">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{info.description}</p>
                    <a 
                      href={info.link}
                      className="text-primary hover:text-primary-glow transition-colors font-medium text-sm"
                    >
                      {info.contact}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Services */}
        <section className="py-24 bg-surface">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold hero-text mb-4">
                    Send us a <span className="hero-accent">Message</span>
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <Card className="border-card-border">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">First Name</label>
                          <Input placeholder="John" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Last Name</label>
                          <Input placeholder="Doe" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input type="email" placeholder="john@example.com" />
                      </div>
                      
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Service Interest</label>
                        <select className="w-full px-3 py-2 border border-input bg-background rounded-md">
                          <option>Select a service</option>
                          {services.map((service) => (
                            <option key={service.name} value={service.name}>
                              {service.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Message</label>
                        <Textarea 
                          placeholder="Tell us about your project or requirements..."
                          rows={5}
                        />
                      </div>
                      
                      <Button className="w-full button-glow group">
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Services & Additional Info */}
              <div className="space-y-8">
                {/* Services */}
                <div>
                  <h3 className="text-2xl font-bold hero-text mb-6">
                    Our <span className="hero-accent">Services</span>
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {services.map((service) => (
                      <Card key={service.name} className="border-card-border">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                            <div>
                              <h4 className="font-semibold">{service.name}</h4>
                              <p className="text-sm text-muted-foreground">{service.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <Card className="border-card-border bg-gradient-primary text-primary-foreground">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                    <div className="space-y-4">
                      <Button variant="secondary" className="w-full justify-start" asChild>
                        <a href="mailto:info@neonerds.com" className="flex items-center gap-3">
                          <Mail className="h-4 w-4" />
                          Email: info@neonerds.com
                        </a>
                      </Button>
                      
                      <Button variant="secondary" className="w-full justify-start">
                        <MessageSquare className="h-4 w-4 mr-3" />
                        Live Chat Support
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Meeting Scheduling */}
                <Card className="border-card-border">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Schedule a Meeting</h3>
                      <p className="text-muted-foreground mb-6">
                        Book a free consultation call with our experts.
                      </p>
                      <Button className="w-full">
                        Schedule Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="container px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold hero-text mb-6">
                Frequently Asked <span className="hero-accent">Questions</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-card-border">
                <CardHeader>
                  <h3 className="font-bold">How long does a typical project take?</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications may take 2-6 months.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-card-border">
                <CardHeader>
                  <h3 className="font-bold">Do you provide ongoing support?</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Yes, we offer comprehensive maintenance and support packages to ensure your solution continues to perform optimally.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-card-border">
                <CardHeader>
                  <h3 className="font-bold">What technologies do you work with?</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    We work with modern technologies including React, Node.js, Python, cloud platforms, mobile frameworks, and emerging technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-card-border">
                <CardHeader>
                  <h3 className="font-bold">Do you offer training and courses?</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Yes, we offer comprehensive online courses in web development, data science, cloud computing, and other technology domains.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}