import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Product } from "@/sections/Product";
import { Testimonial } from "@/sections/Testimonials";
import { Journey } from "@/sections/Journey";
import { Survey } from "@/sections/Survey";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Product />
    <Journey />
    <Testimonial />
    <Survey />
    <Footer />
    </>
  );
}
