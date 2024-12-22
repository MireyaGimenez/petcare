import styles from "./index.module.css";
import Flex from "../Flex";
import { useState } from "react";

const TextInput = ({
  label,
  placeholder,
  id,
  type,
  value,
  onChange,
  position = "vertical",
}) => {
  return (
    <Flex
      direction={position === "vertical" ? "column" : "row"}
      gap={15}
      className={styles.formContainer}
    >
      <label for={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        className={styles.input}
        value={value}
        type={type}
        onChange={onChange}
      />
    </Flex>
  );
};

export default TextInput;
