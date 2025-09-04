import { Globe, Heart, Rocket, TrendingUp, Mail, Coffee, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Careers() {
    return (
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
    );
}