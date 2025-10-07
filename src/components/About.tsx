import { Button } from "./ui/button";
import { Check } from "lucide-react";
import schoolBuilding from "@/assets/school-building.jpg";
import teachersStudents from "@/assets/teachers-students.jpg";

const About = () => {
  const highlights = [
    "You Will Never Thought That Knowing Education",
    "Never Mess With Education And Here's The Reasons Why",
    "This Is Why This Year Will Be The Year Of Education",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={schoolBuilding}
                  alt="School building exterior"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <div className="bg-primary text-white p-6 rounded-lg shadow-lg">
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <div className="text-lg">Years Experience Working</div>
                </div>
              </div>
              <div className="mt-12">
                <img
                  src={teachersStudents}
                  alt="Teachers and students"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Discover our School
            </h2>
            <h3 className="text-2xl text-primary mb-6">
              Igniting the spark of genius in every child.
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-accent rounded-full p-1 mt-1">
                    <Check className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="secondary" size="lg">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
