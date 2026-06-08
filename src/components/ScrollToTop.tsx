"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function ScrollToTop() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        if (!show) setShow(true);
      } else {
        if (show) setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  useEffect(() => {
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        opacity: show ? 1 : 0,
        scale: show ? 1 : 0.5,
        duration: 0.3,
        ease: "power2.out",
        pointerEvents: show ? "auto" : "none",
      });
    }
  }, [show]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={btnRef}
      onClick={scrollToTop}
      style={{ opacity: 0, scale: 0.5, pointerEvents: "none" }}
      className="fixed bottom-24 right-6 z-50 w-12 h-12 bg-[#8b6b4a] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#6e5337] hover:shadow-xl transition-colors"
      aria-label="Voltar ao topo"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
