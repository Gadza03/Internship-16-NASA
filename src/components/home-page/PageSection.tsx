import c from "../../styles/homePage.module.css";

type PageSectionProps = {
  heading: string;
  // imageUrl: string;
  description: string;
  navigation: () => void;
};

export default function PageSection({
  heading,
  // imageUrl,
  description,
  navigation,
}: PageSectionProps) {
  return (
    <div className={c.section} onClick={navigation}>
      <h3 className={c.sectionHeading}>{heading}</h3>
      <img
        src={`https://apod.nasa.gov/apod/image/2503/California2Pleiades_Anderson_960.jpg`}
        alt="Cosmic picture"
      />
      <p className={c.sectionDescription}>{description}</p>
      <button className={c.sectionBtn}>Explore more</button>
    </div>
  );
}
