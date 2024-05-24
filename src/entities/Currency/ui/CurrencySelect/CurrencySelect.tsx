import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { CurrencyT } from '../../model/types/currency';

const options = [
  { label: CurrencyT.EUR, value: CurrencyT.EUR },
  { label: CurrencyT.RUB, value: CurrencyT.RUB },
  { label: CurrencyT.USD, value: CurrencyT.USD },
];

interface CurrencySelectProps {
  className?: string;
  value?: CurrencyT;
  onChange?: (value: CurrencyT) => void;
  fullWidth?: boolean;
  readonly?: boolean;
}

export const CurrencySelect: FC<CurrencySelectProps> = memo(
  ({ className, value, onChange, fullWidth, readonly }) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as CurrencyT);
      },
      [onChange],
    );

    return (
      <Select
        value={value}
        onChange={onChangeHandler}
        className={classNames('', {}, [className])}
        label={t('Укажите валюту')}
        options={options}
        fullWidth={fullWidth}
        readonly={readonly}
      />
    );
  },
);
