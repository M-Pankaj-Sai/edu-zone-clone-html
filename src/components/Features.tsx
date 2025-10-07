import { GraduationCap, Clock, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Special Education",
      description: "There are many variations of passages of Lorem Ipsum typesetting industry.",
    },
    {
      icon: Clock,
      title: "Full Day Session",
      description: "There are many variations of passages of Lorem Ipsum typesetting industry.",
    },
    {
      icon: Users,
      title: "Qualified Teachers",
      description: "There are many variations of passages of Lorem Ipsum typesetting industry.",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
