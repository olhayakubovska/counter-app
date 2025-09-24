import styles from "./counterDisplay.module.css";

type CounterDisplayProps = {
  increment: number;
  maxValue: number;
  minValue: number;
};

export const CounterDisplay = ({
  increment,
  maxValue,
  minValue,
}: CounterDisplayProps) => {
  let errorMessage = "";

  if (minValue <= -1) {
    errorMessage = "Минимальное значение должно быть больше -1";
  } else if (maxValue <= 0) {
    errorMessage = "Максимальное значение должно быть больше 0";
  } else if (minValue >= maxValue) {
    errorMessage = "Минимальное значение должно быть меньше максимального";
  }

  const isError = errorMessage !== "";
  const isMaxReached = increment === maxValue;

  return (
    <div
      className={`${styles.container} ${
        isError ? styles.error : isMaxReached ? styles.red : styles.container
      }`}
    >
      {isError ? errorMessage : increment}
    </div>
  );
};
