import Calendar from "../../components/Calendar";
import Main from "../../templates/Main";
import styles from "./index.module.css";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
import Flex from "../../components/Flex";
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
  }, [sameDayData]);

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
        <Typography fontFamily={"PT Serif"} size={isMobile ? 32 : 48} bold>
          Pet Data
        </Typography>
        <Flex
          direction={isMobile ? "column" : "row"}
          justifyContent={"space-around"}
          gap={isMobile ? 30 : 0}
        >
          <div className={styles.calendarContainer}>
            <Calendar onClick={handleCalendarClick} events={petData} />
          </div>
          <Flex className={styles.infoContainer} direction={"column"} gap={30}>
            <Select
              options={petOptions}
              onChange={handleSelectPet}
              value={petOption}
            />
            <Flex justifyContent={"space-around"}>
              <Typography size={20}>
                Edat: {pet !== undefined ? pet.age : null}
              </Typography>
              <Typography size={20}>
                Gènere: {pet !== undefined ? pet.sex : null}
              </Typography>
            </Flex>
            {selectedDateData !== undefined ? (
              <Flex direction={"column"} gap={20}>
                <Typography size={20}>
                  Aliment: {selectedDateData.food}
                </Typography>
                <Typography size={20}>
                  Excrements: {selectedDateData.poop}
                </Typography>
                <Typography size={20}>
                  Comportament: {selectedDateData.behavior}
                </Typography>
                <Typography size={20}>
                  Vòmits: {selectedDateData.puke ? "Si" : "No"}
                </Typography>
              </Flex>
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
                    navigate(`/petData/${pet.id}`, { state: selectedDate });
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
