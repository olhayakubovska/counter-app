// import styles from "./counterDisplay.module.css";

// type CounterDisplayProps = {
//   increment: number;
//   maxValue: number;
//   minValue: number;
// };

// export const CounterDisplay = ({
//   increment,
//   maxValue,
//   minValue,
// }: CounterDisplayProps) => {
//   const erro2 =
//     minValue === -1 ? "минимальное число должно быть > -1" : increment;
//   const erro11 =
//     minValue >= 10 ? "минимальное число должно быть < 10 " : increment;

//   const error =
//     maxValue === 0 ? "максимальное число должно быть > 0" : increment;

//   const error10 =
//     maxValue === 10 ? "максимальное число должно быть < 10" : increment;

//   return (
//     <div
//       className={
//         error || erro2 || error10 || erro11
//           ? `${styles.container} ${styles.text}`
//           : styles.container
//       }
//     >
//       {error || erro2 || error10 || erro11 || increment}
//     </div>
//   );
// };

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
