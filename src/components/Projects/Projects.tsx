import { useTranslation } from 'react-i18next';
import { useTheme } from 'state/ThemeProvider';

import ButtonCard from './ButtonCard';

interface IProps {
    projects: any[]
}

const Projects = ({ projects }: IProps): JSX.Element => {
    const { t } = useTranslation()
    const { gallery } = useTheme()
    const isClassic = gallery === 'classic'

    return (
        <section className="section-portfolio">
            <div className="wrapper">
                <p>{t('accordion.projects.paragraph')}</p>

                <ul className={isClassic ? 'projects-lists classic' : 'projects-lists creative'}>
                    {projects.map(item => {
                        return <ButtonCard key={item.id} item={item} />
                    })}
                </ul>
            </div>
        </section>
    )
}
export default Projects
