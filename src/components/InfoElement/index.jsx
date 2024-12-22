import Flex from "../Flex";
import ImageDisplay from "../ImageDisplay";
import Typography from "../Typography";
import styles from "./index.module.css";
import { useMediaQuery } from "react-responsive";

const InfoElement = ({
  image,
  textHeader,
  textBody,
  imagePosition = "left",
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Flex gap={40} className={styles.infoElementContainer}>
      {imagePosition === "left" ? (
        <Flex className={styles.infoImage}>
          <ImageDisplay imageName={image} type={"info"} />
        </Flex>
      ) : null}
      <Flex direction={"column"} gap={15}>
        <Typography fontFamily={"Lora"} size={isMobile ? 20 : 28} bold>
          {textHeader}
        </Typography>
        <Typography fontFamily={"Lora"} size={isMobile ? 20 : 28}>
          {textBody}
        </Typography>
      </Flex>
      {imagePosition === "right" ? (
        <Flex className={styles.infoImage}>
          <ImageDisplay imageName={image} type={"info"} />
        </Flex>
      ) : null}
    </Flex>
  );
};

export default InfoElement;
