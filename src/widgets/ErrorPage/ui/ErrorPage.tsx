import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import styles from "./ErrorPage.module.scss"
interface ErrorPageProps {
  /*Доп классы*/
  className?: string;
  
}

export const ErrorPage = (props: ErrorPageProps) => {
  const {className} = props
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }
  return (
    <div className={clsx(className, styles.errorPage )}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>
        {t("Обновить страницу")}
      </Button>
    </div>
  );
};