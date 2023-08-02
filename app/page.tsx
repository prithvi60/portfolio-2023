import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Loader from "@/components/Hero/Loader";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Inter } from "@next/font/google";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ScrollUp />
      {/* <Suspense fallback={<Loader />}> */}
      <Hero />
      {/* </Suspense> */}
      {/* <Brands/> */}
      <Testimonials />

      {/* <Features /> */}
      {/* <Video /> */}
      {/* <AboutSectionOne /> */}

      {/* <AboutSectionTwo /> */}

      <Pricing />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
