type Mode = Record<string, string | boolean>

export const classNames = (className: string, modes: Mode = {}, aditional: string[] = []): string => {
    return [
        className,
        ...aditional,
        ...Object.entries(modes).filter(([className, value]) => !!value)
            .map(([className]) => className)


    ]
        .join(' ')
}