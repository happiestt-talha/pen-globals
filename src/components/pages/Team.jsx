
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import { Linkedin } from "lucide-react"
import { Code } from "lucide-react"
import { Smartphone } from "lucide-react"

export default function Team() {
    return (
        <section id="team" className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Meet Our Leadership Team</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Our experienced leadership team brings together decades of expertise in technology, education, and
                        international business to drive innovation and deliver exceptional results.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* CEO */}
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-0">
                            <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Users className="h-12 w-12 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Kashif Liaqat</h3>
                            <p className="text-muted-foreground mb-4">Chief Executive Officer</p>
                            <p className="text-sm text-muted-foreground mb-4">
                                Visionary leader with 15+ years in international business and technology innovation
                            </p>
                            <Button variant="outline" size="sm">
                                <Linkedin className="h-4 w-4 mr-2" />
                                Connect
                            </Button>
                        </CardContent>
                    </Card>

                    {/* CTO */}
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-0">
                            <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Code className="h-12 w-12 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Amna Shehzadi</h3>
                            <p className="text-muted-foreground mb-4">Chief Technology Officer</p>
                            <p className="text-sm text-muted-foreground mb-4">
                                Tech innovator specializing in AI/ML and scalable cloud architectures
                            </p>
                            <Button variant="outline" size="sm">
                                <Linkedin className="h-4 w-4 mr-2" />
                                Connect
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Head of Penova Tech */}
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-0">
                            <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <Smartphone className="h-12 w-12 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">M Talha</h3>
                            <p className="text-muted-foreground mb-4">Full Stack Developer</p>
                            <p className="text-sm text-muted-foreground mb-4">
                                Software development expert with expertise in enterprise solutions
                            </p>
                            <Button variant="outline" size="sm">
                                <Linkedin className="h-4 w-4 mr-2" />
                                Connect
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Head of Pen Tutor */}
                    {/* <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Dr. Fatima Al-Zahra</h3>
                <p className="text-muted-foreground mb-4">Head of Pen Tutor</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Education technology pioneer with PhD in Educational Psychology
                </p>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </CardContent>
            </Card> */}

                    {/* Head of Visa Consultancy */}
                    {/* <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FileText className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Omar Sheikh</h3>
                <p className="text-muted-foreground mb-4">Head of Pen Visa Consultancy</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Immigration law specialist with 12+ years in visa consultancy
                </p>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </CardContent>
            </Card> */}

                    {/* Head of Operations */}
                    {/* <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-12 w-12 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Rashid Al-Maktoum</h3>
                <p className="text-muted-foreground mb-4">Head of Operations</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Operations excellence leader ensuring seamless service delivery
                </p>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </CardContent>
            </Card> */}

                </div>
            </div>
        </section>
    );
}