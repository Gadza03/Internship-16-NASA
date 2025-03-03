import c from "../styles/navbar.module.css";
import nasaIcon from "../assets/svgs/nasa-icon.svg";
import { useNavigate } from "react-router";
import { paths } from "../paths";

const navLinks = [
  { name: "Home", path: paths.home },
  { name: "Astronomy Pictures", path: paths.apod },
  { name: "Mars Rover", path: paths.marsRover },
  { name: "Near Earth Objects", path: paths.neo },
  { name: "Earth Imagery", path: paths.earthImagery },
];

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className={c.navBar}>
      <div className={c.logo} onClick={() => navigate(paths.home)}>
        <img src={nasaIcon} alt="Nasa logo" />
      </div>
      <ul className={c.linksWrapper}>
        {navLinks.map(({ name, path }) => (
          <li key={name} onClick={() => navigate(path)}>
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
