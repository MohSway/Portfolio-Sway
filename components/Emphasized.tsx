import type { Emphasis } from "@/content/types";

export function Emphasized({ prefix, emphasis, suffix }: Emphasis) {
  return (
    <>
      {prefix}
      <em>{emphasis}</em>
      {suffix ? ` ${suffix}` : ""}
    </>
  );
}
