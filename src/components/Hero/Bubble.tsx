import { erf } from 'mathjs';
import { useTranslation } from 'react-i18next';

const Bubble = ({ percentage }: { percentage?: number }): JSX.Element => {
    const { t } = useTranslation()
    function getOffset() {
        if (!percentage) return
        const delta = 2000 * (percentage - 1)
        return -150 + 350 * erf(0.003 * delta)
    }

    const title = t('bubble.title')

    if (!percentage) return <></>
    return (
        <div className="bubble" style={{ bottom: getOffset() }}>
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
            <h3> {t('bubble.subtitle')}</h3>
            <div className="location">
                <p>📍</p>
                <h3 style={{ fontWeight: 300 }}>{t('bubble.paragraph')}</h3>
            </div>
        </div>
    )
}
export default Bubble
