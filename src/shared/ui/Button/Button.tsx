import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize{
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXl'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  /* Доп классы */
  className?: string;
  /** Тема кнопки */
  theme?: ThemeButton;
  /**Режим квадратной кнопки*/
  square?: boolean;
  /**Размер кнопки*/
  size?: ButtonSize;

}

export function Button({
  className, children, theme = ThemeButton.CLEAR, square = false,size = ButtonSize.M , ...otherProps
}: ButtonProps) {
  return (
    <button type="button" className={clsx(className, styles.button, styles[theme], {[styles.square]: square}, styles[size])} {...otherProps}>
      {children}
    </button>
  );
}
