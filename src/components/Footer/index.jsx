import styles from "./index.module.css";
import Flex from "../Flex";
import Typography from "../Typography";
import ImageDisplay from "../ImageDisplay";
import SocialMedia from "../SocialMedia";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Footer = ({}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Flex
      className={styles.footerContainer}
      justifyContent={"space-around"}
      alignItems={"center"}
      direction={isMobile ? "column" : "row"}
      gap={40}
    >
      <Flex>
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
      </Flex>
      <Flex direction={"row"} gap={30} alignItems={"center"}>
        <Flex direction={isMobile ? "row" : "column"} gap={35}>
          <Flex direction={"column"} gap={15}>
            <Typography
              fontFamily={"PT Serif"}
              size={isMobile ? 18 : 24}
              color={"white"}
              bold
            >
              Contacta'ns
            </Typography>
            <Typography
              fontFamily={"Lora"}
              size={isMobile ? 14 : 16}
              color={"white"}
            >
              petcare@gmail.com
            </Typography>
            <Typography
              fontFamily={"Lora"}
              size={isMobile ? 14 : 16}
              color={"white"}
            >
              Tlf. 93 123 45 67
            </Typography>
          </Flex>
          <Flex direction={"column"} gap={15} className={styles.textAddress}>
            <Typography
              fontFamily={"Lora"}
              size={isMobile ? 14 : 16}
              color={"white"}
            >
              C/ Adreça, 123
            </Typography>
            <Typography
              fontFamily={"Lora"}
              size={isMobile ? 14 : 16}
              color={"white"}
            >
              Barcelona
            </Typography>
          </Flex>
        </Flex>
        <Flex>
          <ImageDisplay imageName={"contact"} type={"contact"} />
        </Flex>
      </Flex>
      <Flex
        direction={isMobile ? "row" : "column"}
        gap={isMobile ? 0 : 30}
        className={styles.socialsIcons}
      >
        {isMobile ? null : (
          <Typography
            fontFamily={"PT Serif"}
            size={isMobile ? 18 : 24}
            color={"white"}
            bold
          >
            Xarxes Socials
          </Typography>
        )}
        <Flex gap={isMobile ? 0 : 40}>
          <SocialMedia imageName={"instagram"} socialMediaName={"Instagram"} />
          <SocialMedia imageName={"facebook"} socialMediaName={"Facebook"} />
        </Flex>
        <Flex gap={isMobile ? 0 : 40}>
          <SocialMedia imageName={"x"} socialMediaName={"X"} />
          <SocialMedia imageName={"tiktok"} socialMediaName={"Tiktok"} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
