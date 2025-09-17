"use client";

import { useState, useMemo } from "react";
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
    // form state (same functionality as your first version)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [service, setService] = useState("");
    const [subService, setSubService] = useState("");
    const [message, setMessage] = useState("");
    const [website, setWebsite] = useState(""); // honeypot
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // { type: 'success'|'error', text: '' }

    const validateEmail = (em) => /\S+@\S+\.\S+/.test(em);

    // service -> subservice mapping
    const subServicesMap = useMemo(
        () => ({
            "penova-tech": [
                { value: "web-dev", label: "Web Development" },
                { value: "app-dev", label: "App Development" },
                { value: "ui-ux", label: "UI/UX Design" },
                { value: "ecommerce", label: "E-commerce Solutions" },
                { value: "qa", label: "QA & Testing" },
            ],
            "pen-tutor": [
                { value: "course-dev", label: "Course Development" },
                { value: "platform", label: "Platform Customization" },
                { value: "tutoring", label: "Tutoring Services" },
            ],
            // other services can have empty arrays or omitted
        }),
        []
    );

    const availableSubservices = subServicesMap[service] || [];

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

        // if selected service has subservices, require subService
        if (availableSubservices.length > 0 && !subService) {
            setStatus({ type: "error", text: "Please select a sub-service for the chosen service." });
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
                    subService,
                    message,
                    website, // honeypot
                }),
            });

            const data = await res.json();
            if (res.ok) {
                setStatus({ type: "success", text: data?.message || "Message sent. We'll get back to you soon." });
                // reset form (preserve nothing)
                setName("");
                setEmail("");
                setCompany("");
                setService("");
                setSubService("");
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
        <section id="contact" className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-stretch">
                    {/* Left - image / info (design from your second return) */}
                    <div className="relative group w-full h-full rounded-2xl overflow-hidden">
                        <img
                            src="https://pagedone.io/asset/uploads/1696488602.png"
                            alt="Contact visual"
                            className="w-full h-full object-cover lg:rounded-l-2xl"
                        />

                        <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/40" />

                        <div className="absolute top-8 left-8 text-white">
                            <h1 className="font-manrope text-4xl font-bold leading-10">Contact us</h1>
                            <p className="mt-3 max-w-xs text-sm text-white/90">Start your next project with us — tell us what you need and we'll be in touch.</p>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/25 backdrop-blur-md rounded-lg p-6 shadow-md">
                                <div className="mb-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-secondary/10 rounded-lg">
                                            <Phone className="h-6 w-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Phone / WhatsApp</h4>
                                            <p className="text-white/90">Pakistan: +92 321 8815888</p>
                                            <p className="text-white/90">UAE (Dubai): +971 58 147 4250</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Email</h4>
                                            <p className="text-white/90">General: info@penglobal.com</p>
                                            <p className="text-white/90">Support: support@penglobal.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-secondary/10 rounded-lg">
                                            <MapPin className="h-6 w-6 text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Office Locations</h4>
                                            <div className="space-y-2">
                                                <div>
                                                    <p className="font-medium text-foreground">Dubai, UAE</p>
                                                    <p className="text-white/90">Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.</p>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-foreground">Lahore, Pakistan</p>
                                                    <p className="text-white/90">Johar Town, Lahore, Pakistan</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - form (functionality of the first return) */}
                    <div className="bg-secondary/5 px-6 py-4 pb-10 lg:px-11 lg:py-6 lg:rounded-r-2xl rounded-2xl">
                        <h2 className="text-secondary font-manrope text-4xl font-semibold leading-10 mb-6">Send Us A Message</h2>

                        <form onSubmit={handleSubmit} className="flex flex-col lg:gap-48" noValidate>

                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                                        <Input placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} required />
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
                                        <Input placeholder="Your company name" value={company} onChange={(e) => setCompany(e.target.value)} />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Service Interest *</label>
                                        <Select
                                            value={service}
                                            onValueChange={(v) => {
                                                setService(v);
                                                setSubService(""); // reset subservice whenever service changes
                                            }}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a service" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="penova-tech">Penova Tech - Software Development</SelectItem>
                                                <SelectItem value="pen-tutor">Pen Tutor - Online Learning Platform</SelectItem>
                                                <SelectItem value="pen-visa">Pen Visa - Immigration Services</SelectItem>
                                                <SelectItem value="general">General Inquiry</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* show sub-service if available for chosen service */}
                                {availableSubservices.length > 0 && (
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Sub-service *</label>
                                        <Select value={subService} onValueChange={(v) => setSubService(v)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a sub-service" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {availableSubservices.map((s) => (
                                                    <SelectItem key={s.value} value={s.value}>
                                                        {s.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}

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
                                <input type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} style={{ display: "none" }} autoComplete="off" />
                            </div>

                            <div>
                                <Button className="w-full" size="lg" type="submit" disabled={loading}>
                                    <Send className="mr-2 h-5 w-5" />
                                    {loading ? "Sending..." : "Send Message"}
                                </Button>
                            </div>

                            {status && (
                                <p className={`mt-2 text-sm ${status.type === "success" ? "text-foreground" : "text-destructive"}`} role="status">
                                    {status.text}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
