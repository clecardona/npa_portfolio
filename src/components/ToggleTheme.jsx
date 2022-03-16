import { useTheme } from "state/ThemeProvider";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <input
      className="toggle"
      type="checkbox"
      checked={isDark}
      onChange={() => toggleTheme()}
    />
  );
}
