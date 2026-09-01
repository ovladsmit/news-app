import clsx from 'clsx';
import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  /*Доп классы*/
  className?: string;
  /*Заголовок*/
  title?: string
  /*Текст */
  text?: string
  /*Тема*/
  theme?: TextTheme

}

export const Text = ({ className, title, text, theme = TextTheme.PRIMARY }: TextProps) => {
  return (
    <div className={clsx(className, styles[theme])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};