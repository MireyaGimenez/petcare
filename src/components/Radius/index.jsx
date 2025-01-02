import styles from "./index.module.css";
import { clsx } from "clsx";
import Flex from "../Flex";
import { useEffect, useState } from "react";
import ImageDisplay from "../ImageDisplay";
import Typography from "../Typography";

const Radius = ({ id, name, value, onChange, checked, label, imageName }) => {
  const [radiusChecked, setChecked] = useState(checked);

  const handleClick = () => {
    onChange(value);
  };
  useEffect(() => {
    setChecked(checked);
  }, [checked]);
  return (
    <>
      <Flex direction={"column"} alignItems={"center"} gap={10}>
        <div
          className={clsx(styles.radiusImage, {
            [styles.radiusChecked]: checked,
          })}
          onClick={handleClick}
        >
          <ImageDisplay imageName={imageName} type={"species"} />
        </div>
        {label ? (
          <label htmlFor={name}>
            <Typography fontFamily={"Lora"}>{label}</Typography>
          </label>
        ) : null}
      </Flex>

      <input
        id={id}
        name={name}
        className={styles.input}
        value={value}
        type="radio"
        onChange={onChange}
        checked={radiusChecked}
      />
    </>
  );
};

export default Radius;
