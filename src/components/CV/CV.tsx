import './_cards.sass';

import React from 'react';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'state/ThemeProvider';

import CircleChart from './CircleChart';
import CV_ENG from './CV-eng.json';
import CV_FR from './CV-fr.json';
import CV_SV from './CV-sv.json';
import EduCard from './EduCard';
import ExpCard from './ExpCard';

const CV = () => {
    const { isCVOpen, language } = useTheme()
    const { education, experience, contact, skills } = getDataByLanguage(language)
    const { t } = useTranslation()

    function getDataByLanguage(language: string) {
        if (language === 'fr') return CV_FR
        if (language === 'sv') return CV_SV
        return CV_ENG
    }

    const Experience = experience.map((item: any, index) => {
        return (
            <React.Fragment key={index}>
                {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer">
                        <ExpCard item={item} key={index} />
                    </a>
                ) : (
                    <ExpCard item={item} key={index} />
                )}
            </React.Fragment>
        )
    })

    const Education = education.map((item: any, index) => {
        return (
            <React.Fragment key={index}>
                {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer">
                        <EduCard item={item} />
                    </a>
                ) : (
                    <EduCard item={item} />
                )}
            </React.Fragment>
        )
    })

    const Contact = () => (
        <ul>
            <li className="card-cont">
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                    <p>
                        linkedin.com/in/<b>clecardona</b>
                    </p>
                </a>
            </li>
            <li className="card-cont">
                <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
                    <p>{contact.email}</p>
                </a>
            </li>
        </ul>
    )
    const Skills = skills.map((e: any, index) => (
        <li key={index} className="card-skills">
            <h4 className="position">{e}</h4>
        </li>
    ))

    return (
        <div className="cv-grid" aria-expanded={isCVOpen}>
            <section className="cv-contact">
                <Contact />
            </section>
            <section className="cv-experience">
                <h2>{t('accordion.about.cv.experience')}</h2> <ul>{Experience}</ul>
            </section>
            <section className="cv-education">
                <h2>{t('accordion.about.cv.education')}</h2> <ul>{Education}</ul>
            </section>
            <section className="cv-languages">
                <CircleChart selection={'English'} animate={isCVOpen} />
                <CircleChart selection={'Swedish'} animate={isCVOpen} />
                <CircleChart selection={'French'} animate={isCVOpen} />
            </section>
            <section className="cv-skills">
                <h2>{t('accordion.about.cv.skills')}</h2> <ul>{Skills}</ul>
            </section>
        </div>
    )
}
export default CV
