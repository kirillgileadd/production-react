import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  label?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text: FC<TextProps> = memo(
  ({
    className,
    text,
    title,
    label,
    align = TextAlign.LEFT,
    theme = TextTheme.PRIMARY,
  }) => {
    const mods = {
      [cls[theme]]: true,
      [cls[align]]: true,
    };

    return (
      <div className={classNames(cls.text, mods, [className])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
        {label && <p className={cls.label}>{label}</p>}
      </div>
    );
  },
);
