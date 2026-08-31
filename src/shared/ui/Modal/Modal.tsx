import clsx from 'clsx';
import styles from './Modal.module.scss';
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
interface ModalProps {
  /*Доп классы*/
  className?: string;
  /**Содержимое модального окна*/
  children?: ReactNode;
  /**Состояние окна */
  isOpen?: boolean
  /**Функция закрытия*/
  onClose?: () => void;
  /**Ленивая подгрузка*/
  lazy?: boolean;
}



export const Modal = ({ className, lazy, children, isOpen, onClose }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const {theme} = useTheme()
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => {
    if(isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])
  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, 300)
    }
  }, [onClose])
  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen, onKeyDown])

  if(lazy && !isMounted) {
    return null
  }
  return (
    <Portal>
      <div className={clsx(className, styles.modal, theme, "app_modal", { [styles.opened]: isOpen }, { [styles.isClosing]: isClosing })}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={clsx(styles.content)} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>

  );
};