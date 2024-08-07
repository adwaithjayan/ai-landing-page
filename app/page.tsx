import CTA from "@/pages/CTA";
import Features from "@/pages/Features";
import Footer from "@/pages/Footer";
import Hero from "@/pages/Hero";
import LogoScroll from "@/pages/LogoScroll";
import Navbar from "@/pages/Navbar";
import Testimonial from "@/pages/Testimonial";

export default function Home() {
  return <>
    <Navbar />
    <Hero/>
    <LogoScroll/>
    <Features/>
    <Testimonial/>
    <CTA/>
    <Footer/>
  </>
}
