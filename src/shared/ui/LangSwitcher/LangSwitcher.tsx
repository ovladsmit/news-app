import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { Button, ThemeButton } from '../Button/Button';
interface LangSwitcherProps {
  /* Доп классы */
  className?: string;
  /**Свернутое состояние*/
  short?: boolean;

}

export function LangSwitcher({ className, short }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();
  const toogle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (

    <Button className={clsx(className)} theme={ThemeButton.CLEAR} onClick={toogle}>
      {t(short?'Короткий язык':'Язык')}
    </Button>

  );
}
