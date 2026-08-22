import clsx from 'clsx';
import styles from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';

interface NavbarProps {
  /** Доп классы */
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const onToogleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  },[])
  return (
    <div className={clsx(styles.navbar, className)}>
      <Button onClick={onToogleModal}theme={ThemeButton.CLEAR_INVERTED} className={clsx(styles.links)}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToogleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, corrupti? Quas libero accusamus vitae amet laboriosam quasi consequuntur voluptate sint magnam quisquam dolor expedita cupiditate, nisi rerum fuga, dolore ut.
      </Modal>
    </div>
  );
}
