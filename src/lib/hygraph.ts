const HYGRAPH_ENDPOINT = import.meta.env.HYGRAPH_ENDPOINT;

export async function hygraphQuery<T = Record<string, unknown>>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  const res = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error("Hygraph error:", json.errors);
    throw new Error(json.errors[0].message);
  }

  return json.data as T;
}

/** "Apple" → "apple", "Samsung Galaxy" → "samsung-galaxy" */
export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}