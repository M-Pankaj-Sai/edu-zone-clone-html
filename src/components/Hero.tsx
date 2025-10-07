import { Button } from "./ui/button";
import heroImage from "@/assets/hero-classroom.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Happy children learning in classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-6 py-2 mb-6 text-accent font-semibold text-sm uppercase tracking-wider border-2 border-accent rounded-full animate-fade-in">
            Apply for Admission
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
            How to enroll your child to a class?
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
            Powering Progress Through Education
          </p>
          <Button variant="hero" size="lg" className="text-lg px-10 py-6 h-auto animate-fade-in">
            Apply Now
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
