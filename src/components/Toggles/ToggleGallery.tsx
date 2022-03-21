import { useTheme } from "state/ThemeProvider";

const ToggleGallery = () => {
  const { gallery, toggleGallery } = useTheme();
  const isClassic = gallery === "classic";
  return (
    <input
      className="toggle-gallery"
      type="checkbox"
      checked={!isClassic}
      onChange={() => toggleGallery()}
    />
  );
};
export default ToggleGallery;
