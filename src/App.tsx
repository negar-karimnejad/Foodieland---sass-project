import { useRef, useState } from "react";
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
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const HomeRef = useRef(null);
  const RecipesRef = useRef(null);
  const BlogRef = useRef(null);
  const ContactRef = useRef(null);
  const AboutRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={HomeRef}>
      <Header />
      {/* Menu List */}
      <div className={`toggle_menu ${openMenuModal ? "menu-active" : ""}`}>
        <HeaderMenu />
        <div className="socials_container">
          <Socials />
        </div>
        <span onClick={() => setOpenMenuModal(false)}>x</span>
      </div>
      <Hero />
      <Categories />
      <SimpleRecipes />
      <BeChef />
      <Instagram />
      <DeliciousRecipes />
      <Inbox />
      <Footer />
    </div>
  );
}
