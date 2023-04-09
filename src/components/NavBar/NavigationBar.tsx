import {
  useEffect,
  useState,
} from 'react';

import ToggleTheme from 'components/Toggles/ToggleTheme';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'state/ThemeProvider';

import { SelectLanguage } from './SelectLanguage';

const NavigationBar = () => {
    // Global state
    const { setAboutOpen, setProjectsOpen, setTechOpen } = useTheme()
    const { t } = useTranslation()

    // Local state
    const [scrollPosition, setScrollPosition] = useState(0)

    function scrollToId(id: string) {
        const element = document.getElementById(id) //TODO: useRef
        if (element) return element.scrollIntoView()
    }
    const DELAY = {
        SCROLL: 400,
        OPEN: 400,
    }

    const navItems = [
        {
            title: t('accordion.about.title'),
            id: 'about',
            action: () => {
                setProjectsOpen(false)
                setTechOpen(false)
                setTimeout(() => scrollToId('about'), DELAY.SCROLL)
                setTimeout(() => setAboutOpen(true), DELAY.OPEN)
            },
        },
        {
            title: t('accordion.projects.title'),
            id: 'projects',
            action: () => {
                setAboutOpen(false)
                setTechOpen(false)
                setTimeout(() => scrollToId('projects'), DELAY.SCROLL)
                setTimeout(() => setProjectsOpen(true), DELAY.OPEN)
            },
        },
        {
            title: t('accordion.tech.title'),
            id: 'tech',
            action: () => {
                setAboutOpen(false)
                setProjectsOpen(false)
                setTimeout(() => scrollToId('tech'), DELAY.SCROLL)
                setTimeout(() => setTechOpen(true), DELAY.OPEN)
            },
        },
    ]
    //Methods
    const handleScroll = () => setScrollPosition(window.pageYOffset)
    // Hook
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const NavItems = navItems.map(item => (
        <li key={item.id}>
            <button onClick={item.action} className="nav-item">
                <h3>{item.title}</h3>
            </button>
        </li>
    ))

    return (
        <div className="nav-container">
            <SelectLanguage scrollPosition={scrollPosition} />
            <nav className={scrollPosition < 50 ? 'header-menu' : 'header-menu transparent'}>
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
        </div>
    )
}
export default NavigationBar
