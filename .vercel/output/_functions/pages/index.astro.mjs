import '../chunks/page-ssr_ByU__huY.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, n as renderScript, o as renderSlot, k as renderHead, u as unescapeHTML, h as addAttribute, m as maybeRenderHead, l as renderComponent } from '../chunks/astro/server_B54mHHzv.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro("https://toobadtattoostudio.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Female-owned fine-line western tattoo studio in Austin, TX" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:locale" content="en_US"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Rye&display=swap" rel="stylesheet"><title>', '</title><!-- Structured Data --><script type="application/ld+json">', "<\/script>", "</head> <body> ", " ", " </body> </html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(title, "content"), addAttribute(description, "content"), title, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    "name": "Too Bad Tattoo Studio",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Austin",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "url": "https://toobadtattoostudio.com",
    "sameAs": [
      "https://www.instagram.com/toobadtattoostudio/"
    ]
  })), renderHead(), renderSlot($$result, $$slots["default"]), renderScript($$result, "/Users/nickuhlenhuth/Desktop/too-bad/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/nickuhlenhuth/Desktop/too-bad/src/layouts/Layout.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="nav" id="nav" data-astro-cid-dmqpwcec> <div class="nav__inner container" data-astro-cid-dmqpwcec> <a href="#top" class="nav__logo" aria-label="Too Bad Tattoo Studio - back to top" data-astro-cid-dmqpwcec> <span class="nav__logo-text" data-astro-cid-dmqpwcec>Too Bad</span> <svg class="nav__star" width="14" height="14" viewBox="0 0 50 50" fill="var(--color-red)" aria-hidden="true" data-astro-cid-dmqpwcec> <path d="M25 3 L30 18 L46 20 L34 31 L37 47 L25 39 L13 47 L16 31 L4 20 L20 18 Z" data-astro-cid-dmqpwcec></path> </svg> </a> <button class="nav__toggle" aria-label="Toggle navigation" aria-expanded="false" data-astro-cid-dmqpwcec> <span class="nav__toggle-line" data-astro-cid-dmqpwcec></span> <span class="nav__toggle-line" data-astro-cid-dmqpwcec></span> </button> <ul class="nav__links" role="list" data-astro-cid-dmqpwcec> <li data-astro-cid-dmqpwcec><a href="#about" data-astro-cid-dmqpwcec>About</a></li> <li data-astro-cid-dmqpwcec><a href="#artists" data-astro-cid-dmqpwcec>Artists</a></li> <li data-astro-cid-dmqpwcec><a href="#visit" data-astro-cid-dmqpwcec>Visit</a></li> <li data-astro-cid-dmqpwcec> <a href="https://www.instagram.com/toobadtattoostudio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-astro-cid-dmqpwcec> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-dmqpwcec> <rect x="2" y="2" width="20" height="20" rx="5" data-astro-cid-dmqpwcec></rect> <circle cx="12" cy="12" r="5" data-astro-cid-dmqpwcec></circle> <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" data-astro-cid-dmqpwcec></circle> </svg> </a> </li> </ul> </div> </nav>  ${renderScript($$result, "/Users/nickuhlenhuth/Desktop/too-bad/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/nickuhlenhuth/Desktop/too-bad/src/components/Nav.astro", void 0);

const $$Astro$5 = createAstro("https://toobadtattoostudio.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  const { info } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero" id="top" data-astro-cid-bbe6dxrz> <!-- Decorative corner elements --> <div class="hero__corner hero__corner--tl" aria-hidden="true" data-astro-cid-bbe6dxrz> <svg width="80" height="80" viewBox="0 0 80 80" fill="none" data-astro-cid-bbe6dxrz> <path d="M2 78 L2 2 L78 2" stroke="var(--color-ink)" stroke-width="1" opacity="0.2" data-astro-cid-bbe6dxrz></path> <path d="M12 60 L12 12 L60 12" stroke="var(--color-ink)" stroke-width="0.5" opacity="0.1" data-astro-cid-bbe6dxrz></path> </svg> </div> <div class="hero__corner hero__corner--tr" aria-hidden="true" data-astro-cid-bbe6dxrz> <svg width="80" height="80" viewBox="0 0 80 80" fill="none" data-astro-cid-bbe6dxrz> <path d="M78 78 L78 2 L2 2" stroke="var(--color-ink)" stroke-width="1" opacity="0.2" data-astro-cid-bbe6dxrz></path> </svg> </div> <div class="hero__corner hero__corner--bl" aria-hidden="true" data-astro-cid-bbe6dxrz> <svg width="80" height="80" viewBox="0 0 80 80" fill="none" data-astro-cid-bbe6dxrz> <path d="M2 2 L2 78 L78 78" stroke="var(--color-ink)" stroke-width="1" opacity="0.2" data-astro-cid-bbe6dxrz></path> </svg> </div> <div class="hero__corner hero__corner--br" aria-hidden="true" data-astro-cid-bbe6dxrz> <svg width="80" height="80" viewBox="0 0 80 80" fill="none" data-astro-cid-bbe6dxrz> <path d="M78 2 L78 78 L2 78" stroke="var(--color-ink)" stroke-width="1" opacity="0.2" data-astro-cid-bbe6dxrz></path> </svg> </div> <div class="hero__content container" data-astro-cid-bbe6dxrz> <!-- Decorative stars scattered --> <div class="hero__stars" aria-hidden="true" data-astro-cid-bbe6dxrz> <svg class="hero__star hero__star--1" width="18" height="18" viewBox="0 0 50 50" data-astro-cid-bbe6dxrz> <path d="M25 3 L30 18 L46 20 L34 31 L37 47 L25 39 L13 47 L16 31 L4 20 L20 18 Z" fill="var(--color-red)" data-astro-cid-bbe6dxrz></path> </svg> <svg class="hero__star hero__star--2" width="12" height="12" viewBox="0 0 50 50" data-astro-cid-bbe6dxrz> <path d="M25 3 L30 18 L46 20 L34 31 L37 47 L25 39 L13 47 L16 31 L4 20 L20 18 Z" fill="var(--color-red)" opacity="0.6" data-astro-cid-bbe6dxrz></path> </svg> <svg class="hero__star hero__star--3" width="10" height="10" viewBox="0 0 50 50" data-astro-cid-bbe6dxrz> <path d="M25 3 L30 18 L46 20 L34 31 L37 47 L25 39 L13 47 L16 31 L4 20 L20 18 Z" fill="var(--color-red)" opacity="0.4" data-astro-cid-bbe6dxrz></path> </svg> <svg class="hero__star hero__star--4" width="15" height="15" viewBox="0 0 50 50" data-astro-cid-bbe6dxrz> <path d="M25 3 L30 18 L46 20 L34 31 L37 47 L25 39 L13 47 L16 31 L4 20 L20 18 Z" fill="var(--color-red)" opacity="0.5" data-astro-cid-bbe6dxrz></path> </svg> </div> <!-- Decorative linework background --> <div class="hero__linework" aria-hidden="true" data-astro-cid-bbe6dxrz> <svg viewBox="0 0 400 300" fill="none" class="hero__horse" data-astro-cid-bbe6dxrz> <!-- Simplified fine-line horse illustration --> <path d="M180 220 C180 220 170 180 175 160 C180 140 195 130 200 110 C205 90 200 70 210 55 C220 40 240 35 250 40 C260 45 255 55 250 60 C245 65 235 62 230 70 C225 78 230 90 225 100 C220 110 230 120 240 130 C250 140 270 145 280 160 C290 175 285 195 280 220" stroke="var(--color-ink)" stroke-width="1" opacity="0.08" fill="none" data-astro-cid-bbe6dxrz></path> <!-- Legs --> <path d="M195 220 L190 260 M210 220 L208 260 M260 220 L258 260 M275 220 L278 260" stroke="var(--color-ink)" stroke-width="1" opacity="0.08" data-astro-cid-bbe6dxrz></path> <!-- Mane --> <path d="M215 65 C210 75 205 85 200 95 M220 60 C215 70 210 80 205 90 M225 58 C220 68 215 78 210 88" stroke="var(--color-ink)" stroke-width="0.75" opacity="0.06" data-astro-cid-bbe6dxrz></path> <!-- Tail --> <path d="M280 220 C290 230 295 240 290 255 C285 270 275 275 270 265" stroke="var(--color-ink)" stroke-width="0.75" opacity="0.06" data-astro-cid-bbe6dxrz></path> </svg> </div> <p class="hero__location" data-astro-cid-bbe6dxrz>Austin, TX</p> <h1 class="hero__title" data-astro-cid-bbe6dxrz> <span class="hero__title-line" data-astro-cid-bbe6dxrz>Too Bad</span> <span class="hero__title-sub" data-astro-cid-bbe6dxrz>Tattoo Studio</span> </h1> <p class="hero__tagline" data-astro-cid-bbe6dxrz>${info.tagline || "Fine Line Western Tattoo"}</p> <!-- Decorative hand-drawn divider --> <div class="hero__divider" aria-hidden="true" data-astro-cid-bbe6dxrz> <svg width="200" height="20" viewBox="0 0 200 20" fill="none" data-astro-cid-bbe6dxrz> <path d="M10 10 Q30 5 50 10 T90 10 T130 10 T170 10 L190 10" stroke="var(--color-ink)" stroke-width="0.75" opacity="0.3" data-astro-cid-bbe6dxrz></path> <circle cx="100" cy="10" r="2" fill="var(--color-red)" data-astro-cid-bbe6dxrz></circle> </svg> </div> <a href="#artists" class="btn hero__cta" data-astro-cid-bbe6dxrz>Meet Our Artists</a> </div> <!-- Scroll indicator --> <div class="hero__scroll" aria-hidden="true" data-astro-cid-bbe6dxrz> <svg width="20" height="40" viewBox="0 0 20 40" fill="none" data-astro-cid-bbe6dxrz> <path d="M10 5 L10 30 M5 25 L10 32 L15 25" stroke="var(--color-ink)" stroke-width="1" opacity="0.3" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz></path> </svg> </div> </section> `;
}, "/Users/nickuhlenhuth/Desktop/too-bad/src/components/Hero.astro", void 0);

const $$Astro$4 = createAstro("https://toobadtattoostudio.com");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$About;
  const { info } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="about" id="about" data-astro-cid-v2cbyr3p> <div class="container" data-astro-cid-v2cbyr3p> <div class="about__layout" data-astro-cid-v2cbyr3p> <!-- Decorative side element --> <div class="about__decor" aria-hidden="true" data-astro-cid-v2cbyr3p> <svg width="60" height="300" viewBox="0 0 60 300" fill="none" data-astro-cid-v2cbyr3p> <!-- Vertical line with western accents --> <line x1="30" y1="0" x2="30" y2="300" stroke="var(--color-ink)" stroke-width="0.5" opacity="0.15" data-astro-cid-v2cbyr3p></line> <!-- Small stars along the line --> <path d="M30 40 L32 46 L38 47 L33 51 L35 57 L30 53 L25 57 L27 51 L22 47 L28 46 Z" fill="var(--color-red)" opacity="0.6" data-astro-cid-v2cbyr3p></path> <path d="M30 140 L32 146 L38 147 L33 151 L35 157 L30 153 L25 157 L27 151 L22 147 L28 146 Z" fill="var(--color-red)" opacity="0.4" data-astro-cid-v2cbyr3p></path> <path d="M30 240 L32 246 L38 247 L33 251 L35 257 L30 253 L25 257 L27 251 L22 247 L28 246 Z" fill="var(--color-red)" opacity="0.6" data-astro-cid-v2cbyr3p></path> <!-- Small diamond shapes --> <path d="M30 90 L35 95 L30 100 L25 95 Z" stroke="var(--color-ink)" stroke-width="0.5" fill="none" opacity="0.2" data-astro-cid-v2cbyr3p></path> <path d="M30 190 L35 195 L30 200 L25 195 Z" stroke="var(--color-ink)" stroke-width="0.5" fill="none" opacity="0.2" data-astro-cid-v2cbyr3p></path> </svg> </div> <div class="about__content animate-in" data-astro-cid-v2cbyr3p> <h2 class="about__heading" data-astro-cid-v2cbyr3p> <span class="about__heading-accent" aria-hidden="true" data-astro-cid-v2cbyr3p> <svg width="16" height="16" viewBox="0 0 50 50" fill="var(--color-red)" data-astro-cid-v2cbyr3p> <path d="M25 3 L30 18 L46 20 L34 31 L37 47 L25 39 L13 47 L16 31 L4 20 L20 18 Z" data-astro-cid-v2cbyr3p></path> </svg> </span>
About the Shop
</h2> <p class="about__text" data-astro-cid-v2cbyr3p>${info.about}</p> <div class="about__details" data-astro-cid-v2cbyr3p> <p class="about__badge" data-astro-cid-v2cbyr3p>Female-Owned & Female-Operated</p> <!-- Decorative horseshoe --> <div class="about__horseshoe" aria-hidden="true" data-astro-cid-v2cbyr3p> <svg width="30" height="35" viewBox="0 0 60 70" fill="none" data-astro-cid-v2cbyr3p> <path d="M12 65 L12 30 C12 14 22 5 30 5 C38 5 48 14 48 30 L48 65" stroke="var(--color-ink)" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.2" data-astro-cid-v2cbyr3p></path> <circle cx="12" cy="65" r="2" fill="var(--color-ink)" opacity="0.2" data-astro-cid-v2cbyr3p></circle> <circle cx="48" cy="65" r="2" fill="var(--color-ink)" opacity="0.2" data-astro-cid-v2cbyr3p></circle> </svg> </div> </div> </div> </div> </div> </section> `;
}, "/Users/nickuhlenhuth/Desktop/too-bad/src/components/About.astro", void 0);

