"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {

    const heroSlides = [
        {
            id: 1,
            title: "Technical Solutions",
            subtitle: "Custom software solutions for international businesses",
            cta: "See Our Work",
            href: "https://penovatech.com/",
            secondaryCta: "Get Quote",
            // videoUrl: "/software-development-team-working-on-modern-applic.jpg",
            videoUrl: "/code.jpg",
            microcopy: "Web & Mobile | Cloud Solutions | AI/ML Integration",
        },
        {
            id: 2,
            title: "Pen Global Solutions",
            subtitle: "Building cross-border tech & services that move your business forward",
            cta: "Get a Free Consultation",
            href: "#contact",
            secondaryCta: "Learn More",
            videoUrl: "/meydan.webp",
            microcopy: "Free consultation | 24/7 support | Offices: PK, UAE",
        },
        {
            id: 3,
            title: "Visa Consultancy",
            subtitle: "Expert visa guidance and application support worldwide",
            cta: "Check Your Eligibility",
            href: "https://penvisa.com/",
            secondaryCta: "Book Consultation",
            videoUrl: "/professional-visa-consultation-office-with-world-m.jpg",
            microcopy: "Success rate 95% | Expert guidance | Global coverage",
        },
        {
            id: 4,
            title: "Online Tutoring",
            subtitle: "Learn anywhere with our online tutoring platform",
            cta: "Start 7-Day Free Trial",
            href: "https://pentutor.com/",
            secondaryCta: "View Demo",
            // videoUrl: "/online-learning-platform-with-video-calls-and-inte.jpg",
            videoUrl: "/meeting.jpg",
            microcopy: "Free trial | Expert tutors | Flexible scheduling",
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
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
                                    <Link size="lg" className="bg-primary p-2 rounded-md text-primary-foreground hover:bg-primary/90 text-lg px-8" href={slide.href}>
                                        {slide.cta}
                                    </Link>
                                    {/* <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-white border-white hover:bg-white hover:text-foreground text-lg px-8 bg-transparent"
                                    >
                                        {slide.secondaryCta}
                                    </Button> */}
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
    );
}