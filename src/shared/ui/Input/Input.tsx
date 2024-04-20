import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  fullWidth?: boolean;
  autoFocus?: boolean;
}

export const Input: FC<InputProps> = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    fullWidth,
    autoFocus,
    ...otherProps
  }) => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (autoFocus) {
        ref.current.focus();
      }
    }, [autoFocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const mods = {
      [cls.fullWidth]: fullWidth,
    };

    return (
      <div className={classNames(cls.inputWrapper, mods, [className])}>
        <input
          ref={ref}
          className={cls.input}
          {...otherProps}
          type={type}
          value={value}
          onChange={onChangeHandler}
        />
      </div>
    );
  },
);