const client = createClient({
  projectId: "xvdpgu0i",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true
});
const builder = createImageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}
async function getStudioInfo() {
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
  }
  return {
    shopName: "Too Bad Tattoo Studio",
    tagline: "Fine Line Western Tattoo",
    about: "Female-owned and female-operated tattoo studio in Austin, TX. We specialize in fine-line western tattoo art — from delicate florals to cowboy boots, hand-poked stars to vintage flash.",
    address: "Austin, TX",
    hours: [
      { day: "Tuesday – Saturday", hours: "11am – 7pm" },
      { day: "Sunday – Monday", hours: "Closed" }
    ],
    email: "toobadtattoostudio@gmail.com",
    instagramUrl: "https://www.instagram.com/toobadtattoostudio/"
  };
}
async function getArtists() {
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
  }
  return getPlaceholderArtists();
}
function getPlaceholderArtists() {
  return [
    {
      name: "Bree",
      slug: { current: "bree" },
      photo: null,
      bio: "Owner & artist. Fine-line western, florals, and hand-poked work.",
      bookingUrl: "https://www.instagram.com/myb.tattoo/",
      instagramUrl: "https://www.instagram.com/myb.tattoo/",
      isGuest: false,
      isActive: true,
      order: 1,
      portfolio: []
    },
    {
      name: "Artist Two",
      slug: { current: "artist-two" },
      photo: null,
      bio: "Fine-line specialist with a love for botanical and western motifs.",
      bookingUrl: "#",
      instagramUrl: "#",
      isGuest: false,
      isActive: true,
      order: 2,
      portfolio: []
    },
    {
      name: "Artist Three",
      slug: { current: "artist-three" },
      photo: null,
      bio: "Illustrative tattoos inspired by vintage flash and Americana.",
      bookingUrl: "#",
      instagramUrl: "#",
      isGuest: false,
      isActive: true,
      order: 3,
      portfolio: []
    },
    {
      name: "Guest Artist",
      slug: { current: "guest" },
      photo: null,
      bio: "Visiting artist — check back for upcoming guest spots.",
      bookingUrl: "#",
      instagramUrl: "#",
      isGuest: true,
      isActive: true,
      order: 4,
      portfolio: []
    }
  ];
}

