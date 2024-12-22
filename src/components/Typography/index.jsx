import styles from "./index.module.css";
import { clsx } from "clsx";

const Typography = ({ children, fontFamily, size, bold, color, className }) => {
  return (
    <div
      className={clsx(className, {
        [styles.fontFamilyPTSerif]: fontFamily === "PT Serif",
        [styles.fontFamilyLora]: fontFamily === "Lora",
        [styles.fontFamilyPraise]: fontFamily === "Praise",
        [styles.fontSize14]: size === 14,
        [styles.fontSize16]: size === 16,
        [styles.fontSize18]: size === 18,
        [styles.fontSize20]: size === 20,
        [styles.fontSize24]: size === 24,
        [styles.fontSize28]: size === 28,
        [styles.fontSize32]: size === 32,
        [styles.fontSize42]: size === 42,
        [styles.fontSize48]: size === 48,
        [styles.fontSize55]: size === 55,
        [styles.fontSize96]: size === 96,
        [styles.fontBold]: bold,
        [styles.colorWhite]: color === "white",
        [styles.colorBlue]: color === "blue",
        [styles.colorBlack]: color === "black",
      })}
      as="span"
    >
      {children}
    </div>
  );
};

export default Typography;
