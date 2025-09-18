import styles from "./counter.module.css";
import { useAppDispatch } from "../common/hooks/useAppDispatch";
import {
  resetCounterAC,
  setCounterDisplay,
  setShowCounterAC,
} from "../model/counter-reducer";
import { useAppSelector } from "../common/hooks/useAppSelector";


export const Counter = () => {
  const cunterDisplay = useAppSelector((state) => state.app.cunterDisplay);
  const minCounterValue = useAppSelector((state) => state.app.minCounterValue);
  const maxCounterValue = useAppSelector((state) => state.app.maxCounterValue);

  const dispatch = useAppDispatch();

  const increment = () => {
    if (maxCounterValue > cunterDisplay) {
      dispatch(setCounterDisplay({ cunterDisplay: cunterDisplay + 1 }));
      localStorage.setItem("cunterDisplay", JSON.stringify(cunterDisplay + 1));
    }
  };

  const reset = () => {
    dispatch(resetCounterAC({ minCounterValue }));
  };

  return (
    <div className={styles.container}>
      <div
        className={
          cunterDisplay < maxCounterValue
            ? styles.display
            : `${styles.display} ${styles.red}`
        }
      >
        {cunterDisplay}
      </div>
      <div className={styles.wrap}>
        <button
          className={styles.btn}
          onClick={increment}
          disabled={maxCounterValue === cunterDisplay}
        >
          inc
        </button>
        <button
          className={styles.btn}
          onClick={reset}
          disabled={minCounterValue === cunterDisplay}
        >
          reset
        </button>
        <button
          className={styles.btn}
          onClick={() => dispatch(setShowCounterAC({ showCounter: false }))}
        >
          set
        </button>
      </div>
    </div>
  );
};
