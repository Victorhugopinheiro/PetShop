import Image from "next/image";
import { Hero } from "./_components/hero/hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <div >
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
