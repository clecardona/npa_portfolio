import './Carousel_expand.sass';

import { useState } from 'react';

type Props = {
    list: any[]
    width?: number
}

const Carousel = ({ list, width }: Props) => {
    const [current, setcurrent] = useState(-99)

    const Items = list.map((item, index) => {
        const hover = index === current
        const hoverAdjacent = index === current - 1 || index === current + 1
        return (
            <li
                key={index}
                onMouseOver={() => setcurrent(index)}
                onMouseOut={() => setcurrent(-99)}
                className={index === current ? 'current' : hoverAdjacent ? 'adjacent' : 'standard'}
                style={{
                    width: hover ? '50%' : hoverAdjacent ? '25%' : 100,
                }}
            >
                {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer">
                        <img src={item.iconURL} alt="" />
                        <h3 className="item-title">{item.name}</h3>
                    </a>
                ) : (
                    <>
                        {' '}
                        <img src={item.iconURL} alt="" />
                        <h3 className="item-title">{item.name}</h3>
                    </>
                )}
            </li>
        )
    })

    return (
        <div className="carousel-expand" style={{ width: width ? width : '100%' }}>
            <ul id="box">{Items}</ul>
        </div>
    )
}

export default Carousel
