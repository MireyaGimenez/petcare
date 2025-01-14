import Flex from "../Flex";
import Typography from "../Typography";
import Button from "../Button";
import styles from "./index.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { signOut } from "../../firebase/auth";
import { useMediaQuery } from "react-responsive";
import ImageDisplay from "../ImageDisplay";

const Header = ({}) => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleLogOut = () => {
    navigate("/");
    signOut();
  };

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-around"}
      className={styles.navContainer}
    >
      {userLoggedIn ? (
        <Button
          variant={"nav"}
          onClick={() => navigate("/pets")}
          className={styles.petsButton}
        >
          {isMobile ? (
            <ImageDisplay imageName={"pets"} type={"socialMedia"} />
          ) : (
            "Mascotes"
          )}
        </Button>
      ) : (
        <Button
          variant={"nav"}
          onClick={() => navigate("/register")}
          className={styles.registerButton}
        >
          {isMobile ? (
            <ImageDisplay imageName={"register"} type={"socialMedia"} />
          ) : (
            "Registrar-se"
          )}
        </Button>
      )}
      <Link to="/">
        <Typography
          fontFamily={"Praise"}
          size={isMobile ? 55 : 96}
          color={"white"}
          className={styles.logo}
        >
          PetCare
        </Typography>
      </Link>
      {userLoggedIn ? (
        <Button
          variant={"nav"}
          onClick={handleLogOut}
          className={styles.logOutButton}
        >
          {isMobile ? (
            <ImageDisplay imageName={"logOut"} type={"socialMedia"} />
          ) : (
            "Tancar sessió"
          )}
        </Button>
      ) : (
        <Button
          variant={"nav"}
          onClick={() => navigate("/logIn")}
          className={styles.logInButton}
        >
          {isMobile ? (
            <ImageDisplay imageName={"logIn"} type={"socialMedia"} />
          ) : (
            "Iniciar sessió"
          )}
        </Button>
      )}
    </Flex>
  );
};

export default Header;
