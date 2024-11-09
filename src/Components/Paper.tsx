import { ComponentPropsWithoutRef } from "react";

export interface PaperProps extends ComponentPropsWithoutRef<'div'> {

}

export function Paper({
    children,
    ...rest
}: PaperProps) {
    return (
        <div
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
        </div>
    );
}
