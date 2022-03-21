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

  const navItems = [
    {
      title: "about",
      color: "#F6C9B6",
      action: () => {
        function handleModals() {
          setAboutOpen(true);
          setProjectsOpen(false);
          setTechOpen(false);
          return true;
        }
        const finished = handleModals();

        setTimeout(() => handleScrollAccordion("#about", finished), 500);
      },
    },
    {
      title: "projects",
      color: "#D1CABB",
      action: () => {
        function handleModals() {
          setAboutOpen(false);
          setProjectsOpen(true);
          setTechOpen(false);
          return true;
        }
        const finished = handleModals();

        setTimeout(() => handleScrollAccordion("#projects", finished), 500);
      },
    },
    {
      title: "tech",
      color: "#8193a1",
      action: () => {
        function handleModals() {
          setAboutOpen(false);
          setProjectsOpen(false);
          setTechOpen(true);
          return true;
        }
        const finished = handleModals();
        setTimeout(() => handleScrollAccordion("#tech", finished), 500);
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
      <button onClick={item.action}>
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
