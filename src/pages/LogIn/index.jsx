import Main from "../../templates/Main";
import TextInput from "../../components/TextInput";
import Flex from "../../components/Flex";
import styles from "./index.module.css";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { signIn } from "../../firebase/auth";
import { useState } from "react";

const LogIn = ({}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async () => {
    if (!isSigningIn) {
      setIsSigningIn(true);
      await signIn(email, password);
      navigate("/pets");
    }
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
            Iniciar sessió
          </Typography>
          <TextInput
            label={"Email:"}
            placeholder={"Introdueix el teu email"}
            id={"email"}
            onChange={handleOnChangeEmail}
          />
          <TextInput
            label={"Contrassenya:"}
            placeholder={"Introdueix la teva contrassenya"}
            id={"password"}
            type={"password"}
            onChange={handleOnChangePassword}
          />
          <Button variant={"main"} onClick={handleSubmit}>
            ENTRAR
          </Button>
        </Flex>
      </Flex>
    </Main>
  );
};

export default LogIn;
