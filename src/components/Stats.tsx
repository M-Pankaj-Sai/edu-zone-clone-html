const Stats = () => {
  const stats = [
    { number: "105", label: "Certified Teachers" },
    { number: "1552", label: "Students Enrolled" },
    { number: "97%", label: "Passing to Universities" },
    { number: "100%", label: "Satisfied Parents" },
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Goals</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            There are many variations of passages of Lorem Ipsum typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl md:text-6xl font-bold mb-3">{stat.number}</div>
              <div className="text-lg text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
