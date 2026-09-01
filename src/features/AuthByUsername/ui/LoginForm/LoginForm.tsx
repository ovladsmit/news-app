import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input'
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { Text, TextTheme } from 'shared/ui/Text/Text';
interface LoginFormProps {
  /*Доп классы*/
  className?: string;

}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch<AppDispatch>()
  const {username, password, error, isLoading} = useSelector(getLoginState)

  const onChangeUsername = useCallback((value:string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value:string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({username, password}))
  }, [dispatch, password, username])
  

  return (
    <div className={clsx(className, styles.loginForm)}>
      <Text title={t('Форма авторизации')}/>
      {error && <Text text={error} theme={TextTheme.ERROR}/>}
      <Input value={username} onChange={onChangeUsername} autoFocus placeholder={t('Введите username')} className={styles.input} type="text" />
      <Input value={password} onChange={onChangePassword} placeholder={t('Введите пароль')} className={styles.input} type="text" />
      <Button disabled={isLoading} onClick={onLoginClick} theme={ThemeButton.OUTLINE} className={styles.loginBtn}>
        {t("Войти")}
      </Button>
    </div>
  );
});