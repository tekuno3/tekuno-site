import { Outlet } from "react-router-dom";

export function AppLayout() {
    return (
        <div css={{
            height: '100vh',
            width: '100vw',
        }}>
            <div css={t => ({
                backgroundColor: t.colors.bg,
                marginLeft: 'auto',
                marginRight: 'auto',
            })}>
                <Outlet />
            </div>
        </div>
    );
}
