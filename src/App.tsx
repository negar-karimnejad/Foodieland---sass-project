import { useRef } from "react";
import BeChef from "./components/BeChef";
import Categories from "./components/Categories";
import DeliciousRecipes from "./components/DeliciousRecipes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Inbox from "./components/Inbox";
import Instagram from "./components/Instagram";
import SimpleRecipes from "./components/SimpleRecipes";
import "./styles/style.scss";

export default function App() {
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

  return (
    <div ref={HomeRef}>
      <Header />
      <Hero />
      <Categories />
      <SimpleRecipes ref={RecipesRef} />
      <BeChef />
      <Instagram ref={BlogRef} />
      <DeliciousRecipes ref={AboutRef} />
      <Inbox ref={ContactRef} />
      <Footer />
    </div>
  );
}
