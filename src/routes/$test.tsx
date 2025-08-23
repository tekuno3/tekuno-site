import type { Route } from './+types/$test';

export function clientLoader() {
  return { props: {} };
}

export default function Test({ params }: Route.ComponentProps) {
  return (
    <div className="p-2">
      <p>{JSON.stringify(params)}</p>
    </div>
  );
}
