"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Play,
  Pause,
  Users,
  TrendingUp,
  Code,
  GraduationCap,
  FileText,
  CheckCircle,
  Star,
  ArrowRight,
  Video,
  Calendar,
  CreditCard,
  BarChart3,
  Award,
  HelpCircle,
  ExternalLink,
  Building2,
  Zap,
  Target,
  Globe,
  Shield,
  Smartphone,
  Cloud,
  Brain,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Send,
  Heart,
  Coffee,
  Rocket,
  BookOpen,
  Newspaper,
} from "lucide-react"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    title: "Pen Global Solutions",
    subtitle: "Building cross-border tech & services that move your business forward",
    cta: "Get a Free Consultation",
    secondaryCta: "Learn More",
    videoUrl: "/modern-office-building-with-global-connectivity.jpg",
    microcopy: "Free consultation | 24/7 support | Offices: PK, UAE",
  },
  {
    id: 2,
    title: "Penova Tech",
    subtitle: "Custom software solutions for international businesses",
    cta: "See Our Work",
    secondaryCta: "Get Quote",
    videoUrl: "/software-development-team-working-on-modern-applic.jpg",
    microcopy: "Web & Mobile | Cloud Solutions | AI/ML Integration",
  },
  {
    id: 3,
    title: "Pen Tutor",
    subtitle: "Learn anywhere with our online tutoring platform",
    cta: "Start 7-Day Free Trial",
    secondaryCta: "View Demo",
    videoUrl: "/online-learning-platform-with-video-calls-and-inte.jpg",
    microcopy: "Free trial | Expert tutors | Flexible scheduling",
  },
  {
    id: 4,
    title: "Pen Visa Consultancy",
    subtitle: "Expert visa guidance and application support worldwide",
    cta: "Check Your Eligibility",
    secondaryCta: "Book Consultation",
    videoUrl: "/professional-visa-consultation-office-with-world-m.jpg",
    microcopy: "Success rate 95% | Expert guidance | Global coverage",
  },
]

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Solutions", href: "#solutions" },
  { name: "Product", href: "#product" },
  { name: "Case Studies", href: "#cases" },
  { name: "Team", href: "#team" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
]

