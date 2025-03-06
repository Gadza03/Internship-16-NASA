import c from "../styles/homePage.module.css";
import PageSection from "../components/home-page/PageSection";
import { useNavigate } from "react-router";
import { paths } from "../paths";
import { useContext } from "react";
import { ThemeContext } from "../contexts";
import earthWhite from "../assets/images/earthWhite.png";
import earthBlack from "../assets/images/earthBlack.png";
import jupiterWhite from "../assets/images/jupiterWhite.png";
import jupiterBlack from "../assets/images/jupiterBlack.png";
import marsWhite from "../assets/images/marsWhite.png";
import marsBlack from "../assets/images/marsBlack.png";
import astronautWhite from "../assets/images/astronautWhite.png";
import astronautBlack from "../assets/images/astronautBlack.png";

export function HomePage() {
  const navigate = useNavigate();
  const { isLight } = useContext(ThemeContext);

  return (
    <div className="container">
      <div className={c.headerWrapper}>
        <h1 className={c.heading}>
          Step into the universe and discover breathtaking images and real-time
          space data.
        </h1>
        <div className={c.planetWrapper}>
          <div className={c.planet}></div>
        </div>
      </div>
      <h2 className={c.exploreHeading}>What you can explore?</h2>
      <main>
        <div className={c.pageSectionWrapper}>
          <PageSection
            heading="A New Cosmic Wonder Every Day!"
            description="Experience the beauty of the universe with NASA's Astronomy Picture of the Day. From dazzling nebulae to distant galaxies, each day brings a new breathtaking image accompanied by fascinating insights about our vast cosmos."
            navigation={() => navigate(paths.apod)}
            imageUrl="https://apod.nasa.gov/apod/image/2502/20250205_rima_hyginus_mirabella_1024px.jpg"
          />

          {isLight ? (
            <img className={c.icon} src={earthBlack} />
          ) : (
            <img className={c.icon} src={earthWhite} />
          )}
        </div>

        <div className={`${c.pageSectionWrapper} ${c.reverse}`}>
          {isLight ? (
            <img className={c.icon} src={jupiterBlack} />
          ) : (
            <img className={c.icon} src={jupiterWhite} />
          )}
          <PageSection
            heading="Mars Rover – Explore the Red Planet Up Close"
            description="Join NASA’s rovers as they navigate the Martian surface, capturing stunning landscapes, rock formations, and potential signs of past life. Discover the latest images sent by Perseverance, Curiosity, and other robotic explorers."
            navigation={() => navigate(paths.marsRover)}
            imageUrl="https://apod.nasa.gov/apod/image/2503/M94_hst1542a.jpg"
          />
        </div>

        <div className={c.pageSectionWrapper}>
          <PageSection
            heading="Near Earth Objects – Tracking Space Rocks Near Our Planet"
            description="Stay informed about asteroids and comets passing close to Earth. Explore real-time data on these celestial objects, learn about their orbits, and understand the science behind planetary defense and space exploration."
            navigation={() => navigate(paths.neo)}
            imageUrl="https://apod.nasa.gov/apod/image/2502/AthenaEarth1024.jpg"
          />

          {isLight ? (
            <img className={c.icon} src={marsBlack} />
          ) : (
            <img className={c.icon} src={marsWhite} />
          )}
        </div>

        <div className={`${c.pageSectionWrapper} ${c.reverse}`}>
          {isLight ? (
            <img className={c.icon} src={astronautBlack} />
          ) : (
            <img className={c.icon} src={astronautWhite} />
          )}
          <PageSection
            heading="Earth Imagery – A Unique Perspective of Our Planet"
            description="Observe Earth like never before with high-resolution satellite images from space. Watch the changing landscapes, track weather patterns, and see how our planet evolves through the eyes of advanced space technology."
            navigation={() => navigate(paths.earthImagery)}
            imageUrl="https://apod.nasa.gov/apod/image/2503/QuadMoon_Minato_960.jpg"
          />
        </div>
      </main>
    </div>
  );
}
