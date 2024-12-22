import ImageDisplay from "../../components/ImageDisplay";
import Flex from "../../components/Flex";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import styles from "./index.module.css";
import InfoElement from "../../components/InfoElement";
import Main from "../../templates/Main";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const HomePage = ({}) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Main hasImage>
      <Flex
        className={styles.infoWhatContainer}
        gap={35}
        direction={isMobile ? "column" : "row"}
      >
        <Flex
          direction={"column"}
          className={styles.infoWhatText}
          gap={isMobile ? 20 : 40}
        >
          <Typography size={isMobile ? 32 : 48} fontFamily={"PT Serif"} bold>
            Què és PetCare?
          </Typography>
          <Typography size={isMobile ? 20 : 28} fontFamily={"Lora"}>
            PetCare és un diari de salut per a mascotes que simplifica el
            seguiment de la seva nutrició, pes, medicacions i altres aspectes
            claus de la seva vida. Amb PetCare pots tenir una visió completa de
            la salut del teu animal de companyia, ajudant-te a prendre decisions
            informades i millorar la seva qualitat de vida.
          </Typography>
        </Flex>
        <Flex className={styles.infoWhatImage}>
          <ImageDisplay imageName={"what"} />
        </Flex>
      </Flex>
      <Flex
        direction={"column"}
        className={styles.whyContainer}
        alignItems={"center"}
        gap={isMobile ? 30 : 50}
      >
        <Typography fontFamily={"PT Serif"} size={isMobile ? 32 : 48} bold>
          Per què PetCare?
        </Typography>
        <Flex direction={"column"} gap={55}>
          <Flex gap={40} direction={isMobile ? "column" : "row"}>
            <InfoElement
              image={"simple"}
              textHeader={"Simple i fàcil de fer servir"}
              textBody={"Registra la informació amb només un parell de clicks."}
            />
            <InfoElement
              image={"devices"}
              textHeader={"Accessible"}
              textBody={
                "Utilitza’l amb el mòbil, la tauleta o l’ordinador de sobretaula."
              }
              imagePosition={isMobile ? "right" : "left"}
            />
          </Flex>
          <Flex gap={40} direction={isMobile ? "column" : "row"}>
            <InfoElement
              image={"healthCheck"}
              textHeader={"Registra tot tipus d’informació"}
              textBody={
                "Hàbits alimentaris, canvis de comportament, vòmits, medicacions... i més!"
              }
            />
            <InfoElement
              image={"consult"}
              textHeader={"Consulta"}
              textBody={"Pots consultar la informació en qualsevol moment."}
              imagePosition={isMobile ? "right" : "left"}
            />
          </Flex>
        </Flex>
        <Button variant={"main"} onClick={() => navigate("/register")}>
          UNIR-SE
        </Button>
      </Flex>
    </Main>
  );
};

export default HomePage;
