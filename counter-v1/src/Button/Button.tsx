import styles from "./button.module.css";

type ButtonType = {
  title: string;
  onClick: () => void;
  disabled: boolean;
  className?: string;
};

export const Button = ({ title, onClick, disabled, className }: ButtonType) => {
  return (
    <button
      className={className || styles.btn}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
