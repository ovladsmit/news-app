import styles from './LangSwitcher.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '../Button/Button';
import clsx from 'clsx';
interface LangSwitcherProps {
  /*Доп классы*/
  className?: string;
  
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
  const {t, i18n} = useTranslation()
    const toogle = async () => {
      i18n.changeLanguage(i18n.language === 'ru'? 'en': 'ru')
    }
    return(
      
        <Button className={clsx(className)} theme={ThemeButton.CLEAR} onClick={toogle}>
          {t('Язык')}
        </Button>
     
    )
};