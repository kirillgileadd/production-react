import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './MainPage.module.scss';

const MainPage = () => {
  const { t } = useTranslation('main');

  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className={cls.mainPage}>
      {t('Главная страница')}
      <Input value={value} onChange={onChange} />
    </div>
  );
};

export default MainPage;
