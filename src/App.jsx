import CloudHero from "./CloudHero";
import Skills from "./Skills";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
  gsap.utils.toArray(".fade-up").forEach((el) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  });
}, []);

  return (
    <>
      <section className="hero">
        <CloudHero />
      </section>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I’m a Senior Salesforce Developer with nearly 5 years of experience
          specializing in Lightning Web Components, Apex, and Salesforce CPQ.
          I build scalable, high-performance CRM solutions with measurable
          business impact across Sales and Service Cloud.
        </p>
      </section>

      <Skills />
      <Experience />
      <Project />
      <Contact />

    </>
  );
}
