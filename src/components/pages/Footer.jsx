import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Linkedin, Twitter, Facebook, Instagram, Youtube, Send } from "lucide-react"

export default function Footer() {
    return (
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
    );
}