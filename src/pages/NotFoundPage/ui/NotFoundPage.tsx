import { useTranslation } from "react-i18next";
import styles from './NotFoundPage.module.scss'
interface NotFoundPageProps {
  /*Доп классы*/
  className?: string;
  
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
  const {t} = useTranslation()
  return (
    <div className={styles.notFoundPage}>
      {t('Страница не найдена')}
    </div>
  );
};