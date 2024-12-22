import styles from "./index.module.css";
import { clsx } from "clsx";
import Flex from "../Flex";

const Select = ({ options, label, id, onChange, value }) => {
  return (
    <Flex gap={15} className={styles.selectContainer}>
      <label for={id} className={styles.label}>
        {label}
      </label>
      <select
        onChange={onChange}
        className={clsx(styles.selectBox, styles.arrow)}
        value={value}
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </Flex>
  );
};

export default Select;
