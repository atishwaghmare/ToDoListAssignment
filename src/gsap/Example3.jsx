import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./App.css";

// gsap.registerPlugin(ScrollTrigger);

let Example3 = () => {
  const boxesRef = useRef([]);
  const circleRef = useRef(null);

  useEffect(() => {
    // Timeline for staggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top center",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    tl.from(boxesRef.current, {
      y: 200,
      opacity: 0,
      stagger: 0.3,
      ease: "back.out(1.7)",
    });

    // Circle animation
    gsap.to(circleRef.current, {
      x: "80vw",
      y: "80vh",
      scale: 1.5,
      backgroundColor: "#ff3b3f",
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    // Parallax effect on scroll
    gsap.to(boxesRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: ".container",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="container">
      <div className="box" ref={(el) => (boxesRef.current[0] = el)}></div>
      <div className="box" ref={(el) => (boxesRef.current[1] = el)}></div>
      <div className="box" ref={(el) => (boxesRef.current[2] = el)}></div>
      <div className="circle "  ref={circleRef}></div>
    </div>
  );
};

export default Example3;
