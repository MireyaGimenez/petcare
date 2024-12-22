import styles from "./index.module.css";
import { clsx } from "clsx";

const Flex = ({
  as: Component = "div",
  children,
  direction,
  alignItems,
  alignContent,
  justifyContent,
  gap,
  className,
}) => {
  return (
    <Component
      className={clsx(styles.flex, className, {
        [styles.directionRow]: direction === "row",
        [styles.directionColumn]: direction === "column",
        [styles.alignStart]: alignItems === "flex-start",
        [styles.alignEnd]: alignItems === "flex-end",
        [styles.alignCenter]: alignItems === "center",
        [styles.alignContentStart]: alignContent === "flex-start",
        [styles.alignContentEnd]: alignContent === "flex-end",
        [styles.alignContentCenter]: alignContent === "center",
        [styles.alignContentBetween]: alignContent === "space-between",
        [styles.alignContentAround]: alignContent === "space-around",
        [styles.alignContentEvenly]: alignContent === "space-evenly",
        [styles.justifyContentStart]: justifyContent === "flex-start",
        [styles.justifyContentEnd]: justifyContent === "flex-end",
        [styles.justifyContentCenter]: justifyContent === "center",
        [styles.justifyContentBetween]: justifyContent === "space-between",
        [styles.justifyContentAround]: justifyContent === "space-around",
        [styles.justifyContentEvenly]: justifyContent === "space-evenly",
        [styles.justifyContentLeft]: justifyContent === "left",
        [styles.justifyContentRight]: justifyContent === "right",
      })}
      style={{ gap }}
    >
      {children}
    </Component>
  );
};

export default Flex;
