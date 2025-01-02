import Calendar from "../../components/Calendar";
import Main from "../../templates/Main";
import styles from "./index.module.css";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
import Flex from "../../components/Flex";
import DetailPetData from "../../components/DetailPetData";
import { deleteDataByDate, getPetById, getPets } from "../../firebase/petsCRUD";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Select from "../../components/Select";
import { useMediaQuery } from "react-responsive";

const ConsultData = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [pet, setPet] = useState();
  const [pets, setPets] = useState();
  const [petOption, setPetOption] = useState();
  const [selectedDate, setSelectedDate] = useState();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const today = new Date().toISOString().split("T")[0];
  const sameDayData =
    pet && pet.data !== undefined
      ? pet.data?.find((petData) => petData.date === today)
      : undefined;

  const [selectedDateData, setSelectedDateData] = useState(sameDayData);

  useEffect(() => {
    setSelectedDateData(sameDayData);
  }, []);

  useEffect(() => {
    if (state) {
      getPetById(state)
        .then((pet) => {
          setPet(pet);
          setPetOption(pet.name);
        })
        .catch((error) => {
          console.error("Error fetching pet information:", error);
        });
    }
  }, [state]);

  //
  useEffect(() => {
    if (pet) {
      getPetById(pet.id)
        .then((pet) => setPet(pet))
        .catch((error) => {
          console.error("Error fetching pet information:", error);
        });
    }
  }, [selectedDateData]);
  //

  useEffect(() => {
    getPets()
      .then((pets) => setPets(pets))
      .catch((error) => {
        console.error("Error fetching pet information:", error);
      });
  }, []);

  const petOptions = pets !== undefined ? pets.map((pet) => pet.name) : [];

  const handleSelectPet = (e) => {
    setPetOption(e.target.value);
  };

  useEffect(() => {
    const selectedPet =
      pets !== undefined ? pets.find((pet) => pet.name === petOption) : {};
    setPet(selectedPet);
  }, [petOption]);

  const handleCalendarClick = useCallback(
    (value) => {
      const offsetDate = new Date(
        value.date.getTime() - value.date.getTimezoneOffset() * 60000
      );
      const dateSelected = offsetDate.toISOString().split("T")[0];
      setSelectedDate(dateSelected);
      setSelectedDateData(
        pet?.data?.find((petData) => petData.date === dateSelected)
      );
    },
    [pet]
  );

  const petData =
    pet?.data !== undefined
      ? Object.values(pet.data).map((petData) => ({
          title: "random",
          date: petData.date,
        }))
      : [];

  return (
    <Main>
      <Flex
        className={styles.petDataContainer}
        direction={"column"}
        gap={isMobile ? 20 : 40}
      >
        <Flex
          direction={isMobile ? "column" : "row"}
          justifyContent={"space-around"}
          gap={isMobile ? 30 : 0}
          className={styles.calendarAndInfoContainer}
        >
          <div className={styles.calendarContainer}>
            <Calendar onClick={handleCalendarClick} events={petData} />
          </div>
          <Flex className={styles.infoContainer} direction={"column"} gap={20}>
            <Select
              options={petOptions}
              onChange={handleSelectPet}
              value={petOption}
            />
            <Flex justifyContent={"space-around"} className={styles.extraInfo}>
              <Flex gap={15} alignItems={"center"}>
                <Typography size={16} fontFamily={"Lora"} bold>
                  Edat
                </Typography>
                <Typography size={18} fontFamily={"Lora"}>
                  {pet !== undefined ? pet.age : null}
                </Typography>
              </Flex>
              <Flex gap={15} alignItems={"center"}>
                <Typography size={16} fontFamily={"Lora"} bold>
                  Gènere
                </Typography>
                <Typography size={18} fontFamily={"Lora"}>
                  {pet !== undefined ? pet.sex : null}
                </Typography>
              </Flex>
            </Flex>
            {selectedDateData !== undefined ? (
              <div className={styles.detailInfo}>
                {selectedDateData.food ? (
                  <Flex direction={"column"} gap={10} alignItems={"center"}>
                    <Typography fontFamily={"Lora"} size={20} bold>
                      Aliment
                    </Typography>
                    <DetailPetData
                      name={selectedDateData.food}
                      imageName={
                        selectedDateData.food === "normal" ||
                        selectedDateData.food === "res"
                          ? `${selectedDateData.food}Food`
                          : selectedDateData.food
                      }
                    />
                  </Flex>
                ) : null}
                {selectedDateData.poop ? (
                  <Flex direction={"column"} gap={10} alignItems={"center"}>
                    <Typography fontFamily={"Lora"} size={20} bold>
                      Excrements
                    </Typography>
                    <DetailPetData
                      name={selectedDateData.poop}
                      imageName={
                        selectedDateData.poop === "normal" ||
                        selectedDateData.poop === "res"
                          ? `${selectedDateData.poop}Poop`
                          : selectedDateData.poop
                      }
                    />
                  </Flex>
                ) : null}

                {selectedDateData.behavior ? (
                  <Flex direction={"column"} gap={10} alignItems={"center"}>
                    <Typography fontFamily={"Lora"} size={20} bold>
                      Behavior
                    </Typography>
                    <DetailPetData
                      name={selectedDateData.behavior}
                      imageName={
                        selectedDateData.behavior === "normal"
                          ? `${selectedDateData.behavior}Behavior`
                          : selectedDateData.behavior
                      }
                    />
                  </Flex>
                ) : null}

                <Flex direction={"column"} gap={10} alignItems={"center"}>
                  <Typography fontFamily={"Lora"} size={20} bold>
                    Vòmits
                  </Typography>
                  <DetailPetData
                    name={selectedDateData.puke === true ? "Sí" : "No"}
                    imageName={
                      selectedDateData.puke === false ? "resPoop" : "puke"
                    }
                  />
                </Flex>
              </div>
            ) : (
              "No hi ha informació"
            )}
            <Flex
              justifyContent={"space-around"}
              className={styles.footerButtons}
            >
              {selectedDateData !== undefined ? (
                <>
                  <Button
                    variant={"main2"}
                    textSize={"card"}
                    onClick={() => {
                      navigate(`/petData/${pet.id}`, {
                        state: { selectedDate, petName: pet.name },
                      });
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant={"main2"}
                    textSize={"card"}
                    onClick={() => {
                      deleteDataByDate(pet.id, selectedDateData)
                        .then(() => setSelectedDateData(undefined))
                        .catch((error) => {
                          console.error("Error deleting pet data:", error);
                        });
                    }}
                  >
                    Eliminar
                  </Button>
                </>
              ) : (
                <Button
                  variant={"main2"}
                  textSize={"card"}
                  onClick={() => {
                    navigate(`/petData/${pet.id}`, {
                      state: { selectedDate, petName: pet.name },
                    });
                  }}
                >
                  Afegir
                </Button>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Main>
  );
};

export default ConsultData;
