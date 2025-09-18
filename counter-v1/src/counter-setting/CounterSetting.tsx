import { useAppDispatch } from "../common/hooks/useAppDispatch";
import { useAppSelector } from "../common/hooks/useAppSelector";
import {
  setCounterDisplay,
  setMaxValueAC,
  setMinValueAC,
  setShowCounterAC,
} from "../model/counter-reducer";
import styles from "./counterSetting.module.css";

// type CounterSettingType = {
//   setFlag: (flag: boolean) => void;
// };

export const CounterSetting = () => {
  // const { setFlag } = props;

  const dispatch = useAppDispatch();

  const minCounterValue = useAppSelector((state) => state.app.minCounterValue);
  const maxCounterValue = useAppSelector((state) => state.app.maxCounterValue);

  const handleSetClick = () => {
    dispatch(setShowCounterAC({ showCounter: true }));

    dispatch(setCounterDisplay({ cunterDisplay: minCounterValue }));
    localStorage.setItem("maxCounterValue", JSON.stringify(maxCounterValue));
    localStorage.setItem("minCounterValue", JSON.stringify(minCounterValue));
  };

  const isMaxInvalid = maxCounterValue >= 10 || maxCounterValue <= -1;
  const isMinInvalid = minCounterValue >= 10 || minCounterValue <= -1;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    test: "min" | "max"
  ) => {
    const value = +e.currentTarget.value;

    const checkValue = value <= 10 && value >= -1;

    if (test === "max" && checkValue && value > minCounterValue) {
      dispatch(setMaxValueAC({ maxCounterValue: value }));
    }

    if (test === "min" && checkValue && value < maxCounterValue) {
      dispatch(setMinValueAC({ minCounterValue: value }));
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.value}>
          <label>
            Max value:
            <input
              className={isMaxInvalid ? styles.red : styles.input}
              type="number"
              value={maxCounterValue}
              onChange={(e) => {
                handleInputChange(e, "max");
              }}
            />
          </label>
        </div>

        <div className={styles.value}>
          <label>
            Min value:
            <input
              className={isMinInvalid ? styles.red : styles.input}
              type="number"
              value={minCounterValue}
              onChange={(e) => {
                handleInputChange(e, "min");
              }}
            />
          </label>
        </div>
      </div>
      <button
        className={styles.btn}
        onClick={handleSetClick}
        disabled={isMaxInvalid || isMinInvalid}
      >
        set
      </button>
    </div>
  );
};
