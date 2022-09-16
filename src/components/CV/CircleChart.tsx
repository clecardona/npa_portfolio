import './_chart.scss';

import { useTranslation } from 'react-i18next';

const CircleChart = ({ selection, animate }: { selection: string; animate: boolean }) => {
    const { t } = useTranslation()
    function getTextTranslation(value: string) {
        if (value === 'Swedish') return t('languages.swedish')
        if (value === 'French') return t('languages.french')
        return t('languages.english')
    }
    return (
        <div className="chart">
            <figure className={animate ? `chart-${selection} animate` : `chart-${selection} `}>
                <svg role="img" xmlns="http://www.w3.org/2000/svg">
                    <circle className="circle-background" />
                    <circle className="circle-foreground" />
                </svg>
            </figure>
            <h3>{getTextTranslation(selection)}</h3>
        </div>
    )
}
export default CircleChart
