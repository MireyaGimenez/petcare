import Main from "../../templates/Main";
import Typography from "../../components/Typography";
import Flex from "../../components/Flex";
import styles from "./index.module.css";
import Radius from "../../components/Radius";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import {
  updatePet,
  updatePetWithDateCheck,
  addDataByDate,
  getData,
} from "../../firebase/petsCRUD";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import DateSelect from "../../components/DateSelect";
import { useMediaQuery } from "react-responsive";

const PetData = ({}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [pet, setPet] = useState();
  const [food, setFood] = useState(pet !== undefined ? pet.food : "");
  const [poop, setPoop] = useState(pet !== undefined ? pet.poop : "");
  const [behavior, setBehavior] = useState(
    pet !== undefined ? pet.behavior : ""
  );
  const [puke, setPuke] = useState(pet !== undefined ? pet.puke : false);

  const todayDate = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(
    state.selectedDate ?? todayDate
  );

  const handleFoodChange = (value) => {
    setFood(value);
  };

  const handlePoopChange = (value) => {
    setPoop(value);
  };

  const handleBehaviorChange = (value) => {
    setBehavior(value);
  };

  const handlePukeChange = (value) => {
    setPuke(value);
  };

  useEffect(() => {
    if (state.selectedDate) {
      getData(id, state.selectedDate)
        .then((pet) => {
          setPet(pet);
        })
        .catch((error) => {
          console.error("Error fetching pet information:", error);
        });
    }
  }, [state, id]);

  useEffect(() => {
    if (pet !== undefined && pet !== null) {
      setFood(pet.food);
      setPoop(pet.poop);
      setBehavior(pet.behavior);
      setPuke(pet.puke);
    }
  }, [pet]);

  const handleSubmit = () => {
    addDataByDate(
      id,
      {
        food,
        poop,
        behavior,
        puke,
        date: selectedDate,
      },
      selectedDate
    )
      .then(() => {
        navigate("/consultData", { state: id });
      })
      .catch((error) => {
        console.error("Error adding pet information:", error);
      });
  };

  return (
    <Main>
      <Flex
        direction={"column"}
        className={styles.addPetsContainer}
        gap={isMobile ? 50 : 60}
      >
        <Typography fontFamily={"PT Serif"} size={isMobile ? 32 : 48} bold>
          {state.petName}
        </Typography>
        <Flex direction={"column"} gap={70}>
          <Flex gap={30} direction={isMobile ? "column" : "row"}>
            <Typography fontFamily={"Lora"} size={isMobile ? 24 : 32} bold>
              Aliment
            </Typography>
            <Flex gap={30} className={styles.foodContainer}>
              <Radius
                id={"foodNormal"}
                name={"food"}
                onChange={handleFoodChange}
                checked={food === "normal"}
                value={"normal"}
                label={"Normal"}
                imageName={"normalFood"}
              />
              <Radius
                id={"foodMassa"}
                name={"food"}
                onChange={handleFoodChange}
                checked={food === "massa"}
                value={"massa"}
                label={"Massa"}
                imageName={"massa"}
              />
              <Radius
                id={"foodPoc"}
                name={"food"}
                onChange={handleFoodChange}
                checked={food === "poc"}
                value={"poc"}
                label={"Poc"}
                imageName={"poc"}
              />
              <Radius
                id={"foodRes"}
                name={"food"}
                onChange={handleFoodChange}
                checked={food === "res"}
                value={"res"}
                label={"Res"}
                imageName={"resFood"}
              />
            </Flex>
          </Flex>

          <Flex gap={30} direction={isMobile ? "column" : "row"}>
            <Typography fontFamily={"Lora"} size={isMobile ? 24 : 32} bold>
              Excrements
            </Typography>

            <Flex gap={30} className={styles.poopContainer}>
              <Radius
                id={"poopNormal"}
                name={"poop"}
                onChange={handlePoopChange}
                checked={poop === "normal"}
                value={"normal"}
                label={"Normal"}
                imageName={"normalPoop"}
              />
              <Radius
                id={"poopDurs"}
                name={"poop"}
                onChange={handlePoopChange}
                checked={poop === "durs"}
                value={"durs"}
                label={"Durs"}
                imageName={"durs"}
              />
              <Radius
                id={"poopSolts"}
                name={"poop"}
                onChange={handlePoopChange}
                checked={poop === "solts"}
                value={"solts"}
                label={"Solts"}
                imageName={"solts"}
              />
              <Radius
                id={"poopDiarrea"}
                name={"poop"}
                onChange={handlePoopChange}
                checked={poop === "diarrea"}
                value={"diarrea"}
                label={"Diarrea"}
                imageName={"diarrea"}
              />
              <Radius
                id={"poopRes"}
                name={"poop"}
                onChange={handlePoopChange}
                checked={poop === "res"}
                value={"res"}
                label={"Res"}
                imageName={"resPoop"}
              />
            </Flex>
          </Flex>

          <Flex gap={30} direction={isMobile ? "column" : "row"}>
            <Typography fontFamily={"Lora"} size={isMobile ? 24 : 32} bold>
              Comportament
            </Typography>

            <Flex gap={30} className={styles.behaviorContainer}>
              <Radius
                id={"behaviorNormal"}
                name={"behavior"}
                onChange={handleBehaviorChange}
                checked={behavior === "normal"}
                value={"normal"}
                label={"Normal"}
                imageName={"normalBehavior"}
              />
              <Radius
                id={"behaviorJuganer"}
                name={"behavior"}
                onChange={handleBehaviorChange}
                checked={behavior === "juganer"}
                value={"juganer"}
                label={"Juganer"}
                imageName={"juganer"}
              />
              <Radius
                id={"behaviorAgressiu"}
                name={"behavior"}
                onChange={handleBehaviorChange}
                checked={behavior === "agressiu"}
                value={"agressiu"}
                label={"Agressiu"}
                imageName={"agressiu"}
              />
              <Radius
                id={"behaviorAnsios"}
                name={"behavior"}
                onChange={handleBehaviorChange}
                checked={behavior === "ansios"}
                value={"ansios"}
                label={"Ansiós"}
                imageName={"ansios"}
              />
              <Radius
                id={"behaviorLetargic"}
                name={"behavior"}
                onChange={handleBehaviorChange}
                checked={behavior === "letargic"}
                value={"letargic"}
                label={"Letàrgic"}
                imageName={"letargic"}
              />
            </Flex>
          </Flex>

          <Flex
            gap={30}
            className={styles.pukeContainer}
            direction={isMobile ? "column" : "row"}
          >
            <Typography fontFamily={"Lora"} size={isMobile ? 24 : 32} bold>
              Vòmits
            </Typography>
            <Radius
              id={"pukeYes"}
              name={"puke"}
              onChange={handlePukeChange}
              checked={puke}
              value={true}
              label={"Sí"}
              imageName={"puke"}
            />
            <Radius
              id={"pukeNo"}
              name={"puke"}
              onChange={handlePukeChange}
              checked={!puke}
              value={false}
              label={"No"}
              imageName={"resPoop"}
            />
          </Flex>

          <Flex>
            <DateSelect
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
              }}
            />
          </Flex>

          <Button variant={"main2"} onClick={handleSubmit}>
            GUARDAR
          </Button>
        </Flex>
      </Flex>
    </Main>
  );
};

export default PetData;