const $$Astro$3 = createAstro("https://toobadtattoostudio.com");
const $$ArtistCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ArtistCard;
  const { artist } = Astro2.props;
  const hasPortfolio = artist.portfolio && artist.portfolio.length > 0;
  const hasPhoto = artist.photo;
  return renderTemplate`${maybeRenderHead()}<article class="artist-card" data-astro-cid-njinqevw> <div class="artist-card__header" data-astro-cid-njinqevw> <div class="artist-card__avatar" data-astro-cid-njinqevw> ${hasPhoto ? renderTemplate`<img${addAttribute(urlFor(artist.photo).width(120).height(120).format("webp").url(), "src")}${addAttribute(artist.name, "alt")} width="120" height="120" loading="lazy" data-astro-cid-njinqevw>` : renderTemplate`<div class="artist-card__avatar-placeholder" data-astro-cid-njinqevw> <svg width="40" height="40" viewBox="0 0 50 50" fill="none" aria-hidden="true" data-astro-cid-njinqevw> <path d="M25 3 L30 18 L46 20 L34 31 L37 47 L25 39 L13 47 L16 31 L4 20 L20 18 Z" stroke="var(--color-cream-dark)" stroke-width="1.5" fill="none" data-astro-cid-njinqevw></path> </svg> </div>`} </div> <div class="artist-card__info" data-astro-cid-njinqevw> <h3 class="artist-card__name" data-astro-cid-njinqevw> ${artist.name} ${artist.isGuest && renderTemplate`<span class="artist-card__guest-badge" data-astro-cid-njinqevw>Guest</span>`} </h3> <p class="artist-card__bio" data-astro-cid-njinqevw>${artist.bio}</p> </div> </div> <!-- Portfolio Grid --> ${hasPortfolio && renderTemplate`<div class="artist-card__portfolio" data-astro-cid-njinqevw> ${artist.portfolio.slice(0, 6).map((img, i) => renderTemplate`<button class="artist-card__portfolio-item" data-lightbox${addAttribute(urlFor(img).width(800).format("webp").url(), "data-src")}${addAttribute(`${artist.name} tattoo work ${i + 1}`, "data-alt")}${addAttribute(`View ${artist.name}'s tattoo work ${i + 1}`, "aria-label")} data-astro-cid-njinqevw> <img${addAttribute(urlFor(img).width(300).height(300).format("webp").url(), "src")}${addAttribute(`${artist.name} tattoo work ${i + 1}`, "alt")} width="300" height="300" loading="lazy" data-astro-cid-njinqevw> </button>`)} </div>`} <!-- Placeholder portfolio for dev --> ${!hasPortfolio && renderTemplate`<div class="artist-card__portfolio" data-astro-cid-njinqevw> ${[1, 2, 3, 4, 5, 6].map((i) => renderTemplate`<div class="artist-card__portfolio-placeholder" data-astro-cid-njinqevw> <svg width="24" height="24" viewBox="0 0 50 50" fill="none" aria-hidden="true" data-astro-cid-njinqevw> <path d="M25 3 L30 18 L46 20 L34 31 L37 47 L25 39 L13 47 L16 31 L4 20 L20 18 Z" stroke="var(--color-cream-dark)" stroke-width="1" fill="none" data-astro-cid-njinqevw></path> </svg> </div>`)} </div>`} <!-- Action Links --> <div class="artist-card__actions" data-astro-cid-njinqevw> <a${addAttribute(artist.bookingUrl, "href")} target="_blank" rel="noopener noreferrer" class="btn btn--red artist-card__book" data-astro-cid-njinqevw>
Book with ${artist.name} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" data-astro-cid-njinqevw> <path d="M7 17L17 7M17 7H7M17 7V17" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-njinqevw></path> </svg> </a> <a${addAttribute(artist.instagramUrl, "href")} target="_blank" rel="noopener noreferrer" class="artist-card__ig"${addAttribute(`${artist.name} on Instagram`, "aria-label")} data-astro-cid-njinqevw> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-njinqevw> <rect x="2" y="2" width="20" height="20" rx="5" data-astro-cid-njinqevw></rect> <circle cx="12" cy="12" r="5" data-astro-cid-njinqevw></circle> <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" data-astro-cid-njinqevw></circle> </svg> </a> </div> </article> `;
}, "/Users/nickuhlenhuth/Desktop/too-bad/src/components/ArtistCard.astro", void 0);

const $$Astro$2 = createAstro("https://toobadtattoostudio.com");
const $$Artists = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Artists;
  const { artists } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="artists" id="artists" data-astro-cid-kaga46ma> <div class="container" data-astro-cid-kaga46ma> <div class="artists__header animate-in" data-astro-cid-kaga46ma> <h2 class="artists__title" data-astro-cid-kaga46ma>Our Artists</h2> <div class="artists__title-line" aria-hidden="true" data-astro-cid-kaga46ma> <svg width="120" height="12" viewBox="0 0 120 12" fill="none" data-astro-cid-kaga46ma> <path d="M0 6 Q15 2 30 6 T60 6 T90 6 T120 6" stroke="var(--color-ink)" stroke-width="0.75" opacity="0.3" data-astro-cid-kaga46ma></path> <circle cx="60" cy="6" r="2" fill="var(--color-red)" data-astro-cid-kaga46ma></circle> </svg> </div> </div> <div class="artists__grid" data-astro-cid-kaga46ma> ${artists.map((artist, i) => renderTemplate`<div class="animate-in"${addAttribute(`transition-delay: ${i * 0.1}s`, "style")} data-astro-cid-kaga46ma> ${renderComponent($$result, "ArtistCard", $$ArtistCard, { "artist": artist, "data-astro-cid-kaga46ma": true })} </div>`)} </div> </div> </section> `;
}, "/Users/nickuhlenhuth/Desktop/too-bad/src/components/Artists.astro", void 0);

