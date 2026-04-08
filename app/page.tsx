import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import LogoSlider from "@/components/sections/LogoSlider";
import Package from "@/components/sections/Package";
import CoreValues from "@/components/sections/CoreValues";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <CoreValues />
      <About />
      <Services />
      <LogoSlider />
      <Package />
    </div>
  );
}
