import styles from "./index.module.css";

export default function DateSelect({ value, onChange }) {
  return (
    <input
      type="date"
      value={value}
      onChange={onChange}
      className={styles.dateSelect}
    />
  );
}
