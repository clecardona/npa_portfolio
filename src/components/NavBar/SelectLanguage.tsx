import './SelectLanguage.sass';

import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import {
  IoIosArrowDown,
  IoIosArrowUp,
} from 'react-icons/io';
import { useTheme } from 'state/ThemeProvider';

export const SelectLanguage = () => {
  const { t, i18n } = useTranslation()
  const { language, setLanguage } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  function changeLanguage(language: string) {
    setLanguage(language)
    i18n.changeLanguage(language)
  }

  return (
    <div className='caret-container'>
      <button id='btn-opener' onClick={() => setIsOpen(!isOpen)}>
        <h4>{t("select.language.language")} </h4>
        {!isOpen ? (
          <IoIosArrowDown size={16} id='arrow-down' />
        ) : (
          <IoIosArrowUp size={16} id='arrow-up' />
        )}
      </button>

      <div className={isOpen ? "caret caret-open" : "caret caret-close"}>
        <ul>
          <li>
            <button
              className={language === "en" ? "active" : ""}
              onClick={() => {
                changeLanguage("en")
                setIsOpen(false)
              }}
            >
              English
            </button>
          </li>
          <li>
            <button
              className={language === "fr" ? "active" : ""}
              onClick={() => {
                changeLanguage("fr")
                setIsOpen(false)
              }}
            >
              Français
            </button>
          </li>
          <li>
            <button
              className={language === "sv" ? "active" : ""}
              onClick={() => {
                changeLanguage("sv")
                setIsOpen(false)
              }}
            >
              Svenska
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
