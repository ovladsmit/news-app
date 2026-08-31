import { Modal } from 'shared/ui/Modal/Modal';
import styles from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';
interface LoginModalProps {
  /*Доп классы*/
  className?: string;
  /*Состояние открытия*/
  isOpen: boolean
  /*Функция закрытия*/
  onClose: () => void
  
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal lazy className={className} isOpen={isOpen} onClose={onClose}>
      <LoginForm/>
    </Modal>
  );
};