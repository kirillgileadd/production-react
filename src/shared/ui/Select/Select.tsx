import { ChangeEvent, FC, memo, useMemo } from 'react';
import { classNames, Mode } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  fullWidth?: boolean;
  readonly?: boolean;
}

export const Select: FC<SelectProps> = memo(
  ({ className, label, options, value, onChange, fullWidth, readonly }) => {
    const optionsList = useMemo(() => {
      return options?.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(e.target.value);
    };

    const mods: Mode = {
      [cls.fullWidth]: fullWidth,
      [cls.readonly]: readonly,
    };

    return (
      <div className={classNames(cls.select__wrapper, mods, [className])}>
        {label && <Text label={label} className={cls.select__label} />}
        <select
          disabled={readonly}
          value={value}
          onChange={onChangeHandler}
          className={cls.select}
        >
          {optionsList}
        </select>
      </div>
    );
  },
);
