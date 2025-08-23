import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import stylesheet from './app.css?url';
import favicon from './images/favicon.png?url';

export const links = () => [
  { rel: 'stylesheet', href: stylesheet, },
  { rel: 'icon', href: favicon, },
];

export function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>てく野のサイト</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return (
    <Outlet />
  );
}

// TODO: hydrateFallback を追加
