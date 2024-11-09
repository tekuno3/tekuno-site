import { Outlet } from "react-router-dom";

export interface AppLayoutProps {

}

export function AppLayout({ }: AppLayoutProps) {
    return (
        <div css={{
            height: '100vh',
            width: '100vw',
        }}>
            <div>
                <Outlet />
            </div>
        </div>
    );
}
