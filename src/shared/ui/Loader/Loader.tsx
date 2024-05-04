import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
  size?: number;
}

export const Loader: FC<LoaderProps> = ({ className, size = 15 }) => {
  const loaderSize = size;

  return (
    <div
      className={classNames(cls.spinner, {}, [className])}
      style={{ width: loaderSize, height: loaderSize }}
    ></div>
  );
};
