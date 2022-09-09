import {
  useEffect,
  useState,
} from 'react';

import { erf } from 'mathjs';
import { CSSTransition } from 'react-transition-group';

const Bubble = ({ percentage }: { percentage?: number }): JSX.Element => {
  const [inProp, setInProp] = useState(false)

  useEffect(() => {
    setInProp(true)
  }, [])

  function getOffset() {
    if (!percentage) return
    const delta = 2000 * (percentage - 1)
    return -150 + 400 * erf(0.003 * delta)
  }

  if (!percentage) return <></>
  return (
    <div className='bubble' style={{ bottom: getOffset() }}>
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
