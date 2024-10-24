import useScrollToSection from "../hook/useScrollToSection";
import Socials from "./Socials";

export default function Footer() {
  const { BlogRef, AboutRef, ContactRef, RecipesRef, scrollToSection } =
    useScrollToSection();

  return (
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
  );
}
