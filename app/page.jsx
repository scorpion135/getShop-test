"use client";
import React from "react";
import Nav from "../shared/components/Nav";
import Hero from "../shared/sections/Hero";
import AdditionalResourses from "../shared/sections/AdditionalResourses";
import Balance from "../shared/sections/Balance";
import Partners from "../shared/sections/Partners";
import OurWork from "../shared/sections/OurWork";
import Form from "../shared/sections/Form";
import Menu from "../shared/components/Menu";
import { shapes, shapes2, shapes3 } from "../public/assets/images";
import Image from "next/image";
import { navLinks } from "./../shared/constants/index";

export default function Home() {
  const [isFixed, setIsFixed] = React.useState(false);
  let windowInner;

  if (typeof window !== "undefined") {
    windowInner = window.innerWidth;
  }

  const [width, setWidth] = React.useState(windowInner);

  console.log(width);

  const [activeSection, setActiveSection] = React.useState("");
  const sectionRefs = React.useRef([]);

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target.id);

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0]);
      } else setActiveSection("");
    }, options);

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <main className="relative">
      <Nav isFixed={isFixed} links={navLinks} activeSection={activeSection} />
      <Image
        src={width <= 350 ? shapes3 : width <= 848 ? shapes2 : shapes}
        className="absolute -z-20 top-[40px] w-full max-h-[868px] max-md:top-0 max-sm:top-[60px]"
      />
      <section className="flex justify-center mb-[180px] max-md:mb-[120px] max-sm:mb-[80px] ">
        <Hero />
      </section>
      <section className="z-8 mb-[68.8px] max-md:mb-[0px]">
        <AdditionalResourses />
      </section>
      <section className="bg-gray4 pt-[109.2px] pb-[90.8px] max-md:pb-[74px] max-md:pt-[80px] max-sm:pt-[42px] max-sm:pb-[20px]">
        <Balance sectionRefs={sectionRefs} width={width} />
      </section>
      <section className="pt-[89.2px] pb-[106.07px] max-md:pb-[73px] max-md:pt-[46px] max-sm:pt-[60px] max-sm:pb-[81px]">
        <Partners />
      </section>
      <section className=" bg-gray4 pt-[73.93px] pb-[54.07px] relative -z-10 max-md:pt-[47.3px] max-md:pb-[70.7px] max-sm:pb-[35px]">
        <OurWork sectionRefs={sectionRefs} width={width} />
      </section>
      <section className="pt-[125.93px] pb-[212px] max-md:pt-[49px] max-md:pb-[50px] max-sm:pt-[80px] max-md:sm-[28px]">
        <Form />
      </section>
    </main>
  );
}
