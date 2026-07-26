import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss'
import clsx from 'clsx';
export enum ThemeButton {
  CLEAR = 'clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  /*Доп классы*/
  className?: string;
  /** Тема кнопки */
  theme?: ThemeButton;
  
}

export const Button = ({className, children, theme = ThemeButton.CLEAR, ...otherProps}: ButtonProps) => {
  return (
    <button className={clsx(className, styles.button, styles[theme])} {...otherProps}>
      {children}
    </button>
  );
};