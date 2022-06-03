import { useState, useEffect } from "react";
import ToggleTheme from "components/Toggles/ToggleTheme";
import { useTheme } from "state/ThemeProvider";

const NavigationBar = () => {
  // Global state
  const { setAboutOpen, setProjectsOpen, setTechOpen } = useTheme();
  // Local state
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScrollAccordion(id: string, condition: boolean) {
    if (condition) {
      const element = document.querySelector(id);
      if (element) {
        const position = element?.getBoundingClientRect().top + window.scrollY;
        window.scrollTo(0, position);
      }
    }
  }
  const timeoutScroll = 700;
  const timeoutOpen = 1000;

  const navItems = [
    {
      title: "about",
      id: "#about",
      color: "#F6C9B6",
      action: () => {
        setProjectsOpen(false);
        setTechOpen(false);
        setTimeout(() => handleScrollAccordion("#about", true), timeoutScroll);
        setTimeout(() => setAboutOpen(true), timeoutOpen);
      },
    },
    {
      title: "projects",
      id: "#projects",
      color: "#D1CABB",
      action: () => {
        setAboutOpen(false);
        setTechOpen(false);
        setTimeout(
          () => handleScrollAccordion("#projects", true),
          timeoutScroll
        );
        setTimeout(() => setProjectsOpen(true), timeoutOpen);
      },
    },
    {
      title: "tech",
      id: "#tech",
      color: "#8193a1",
      action: () => {
        setAboutOpen(false);
        setProjectsOpen(false);
        setTimeout(() => handleScrollAccordion("#tech", true), timeoutScroll);
        setTimeout(() => setTechOpen(true), timeoutOpen);
      },
    },
  ];
  //Methods
  const handleScroll = () => setScrollPosition(window.pageYOffset);
  // Hook
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItems = navItems.map((item, idx) => (
    <li key={idx}>
      <button onClick={item.action} /*  href={item.id} */>
        <h3 style={{ color: item.color }}>{item.title}</h3>
      </button>
    </li>
  ));

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
      <ul className="bar">
        {NavItems}
        <ToggleTheme />
      </ul>
    </nav>
  );
};
export default NavigationBar;
