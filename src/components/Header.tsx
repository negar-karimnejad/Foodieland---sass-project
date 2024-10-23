import { IoMenu } from "react-icons/io5";
import Socials from "./Socials";

const HeaderMenu = () => {
  return (
    <ul>
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

export default function Header() {
  return (
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
  );
}
