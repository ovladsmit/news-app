import clsx from 'clsx';
import styles from './Input.module.scss';
import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
  /*Доп классы*/
  className?: string;
  /*Значение инпута*/
  value?: string
  /*функция изменения*/
  onChange?: (value: string) => void
  /*автофокус*/
  autofocus?: boolean
}

export const Input = memo(({ className, autofocus, value, onChange, type = 'text', placeholder, ...otherProps }: InputProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0)
  useEffect(() => {
    if (autofocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autofocus])
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  const onBlur = () => {
    setIsFocused(false)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onSelect = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setCaretPosition(target?.selectionStart || 0)
  }
  return (
    <div className={clsx(className, styles.inputWrapper)}>
      {placeholder && <div className={styles.placeholder}>
        {`${placeholder}>`}
      </div>}
      <div className={styles.caretWrapper}>
        <input ref={ref} onSelect={onSelect} onFocus={onFocus} onBlur={onBlur} className={styles.input} type={type} value={value} onChange={onChangeHandler} {...otherProps} />
        {isFocused && <span style={{ left: `${caretPosition * 9}px` }} className={styles.caret}></span>}
      </div>
    </div>
  );
});

Input.displayName = 'Input'