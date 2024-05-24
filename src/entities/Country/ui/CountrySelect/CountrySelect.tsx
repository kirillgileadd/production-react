import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { CountryT } from '../../model/types/country';

const options = [
  { label: CountryT.Armenia, value: CountryT.Armenia },
  { label: CountryT.Belarus, value: CountryT.Belarus },
  { label: CountryT.Kazakhstan, value: CountryT.Kazakhstan },
  { label: CountryT.Russia, value: CountryT.Russia },
  { label: CountryT.Ukraine, value: CountryT.Ukraine },
];

interface CountrySelectProps {
  className?: string;
  value?: CountryT;
  onChange?: (value: CountryT) => void;
  fullWidth?: boolean;
  readonly?: boolean;
}

export const CountrySelect: FC<CountrySelectProps> = memo(
  ({ className, value, onChange, fullWidth, readonly }) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as CountryT);
      },
      [onChange],
    );

    return (
      <Select
        value={value}
        onChange={onChangeHandler}
        className={classNames('', {}, [className])}
        label={t('Укажите страну')}
        options={options}
        fullWidth={fullWidth}
        readonly={readonly}
      />
    );
  },
);
