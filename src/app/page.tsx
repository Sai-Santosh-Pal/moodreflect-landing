import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Product } from "@/sections/Product";
import { Testimonial } from "@/sections/Testimonials";
import { Journey } from "@/sections/Journey";
import { Footer } from "@/sections/Footer";
import Script from 'next/script';


export default function Home() {
  return (
    <>
    <Script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="saisantoshpal" data-description="Support me on Buy me a coffee!" data-message="" data-color="#BD5FFF" data-position="Right" data-x_margin="18" data-y_margin="18"/>
    <Header />
    <div id="idea">
      <Hero />
    </div>
    <div id="product">
      <Product />
    </div>
    <div id="journey">
      <Journey />
    </div>
    <div id="reviews">
      <Testimonial />
    </div>
    <div id="contact">
      <Footer />
    </div>
    </>
  );
}
