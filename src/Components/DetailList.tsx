import { ComponentPropsWithRef } from "react";

export interface DetailListProps extends ComponentPropsWithRef<'dl'> {
}

export function DetailList({
    ...rest
}: DetailListProps) {
    return (
        <dl {...rest} />
    );
}
