import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Events = () => {
  const events = [
    {
      date: "09",
      month: "June",
      time: "05:00 PM",
      location: "Marmora Road",
      title: "Things You Most Likely Didn't Know About",
      description: "There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since.",
    },
    {
      date: "08",
      month: "June",
      time: "05:00 PM",
      location: "Marmora Road",
      title: "Educational Excellence Workshop",
      description: "There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since.",
    },
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="flex">
                <div className="bg-primary text-white p-6 flex flex-col items-center justify-center min-w-[100px]">
                  <div className="text-4xl font-bold">{event.date}</div>
                  <div className="text-lg">{event.month}</div>
                </div>
                <div className="p-6 flex-1">
                  <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                  <Button variant="link" className="p-0 h-auto">
                    Learn More →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
