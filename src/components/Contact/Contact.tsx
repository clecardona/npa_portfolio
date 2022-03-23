// Local imports
import contact from "./contact.json";
import icons from "assets/icons.json";

const Contact = (): JSX.Element => {
  // Gloabal states
  const { email, phone, location, linkedIn, github, fullname } = contact;
  const { emailURL, phoneURL, locationURL, linkedInURL, githubURL } = icons;

  // Components
  const ContactItem = ({
    text,
    icon,
    link,
  }: {
    text: string;
    icon: string;
    link?: string;
  }) => (
    <li>
      <img alt="icn" src={icon} className="img-1em" />
      {link ? (
        <a href={`mailto:${link}`}>
          <h4>{text}</h4>
        </a>
      ) : (
        <h4>{text}</h4>
      )}
    </li>
  );

  const IconSocial = ({ link, icon }: { link: string; icon: string }) => (
    <li>
      <a href={link} target="blank">
        <img alt="icn" src={icon} />
      </a>
    </li>
  );

  return (
    <>
      <section className="section-contact">
        <div className="wrapper">
          <h2>Contact me</h2>
          <p>
            Here is my contact information if you are interested in starting a
            collaboration.
          </p>
          <ul>
            <ContactItem icon={emailURL} text={email} link={email} />
            <ContactItem icon={phoneURL} text={phone} />
            <ContactItem icon={locationURL} text={location} />
          </ul>
        </div>
      </section>
      <footer>
        <ul>
          <IconSocial icon={linkedInURL} link={linkedIn} />
          <IconSocial icon={githubURL} link={github} />
        </ul>
        <span>© 2022 • {fullname}</span>
      </footer>
    </>
  );
};
export default Contact;