const $$Astro$1 = createAstro("https://toobadtattoostudio.com");
const $$Visit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Visit;
  const { info } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="visit" id="visit" data-astro-cid-aqstvgqq> <div class="container" data-astro-cid-aqstvgqq> <div class="visit__layout" data-astro-cid-aqstvgqq> <div class="visit__content animate-in" data-astro-cid-aqstvgqq> <h2 class="visit__title" data-astro-cid-aqstvgqq>Come Say Howdy</h2> <div class="visit__details" data-astro-cid-aqstvgqq> <div class="visit__block" data-astro-cid-aqstvgqq> <h3 class="visit__label" data-astro-cid-aqstvgqq>Find Us</h3> <p class="visit__value" data-astro-cid-aqstvgqq>${info.address}</p> </div> ${info.hours && info.hours.length > 0 && renderTemplate`<div class="visit__block" data-astro-cid-aqstvgqq> <h3 class="visit__label" data-astro-cid-aqstvgqq>Hours</h3> ${info.hours.map((h) => renderTemplate`<p class="visit__value" data-astro-cid-aqstvgqq> <span class="visit__day" data-astro-cid-aqstvgqq>${h.day}</span> <span class="visit__hours" data-astro-cid-aqstvgqq>${h.hours}</span> </p>`)} </div>`} ${info.email && renderTemplate`<div class="visit__block" data-astro-cid-aqstvgqq> <h3 class="visit__label" data-astro-cid-aqstvgqq>Get in Touch</h3> <p class="visit__value" data-astro-cid-aqstvgqq> <a${addAttribute(`mailto:${info.email}`, "href")} class="link-underline" data-astro-cid-aqstvgqq>${info.email}</a> </p> </div>`} </div> </div> <!-- Decorative illustration --> <div class="visit__illustration animate-in" aria-hidden="true" data-astro-cid-aqstvgqq> <svg viewBox="0 0 200 260" fill="none" class="visit__cactus-scene" data-astro-cid-aqstvgqq> <!-- Ground line --> <path d="M10 230 Q50 228 100 230 T190 230" stroke="var(--color-ink)" stroke-width="0.75" opacity="0.15" data-astro-cid-aqstvgqq></path> <!-- Cactus 1 (main) --> <path d="M100 230 L100 80 C100 70 100 65 100 60" stroke="var(--color-ink)" stroke-width="1.5" opacity="0.12" stroke-linecap="round" data-astro-cid-aqstvgqq></path> <path d="M100 140 L75 140 C65 140 60 130 60 120 L60 105" stroke="var(--color-ink)" stroke-width="1.5" opacity="0.12" stroke-linecap="round" data-astro-cid-aqstvgqq></path> <path d="M100 110 L130 110 C138 110 142 118 142 125 L142 135" stroke="var(--color-ink)" stroke-width="1.5" opacity="0.12" stroke-linecap="round" data-astro-cid-aqstvgqq></path> <!-- Flower on top --> <path d="M95 60 C93 55 97 50 100 48 C103 50 107 55 105 60" stroke="var(--color-red)" stroke-width="1" opacity="0.2" fill="none" data-astro-cid-aqstvgqq></path> <circle cx="100" cy="55" r="2" fill="var(--color-red)" opacity="0.2" data-astro-cid-aqstvgqq></circle> <!-- Small cactus --> <path d="M155 230 L155 185" stroke="var(--color-ink)" stroke-width="1" opacity="0.1" stroke-linecap="round" data-astro-cid-aqstvgqq></path> <path d="M155 200 L165 200 C168 200 170 196 170 192" stroke="var(--color-ink)" stroke-width="1" opacity="0.1" stroke-linecap="round" data-astro-cid-aqstvgqq></path> <!-- Stars scattered --> <path d="M40 80 L42 86 L48 87 L43 91 L45 97 L40 93 L35 97 L37 91 L32 87 L38 86 Z" fill="var(--color-red)" opacity="0.25" data-astro-cid-aqstvgqq></path> <path d="M160 60 L161 63 L164 64 L162 66 L163 69 L160 67 L157 69 L158 66 L156 64 L159 63 Z" fill="var(--color-red)" opacity="0.15" data-astro-cid-aqstvgqq></path> <path d="M45 180 L46 183 L49 184 L47 186 L48 189 L45 187 L42 189 L43 186 L41 184 L44 183 Z" fill="var(--color-red)" opacity="0.2" data-astro-cid-aqstvgqq></path> <!-- Texas state outline (simplified) --> <path d="M15 30 L35 28 L45 20 L50 25 L55 22 L55 35 L50 45 L35 55 L30 50 L20 55 L15 45 Z" stroke="var(--color-ink)" stroke-width="0.75" opacity="0.08" fill="none" data-astro-cid-aqstvgqq></path> <circle cx="35" cy="38" r="2" fill="var(--color-red)" opacity="0.15" data-astro-cid-aqstvgqq></circle> </svg> </div> </div> </div> </section> `;
}, "/Users/nickuhlenhuth/Desktop/too-bad/src/components/Visit.astro", void 0);

const $$Astro = createAstro("https://toobadtattoostudio.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { info } = Astro2.props;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <!-- Decorative top border --> <div class="footer__border" aria-hidden="true" data-astro-cid-sz7xmlte> <svg width="100%" height="4" preserveAspectRatio="none" viewBox="0 0 800 4" fill="none" data-astro-cid-sz7xmlte> <path d="M0 2 Q50 0 100 2 T200 2 T300 2 T400 2 T500 2 T600 2 T700 2 T800 2" stroke="var(--color-ink)" stroke-width="0.75" opacity="0.15" data-astro-cid-sz7xmlte></path> </svg> </div> <div class="footer__content" data-astro-cid-sz7xmlte> <div class="footer__brand" data-astro-cid-sz7xmlte> <p class="footer__logo" data-astro-cid-sz7xmlte>
Too Bad
<svg width="12" height="12" viewBox="0 0 50 50" fill="var(--color-red)" aria-hidden="true" style="display:inline;vertical-align:middle;margin-left:2px;" data-astro-cid-sz7xmlte> <path d="M25 3 L30 18 L46 20 L34 31 L37 47 L25 39 L13 47 L16 31 L4 20 L20 18 Z" data-astro-cid-sz7xmlte></path> </svg> </p> <p class="footer__sub" data-astro-cid-sz7xmlte>Tattoo Studio &middot; Austin, TX</p> </div> <div class="footer__links" data-astro-cid-sz7xmlte> ${info.instagramUrl && renderTemplate`<a${addAttribute(info.instagramUrl, "href")} target="_blank" rel="noopener noreferrer" class="footer__link" aria-label="Too Bad Tattoo Studio on Instagram" data-astro-cid-sz7xmlte> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-sz7xmlte> <rect x="2" y="2" width="20" height="20" rx="5" data-astro-cid-sz7xmlte></rect> <circle cx="12" cy="12" r="5" data-astro-cid-sz7xmlte></circle> <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" data-astro-cid-sz7xmlte></circle> </svg> <span data-astro-cid-sz7xmlte>Instagram</span> </a>`} ${info.email && renderTemplate`<a${addAttribute(`mailto:${info.email}`, "href")} class="footer__link" data-astro-cid-sz7xmlte> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-sz7xmlte> <rect x="2" y="4" width="20" height="16" rx="2" data-astro-cid-sz7xmlte></rect> <path d="M2 4 L12 13 L22 4" data-astro-cid-sz7xmlte></path> </svg> <span data-astro-cid-sz7xmlte>Email</span> </a>`} </div> </div> <p class="footer__copy" data-astro-cid-sz7xmlte>&copy; ${year} Too Bad Tattoo Studio. All rights reserved.</p> </div> </footer> `;
}, "/Users/nickuhlenhuth/Desktop/too-bad/src/components/Footer.astro", void 0);

