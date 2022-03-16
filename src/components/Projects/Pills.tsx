interface IProps {
  technologies: string[];
}
const Pills = ({ technologies }: IProps) => {
  function getBadge(key: string) {
    switch (key) {
      case "typescript":
        return "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white";
      case "java":
        return "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white";
      case "javascript":
        return "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black";
      case "react":
        return "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB";
      case "firebase":
        return "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase";
      case "sass":
        return "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white";
      case "css":
        return "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white";
      default:
        return key;
    }
  }
  return (
    <ul className="pills">
      {technologies.map((techno) => {
        return (
          <li key={techno}>
            <img src={getBadge(techno)} alt="" />
          </li>
        );
      })}
    </ul>
  );
};
export default Pills;
