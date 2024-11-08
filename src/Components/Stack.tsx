import { ComponentPropsWithoutRef } from "react";

export interface StackProps extends ComponentPropsWithoutRef<'div'> {
    direction?: 'horizontal' | 'vertical',
    spacing?: ''
}

export function Stack({
    ...rest,
}: StackProps) {
    return (
        <></>
    );
}
