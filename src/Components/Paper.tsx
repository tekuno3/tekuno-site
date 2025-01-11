import { ComponentProps, ElementType, PropsWithChildren } from "react";

export type PaperProps<T extends ElementType = 'div'> = {
    as?: ElementType<T>,
} & ComponentProps<T>

export function Paper<T extends ElementType = 'div'>({
    as = 'div',
    children,
    ...rest
}: PropsWithChildren<PaperProps<T>>) {
    const Element = as; // FIX-ME: any

    return (
        <Element
            css={t => ({
                backgroundColor: t.colors.fg,
                borderImage: 'url(/images/border_transparent.png)',
                borderImageOutset: '6px',
                borderImageRepeat: 'repeat',
                borderImageSlice: 10,
                borderImageWidth: '11px',
                boxSizing: 'border-box',
                padding: 12,
            })}
            {...rest}
        >
            {children}
        </Element>
    );
}
