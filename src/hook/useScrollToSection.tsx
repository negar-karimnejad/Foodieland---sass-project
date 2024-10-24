import React, { useRef } from "react";

export default function useScrollToSection() {
  const HomeRef = useRef(null);
  const RecipesRef = useRef(null);
  const BlogRef = useRef(null);
  const ContactRef = useRef(null);
  const AboutRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return {
    HomeRef,
    RecipesRef,
    BlogRef,
    ContactRef,
    AboutRef,
    scrollToSection,
  };
}
