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
import {
  FETCH_STATUS,
  IProject,
  ITechnology,
} from 'types';

import AboutMe from './components/AboutMe';
import Accordion from './components/Accordion';
import NavigationBar from './components/NavBar/NavigationBar';

const App = (): JSX.Element => {
    // Global state
    const { isAboutOpen, setAboutOpen, isProjectsOpen, setProjectsOpen, isTechOpen, setTechOpen, theme, language } =
        useTheme()

    const { t, i18n } = useTranslation()

    const [projects, setProjects] = useState<IProject[]>([])
    const [technologies, setTechnologies] = useState<ITechnology[]>([])

    const illustrations = projects.map(project => project.screenshotURL)

    //Local state
    const [status, setStatus] = useState(FETCH_STATUS.LOADING)

    const fetchData: () => void = useCallback(async () => {
        try {
            const listOfProjects = (await getCollection('projects')) as IProject[]
            const listOfTechnologies = (await getCollection('technologies')) as ITechnology[]
            if (listOfProjects.length) setProjects(listOfProjects)
            if (listOfTechnologies.length) setTechnologies(listOfTechnologies)
            setStatus(FETCH_STATUS.READY)
        } catch (error) {
            setStatus(FETCH_STATUS.ERROR)
            console.error(error)
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    useEffect(() => {
        i18n.changeLanguage(language)
    }, [i18n, language])

    return (
        <div className={theme === 'dark' ? 'App dark' : 'App'}>
            {status === FETCH_STATUS.LOADING && <Spinner />}
            {status === FETCH_STATUS.ERROR && <BoxError />}
            {status === FETCH_STATUS.READY && (
                <>
                    <NavigationBar />
                    <HeroParallax data={illustrations} />
                    <div className="accordions">
                        <Accordion
                            isOpen={isAboutOpen}
                            setisOpen={setAboutOpen}
                            title={t('accordion.about.title')}
                            content={<AboutMe />}
                            id="about"
                        />

                        <Accordion
                            isOpen={isProjectsOpen}
                            setisOpen={setProjectsOpen}
                            title={t('accordion.projects.title')}
                            content={<Portfolio projects={projects} />}
                            id="projects"
                        />
                        <Accordion
                            isOpen={isTechOpen}
                            setisOpen={setTechOpen}
                            title={t('accordion.tech.title')}
                            content={<Technologies technologies={technologies} />}
                            id="tech"
                        />
                    </div>
                    <div className="bigimage">
                        <img
                            src="https://cdn.dribbble.com/users/1107982/screenshots/15590058/media/009849e098dfd3c036ca2a2dd40ab17f.png?compress=1&resize=1200x900&vertical=top"
                            alt=""
                        />
                        <div id="stars-down" />
                        <div id="stars-down-core" />
                    </div>
                    <Contact />
                </>
            )}
        </div>
    )
}
export default App
