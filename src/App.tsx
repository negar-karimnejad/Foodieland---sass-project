import { useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import BeChef from "./components/BeChef";
import Categories from "./components/Categories";
import DeliciousRecipes from "./components/DeliciousRecipes";
import Hero from "./components/Hero";
import Inbox from "./components/Inbox";
import Instagram from "./components/Instagram";
import SimpleRecipes from "./components/SimpleRecipes";
import Socials from "./components/Socials";
import "./styles/style.scss";

export default function App() {
  const [openMenuModal, setOpenMenuModal] = useState(false);

  const HomeRef = useRef(null);
  const RecipesRef = useRef(null);
  const BlogRef = useRef(null);
  const ContactRef = useRef(null);
  const AboutRef = useRef(null);

  const HeaderMenu = () => {
    return (
      <ul className="header_menu">
        <li
          onClick={() => {
            scrollToSection(HomeRef);
            setOpenMenuModal(false);
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            scrollToSection(RecipesRef);
            setOpenMenuModal(false);
          }}
        >
          Recipes
        </li>
        <li
          onClick={() => {
            scrollToSection(BlogRef);
            setOpenMenuModal(false);
          }}
        >
          Blog
        </li>
        <li
          onClick={() => {
            scrollToSection(ContactRef);
            setOpenMenuModal(false);
          }}
        >
          Contact
        </li>
        <li
          onClick={() => {
            scrollToSection(AboutRef);
            setOpenMenuModal(false);
          }}
        >
          About us
        </li>
      </ul>
    );
  };

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
      <header>
        <h1>
          Foodieland<span>.</span>
        </h1>
        <HeaderMenu />
        <Socials />
        <div className="hamburger_menu" onClick={() => setOpenMenuModal(true)}>
          <IoMenu size={20} />
        </div>
      </header>
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
      <SimpleRecipes ref={RecipesRef} />
      <BeChef />
      <Instagram ref={BlogRef} />
      <DeliciousRecipes ref={AboutRef} />
      <Inbox ref={ContactRef} />
      <footer>
        <div>
          <div className="logo">
            <h6>
              Foodieland<span>.</span>
            </h6>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
          </div>
          <ul className="header_menu">
            <li onClick={() => scrollToSection(RecipesRef)}>Recipes</li>
            <li onClick={() => scrollToSection(BlogRef)}>Blog</li>
            <li onClick={() => scrollToSection(ContactRef)}>Contact</li>
            <li onClick={() => scrollToSection(AboutRef)}>About us</li>
          </ul>
        </div>
        <div className="copyright">
          <div></div>
          <p>
            © 2020 Flowbase. Powered by <span>Webflow</span>
          </p>
          <Socials />
        </div>
      </footer>
    </div>
  );
}
