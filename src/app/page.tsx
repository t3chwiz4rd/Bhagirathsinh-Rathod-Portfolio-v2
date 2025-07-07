"use client"
import { ModeToggle } from "@/components/common/mode-toggler";
import { Navigationbar } from "@/components/common/navigation-bar";
import About from "@/components/main-components/about-section";
import Contact from "@/components/main-components/contact-section";
import Education from "@/components/main-components/education-section";
import Experience from "@/components/main-components/experience-section";
import Footer from "@/components/main-components/footer-section";
import Hero from "@/components/main-components/hero-section";
import Project from "@/components/main-components/project-section";
import { Toaster } from "@/components/ui/sonner";
// import CustomCursor from "@/components/ui/custom-cursor";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* <CustomCursor /> */}
      <Navigationbar />
      <Hero />
      <About />
      <Education />
      <Project />
      <Experience />
      <Contact />
      <Footer />
      <Toaster position="bottom-center" richColors />
    </div>
  );
}
