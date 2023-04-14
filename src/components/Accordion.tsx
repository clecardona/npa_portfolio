import { useRef } from 'react';

interface IProps {
    isOpen: boolean
    setisOpen: any
    title: string
    content: JSX.Element
    color?: string
    id: string
}

const Accordion = ({ isOpen, setisOpen, title, content, id }: IProps): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null)
    function handleClick() {
        if (ref.current && !isOpen) ref.current.scrollIntoView()
        setisOpen(!isOpen)
    }
    return (
        <div className="accordion-positionner">
            <div className="tag" id={id} ref={ref} />
            <div className="accordion">
                <button className="accordion-title" onClick={handleClick}>
                    <h3>{title}</h3>
                    {isOpen ? <h2 className="accordion-icon">-</h2> : <h2 className="accordion-icon collapsed">+</h2>}
                </button>

                <div className="accordion-content" aria-expanded={isOpen}>
                    {content}
                </div>
            </div>
        </div>
    )
}
export default Accordion
