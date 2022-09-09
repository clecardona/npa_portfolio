import {
  useEffect,
  useState,
} from 'react';

import { CSSTransition } from 'react-transition-group';

const Bubble = ({ ...props }): JSX.Element => {
  const [inProp, setInProp] = useState(false)

  useEffect(() => {
    setInProp(true)
  }, [])

  return (
    <div className='bubble'>
      <CSSTransition
        in={inProp}
        timeout={400}
        classNames='title'
        className='title'
      >
        <h1>
          Hi, I am <strong>Clément</strong>
        </h1>
      </CSSTransition>
      <CSSTransition
        in={inProp}
        timeout={400}
        classNames='subtitle'
        className='subtitle'
      >
        <div>
          <h3>Frontend developer from France</h3>
          <h3 style={{ fontWeight: 100 }}>Living in Stockholm, Sweden</h3>
        </div>
      </CSSTransition>
    </div>
  )
}
export default Bubble
