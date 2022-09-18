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
        'https://cdn.dribbble.com/users/1338391/screenshots/15303437/media/52785a3194a29318fd787b78e8ade9ba.jpg?compress=1&resize=1600x1200&vertical=top',
        'https://cdn.dribbble.com/users/13449/screenshots/12078823/media/c6662b0de7365559f79d9eb6088d9527.png?compress=1&resize=1600x1200&vertical=top',
        'https://cdn.dribbble.com/users/1016207/screenshots/16888945/media/d0849186193c9b868abb0c1e37194d63.png?compress=1&resize=1600x1200&vertical=top',
        'https://cdn.dribbble.com/users/13449/screenshots/10094240/media/bbac9c3ddc0d46017085b7c7cafa5f6b.png?compress=1&resize=1600x1200&vertical=top',
        'https://cdn.dribbble.com/users/4851961/screenshots/10015940/media/134cf1b8f66092b404297e926a125e93.jpg?compress=1&resize=1600x1200&vertical=top',
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
                bgImageStyle={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'left bottom' }}
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
