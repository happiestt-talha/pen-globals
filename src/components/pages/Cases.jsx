import { Cloud, ExternalLink, Globe, Shield, Smartphone, Zap, Building2, GraduationCap, Brain } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function Cases() {
    return (
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
    );
}