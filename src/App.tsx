import BeChef from "./components/BeChef";
import Categories from "./components/Categories";
import DeliciousRecipes from "./components/DeliciousRecipes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Inbox from "./components/Inbox";
import Instagram from "./components/Instagram";
import SimpleRecipes from "./components/SimpleRecipes";
import useScrollToSection from "./hook/useScrollToSection";
import "./styles/style.scss";

export default function App() {
  const { HomeRef } = useScrollToSection();

  return (
    <div ref={HomeRef}>
      <Header />
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
