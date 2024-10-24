import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import useScrollToSection from "../hook/useScrollToSection";
import Socials from "./Socials";

export default function Header() {
  const [openMenuModal, setOpenMenuModal] = useState(false);

  const HeaderMenu = () => {
    const {
      HomeRef,
      BlogRef,
      AboutRef,
      ContactRef,
      RecipesRef,
      scrollToSection,
    } = useScrollToSection();

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

  return (
    <>
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
    </>
  );
}
