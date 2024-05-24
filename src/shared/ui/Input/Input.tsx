import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './Input.module.scss';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  fullWidth?: boolean;
  autoFocus?: boolean;
  label?: string;
  error?: string;
  readonly?: boolean;
}

export const Input: FC<InputProps> = memo(
  ({
    className,
    value,
    onChange,
    type = 'text',
    fullWidth,
    autoFocus,
    label,
    error,
    readonly,
    ...otherProps
  }) => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (autoFocus) {
        ref?.current?.focus();
      }
    }, [autoFocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const mods = {
      [cls.fullWidth]: fullWidth,
      [cls.readonly]: readonly,
    };

    return (
      <div className={classNames(cls.inputWrapper, mods, [className])}>
        {label && (
          <label className={cls.label} htmlFor="input">
            {label}
          </label>
        )}
        <input
          id="input"
          ref={ref}
          className={cls.input}
          {...otherProps}
          type={type}
          value={value}
          readOnly={readonly}
          onChange={onChangeHandler}
        />
        {error && <Text theme={TextTheme.ERROR} label={error} />}
      </div>
    );
  },
);
