import styles from "./index.module.css";
import { clsx } from "clsx";
import Typography from "../Typography";
import Flex from "../Flex";
import { useMediaQuery } from "react-responsive";
import ImageDisplay from "../ImageDisplay";

const DetailPetData = ({ name, imageName }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Flex direction={"column"} gap={10} alignItems={"center"}>
      <div className={clsx(styles.detailImage)}>
        <ImageDisplay imageName={imageName} type={"species"} />
      </div>
      <Typography fontFamily={"Lora"}>{name}</Typography>
    </Flex>
  );
};

export default DetailPetData;
