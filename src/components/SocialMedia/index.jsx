import styles from "./index.module.css";
import Flex from "../Flex";
import ImageDisplay from "../ImageDisplay";
import Typography from "../Typography";
import { useMediaQuery } from "react-responsive";

const SocialMedia = ({ imageName, socialMediaName }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Flex
      direction={isMobile ? "column" : "row"}
      className={styles.socialMediaContainer}
      gap={10}
    >
      <ImageDisplay imageName={imageName} type={"socialMedia"} />
      <Typography fontFamily={"Lora"} size={isMobile ? 14 : 16} color={"white"}>
        {socialMediaName}
      </Typography>
    </Flex>
  );
};

export default SocialMedia;
