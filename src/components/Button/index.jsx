import styles from "./index.module.css";
import { clsx } from "clsx";
import Typography from "../Typography";
import Flex from "../Flex";
import { useMediaQuery } from "react-responsive";

const Button = ({
  children,
  variant,
  textSize,
  className,
  onClick,
  disabled,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Flex alignItems={"center"}>
      <button
        className={clsx(styles.button, className, {
          [styles.main]: variant === "main",
          [styles.main2]: variant === "main2",
          [styles.nav]: variant === "nav",
          [styles.disabled]: variant === "disabled",
        })}
        onClick={onClick}
        disabled={disabled}
      >
        <Typography
          fontFamily={"PT Serif"}
          size={
            isMobile
              ? textSize === "card"
                ? 16
                : 20
              : textSize === "card"
              ? 24
              : 28
          }
          bold
        >
          {children}
        </Typography>
      </button>
    </Flex>
  );
};

export default Button;
