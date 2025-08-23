import { Outlet } from 'react-router';
import { useGhPagesRedirect } from '@src/utils';

export default function Home() {
  useGhPagesRedirect();

  return (
    <section className="p-2">
      <p>ブニブニ館</p>
      <p className="bg-yellow-200" >
        TEST
      </p>
    </section>
  );
}

export function Layout() {
  return (
    <div className="flex flex-col gap-1 overflow-hidden h-dvh w-dvw" >
      <h1>ブニブニ館</h1>
      <div className="grow overflow-auto" >
        <Outlet />
      </div>
    </div>
  );
}
