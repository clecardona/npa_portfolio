import 'styles/base.sass';

import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import Contact from 'components/Contact/Contact';
import {
  BoxError,
  Spinner,
} from 'components/FetchItems';
import HeroParallax from 'components/Hero/HeroParallax';
import Portfolio from 'components/Projects/Projects';
import Technologies from 'components/Technologies/Technologies';
import { useTranslation } from 'react-i18next';
import { getCollection } from 'scripts/firebase/fireStore';
import { useTheme } from 'state/ThemeProvider';

import AboutMe from './components/AboutMe';
import Accordion from './components/Accordion';
import NavigationBar from './components/NavBar/NavigationBar';

const App = (): JSX.Element => {
  // Global state
  const {
    isAboutOpen,
    setAboutOpen,
    isProjectsOpen,
    setProjectsOpen,
    isTechOpen,
    setTechOpen,
    theme,
  } = useTheme()
  const { t } = useTranslation()

  const [projects, setProjects] = useState([])
  const [technologies, setTechnologies] = useState([])

  const LOADING = "loading"
  const READY = "ready"
  const ERROR = "error"

  //Local state
  const [status, setStatus] = useState(LOADING)

  const fetchData: () => void = useCallback(async () => {
    try {
      const listOfProjects = await getCollection("projects")
      const listOfTechnologies = await getCollection("technologies")

      //@ts-ignore
      setProjects(listOfProjects)
      //@ts-ignore
      setTechnologies(listOfTechnologies)
      setStatus(READY)
    } catch (error) {
      setStatus(ERROR)
      console.error(error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {}, [])

  return (
    <div className={theme === "dark" ? "App dark" : "App"}>
      {status === LOADING && <Spinner />}
      {status === ERROR && <BoxError />}
      {status === READY && (
        <>
          <NavigationBar />
          <HeroParallax />

          <div className='accordions'>
            <Accordion
              isOpen={isAboutOpen}
              setisOpen={setAboutOpen}
              title={t("accordion.about.title")}
              content={<AboutMe />}
              color='7A8C99'
              id='about'
            />

            <Accordion
              isOpen={isProjectsOpen}
              setisOpen={setProjectsOpen}
              title={t("accordion.projects.title")}
              content={<Portfolio projects={projects} />}
              color='#D1CABB'
              id='projects'
            />
            <Accordion
              isOpen={isTechOpen}
              setisOpen={setTechOpen}
              title={t("accordion.tech.title")}
              content={<Technologies technologies={technologies} />}
              color='#8193a1'
              id='tech'
            />
          </div>

          <div className='bigimage'>
            <img
              src='https://cdn.dribbble.com/users/1107982/screenshots/15590058/media/009849e098dfd3c036ca2a2dd40ab17f.png?compress=1&resize=1200x900&vertical=top'
              alt=''
            />
          </div>

          <Contact />
        </>
      )}
    </div>
  )
}
export default App
