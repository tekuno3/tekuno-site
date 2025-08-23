import type { Route } from './+types/params-test.$testParam';

export default function ParamsTest({ params }: Route.ComponentProps) {
  return (
    <div className="p-2">
      <p>{JSON.stringify(params)}</p>
    </div>
  );
}
