import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input'
import clsx from 'clsx';
interface LoginFormProps {
  /*Доп классы*/
  className?: string;

}

export const LoginForm = ({className }: LoginFormProps) => {
  const { t } = useTranslation()
  return (
    <div className={clsx(className, styles.loginForm)}>
      <Input autoFocus placeholder={t('Введите username')} className={styles.input} type="text" />
      <Input placeholder={t('Введите пароль')} className={styles.input} type="text" />
      <Button className={styles.loginBtn}>
        {t("Войти")}
      </Button>
    </div>
  );
};