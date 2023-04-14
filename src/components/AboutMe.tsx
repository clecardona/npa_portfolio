import { useTranslation } from 'react-i18next';
import { useTheme } from 'state/ThemeProvider';

import CV from './CV/CV';

const AboutMe = (): JSX.Element => {
    const { isCVOpen, setCVOpen } = useTheme()
    const { t } = useTranslation()
    return (
        <>
            <div className="about-content">
                <img className="about-img" alt="portrait" src="http://clecardona.com/img/portrait.jpg" />
                <p className="about-paragraph">{t('accordion.about.paragraph')}</p>
            </div>
            <div className="additional-content">
                <button className="btn btn-more" onClick={() => setCVOpen(!isCVOpen)}>
                    <h3>{isCVOpen ? '-' : '+'}</h3>
                    <h3>{isCVOpen ? t('accordion.about.less') : t('accordion.about.more')}</h3>
                </button>
                <CV />
            </div>
        </>
    )
}
export default AboutMe
