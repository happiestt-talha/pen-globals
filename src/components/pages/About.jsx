export default function About() {
    return (
        <section id="about" className="py-20 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About Pen Global Solutions</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        We are a leading global technology and consultancy firm, delivering innovative solutions across visa
                        consultancy, software development, and e-learning platforms. Founded with a vision to bridge international
                        business gaps, we serve clients across Pakistan, UAE, and beyond.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="space-y-2">
                        <div className="text-4xl font-bold text-primary">500+</div>
                        <div className="text-muted-foreground">Clients Served</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl font-bold text-primary">200+</div>
                        <div className="text-muted-foreground">Projects Delivered</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl font-bold text-primary">15+</div>
                        <div className="text-muted-foreground">Countries</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl font-bold text-primary">50+</div>
                        <div className="text-muted-foreground">Team Members</div>
                    </div>
                </div>
            </div>
        </section>
    );
}