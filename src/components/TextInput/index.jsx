import styles from "./index.module.css";
import Flex from "../Flex";
import { useState } from "react";
import Typography from "../Typography";

const TextInput = ({
  label,
  placeholder,
  id,
  type,
  value,
  onChange,
  position = "vertical",
  error,
  required,
}) => {
  return (
    <Flex
      direction={position === "vertical" ? "column" : "row"}
      gap={15}
      className={styles.formContainer}
    >
      <label for={id} className={styles.label}>
        {label}
        {required ? "*" : null}
      </label>
      <Flex direction={"column"} className={styles.inputContainer} gap={8}>
        <input
          id={id}
          placeholder={placeholder}
          className={styles.input}
          value={value}
          type={type}
          onChange={onChange}
          required={required}
        />
        {error ? <Typography color={"red"}>{error}</Typography> : null}
      </Flex>
    </Flex>
  );
};

export default TextInput;
