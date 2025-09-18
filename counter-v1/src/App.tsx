import styles from "./app.module.css";
import { Counter } from "./counter/Counter";
import { CounterSetting } from "./counter-setting/CounterSetting";
import { useAppSelector } from "./common/hooks/useAppSelector";

function App() {

  const showCounter = useAppSelector((state) => state.app.showCounter);

  return (
    <div className={styles.app}>
      {showCounter ? <Counter /> : <CounterSetting />}
    </div>
  );
}

export default App;
