type Mode = Record<string, string | boolean>

// eslint-disable-next-line max-len
export const classNames = (className: string, modes: Mode = {}, aditional: string[] = []): string => [
    className,
    ...aditional,
    ...Object.entries(modes).filter(([className, value]) => !!value)
        .map(([className]) => className),
]
    .join(' ');
