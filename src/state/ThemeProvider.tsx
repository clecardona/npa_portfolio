import {
  createContext,
  useContext,
  useState,
} from 'react';

export interface ITheme {
  theme: string
  toggleTheme: () => void
  gallery: string
  toggleGallery: () => void
  isAboutOpen: boolean
  setAboutOpen: (bool: boolean) => void
  isProjectsOpen: boolean
  setProjectsOpen: (bool: boolean) => void
  isTechOpen: boolean
  setTechOpen: (bool: boolean) => void
  isCVOpen: boolean
  setCVOpen: (bool: boolean) => void
  language: string
  setLanguage: (str: string) => void
}
//@ts-expect-error
const ThemeContext = createContext<ITheme>(null)

export function ThemeProvider({ children }: { children: JSX.Element }) {
  // Local states
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  )

  const [gallery, setGallery] = useState<string>(
    localStorage.getItem("gallery") || "classic"
  )

  const [isAboutOpen, setisAboutOpen] = useState<boolean>(() => {
    if (localStorage.getItem("about") === "true") return true
    else return false
  })
  const [isProjectsOpen, setisProjectsOpen] = useState<boolean>(() => {
    if (localStorage.getItem("projects") === "true") return true
    else return false
  })
  const [isTechOpen, setisTechOpen] = useState<boolean>(() => {
    if (localStorage.getItem("tech") === "true") return true
    else return false
  })
  const [isCVOpen, setisCVOpen] = useState<boolean>(() => {
    if (localStorage.getItem("cv") === "true") return true
    else return false
  })
  const [language, setNewLanguage] = useState<string>(
    localStorage.getItem("language") || "en"
  )

  function toggleTheme() {
    if (theme === "light") {
      localStorage.setItem("theme", "dark")
      setTheme("dark")
    }
    if (theme === "dark") {
      localStorage.setItem("theme", "light")
      setTheme("light")
    }
  }
  function toggleGallery() {
    if (gallery === "classic") {
      localStorage.setItem("gallery", "creative")
      setGallery("creative")
    }
    if (gallery === "creative") {
      localStorage.setItem("gallery", "classic")
      setGallery("classic")
    }
  }

  function setLanguage(lang: string) {
    setNewLanguage(lang)
    localStorage.setItem("language", lang)
  }

  function setAboutOpen(bool: boolean) {
    setisAboutOpen(bool)
    localStorage.setItem("about", bool.toString())
  }
  function setProjectsOpen(bool: boolean) {
    setisProjectsOpen(bool)
    localStorage.setItem("projects", bool.toString())
  }
  function setTechOpen(bool: boolean) {
    setisTechOpen(bool)
    localStorage.setItem("tech", bool.toString())
  }
  function setCVOpen(bool: boolean) {
    setisCVOpen(bool)
    localStorage.setItem("cv", bool.toString())
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
        isCVOpen,
        setCVOpen,
        language,
        setLanguage,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
