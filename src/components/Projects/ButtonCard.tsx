// npm packages
import { useState } from 'react';

import { BiExpandAlt } from 'react-icons/bi';

// Local imports
import Modal from './Modal';

interface IItem {
    item: {
        title: string
        isReleased: boolean
        thumbnailURL: string
        thumbnailTitle: string
    }
}

const ButtonCard = ({ item }: IItem): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)
    const { title, isReleased, thumbnailURL, thumbnailTitle } = item

    const NotReleased = () => (
        <div className="card-overlay">
            <p className="comingsoon">COMING</p>
            <p className="comingsoon">SOON ...</p>
        </div>
    )

    return (
        <li>
            <button className="card" disabled={!item.isReleased} onClick={() => setIsOpen(true)}>
                <div className="card-inner">
                    <div className="card-front">
                        <div className="card-img">
                            {!isReleased && <NotReleased />}
                            <img alt={title} src={thumbnailURL} />
                        </div>
                    </div>

                    <div className="card-back">
                        <h3>{thumbnailTitle}</h3>
                        <div className="hover-link">
                            <BiExpandAlt size={25} />
                        </div>
                    </div>
                </div>
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} item={item} />
        </li>
    )
}
export default ButtonCard
