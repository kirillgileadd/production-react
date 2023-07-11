import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = () => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [])}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <div className={cls.logo}>Gilead Production React</div>
      <Button className={cls.links} theme="outline" onClick={onToggleModal}>
        {t('Войти')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa
        cumque deserunt doloremque eligendi, error minus nam necessitatibus
        nobis placeat quisquam quod sunt voluptate? Dicta dolorem earum hic
        molestias nemo!
      </Modal>
    </div>
  );
};
