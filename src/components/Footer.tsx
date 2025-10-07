import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About EduZone</h3>
            <p className="text-background/80 text-sm">
              Providing quality education and nurturing young minds for over 15 years. We believe in igniting the spark of genius in every child.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-background/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#programs" className="text-background/80 hover:text-accent transition-colors">Programs</a></li>
              <li><a href="#admissions" className="text-background/80 hover:text-accent transition-colors">Admissions</a></li>
              <li><a href="#events" className="text-background/80 hover:text-accent transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>1073 W Stephen Ave</li>
              <li>Clawson, MI 48017</li>
              <li>Phone: +1 234 567 8901</li>
              <li>Email: info@example.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-background/10 hover:bg-accent p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-background/10 hover:bg-accent p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-background/10 hover:bg-accent p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-background/10 hover:bg-accent p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} EduZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
