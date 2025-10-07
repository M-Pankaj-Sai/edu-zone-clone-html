import { Button } from "./ui/button";
import { FileText, Send, CheckCircle } from "lucide-react";

const Admissions = () => {
  const steps = [
    {
      icon: FileText,
      title: "Request Info",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      action: "Request Info",
    },
    {
      icon: Send,
      title: "Apply Now",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      action: "Apply Online",
    },
    {
      icon: CheckCircle,
      title: "Submit",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.",
      action: "Submit Form",
    },
  ];

  return (
    <section id="admissions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Admissions Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-2"
            >
              <div className="bg-accent/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <step.icon className="h-10 w-10 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground mb-6">{step.description}</p>
              <Button variant="outline" className="w-full">
                {step.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Admissions;
