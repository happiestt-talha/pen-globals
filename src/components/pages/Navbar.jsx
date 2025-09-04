"use client"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"


export default function Navbar() {
    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Solutions", href: "#solutions" },
        { name: "Team", href: "#team" },
        { name: "Contact", href: "#contact" },
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return (
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
                        <Link href="#contact" className="hidden p-2 rounded-md sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90">
                            Get a Quote
                        </Link>

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
                            <Link href="#contact" className="mt-4 p-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:hidden">
                                Get a Quote
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}