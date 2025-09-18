import { useState } from "react";
import styles from "./app.module.css";
import { Counter } from "./Counter/Counter";
import { CounterSettings } from "./CounterSettings/CounterSettings";
import { MAX_VALUE_DEFAULT, MIN_VALUE_DEFAULT } from "./constans";

const App = () => {
  const [inputMaxValue, setInputMaxValue] = useState(() =>
    JSON.parse(localStorage.getItem("maxValue") || MAX_VALUE_DEFAULT)
  );

  const [inputMinValue, setInputMinValue] = useState(() =>
    JSON.parse(localStorage.getItem("minValue") || MIN_VALUE_DEFAULT)
  );

  const [increment, setIncrement] = useState(Number(inputMinValue));

  const handleSetValues = () => {
    localStorage.setItem("maxValue", JSON.stringify(inputMaxValue));
    localStorage.setItem("minValue", JSON.stringify(inputMinValue));
    setIncrement(inputMinValue);
  };

  return (
    <div className={styles.container}>
      <CounterSettings
        handleSetValues={handleSetValues}
        setInputMaxValue={setInputMaxValue}
        inputMaxValue={inputMaxValue}
        setInputMinValue={setInputMinValue}
        inputMinValue={inputMinValue}
      />
      <Counter
        inputMaxValue={inputMaxValue}
        inputMinValue={inputMinValue}
        setIncrement={setIncrement}
        increment={increment}
      />
    </div>
  );
};

export default App;
