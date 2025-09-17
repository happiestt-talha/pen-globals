"use client"
import React from "react";
import { Building2, FileText, GraduationCap, Star, Smartphone, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Replace `/images/testimonials-bg.jpg` with your actual background image path.
// This component uses a fixed background (parallax-like) so the image stays stationary
// while the testimonial cards and other content scroll above it.

export default function Testimonials() {
    return (
        <section className="relative py-20" aria-labelledby="testimonials-heading">
            {/* Background image (parallax effect using `background-attachment: fixed`) */}
            <div
                className="absolute inset-0 bg-center bg-cover bg-fixed"
                style={{ backgroundImage: "url('/professional-visa-consultation-office-with-world-m.jpg')", zIndex: 0 }}
                aria-hidden="true"
            />

            {/* Optional overlay to improve text contrast */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: 'rgba(0,0,0,0.35)', zIndex: 1 }}
                aria-hidden="true"
            />

            {/* Content wrapper; z-index higher than background & overlay */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 2 }}>
                <div className="text-center mb-16">
                    <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Client Testimonials
                    </h2>
                    <p className="text-xl text-white/85 max-w-3xl mx-auto text-pretty">
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
                                We were hesitant about outsourcing our e-commerce platform, but Penova Tech proved us wrong.
                                They delivered a solid solution that helped us increase online sales by around 40% in six months.
                                Their cloud architecture knowledge was impressive.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Building2 className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Shariq Khan</p>
                                    <p className="text-sm text-muted-foreground">Operations Director, Urban Retail Collective</p>
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
                                The immigration process was more complex than I expected, but Pen Visa Consultancy
                                helped navigate everything. My Canadian visa took about 8 months to get approved, but
                                having their guidance made the paperwork much less stressful.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                                    <FileText className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Sofia Hameed</p>
                                    <p className="text-sm text-muted-foreground">Frontend Developer, Barcelona</p>
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
                                We've been using Pen Tutor for about a year now, and it's helped us grow our student base
                                steadily. The platform isn't perfect - we had some onboarding issues - but their support team
                                was responsive and the AI matching works well for most of our students.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <GraduationCap className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">Mohsin Ali</p>
                                    <p className="text-sm text-muted-foreground">Co-founder, LearnBright Tutoring</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Additional testimonials can be uncommented or added here */}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="space-y-2">
                        <div className="text-3xl font-bold text-primary">4.8/5</div>
                        <div className="text-white">Average Rating</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl font-bold text-primary">480+</div>
                        <div className="text-white">Happy Clients</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl font-bold text-primary">93%</div>
                        <div className="text-white">Success Rate</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl font-bold text-primary">24/7</div>
                        <div className="text-white">Support Available</div>
                    </div>
                </div>
            </div>

            {/* Small inline CSS fallback for mobile where background-attachment: fixed is not supported */}
            <style jsx>{`
        @media (max-width: 640px) {
          /* On small screens, make background behave like cover (prevents issues with fixed) */
          .bg-fixed {
            background-attachment: scroll !important;
            background-position: center !important;
          }
        }
      `}</style>
        </section>
    );
}
