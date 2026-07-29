import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { Button, ThemeButton } from '../Button/Button';

interface LangSwitcherProps {
  /* Доп классы */
  className?: string;

}

export function LangSwitcher({ className }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();
  const toogle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (

    <Button className={clsx(className)} theme={ThemeButton.CLEAR} onClick={toogle}>
      {t('Язык')}
    </Button>

  );
}
