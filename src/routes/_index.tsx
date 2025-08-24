import { useGhPagesRedirect } from '@src/utils';

export default function Index() {
  useGhPagesRedirect();

  return (
    <section className="p-2">
      <p>工事中</p>
    </section>
  );
}
