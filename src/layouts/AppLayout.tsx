import { Outlet } from "react-router-dom";

export function AppLayout() {
    const breakPoints = {
        mobile: '600px',
    } as const

    return (
        <div css={t => ({
            backgroundColor: t.colors.bg,
            height: '100vh',
            overflow: 'auto',
            width: '100vw',
        })}>
            <div css={t => ({
                boxSizing: 'border-box',
                fontFamily: t.fonts.fontFamily.primary,
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: '600px',
                padding: '16px 0',
                [`@media (max-width: ${breakPoints.mobile})`]: {
                    paddingLeft: '4px',
                    paddingRight: '4px',
                },
            })}>
                <Outlet />
            </div>
        </div>
    );
}
