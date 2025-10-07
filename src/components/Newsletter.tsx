import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-secondary-foreground/80 mb-8">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your Email Address"
              className="bg-background text-foreground flex-1"
            />
            <Button variant="hero" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
