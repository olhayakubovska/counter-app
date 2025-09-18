import { CounterDisplay } from "../CounterDisplay/CounterDisplay";
import { Button } from "../Button/Button";

import styles from "./counter.module.css";

type CounterType = {
  increment: number;
  setIncrement: (increment: number) => void;
  inputMinValue: number;
  inputMaxValue: number;
};

export const Counter = ({
  increment,
  setIncrement,
  inputMinValue,
  inputMaxValue,
}: CounterType) => {
  const STEP = 1;

  const incHandler = () => {
    if (increment < inputMaxValue) {
      setIncrement(increment + STEP);
    }
  };

  const resetHandler = () => {
    setIncrement(inputMinValue);
  };

  const isIncDisabled = increment === inputMaxValue;
  const isResetDisabled =  increment === inputMinValue ;

  return (
    <div className={styles.container}>
      <CounterDisplay
        increment={increment}
        maxValue={inputMaxValue}
        minValue={inputMinValue}
      />

      <div className={styles.wrap}>
        <Button onClick={incHandler} title="inc" disabled={isIncDisabled} />
        <Button
          onClick={resetHandler}
          title="reset"
          disabled={isResetDisabled}
        />
      </div>
    </div>
  );
};
