import { Button } from "../Button/Button";
import { MAX_ALLOWED_VALUE, MIN_ALLOWED_VALUE } from "../constans";

import styles from "./counterSettings.module.css";

type CounterSettingsType = {
  handleSetValues: () => void;

  setInputMaxValue: (inputMaxValue: number) => void;
  setInputMinValue: (inputMinValue: number) => void;

  inputMaxValue: number;
  inputMinValue: number;
};

export const CounterSettings = ({
  handleSetValues,

  setInputMaxValue,
  setInputMinValue,

  inputMaxValue,
  inputMinValue,
}: CounterSettingsType) => {
  const isDisabled =
    inputMinValue <= -1 ||
    inputMaxValue >= 10 ||
    inputMaxValue <= 0 ||
    inputMinValue >= 10;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.value}>
          <span>max value:</span>
          <input
            type="number"
            className={
              inputMaxValue >= MAX_ALLOWED_VALUE || inputMaxValue <= 0
                ? styles.red
                : styles.input
            }
            value={inputMaxValue}
            onChange={(event) => {
              const num = +event.currentTarget.value;
              if (MAX_ALLOWED_VALUE >= num && num >= 0) setInputMaxValue(num);
            }}
          />
        </div>

        <div className={styles.value}>
          <span>min value: </span>
          <input
            type="number"
            className={
              MIN_ALLOWED_VALUE >= inputMinValue || inputMinValue >= 10
                ? styles.red
                : styles.input
            }
            value={inputMinValue}
            onChange={(event) => {
              const num = +event.currentTarget.value;
              if (num >= MIN_ALLOWED_VALUE && inputMaxValue >= num)
                setInputMinValue(num);
            }}
          />
        </div>
      </div>
      <Button
        onClick={handleSetValues}
        title={"set"}
        disabled={isDisabled}
        className={styles.btn}
      ></Button>
    </div>
  );
};
