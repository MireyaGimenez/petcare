import Main from "../../templates/Main";
import Typography from "../../components/Typography";
import Select from "../../components/Select";
import Flex from "../../components/Flex";
import styles from "./index.module.css";
import TextInput from "../../components/TextInput";
import Radius from "../../components/Radius";
import { useState } from "react";
import Button from "../../components/Button";
import { addPets } from "../../firebase/petsCRUD";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const AddPets = ({}) => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [selectedValue, setSelectedValue] = useState("cat");
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [breed, setBreed] = useState();
  const [sex, setSex] = useState("Mascle");
  const [error, setError] = useState({ name: "", age: "", breed: "" });

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  const handleSubmit = () => {
    addPets({ name, age, breed, sex, species: selectedValue })
      .then(() => {
        navigate("/pets");
      })
      .catch((error) => {
        if (error.message.includes("Unsupported field value: undefined")) {
          setError({
            name: name === undefined ? "Omple aquest camp" : "",
            age: age === undefined ? "Omple aquest camp" : "",
            breed: breed === undefined ? "Omple aquest camp" : "",
          });
        }
      });
  };

  return (
    <Main>
      <Flex direction={"column"} className={styles.addPetsContainer} gap={40}>
        <Typography fontFamily={"PT Serif"} size={isMobile ? 32 : 48} bold>
          Afegir Mascota
        </Typography>
        <Flex direction={"column"} gap={isMobile ? 40 : 70}>
          <Flex
            gap={isMobile ? 40 : 80}
            direction={isMobile ? "column" : "row"}
          >
            <TextInput
              label={"Nom"}
              placeholder={"Introdueix el nom de la teva mascota"}
              id={"nom"}
              position="horizontal"
              onChange={(e) => setName(e.target.value)}
              required
              error={error.name}
            />
            <TextInput
              label={"Edat"}
              id={"edat"}
              position="horizontal"
              onChange={(e) => setAge(e.target.value)}
              type={"number"}
              required
              error={error.age}
            />
          </Flex>
          <Flex
            gap={isMobile ? 40 : 80}
            direction={isMobile ? "column" : "row"}
          >
            <TextInput
              label={"Raça"}
              placeholder={"Introdueix la raça de la teva mascota"}
              id={"raça"}
              position="horizontal"
              onChange={(e) => setBreed(e.target.value)}
              required
              error={error.breed}
            />
            <Select
              options={["Mascle", "Femella"]}
              label={"Gènere"}
              onChange={(e) => setSex(e.target.value)}
            />
          </Flex>
          <Flex gap={30} direction={isMobile ? "column" : "row"}>
            <Typography fontFamily={"Lora"} size={isMobile ? 24 : 32} bold>
              Espècie
            </Typography>
            <Flex gap={30} className={styles.speciesContainer}>
              <Radius
                id={"cat"}
                name={"species"}
                onChange={handleChange}
                checked={selectedValue === "cat"}
                value={"cat"}
                imageName={"cat"}
              />
              <Radius
                id={"dog"}
                name={"species"}
                onChange={handleChange}
                checked={selectedValue === "dog"}
                value={"dog"}
                imageName={"dog"}
              />
              <Radius
                id={"bunny"}
                name={"species"}
                onChange={handleChange}
                checked={selectedValue === "bunny"}
                value={"bunny"}
                imageName={"bunny"}
              />
              <Radius
                id={"rat"}
                name={"species"}
                onChange={handleChange}
                checked={selectedValue === "rat"}
                value={"rat"}
                imageName={"rat"}
              />
            </Flex>
          </Flex>
          <Button variant={"main"} onClick={handleSubmit}>
            AFEGIR MASCOTA
          </Button>
        </Flex>
      </Flex>
    </Main>
  );
};

export default AddPets;
