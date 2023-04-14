import { useState } from 'react';
import reactDom from 'react-dom';

import { HiOutlineExternalLink } from 'react-icons/hi';
import {
  IoIosDesktop,
  IoIosLaptop,
  IoIosPhonePortrait,
  IoIosTabletLandscape,
} from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { SiGithub } from 'react-icons/si';

import Pills from './Pills';

interface IModalProps {
    isOpen: boolean
    onClose: () => void
    item: any
}

interface IButtonLink {
    design: string
    label: string
    link: string
    icon?: JSX.Element
}

const Modal = ({ isOpen, onClose, item }: IModalProps) => {
    const [isExiting, setIsExiting] = useState(false)

    const technologies8 = item.technologies.slice(0, 8)

    const ButtonLink = ({ design, icon, label, link }: IButtonLink) => (
        <a className={design} target="blank" href={link}>
            {icon && <div className="btn-icon">{icon}</div>}
            <h3>{label}</h3>
        </a>
    )

    function closeModal() {
        setIsExiting(true)
        setTimeout(() => {
            onClose()
            setIsExiting(false)
        }, 1000)
    }

    if (!isOpen) return null
    return reactDom.createPortal(
        <>
            <div className={isExiting ? 'modal-overlay overlay-out' : 'modal-overlay'} onClick={closeModal} />
            <div className={isExiting ? 'modal-wrapper modal-out' : 'modal-wrapper'}>
                <div className="modal">
                    <button className="btn-close" onClick={closeModal}>
                        <IoClose size={30} />
                    </button>

                    <div className="modal-img">
                        <img alt={item.name} src={item.screenshotURL} />
                    </div>

                    <h1>{item.title}</h1>
                    <p>{item.description}</p>

                    <div className="pills-container">
                        <Pills technologies={technologies8} />
                    </div>

                    <div className="mq-container">
                        {item.responsive && item.responsive.mobile && (
                            <div className="mq-item">
                                <p>Mobile</p>
                                <IoIosPhonePortrait size={30} style={{ marginTop: 8 }} />
                            </div>
                        )}
                        {item.responsive && item.responsive.tablet && (
                            <div className="mq-item">
                                <p>Tablet</p>
                                <IoIosTabletLandscape size={24} style={{ marginTop: 9 }} />
                            </div>
                        )}
                        {item.responsive && item.responsive.laptop && (
                            <div className="mq-item">
                                <p>Laptop</p>
                                <IoIosLaptop size={30} style={{ marginTop: 5 }} />
                            </div>
                        )}

                        {item.responsive && item.responsive.desktop && (
                            <div className="mq-item">
                                <p>Desktop</p>
                                <IoIosDesktop size={30} style={{ marginTop: 3 }} />
                            </div>
                        )}
                    </div>

                    <div className="buttons">
                        {item.websiteURL && (
                            <ButtonLink
                                design="btn btn-main"
                                link={item.websiteURL}
                                icon={<HiOutlineExternalLink size={22} />}
                                label="Visit Website"
                            />
                        )}

                        {item.githubURL && (
                            <ButtonLink
                                design="btn btn-ghost"
                                link={item.githubURL}
                                icon={<SiGithub size={22} />}
                                label="Git repository"
                            />
                        )}
                    </div>
                </div>
            </div>
        </>,
        // @ts-ignore
        document.getElementById('portal'),
    )
}
export default Modal
