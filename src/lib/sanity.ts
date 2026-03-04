import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface StudioInfo {
  shopName: string;
  tagline: string;
  about: string;
  address: string;
  hours: { day: string; hours: string }[];
  email: string;
  instagramUrl: string;
  phone?: string;
}

export interface Artist {
  name: string;
  slug: { current: string };
  photo: SanityImageSource;
  bio: string;
  bookingUrl: string;
  instagramUrl: string;
  isGuest: boolean;
  isActive: boolean;
  order: number;
  portfolio: SanityImageSource[];
}

export async function getStudioInfo(): Promise<StudioInfo> {
  try {
    const result = await client.fetch(
      `*[_type == "studioInfo"][0]{
        shopName,
        tagline,
        about,
        address,
        hours,
        email,
        instagramUrl,
        phone
      }`
    );
    if (result) return result;
  } catch {
    // Fall through to placeholder data
  }

  return {
    shopName: "Too Bad Tattoo Studio",
    tagline: "Fine Line Western Tattoo",
    about:
      "Female-owned and female-operated tattoo studio in Austin, TX. We specialize in fine-line western tattoo art — from delicate florals to cowboy boots, hand-poked stars to vintage flash.",
    address: "Austin, TX",
    hours: [
      { day: "Tuesday – Saturday", hours: "11am – 7pm" },
      { day: "Sunday – Monday", hours: "Closed" },
    ],
    email: "toobadtattoostudio@gmail.com",
    instagramUrl: "https://www.instagram.com/toobadtattoostudio/",
  };
}

export async function getArtists(): Promise<Artist[]> {
  try {
    const result = await client.fetch(
      `*[_type == "artist" && isActive == true] | order(order asc){
        name,
        slug,
        photo,
        bio,
        bookingUrl,
        instagramUrl,
        isGuest,
        isActive,
        order,
        portfolio
      }`
    );
    if (result && result.length > 0) return result;
  } catch {
    // Fall through to placeholder data
  }

  return getPlaceholderArtists();
}

function getPlaceholderArtists(): Artist[] {
  return [
    {
      name: "Bree",
      slug: { current: "bree" },
      photo: null as unknown as SanityImageSource,
      bio: "Owner & artist. Fine-line western, florals, and hand-poked work.",
      bookingUrl: "https://www.instagram.com/myb.tattoo/",
      instagramUrl: "https://www.instagram.com/myb.tattoo/",
      isGuest: false,
      isActive: true,
      order: 1,
      portfolio: [],
    },
    {
      name: "Artist Two",
      slug: { current: "artist-two" },
      photo: null as unknown as SanityImageSource,
      bio: "Fine-line specialist with a love for botanical and western motifs.",
      bookingUrl: "#",
      instagramUrl: "#",
      isGuest: false,
      isActive: true,
      order: 2,
      portfolio: [],
    },
    {
      name: "Artist Three",
      slug: { current: "artist-three" },
      photo: null as unknown as SanityImageSource,
      bio: "Illustrative tattoos inspired by vintage flash and Americana.",
      bookingUrl: "#",
      instagramUrl: "#",
      isGuest: false,
      isActive: true,
      order: 3,
      portfolio: [],
    },
    {
      name: "Guest Artist",
      slug: { current: "guest" },
      photo: null as unknown as SanityImageSource,
      bio: "Visiting artist — check back for upcoming guest spots.",
      bookingUrl: "#",
      instagramUrl: "#",
      isGuest: true,
      isActive: true,
      order: 4,
      portfolio: [],
    },
  ];
}
