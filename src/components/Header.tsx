import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
      {/* Top Info Bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-2 text-sm">
            <div className="flex flex-wrap gap-4">
              <a href="tel:+12345678901" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+1 234 567 8901</span>
              </a>
              <a href="mailto:info@example.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">info@example.com</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>1073 W Stephen Ave, Clawson</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">EduZone</h1>
                <p className="text-xs text-muted-foreground">Best Education 4 You</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#home" className="text-foreground hover:text-primary font-medium transition-colors">HOME</a>
              <a href="#about" className="text-foreground hover:text-primary font-medium transition-colors">ABOUT</a>
              <a href="#programs" className="text-foreground hover:text-primary font-medium transition-colors">PROGRAMS</a>
              <a href="#admissions" className="text-foreground hover:text-primary font-medium transition-colors">ADMISSIONS</a>
              <a href="#events" className="text-foreground hover:text-primary font-medium transition-colors">EVENTS</a>
              <a href="#contact" className="text-foreground hover:text-primary font-medium transition-colors">CONTACT</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="hero" size="lg">
                GET A QUOTE
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-foreground"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t space-y-3">
              <a href="#home" className="block text-foreground hover:text-primary font-medium py-2 transition-colors">HOME</a>
              <a href="#about" className="block text-foreground hover:text-primary font-medium py-2 transition-colors">ABOUT</a>
              <a href="#programs" className="block text-foreground hover:text-primary font-medium py-2 transition-colors">PROGRAMS</a>
              <a href="#admissions" className="block text-foreground hover:text-primary font-medium py-2 transition-colors">ADMISSIONS</a>
              <a href="#events" className="block text-foreground hover:text-primary font-medium py-2 transition-colors">EVENTS</a>
              <a href="#contact" className="block text-foreground hover:text-primary font-medium py-2 transition-colors">CONTACT</a>
              <Button variant="hero" size="lg" className="w-full">
                GET A QUOTE
              </Button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
