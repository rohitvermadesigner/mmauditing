import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import CoreValues from "@/components/sections/CoreValues";
import Services from "@/components/sections/Services";
import LogoSlider from "@/components/sections/LogoSlider";
import Team from "@/components/sections/Team";
import Cta from "@/components/sections/Cta";

export default function Home() {
  return (
    <div>
      <Hero />
      <CoreValues />
      <About />
      <Services />
      <LogoSlider />
      <Team />
      <Cta />
    </div>
  );
}
