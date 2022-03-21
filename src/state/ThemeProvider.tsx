import { createContext, useState, useContext } from "react";

export interface ITheme {
  theme: string;
  toggleTheme: any;
  gallery: string;
  toggleGallery: any;
  isAboutOpen: boolean;
  setAboutOpen: any;
  isProjectsOpen: boolean;
  setProjectsOpen: any;
  isTechOpen: boolean;
  setTechOpen: any;
}
//@ts-expect-error
const ThemeContext = createContext<ITheme>(null);

export function ThemeProvider({ children }: { children: JSX.Element }) {
  // Local states
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  const [gallery, setGallery] = useState<string>(
    localStorage.getItem("gallery") || "classic"
  );

  const [isAboutOpen, setisAboutOpen] = useState<boolean>(() => {
    if (localStorage.getItem("about") === "true") return true;
    else return false;
  });
  const [isProjectsOpen, setisProjectsOpen] = useState<boolean>(() => {
    if (localStorage.getItem("projects") === "true") return true;
    else return false;
  });
  const [isTechOpen, setisTechOpen] = useState<boolean>(() => {
    if (localStorage.getItem("tech") === "true") return true;
    else return false;
  });

  function toggleTheme() {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }
  function toggleGallery() {
    if (gallery === "classic") {
      localStorage.setItem("gallery", "creative");
      setGallery("creative");
    }
    if (gallery === "creative") {
      localStorage.setItem("gallery", "classic");
      setGallery("classic");
    }
  }

  function setAboutOpen(bool: boolean) {
    setisAboutOpen(bool);
    localStorage.setItem("about", bool.toString());
  }
  function setProjectsOpen(bool: boolean) {
    setisProjectsOpen(bool);
    localStorage.setItem("projects", bool.toString());
  }
  function setTechOpen(bool: boolean) {
    setisTechOpen(bool);
    localStorage.setItem("tech", bool.toString());
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isAboutOpen,
        setAboutOpen,
        isProjectsOpen,
        setProjectsOpen,
        isTechOpen,
        setTechOpen,
        gallery,
        toggleGallery,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
