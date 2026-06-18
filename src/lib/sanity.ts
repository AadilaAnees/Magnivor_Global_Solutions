import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.VITE_SANITY_DATASET as string | undefined) ?? "production";
const token = import.meta.env.VITE_SANITY_API_TOKEN as string | undefined;

export const sanityEnabled = Boolean(projectId);

export const sanityClient: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: !token, // CDN when public; live when authenticated
      token,
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any): any {
  if (!builder) {
    const stub = { url: () => "" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const chain: any = new Proxy(stub, {
      get: (t, p) => (p === "url" ? t.url.bind(t) : () => chain),
    });
    return chain;
  }
  return builder.image(source);
}

export type SanityArticle = {
  _id: string;
  title: string;
  slug?: { current: string };
  publishedAt: string;
  excerpt?: string;
  category?: string;
  author?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainImage?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
};

export const ARTICLES_QUERY = `*[_type == "article" && defined(publishedAt)] | order(publishedAt desc) {
  _id, title, slug, publishedAt, excerpt, category, author, mainImage
}`;
