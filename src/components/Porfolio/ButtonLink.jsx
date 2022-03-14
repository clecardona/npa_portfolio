export default function ButtonLink({ children, design, link, icon }) {
  return (
    <a className={design} alt="link-website" target="blank" href={link}>
      {icon && <img src={icon} alt="" />}
      <h3>{children}</h3>
    </a>
  );
}
