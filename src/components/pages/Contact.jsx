"use client";

import { useState } from "react";
import { Mail, MessageSquare, Phone, Send, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
    const [website, setWebsite] = useState(""); // honeypot
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // { type: 'success'|'error', text: '' }

    const validateEmail = (em) => {
        // simple validation
        return /\S+@\S+\.\S+/.test(em);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(null);

        if (website && website.trim() !== "") {
            // honeypot filled => treat as spam (silently ignore)
            setStatus({ type: "success", text: "Message sent." });
            return;
        }

        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus({ type: "error", text: "Please fill required fields (name, email, message)." });
            return;
        }

        if (!validateEmail(email)) {
            setStatus({ type: "error", text: "Please enter a valid email address." });
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    company,
                    service,
                    message,
                    website, // honeypot (should be empty)
                }),
            });

            const data = await res.json();
            if (res.ok) {
                setStatus({ type: "success", text: data?.message || "Message sent. We'll get back to you soon." });
                // reset form
                setName("");
                setEmail("");
                setCompany("");
                setService("");
                setMessage("");
            } else {
                setStatus({ type: "error", text: data?.error || "Something went wrong. Try again later." });
            }
        } catch (err) {
            console.error(err);
            setStatus({ type: "error", text: "Network error. Try again later." });
        } finally {
            setLoading(false);
        }
    };

    return (
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
                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                                        <Input
                                            placeholder="Your full name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                                        <Input
                                            type="email"
                                            placeholder="your.email@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Company/Organization</label>
                                        <Input
                                            placeholder="Your company name"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Service Interest *</label>
                                        <Select value={service} onValueChange={(v) => setService(v)}>
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
                                    <Textarea
                                        placeholder="Tell us about your project or requirements..."
                                        rows={5}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Honeypot field for spam protection - hide visually but keep in DOM */}
                                <input
                                    type="text"
                                    name="website"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                    style={{ display: "none" }}
                                    autoComplete="off"
                                />

                                <Button
                                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                                    size="lg"
                                    type="submit"
                                    disabled={loading}
                                >
                                    <Send className="mr-2 h-5 w-5" />
                                    {loading ? "Sending..." : "Send Message"}
                                </Button>

                                {status && (
                                    <p
                                        className={`mt-2 text-sm ${status.type === "success" ? "text-foreground" : "text-destructive"
                                            }`}
                                        role="status"
                                    >
                                        {status.text}
                                    </p>
                                )}
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
                                        <p className="text-muted-foreground">UAE: +971 58 147 4250</p>
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
                                            <div>
                                                <p className="font-medium text-foreground">Dubai, UAE</p>
                                                <p className="text-muted-foreground">
                                                    Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.
                                                </p>
                                            </div>
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
    );
}