export default function PenGlobalSolutions() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [activeTab, setActiveTab] = useState("visa")
  const [currentScreenshot, setCurrentScreenshot] = useState(0)

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [isPaused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-primary">Pen Global</div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
                Get a Quote
              </Button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-foreground hover:text-primary"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:hidden">
                  Get a Quote
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section id="home" className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="absolute inset-0">
              <Image
                width={500}
                height={500}
                src={slide.videoUrl || "/placeholder.svg"}
                alt={`${slide.title} background`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>

            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                    {slide.title}
                  </h1>
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 text-pretty">{slide.subtitle}</p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                      {slide.cta}
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-foreground text-lg px-8 bg-transparent"
                    >
                      {slide.secondaryCta}
                    </Button>
                  </div>

                  <p className="text-sm text-white/70">{slide.microcopy}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-primary" : "bg-white/50"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors ml-4"
            >
              {isPaused ? <Play size={20} /> : <Pause size={20} />}
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About Pen Global Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We are a leading global technology and consultancy firm, delivering innovative solutions across visa
              consultancy, software development, and e-learning platforms. Founded with a vision to bridge international
              business gaps, we serve clients across Pakistan, UAE, and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Clients Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">200+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Discover our comprehensive range of services across three specialized divisions, each designed to meet
              your unique business needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("visa")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === "visa"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
            >
              Pen Visa Consultancy
            </button>
            <button
              onClick={() => setActiveTab("tech")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === "tech"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
            >
              Penova Tech
            </button>
            <button
              onClick={() => setActiveTab("tutor")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === "tutor"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
            >
              Pen Tutor
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === "visa" && (
              <Card className="p-8 border-2 border-primary/20">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Pen Visa Consultancy</h3>
                      <p className="text-muted-foreground">Expert visa guidance and application support</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Visa Types We Handle</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Tourist & Visit Visas
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Business & Work Visas
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Student Visas
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Family Reunion Visas
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Immigration Services
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4">Key Services</h4>
                      <ul className="space-y-2 text-muted-foreground mb-6">
                        <li>• Consultation & Eligibility Assessment</li>
                        <li>• Document Preparation & Review</li>
                        <li>• Application Tracking & Updates</li>
                        <li>• Interview Preparation</li>
                        <li>• Post-Approval Support</li>
                      </ul>

                      <div className="flex items-center gap-4 mb-6">
                        <Badge variant="secondary" className="text-lg px-4 py-2">
                          <Star className="h-4 w-4 mr-1" />
                          95% Success Rate
                        </Badge>
                      </div>

                      <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                        Book Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "tech" && (
              <Card className="p-8 border-2 border-primary/20">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Penova Tech</h3>
                      <p className="text-muted-foreground">Custom software solutions for international businesses</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Technology Services</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Web & Mobile Development
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Cloud Solutions & Migration
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          WebRTC & Real-time Communication
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          AI/ML Integration
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          API Development & Integration
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4">Industries We Serve</h4>
                      <ul className="space-y-2 text-muted-foreground mb-6">
                        <li>• E-commerce & Retail</li>
                        <li>• Healthcare & Telemedicine</li>
                        <li>• Education & E-learning</li>
                        <li>• Finance & Fintech</li>
                        <li>• Logistics & Supply Chain</li>
                      </ul>

                      <div className="flex items-center gap-4 mb-6">
                        <Badge variant="secondary" className="text-lg px-4 py-2">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          200+ Projects
                        </Badge>
                      </div>

                      <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                        View Case Studies
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "tutor" && (
              <Card className="p-8 border-2 border-primary/20">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Pen Tutor</h3>
                      <p className="text-muted-foreground">Online tutoring platform for personalized learning</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Platform Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Interactive Video Classes
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Flexible Scheduling System
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Integrated Payment Gateway
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Progress Tracking & Analytics
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          Multi-language Support
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-4">Key Benefits</h4>
                      <ul className="space-y-2 text-muted-foreground mb-6">
                        <li>• Expert tutors from around the world</li>
                        <li>• Personalized learning paths</li>
                        <li>• 24/7 platform availability</li>
                        <li>• Affordable pricing plans</li>
                        <li>• Free trial for new students</li>
                      </ul>

                      <div className="flex items-center gap-4 mb-6">
                        <Badge variant="secondary" className="text-lg px-4 py-2">
                          <Users className="h-4 w-4 mr-1" />
                          7-Day Free Trial
                        </Badge>
                      </div>

                      <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                        Try Pen Tutor Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <section id="product" className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Pen Tutor - Product Deep Dive</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Discover our comprehensive online tutoring platform designed to connect students with expert tutors
              worldwide. Experience personalized learning with cutting-edge technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Product Demo */}
            <div className="space-y-6">
              <div className="relative">
                <Image
                  width={500}
                  height={500}
                  src="/online-learning-platform-with-video-calls-and-inte.jpg"
                  alt="Pen Tutor Platform Demo"
                  className="w-full rounded-lg shadow-2xl"
                />
                {/* <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </div> */}
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  See Pen Tutor in action - Interactive video classes with real-time collaboration
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground">Platform Features</h3>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">HD Video Classes</h4>
                    <p className="text-muted-foreground">
                      Crystal clear video calls with screen sharing and interactive whiteboard
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Smart Scheduling</h4>
                    <p className="text-muted-foreground">
                      AI-powered scheduling system that matches your availability with tutors
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Secure Payments</h4>
                    <p className="text-muted-foreground">
                      Integrated payment gateway with multiple payment options and refund protection
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Progress Analytics</h4>
                    <p className="text-muted-foreground">
                      Detailed progress tracking and performance analytics for students and parents
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">For Students</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">Access to 500+ expert tutors worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">Personalized learning paths based on your goals</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">24/7 platform availability across time zones</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">Affordable pricing starting from $15/hour</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">Free trial lesson with money-back guarantee</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">For Tutoring Agencies</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">White-label platform customization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">Automated billing and payment processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">Comprehensive admin dashboard</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">Multi-language and currency support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">24/7 technical support and training</span>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshots Carousel */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">Platform Screenshots</h3>
            <div className="relative max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src="/student-dashboard-interface.png"
                    alt="Student Dashboard"
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Student Dashboard</h4>
                    <p className="text-sm text-muted-foreground">
                      Intuitive interface for managing classes and progress
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src="/video-call-classroom-interface.jpg"
                    alt="Video Classroom"
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Video Classroom</h4>
                    <p className="text-sm text-muted-foreground">HD video calls with interactive whiteboard</p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src="/tutor-profile-and-scheduling.jpg"
                    alt="Tutor Profiles"
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Tutor Profiles</h4>
                    <p className="text-sm text-muted-foreground">Browse and book sessions with verified tutors</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          {/* <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">Pricing Plans</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 border-2 border-border">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-foreground mb-2">Student Plan</h4>
                    <div className="text-3xl font-bold text-primary mb-2">
                      $15<span className="text-lg text-muted-foreground">/hour</span>
                    </div>
                    <p className="text-muted-foreground">Perfect for individual learners</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">1-on-1 tutoring sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Progress tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Free trial lesson</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">24/7 platform access</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-primary relative">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-foreground mb-2">Agency Plan</h4>
                    <div className="text-3xl font-bold text-primary mb-2">
                      Custom<span className="text-lg text-muted-foreground">/month</span>
                    </div>
                    <p className="text-muted-foreground">For tutoring agencies</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">White-label platform</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Admin dashboard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Payment processing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">24/7 support</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-border">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-foreground mb-2">Enterprise</h4>
                    <div className="text-3xl font-bold text-primary mb-2">
                      Custom<span className="text-lg text-muted-foreground">/year</span>
                    </div>
                    <p className="text-muted-foreground">For large organizations</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Custom integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Dedicated support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">Advanced analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm">SLA guarantee</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div> */}

          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">How does the free trial work?</h4>
                      <p className="text-muted-foreground">
                        New students get one free 30-minute session with a tutor of their choice. No credit card
                        required, and you can upgrade anytime during or after the trial.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">What subjects are available?</h4>
                      <p className="text-muted-foreground">
                        We offer tutoring in 50+ subjects including Math, Science, Languages, Programming, Business, and
                        Test Prep (SAT, GRE, IELTS, etc.).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Can I cancel or reschedule sessions?</h4>
                      <p className="text-muted-foreground">
                        Yes, you can cancel or reschedule sessions up to 4 hours before the start time without any
                        penalty. Emergency cancellations are handled case-by-case.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Is the platform suitable for agencies?</h4>
                      <p className="text-muted-foreground">
                        Our white-label solution allows tutoring agencies to use our platform with their own branding,
                        custom pricing, and full administrative control.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">What Our Users Say</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    &quot; Pen Tutor transformed my daughter&apos;s math grades. The tutors are incredibly patient and the platform
                    is so easy to use. Highly recommend! &quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Bint-e-Kalsoom</p>
                      <p className="text-sm text-muted-foreground">Parent, Dubai</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    &quot;As a tutoring agency owner, Pen Tutor&aposs; white-label solution has been a game-changer. The platform
                    handles everything seamlessly.&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Ahmed Hassan</p>
                      <p className="text-sm text-muted-foreground">CEO, EduTech Solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="cases" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Case Studies & Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Discover how we&apos;ve helped businesses across different industries achieve their goals through our
              innovative solutions and expert guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Case Study 1 - E-commerce Platform */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Global E-commerce Platform</h3>
                    <p className="text-sm text-muted-foreground">Penova Tech</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      A UAE-based retailer needed a scalable e-commerce platform to handle 10,000+ daily orders with
                      real-time inventory management across multiple warehouses.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      Built a cloud-native platform with microservices architecture, AI-powered recommendations, and
                      integrated payment gateways supporting 15+ currencies.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">300%</div>
                      <div className="text-xs text-muted-foreground">Sales Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">99.9%</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    View Full Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2 - Student Visa Success */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Student Visa Program</h3>
                    <p className="text-sm text-muted-foreground">Pen Visa Consultancy</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      A group of 50 Pakistani students needed guidance for UK student visas with complex documentation
                      requirements and tight deadlines.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      Provided comprehensive consultation, document preparation, interview coaching, and application
                      tracking with dedicated case managers.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">98%</div>
                      <div className="text-xs text-muted-foreground">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">30</div>
                      <div className="text-xs text-muted-foreground">Days Average</div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    View Full Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 3 - EdTech Platform */}
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">AI Tutoring Agency</h3>
                    <p className="text-sm text-muted-foreground">Pen Tutor</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      A tutoring agency in Dubai wanted to scale from 100 to 1000+ students while maintaining
                      personalized learning experiences.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      Implemented white-label Pen Tutor platform with AI matching, automated scheduling, and integrated
                      billing systems.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">10x</div>
                      <div className="text-xs text-muted-foreground">Student Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">85%</div>
                      <div className="text-xs text-muted-foreground">Cost Reduction</div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    View Full Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Client Logos Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">Trusted by Leading Organizations</h3>
            <p className="text-muted-foreground mb-8">
              We partner with industry leaders and integrate with top-tier service providers to deliver exceptional
              results for our clients.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-center h-16">
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
              <div className="flex items-center justify-center h-16">
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                  <Globe className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
              <div className="flex items-center justify-center h-16">
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                  <Shield className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
              <div className="flex items-center justify-center h-16">
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
              <div className="flex items-center justify-center h-16">
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                  <Cloud className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
              <div className="flex items-center justify-center h-16">
                <div className="w-24 h-12 bg-muted rounded flex items-center justify-center">
                  <Zap className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Hear from our satisfied clients across different industries and services. Their success stories speak to
              our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Testimonial 1 */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-pretty">
                  &quot;Penova Tech delivered our e-commerce platform ahead of schedule and under budget. The team&apos;s
                  expertise in cloud architecture and AI integration exceeded our expectations. Our sales increased by
                  300% within the first quarter.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Rashid Al-Maktoum</p>
                    <p className="text-sm text-muted-foreground">CEO, Dubai Retail Group</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-pretty">
                  &quot;Pen Visa Consultancy made my Canadian immigration process seamless. Their team provided expert
                  guidance at every step, from document preparation to interview coaching. I received my visa approval
                  in just 6 months!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Maria Gul</p>
                    <p className="text-sm text-muted-foreground">Software Engineer, Karachi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-pretty">
                  &quot;Pen Tutor transformed our tutoring business. The white-label platform allowed us to scale from 50 to
                  500+ students while reducing operational costs by 60%. The AI matching system is incredibly
                  effective.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ahmed Hassan</p>
                    <p className="text-sm text-muted-foreground">Founder, EduTech Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 4 */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-pretty">
                  &quot;The mobile app developed by Penova Tech has revolutionized how we serve our customers. The real-time
                  features and intuitive design have increased user engagement by 250%. Exceptional work!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">CTO, FinTech Innovations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 5 */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-pretty">
                  &quot;My son&apos;s grades improved dramatically after using Pen Tutor. The personalized learning approach and
                  quality of tutors is outstanding. The platform is user-friendly and the progress tracking keeps us
                  informed.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Fatima Al-Zahra</p>
                    <p className="text-sm text-muted-foreground">Parent, Abu Dhabi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 6 */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-pretty">
                  &quot;Pen Visa Consultancy helped our entire family secure UK visitor visas for our daughter&apos;s graduation.
                  Their attention to detail and professional service made the complex process stress-free. Highly
                  recommended!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Omar Sheikh</p>
                    <p className="text-sm text-muted-foreground">Business Owner, Lahore</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our experienced leadership team brings together decades of expertise in technology, education, and
              international business to drive innovation and deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* CEO */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Kashif Liaqat</h3>
                <p className="text-muted-foreground mb-4">Chief Executive Officer</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Visionary leader with 15+ years in international business and technology innovation
                </p>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </CardContent>
            </Card>

            {/* CTO */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Amna Shehzadi</h3>
                <p className="text-muted-foreground mb-4">Chief Technology Officer</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Tech innovator specializing in AI/ML and scalable cloud architectures
                </p>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </CardContent>
            </Card>

            {/* Head of Penova Tech */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Smartphone className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">M Talha</h3>
                <p className="text-muted-foreground mb-4">Full Stack Developer</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Software development expert with expertise in enterprise solutions
                </p>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </CardContent>
            </Card>

            {/* Head of Pen Tutor */}
            {/* <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Dr. Fatima Al-Zahra</h3>
                <p className="text-muted-foreground mb-4">Head of Pen Tutor</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Education technology pioneer with PhD in Educational Psychology
                </p>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </CardContent>
            </Card> */}

            {/* Head of Visa Consultancy */}
            {/* <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Omar Sheikh</h3>
                <p className="text-muted-foreground mb-4">Head of Pen Visa Consultancy</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Immigration law specialist with 12+ years in visa consultancy
                </p>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </CardContent>
            </Card> */}

            {/* Head of Operations */}
            {/* <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Rashid Al-Maktoum</h3>
                <p className="text-muted-foreground mb-4">Head of Operations</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Operations excellence leader ensuring seamless service delivery
                </p>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </CardContent>
            </Card> */}

          </div>
        </div>
      </section>

      <section id="careers" className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Join Our Growing Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Be part of a dynamic, innovative company that&apos;s shaping the future of technology, education, and
              international services. We offer competitive benefits and a culture of growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Why Join Us */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground">Why Choose Pen Global?</h3>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Innovation-First Culture</h4>
                    <p className="text-muted-foreground">
                      Work with cutting-edge technologies and contribute to groundbreaking solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Global Impact</h4>
                    <p className="text-muted-foreground">
                      Make a difference in people&apos;s lives across Pakistan, UAE, and beyond
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Career Growth</h4>
                    <p className="text-muted-foreground">
                      Continuous learning opportunities and clear advancement paths
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Work-Life Balance</h4>
                    <p className="text-muted-foreground">
                      Flexible working arrangements and comprehensive benefits package
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Openings */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Current Openings</h3>

              <div className="space-y-4">
                <Card className="p-4 hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">Senior Full-Stack Developer</h4>
                        <p className="text-sm text-muted-foreground">Penova Tech • Dubai, UAE • Full-time</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">Visa Consultant</h4>
                        <p className="text-sm text-muted-foreground">Pen Visa Consultancy • Karachi, PK • Full-time</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">Educational Content Specialist</h4>
                        <p className="text-sm text-muted-foreground">Pen Tutor • Remote • Part-time</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4 hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">DevOps Engineer</h4>
                        <p className="text-sm text-muted-foreground">Penova Tech • Dubai, UAE • Full-time</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center pt-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Mail className="mr-2 h-4 w-4" />
                  View All Positions
                </Button>
              </div>
            </div>
          </div>

          {/* Perks */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">Employee Benefits</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Health Insurance</h4>
                <p className="text-sm text-muted-foreground">Comprehensive medical coverage for you and your family</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Coffee className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Flexible Hours</h4>
                <p className="text-sm text-muted-foreground">Work-life balance with flexible scheduling options</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Learning Budget</h4>
                <p className="text-sm text-muted-foreground">
                  Annual budget for courses, conferences, and certifications
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Remote Work</h4>
                <p className="text-sm text-muted-foreground">Hybrid and remote work options available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Latest News & Insights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Stay updated with our latest developments, industry insights, and thought leadership in technology,
              education, and international services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Blog Post 1 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Image width={500} height={500} src="/ai.jpg" alt="AI in Education" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">
                  Technology
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">The Future of AI in Online Education</h3>
                <p className="text-muted-foreground mb-4">
                  Exploring how artificial intelligence is revolutionizing personalized learning experiences and student
                  outcomes in digital education platforms.
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Dec 15, 2024</span>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div> 
              </CardContent>
            </Card>

            {/* Blog Post 2 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Image width={500} height={500} src="/visa.jpg" alt="Visa Trends 2025" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">
                  Immigration
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">2025 Visa Trends: What to Expect</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive analysis of upcoming changes in global visa policies and their impact on international
                  mobility and business travel.
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Dec 10, 2024</span>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Blog Post 3 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Image width={500} height={500} src="/story.jpg" alt="Cloud Migration Success" className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">
                  Case Study
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-3">Cloud Migration Success Story</h3>
                <p className="text-muted-foreground mb-4">
                  How we helped a major retailer migrate to cloud infrastructure, resulting in 40% cost savings and
                  improved scalability.
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Dec 5, 2024</span>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              <Newspaper className="mr-2 h-5 w-5" />
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ready to start your project or need expert consultation? Contact us today and let&apos;s discuss how we can
              help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company/Organization</label>
                      <Input placeholder="Your company name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Service Interest *</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="penova-tech">Penova Tech - Software Development</SelectItem>
                          <SelectItem value="pen-tutor">Pen Tutor - Online Learning Platform</SelectItem>
                          <SelectItem value="pen-visa">Pen Visa Consultancy - Immigration Services</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <Textarea placeholder="Tell us about your project or requirements..." rows={5} />
                  </div>

                  {/* Honeypot field for spam protection */}
                  <input type="text" name="website" style={{ display: "none" }} />

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone Numbers</h4>
                      <p className="text-muted-foreground">Pakistan: +92 321 8815888</p>
                      {/* <p className="text-muted-foreground">UAE: +971 4 123 4567</p> */}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email Addresses</h4>
                      <p className="text-muted-foreground">General: info@penglobal.com</p>
                      <p className="text-muted-foreground">Sales: sales@penglobal.com</p>
                      <p className="text-muted-foreground">Support: support@penglobal.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Office Locations</h4>
                      <div className="space-y-2">
                        {/* <div>
                          <p className="font-medium text-foreground">Dubai, UAE</p>
                          <p className="text-muted-foreground">Business Bay, Dubai, United Arab Emirates</p>
                        </div> */}
                        <div>
                          <p className="font-medium text-foreground">Lahore, Pakistan</p>
                          <p className="text-muted-foreground">Johar Town, Lahore, Pakistan</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                      <p className="text-muted-foreground">+92 321 8815888</p>
                      {/* <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                        Chat on WhatsApp
                      </Button> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h4 className="font-semibold text-foreground mb-4">Business Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">* Times shown in Gulf Standard Time (GST)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-primary">Pen Global Solutions</div>
              <p className="text-background/80 text-sm">
                Bridging international business gaps through innovative technology, expert visa consultancy, and
                world-class education solutions.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-background hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-background hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-background hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-background hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-background hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-background mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="#solutions" className="hover:text-primary transition-colors">
                    Penova Tech
                  </a>
                </li>
                <li>
                  <a href="#product" className="hover:text-primary transition-colors">
                    Pen Tutor
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="hover:text-primary transition-colors">
                    Pen Visa Consultancy
                  </a>
                </li>
                <li>
                  <a href="#cases" className="hover:text-primary transition-colors">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-background mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-primary transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-background mb-4">Stay Updated</h4>
              <p className="text-sm text-background/80 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-background/80">© 2024 Pen Global Solutions. All rights reserved.</div>
              <div className="flex gap-6 text-sm text-background/80">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
