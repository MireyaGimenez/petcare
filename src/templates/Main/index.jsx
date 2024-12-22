import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageDisplay from "../../components/ImageDisplay";
import Flex from "../../components/Flex";
import styles from "./index.module.css";
import { clsx } from "clsx";

const Main = ({ children, hasImage, className }) => {
  return (
    <Flex className={styles.mainContainer} direction={"column"}>
      <Flex className={styles.banner}>
        {hasImage ? (
          <ImageDisplay imageName={"banner"} type={"banner"} />
        ) : null}
      </Flex>
      <Flex direction={"column"} className={clsx(styles.mainBox, className)}>
        <Header />
        {children}
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Main;
