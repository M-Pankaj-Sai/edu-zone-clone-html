import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Admissions from "@/components/Admissions";
import Events from "@/components/Events";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[140px]">
        <Hero />
        <Features />
        <About />
        <Stats />
        <Admissions />
        <Events />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
