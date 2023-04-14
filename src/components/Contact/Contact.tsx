// Local imports
import icons from 'assets/icons.json';
import { useTranslation } from 'react-i18next';
import {
  SiGithub,
  SiLinkedin,
} from 'react-icons/si';

import contact from './contact.json';

const Contact = (): JSX.Element => {
  // Global states
  const { email, phone, location, linkedIn, github, fullname } = contact
  const { emailURL, phoneURL, locationURL } = icons
  const { t } = useTranslation()

  // Components
  const ContactItem = ({
    text,
    icon,
    link,
  }: {
    text: string
    icon: string
    link?: string
  }) => (
    <li>
      <img alt='icn' src={icon} className='img-1em' />
      {link ? (
        <a href={`mailto:${link}`}>
          <h4>{text}</h4>
        </a>
      ) : (
        <h4>{text}</h4>
      )}
    </li>
  )

  function getIcon(key: string) {
    switch (key) {
      case "github":
        return <SiGithub size={25} />
      case "linkedin":
        return <SiLinkedin size={25} />
      default:
        return null
    }
  }

  const IconSocial = ({ link, icon }: { link: string; icon: string }) => (
    <li>
      <a href={link} target='blank'>
        {getIcon(icon)}
      </a>
    </li>
  )

  return (
    <>
      <section className='section-contact'>
        <div className='wrapper'>
          <h2> {t("contact.header")}</h2>
          <p>{t("contact.text")}</p>
          <ul>
            <ContactItem icon={emailURL} text={email} link={email} />
            <ContactItem icon={phoneURL} text={phone} />
            <ContactItem icon={locationURL} text={location} />
          </ul>
        </div>
      </section>
      <footer>
        <ul>
          <IconSocial icon='linkedin' link={linkedIn} />
          <IconSocial icon='github' link={github} />
        </ul>
        <span>© 2022 • {fullname}</span>
      </footer>
    </>
  )
}
export default Contact
