import {
  Background,
  Parallax,
} from 'react-parallax';
import { useTheme } from 'state/ThemeProvider';

import Bubble from './Bubble';
import Stars from './Stars';

const HeroParallax = (): JSX.Element => {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Parallax
      blur={{ min: -5, max: 5 }}
      bgImage={!isDark ? "https://clecardona.com/npa/img/bg.png" : ""}
      bgImageAlt='bg'
      strength={250}
    >
      {isDark && (
        <Background>
          <Stars />
        </Background>
      )}

      <div className='hero-container'>
        <Bubble />
        <img
          className='illustration'
          alt='illustration'
          src='https://clecardona.com/npa/portfolio/img/illustration-portfolio.png'
        />
      </div>
    </Parallax>
  )
}
export default HeroParallax
