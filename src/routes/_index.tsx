import { Outlet } from 'react-router';
import { useGhPagesRedirect } from '@src/utils';

export default function Index() {
  useGhPagesRedirect();

  return (
    <section className="p-2">
      <p>Index</p>
    </section>
  );
}

export function Layout() {
  return (
    <div className="flex flex-col gap-1 overflow-hidden h-dvh w-dvw" >
      <h1>Layout</h1>
      <div className="grow overflow-auto" >
        <Outlet />
      </div>
    </div>
  );
}
