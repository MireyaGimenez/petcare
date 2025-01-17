import styles from "./index.module.css";
import Flex from "../Flex";
import ImageDisplay from "../ImageDisplay";
import Typography from "../Typography";
import Button from "../Button";
import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const PetCard = ({
  image,
  petName,
  petBreed,
  petAge,
  onClick,
  selected,
  petID,
}) => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div onClick={() => onClick()}>
      <Flex
        direction={"row"}
        className={clsx(styles.petCardContainer, {
          [styles.selected]: selected,
        })}
        gap={isMobile ? 20 : 40}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex>
          <ImageDisplay imageName={image} type={"speciesCard"} />
        </Flex>
        <Flex direction={"column"} gap={isMobile ? 10 : 20}>
          <Typography size={isMobile ? 20 : 28} fontFamily={"Lora"} bold>
            {petName}
          </Typography>
          <Typography size={isMobile ? 20 : 28} fontFamily={"Lora"}>
            {petBreed}
          </Typography>
          <Typography size={isMobile ? 20 : 28} fontFamily={"Lora"}>
            {petAge}
          </Typography>
          <Flex gap={isMobile ? 8 : 20}>
            <Button
              variant={"main"}
              textSize={"card"}
              onClick={() =>
                navigate(`/petData/${petID}`, { state: { petName } })
              }
            >
              Registrar
            </Button>
            <Button
              variant={"main"}
              textSize={"card"}
              onClick={() => navigate("/consultData", { state: petID })}
            >
              Consultar
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default PetCard;
