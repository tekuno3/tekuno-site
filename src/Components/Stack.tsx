import { Children, ComponentPropsWithoutRef, Fragment, ReactNode } from "react";

export interface StackProps extends ComponentPropsWithoutRef<'div'> {
    children?: ReactNode,
    direction?: 'horizontal' | 'vertical',
    divider?: ReactNode
    spacing?: number | string,
}

export function Stack({
    children,
    direction = 'vertical',
    divider,
    spacing,
    ...rest
}: StackProps) {
    const flexDirection = ({
        horizontal: 'row',
        vertical: 'column',
    } as const)[direction];

    const gapDirection = ({
        horizontal: 'column',
        vertical: 'row',
    } as const)[direction];

    return (
        <div
            css={{
                display: 'flex',
                flexDirection: flexDirection,
                [`${gapDirection}Gap`]: spacing,
            }}
            {...rest}
        >
            {Children.map(children, (child, index) => (
                <Fragment key={index}>
                    {child}
                    {divider}
                </Fragment>
            ))}
        </div>
    );
}
