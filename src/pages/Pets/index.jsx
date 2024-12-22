import Button from "../../components/Button";
import styles from "./index.module.css";
import Main from "../../templates/Main";
import PetCard from "../../components/PetCard";
import Typography from "../../components/Typography";
import Flex from "../../components/Flex";
import { getPets, deletePet } from "../../firebase/petsCRUD";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Pets = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState();
  const [cardID, setCardID] = useState();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    getPets()
      .then((pets) => {
        setPets(pets);
      })
      .catch((error) => {
        console.error("Error fetching pets:", error);
      });
  }, [pets]);
  return (
    <Main>
      <Flex className={styles.petContainer} direction={"column"} gap={40}>
        <Typography fontFamily={"PT Serif"} size={isMobile ? 32 : 48} bold>
          Mascotes
        </Typography>
        <div className={styles.petGrid}>
          {pets !== undefined
            ? pets.map((pet) => {
                return (
                  <PetCard
                    image={pet.species}
                    petName={pet.name}
                    petBreed={pet.breed}
                    petAge={pet.age}
                    key={pet.id}
                    onClick={() => setCardID(pet.id)}
                    selected={pet.id === cardID}
                    petID={pet.id}
                  />
                );
              })
            : null}
        </div>
        <Flex justifyContent={"space-around"}>
          <Button variant={"main2"} onClick={() => navigate("/addPets")}>
            + AFEGIR
          </Button>
          <Button variant={"main2"} onClick={() => deletePet(cardID)}>
            - ELIMINAR
          </Button>
        </Flex>
      </Flex>
    </Main>
  );
};

export default Pets;
