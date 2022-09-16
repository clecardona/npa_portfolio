import {
  Background,
  Parallax,
} from 'react-parallax';
import { useTheme } from 'state/ThemeProvider';

import Bubble from './Bubble';
import Stars from './Stars';

const HeroParallax = (): JSX.Element => {
    const { theme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <Parallax
            blur={{ min: -5, max: 5 }}
            bgImage={!isDark ? 'https://clecardona.com/npa/img/bg.png' : ''}
            bgImageAlt="bg"
            bgImageStyle={{ opacity: 0.7 }}
            strength={250}
            renderLayer={percentage => <Bubble percentage={percentage} />}
        >
            {isDark && (
                <Background>
                    <Stars />
                </Background>
            )}

            <div className="hero-container" id="hero">
                <img
                    className="illustration"
                    alt="illustration"
                    src="https://clecardona.com/npa/portfolio/img/illustration-portfolio.png"
                />
            </div>
        </Parallax>
    )
}
export default HeroParallax
