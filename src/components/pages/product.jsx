
import Image from "next/image"
import { Video, Star, Calendar, CreditCard, BarChart3, Award, CheckCircle, HelpCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Product() {
    return (
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
    );
}