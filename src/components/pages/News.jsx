import { ArrowRight, Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function News() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Latest News & Insights</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Stay updated with our latest developments, industry insights, and thought leadership in technology,
                        education, and international services.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Blog Post 1 */}
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <Image width={500} height={500} src="/ai.jpg" alt="AI in Education" className="w-full h-48 object-cover" />
                        <CardContent className="p-6">
                            <Badge variant="secondary" className="mb-3">
                                Technology
                            </Badge>
                            <h3 className="text-xl font-bold text-foreground mb-3">The Future of AI in Online Education</h3>
                            <p className="text-muted-foreground mb-4">
                                Exploring how artificial intelligence is revolutionizing personalized learning experiences and student
                                outcomes in digital education platforms.
                            </p>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <span>Dec 15, 2024</span>
                                <Button variant="ghost" size="sm">
                                    Read More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Blog Post 2 */}
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <Image width={500} height={500} src="/visa.jpg" alt="Visa Trends 2025" className="w-full h-48 object-cover" />
                        <CardContent className="p-6">
                            <Badge variant="secondary" className="mb-3">
                                Immigration
                            </Badge>
                            <h3 className="text-xl font-bold text-foreground mb-3">2025 Visa Trends: What to Expect</h3>
                            <p className="text-muted-foreground mb-4">
                                Comprehensive analysis of upcoming changes in global visa policies and their impact on international
                                mobility and business travel.
                            </p>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <span>Dec 10, 2024</span>
                                <Button variant="ghost" size="sm">
                                    Read More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Blog Post 3 */}
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <Image width={500} height={500} src="/story.jpg" alt="Cloud Migration Success" className="w-full h-48 object-cover" />
                        <CardContent className="p-6">
                            <Badge variant="secondary" className="mb-3">
                                Case Study
                            </Badge>
                            <h3 className="text-xl font-bold text-foreground mb-3">Cloud Migration Success Story</h3>
                            <p className="text-muted-foreground mb-4">
                                How we helped a major retailer migrate to cloud infrastructure, resulting in 40% cost savings and
                                improved scalability.
                            </p>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <span>Dec 5, 2024</span>
                                <Button variant="ghost" size="sm">
                                    Read More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="text-center">
                    <Button variant="outline" size="lg">
                        <Newspaper className="mr-2 h-5 w-5" />
                        View All Articles
                    </Button>
                </div>
            </div>
        </section>
    );
}