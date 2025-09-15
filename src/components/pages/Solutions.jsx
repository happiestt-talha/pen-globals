"use client"

import { FileText, Code, CheckCircle, Star, ArrowRight, Users, TrendingUp, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Link from "next/link"

export default function Solutions() {
    const [activeTab, setActiveTab] = useState("visa")
    return (
        <section id="solutions" className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Brands</h2>
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
                                            <Link href="https://penvisa.com/" target="_blank" className="flex items-center gap-2">
                                                Book Consultation
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
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
                                            <Link href="https://penovatech.com/" target="_blank" className="flex items-center gap-2">
                                               Get a quote
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
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
                                            <Link href="https://pentutor.com/" target="_blank" className="flex items-center gap-2">
                                                Take a Free Trial
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </section>
    );
}