const $$Lightbox = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Portfolio image viewer" hidden data-astro-cid-gixpweiw> <button class="lightbox__close" aria-label="Close image viewer" data-astro-cid-gixpweiw> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" data-astro-cid-gixpweiw> <line x1="4" y1="4" x2="20" y2="20" data-astro-cid-gixpweiw></line> <line x1="20" y1="4" x2="4" y2="20" data-astro-cid-gixpweiw></line> </svg> </button> <div class="lightbox__content" data-astro-cid-gixpweiw> <img class="lightbox__img" src="" alt="" data-astro-cid-gixpweiw> </div> </div>  ${renderScript($$result, "/Users/nickuhlenhuth/Desktop/too-bad/src/components/Lightbox.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/nickuhlenhuth/Desktop/too-bad/src/components/Lightbox.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const info = await getStudioInfo();
  const artists = await getArtists();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Too Bad Tattoo Studio \u2014 Fine Line Western Tattoo in Austin, TX", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "info": info, "data-astro-cid-j7pv25f6": true })} <div class="section-divider" aria-hidden="true" data-astro-cid-j7pv25f6> <svg width="100%" height="20" preserveAspectRatio="none" viewBox="0 0 1200 20" fill="none" data-astro-cid-j7pv25f6> <path d="M0 10 Q75 5 150 10 T300 10 T450 10 T600 10 T750 10 T900 10 T1050 10 T1200 10" stroke="var(--color-ink)" stroke-width="0.5" opacity="0.1" data-astro-cid-j7pv25f6></path> </svg> </div> ${renderComponent($$result2, "About", $$About, { "info": info, "data-astro-cid-j7pv25f6": true })} <div class="section-divider section-divider--stars" aria-hidden="true" data-astro-cid-j7pv25f6> <svg width="100" height="20" viewBox="0 0 100 20" fill="none" data-astro-cid-j7pv25f6> <path d="M20 10 L22 16 L28 17 L23 21 L25 27 L20 23 L15 27 L17 21 L12 17 L18 16 Z" fill="var(--color-red)" opacity="0.3" transform="translate(0, -7) scale(0.6)" data-astro-cid-j7pv25f6></path> <path d="M50 10 L52 16 L58 17 L53 21 L55 27 L50 23 L45 27 L47 21 L42 17 L48 16 Z" fill="var(--color-red)" opacity="0.5" transform="translate(0, -7) scale(0.8)" data-astro-cid-j7pv25f6></path> <path d="M80 10 L82 16 L88 17 L83 21 L85 27 L80 23 L75 27 L77 21 L72 17 L78 16 Z" fill="var(--color-red)" opacity="0.3" transform="translate(0, -7) scale(0.6)" data-astro-cid-j7pv25f6></path> </svg> </div> ${renderComponent($$result2, "Artists", $$Artists, { "artists": artists, "data-astro-cid-j7pv25f6": true })} <div class="section-divider" aria-hidden="true" data-astro-cid-j7pv25f6> <svg width="100%" height="20" preserveAspectRatio="none" viewBox="0 0 1200 20" fill="none" data-astro-cid-j7pv25f6> <path d="M0 10 Q75 5 150 10 T300 10 T450 10 T600 10 T750 10 T900 10 T1050 10 T1200 10" stroke="var(--color-ink)" stroke-width="0.5" opacity="0.1" data-astro-cid-j7pv25f6></path> </svg> </div> ${renderComponent($$result2, "Visit", $$Visit, { "info": info, "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "Footer", $$Footer, { "info": info, "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Lightbox", $$Lightbox, { "data-astro-cid-j7pv25f6": true })}  <div class="mobile-cta" id="mobileCta" data-astro-cid-j7pv25f6> <a href="#artists" class="btn btn--red mobile-cta__btn" data-astro-cid-j7pv25f6>Book a Tattoo</a> </div> ` })}  ${renderScript($$result, "/Users/nickuhlenhuth/Desktop/too-bad/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/nickuhlenhuth/Desktop/too-bad/src/pages/index.astro", void 0);

const $$file = "/Users/nickuhlenhuth/Desktop/too-bad/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
