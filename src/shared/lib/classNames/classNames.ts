export type Mode = Record<string, string | boolean | undefined>;

// eslint-disable-next-line max-len
export const classNames = (
  className: string,
  modes: Mode = {},
  additional: Array<string | undefined> = [],
): string =>
  [
    className,
    ...additional,
    ...Object.entries(modes)
      .filter(([className, value]) => !!value)
      .map(([className]) => className),
  ].join(' ');
