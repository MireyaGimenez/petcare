import Main from "../../templates/Main";
import TextInput from "../../components/TextInput";
import Flex from "../../components/Flex";
import styles from "./index.module.css";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { createUser, signIn } from "../../firebase/auth";
import { useState } from "react";

const Register = ({}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState({ email: "", password: "" });

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async () => {
    await createUser(email, password)
      .then(() => navigate("/pets"))
      .catch((error) => {
        if (error.message.includes("email")) {
          setError({ email: error.message, password: "" });
        }
        if (error.message.includes("password")) {
          setError({ email: "", password: error.message });
        }
      });
  };

  return (
    <Main>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        className={styles.logInContainer}
      >
        <Flex className={styles.logInBox} direction={"column"} gap={25}>
          <Typography
            fontFamily={"PT Serif"}
            size={isMobile ? 32 : 48}
            bold
            className={styles.logInTitle}
          >
            Registra't
          </Typography>
          <TextInput
            label={"Email:"}
            placeholder={"Introdueix el teu email"}
            id={"email"}
            onChange={handleOnChangeEmail}
            error={error.email}
          />
          <TextInput
            label={"Contrassenya:"}
            placeholder={"Introdueix un mínim de 6 caràcters"}
            id={"password"}
            type={"password"}
            onChange={handleOnChangePassword}
            error={error.password}
          />
          <Button variant={"main"} onClick={handleSubmit}>
            REGISTRAR
          </Button>
        </Flex>
      </Flex>
    </Main>
  );
};

export default Register;
