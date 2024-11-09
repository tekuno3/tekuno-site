import { Children, ReactNode } from "react";

export interface DetailProps {
    title: ReactNode,
    children: ReactNode,
}

export function Detail({
    title,
    children,
}: DetailProps) {
    return (
        <>
            <dt css={{ marginBottom: '4px', }}>
                {title}
            </dt>
            {Children.map(children, (child, i) => (
                <dd css={{ paddingLeft: '1rem', }} key={i}>
                    {child}
                </dd>
            ))}
        </>
    );
}
