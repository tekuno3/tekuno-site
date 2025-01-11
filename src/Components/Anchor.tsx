import { ComponentPropsWithoutRef } from "react";

export interface AnchorProps extends ComponentPropsWithoutRef<'a'> {

}

export function Anchor(props: AnchorProps) {
    return (
        <a
            css={{
                
            }}
            {...props}
        />
    );
}
