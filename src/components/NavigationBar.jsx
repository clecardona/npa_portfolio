import { useState, useEffect } from "react";
import ToggleTheme from "./ToggleTheme";

export default function NavigationBar() {
  // Local state
  const [scrollPosition, setScrollPosition] = useState(0);
  //Methods
  const handleScroll = () => setScrollPosition(window.pageYOffset);
  // Hook
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        scrollPosition < 50 ? "header-menu" : "header-menu header-transparent"
      }
    >
      <div className="nav-logo">
        <a href="#hero">
          <img alt="logo" src="https://clecardona.com/npa/img/CC.png" />
        </a>
      </div>
      <div className="author">
        <h3>Clément Cardona</h3>
      </div>
      <div className="bar">
        <a href="#more">
          <h3>More</h3>
        </a>
        <ToggleTheme />
      </div>
    </nav>
  );
}
