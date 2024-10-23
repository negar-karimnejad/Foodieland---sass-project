import Socials from "./Socials";

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="logo">
          <h6>
            Foodieland<span>.</span>
          </h6>
          <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
        </div>
        <ul>
          <li>
            <a href="">Recipes</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
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
