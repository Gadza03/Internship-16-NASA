import c from "../../styles/navbar.module.css";
import nasaIcon from "../../assets/svgs/nasa-icon.svg";
import { useNavigate } from "react-router";
import ReactSwitch from "react-switch";
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts";
import { paths } from "../../paths";
import { FaXmark, FaBars } from "react-icons/fa6";

const navLinks = [
  { name: "Home", path: paths.home },
  { name: "Astronomy Pictures", path: paths.apod },
  { name: "Mars Rover", path: paths.marsRover },
  { name: "Near Earth Objects", path: paths.neo },
  { name: "Earth Imagery", path: paths.earthImagery },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { isLight, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigatePath = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className={c.navBar}>
      <div className={c.logo} onClick={() => navigate(paths.home)}>
        <img src={nasaIcon} alt="Nasa logo" />
      </div>
      <div className={c.hamburger} onClick={toggleMenu}>
        {!menuOpen ? (
          <FaBars className={c.hamburgerIcon} />
        ) : (
          <FaXmark className={c.hamburgerIcon} />
        )}
      </div>

      <ul className={`${c.linksWrapper} ${menuOpen ? c.openMenu : ""}`}>
        <span>
          Theme
          <ReactSwitch onChange={toggleTheme} checked={isLight} />
        </span>
        {navLinks.map(({ name, path }) => (
          <li key={name} onClick={() => handleNavigatePath(path)}>
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
