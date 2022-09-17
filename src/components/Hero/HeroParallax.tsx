import { useState } from 'react';

import {
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa';
import {
  Background,
  Parallax,
} from 'react-parallax';
import { useTheme } from 'state/ThemeProvider';

import Bubble from './Bubble';
import Stars from './Stars';

const HeroParallax = (): JSX.Element => {
    const [index, setIndex] = useState(0)
    const { theme } = useTheme()
    const isDark = theme === 'dark'
    const bgImages = [
        'https://clecardona.com/npa/img/bg.png',
        'https://cdn.dribbble.com/users/2811827/screenshots/16188096/media/e5f6179e8841cef78bad8b5475311e66.png?compress=1&resize=1600x1200&vertical=bottom',
        'https://cdn.dribbble.com/users/1338391/screenshots/15303437/media/52785a3194a29318fd787b78e8ade9ba.jpg?compress=1&resize=1600x1200&vertical=top',
        'https://cdn.dribbble.com/users/1916627/screenshots/14620979/media/b14bd1d5e01b29e12f1aad1da2aa2b62.jpg?compress=1&resize=1600x1200&vertical=top',
    ]

    function increase() {
        if (index === bgImages.length - 1) return setIndex(0)
        return setIndex(index + 1)
    }
    function decrease() {
        if (index === 0) return setIndex(bgImages.length - 1)
        return setIndex(index - 1)
    }

    return (
        <>
            <Parallax
                blur={{ min: -5, max: 5 }}
                bgImage={!isDark ? bgImages[index] : ''}
                bgImageAlt="bg"
                bgClassName={`bg-parallax bg-${index % 2}`}
                strength={250}
                renderLayer={percentage => <Bubble percentage={percentage} />}
            >
                {isDark && (
                    <Background>
                        <Stars />
                    </Background>
                )}

                <div className="hero-container" id="hero">
                    <div id="bg-overlay" />
                    <div className="hero-buttons">
                        <button onClick={() => decrease()}>
                            <FaAngleLeft size={50} />
                        </button>
                        <button onClick={() => increase()}>
                            <FaAngleRight size={50} />
                        </button>
                    </div>

                    <img
                        className="illustration"
                        alt="illustration"
                        src="https://clecardona.com/npa/portfolio/img/illustration-portfolio.png"
                    />
                </div>
            </Parallax>
        </>
    )
}
export default HeroParallax
