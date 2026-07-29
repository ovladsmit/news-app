import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  /* Доп классы */
  className?: string;
  /** Тема кнопки */
  theme?: ThemeButton;

}

export function Button({
  className, children, theme = ThemeButton.CLEAR, ...otherProps
}: ButtonProps) {
  return (
    <button type="button" className={clsx(className, styles.button, styles[theme])} {...otherProps}>
      {children}
    </button>
  );
}
