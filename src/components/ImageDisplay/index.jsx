import styles from "./index.module.css";
import images from "../../assets";
import { clsx } from "clsx";

const ImageDisplay = ({ imageName, type }) => {
  const imageSrc = images[imageName];
  return (
    <div
      className={clsx(styles.imgContainer, {
        [styles.banner]: type === "banner",
        [styles.info]: type === "info",
        [styles.socialMedia]: type === "socialMedia",
        [styles.species]: type === "species",
        [styles.contact]: type === "contact",
      })}
    >
      <img
        src={imageSrc}
        alt={imageName}
        className={clsx(styles.image, {
          [styles.bannerImage]: type === "banner",
        })}
      />
    </div>
  );
};

export default ImageDisplay;
