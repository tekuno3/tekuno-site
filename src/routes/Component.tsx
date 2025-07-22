import { useGhPagesRedirect } from "@src/utils";

export function Component() {
  useGhPagesRedirect();
  
  return (
    <section className="p-2">
      <p>ブニブニ館</p>
    </section>
  );
}
