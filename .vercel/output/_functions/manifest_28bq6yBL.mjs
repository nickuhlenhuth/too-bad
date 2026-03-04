import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_B54mHHzv.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_ClyoYn2H.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/nickuhlenhuth/Desktop/too-bad/","cacheDir":"file:///Users/nickuhlenhuth/Desktop/too-bad/node_modules/.astro/","outDir":"file:///Users/nickuhlenhuth/Desktop/too-bad/dist/","srcDir":"file:///Users/nickuhlenhuth/Desktop/too-bad/src/","publicDir":"file:///Users/nickuhlenhuth/Desktop/too-bad/public/","buildClientDir":"file:///Users/nickuhlenhuth/Desktop/too-bad/dist/client/","buildServerDir":"file:///Users/nickuhlenhuth/Desktop/too-bad/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"site":"https://toobadtattoostudio.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/nickuhlenhuth/Desktop/too-bad/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/nickuhlenhuth/Desktop/too-bad/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_28bq6yBL.mjs","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DvjMlPv0.mjs","@astrojs/react/client.js":"_astro/client.eUMmiz80.js","/Users/nickuhlenhuth/Desktop/too-bad/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BLUjxjGr.js","/Users/nickuhlenhuth/Desktop/too-bad/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DS0Od7PV.js","/Users/nickuhlenhuth/Desktop/too-bad/src/components/Nav.astro?astro&type=script&index=0&lang.ts":"_astro/Nav.astro_astro_type_script_index_0_lang.ChPzygc2.js","/Users/nickuhlenhuth/Desktop/too-bad/src/components/Lightbox.astro?astro&type=script&index=0&lang.ts":"_astro/Lightbox.astro_astro_type_script_index_0_lang.Bd6Bu7cu.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/sanity/lib/_chunks-es/resources2.js":"_astro/resources2.CuA-AQMO.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/sanity/lib/_chunks-es/resources7.js":"_astro/resources7.BHmPcXiL.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/sanity/lib/_chunks-es/resources6.js":"_astro/resources6.F4TWBGWE.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/sanity/lib/_chunks-es/VideoPlayer.js":"_astro/VideoPlayer.Cz8NXLQg.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/sanity/lib/_chunks-es/resources4.js":"_astro/resources4.ktR1of5P.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/sanity/lib/_chunks-es/resources.js":"_astro/resources.WhFkcqEB.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/sanity/lib/_chunks-es/resources5.js":"_astro/resources5.D3IPBzmR.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/sanity/lib/_chunks-es/resources3.js":"_astro/resources3.CsuKY0KU.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.js":"_astro/ViteDevServerStopped.BeabtL6n.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/refractor/lang/bash.js":"_astro/bash.CG6S6Dwl.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/refractor/lang/json.js":"_astro/json.unC8z3UW.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/refractor/lang/jsx.js":"_astro/jsx.B6rkBCHQ.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/refractor/lang/typescript.js":"_astro/typescript.TImZN0qJ.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/refractor/lang/javascript.js":"_astro/javascript.BJ-GTedN.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.DkM6p5eK.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.BNioXz4n.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/react-refractor/dist/index.js":"_astro/index.3hTWlXj8.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/sanity/lib/_chunks-es/index2.js":"_astro/index2.DYoSGbyz.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/sanity/lib/_chunks-es/index3.js":"_astro/index3.Cujmhtj8.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/sanity/lib/_chunks-es/index4.js":"_astro/index4.DGI9jVf5.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/sanity/lib/_chunks-es/resources8.js":"_astro/resources8.NxKEJTc7.js","/Users/nickuhlenhuth/Desktop/too-bad/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.BnJw6X2h.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/nickuhlenhuth/Desktop/too-bad/src/pages/index.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"mobileCta\"),s=document.getElementById(\"top\");e&&s&&new IntersectionObserver(([t])=>{t.isIntersecting?e.classList.remove(\"visible\"):e.classList.add(\"visible\")},{threshold:0}).observe(s);"],["/Users/nickuhlenhuth/Desktop/too-bad/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const o=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add(\"visible\"),o.unobserve(t.target))})},{threshold:.1,rootMargin:\"0px 0px -50px 0px\"});document.querySelectorAll(\".animate-in\").forEach(e=>{o.observe(e)});document.querySelectorAll('a[href^=\"#\"]').forEach(e=>{e.addEventListener(\"click\",t=>{t.preventDefault();const r=document.querySelector(e.getAttribute(\"href\"));r&&r.scrollIntoView({behavior:\"smooth\",block:\"start\"})})});"],["/Users/nickuhlenhuth/Desktop/too-bad/src/components/Nav.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"nav\");window.addEventListener(\"scroll\",()=>{window.scrollY>50?o?.classList.add(\"scrolled\"):o?.classList.remove(\"scrolled\")});const t=document.querySelector(\".nav__toggle\"),n=document.querySelector(\".nav__links\");t?.addEventListener(\"click\",()=>{const e=t.getAttribute(\"aria-expanded\")===\"true\";t.setAttribute(\"aria-expanded\",String(!e)),n?.classList.toggle(\"open\"),document.body.style.overflow=e?\"\":\"hidden\"});n?.querySelectorAll(\"a\").forEach(e=>{e.addEventListener(\"click\",()=>{t?.setAttribute(\"aria-expanded\",\"false\"),n?.classList.remove(\"open\"),document.body.style.overflow=\"\"})});"],["/Users/nickuhlenhuth/Desktop/too-bad/src/components/Lightbox.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"lightbox\"),o=e?.querySelector(\".lightbox__img\"),d=e?.querySelector(\".lightbox__close\");function l(t,n){!e||!o||(o.src=t,o.alt=n,e.hidden=!1,e.offsetHeight,e.setAttribute(\"data-open\",\"\"),document.body.style.overflow=\"hidden\")}function c(){e&&(e.removeAttribute(\"data-open\"),document.body.style.overflow=\"\",setTimeout(()=>{e.hidden=!0,o&&(o.src=\"\")},300))}document.querySelectorAll(\"[data-lightbox]\").forEach(t=>{t.addEventListener(\"click\",()=>{const n=t.dataset.src||\"\",i=t.dataset.alt||\"\";l(n,i)})});d?.addEventListener(\"click\",c);e?.addEventListener(\"click\",t=>{t.target===e&&c()});document.addEventListener(\"keydown\",t=>{t.key===\"Escape\"&&c()});"]],"assets":["/_astro/index.cyg6o2LI.css","/favicon.ico","/favicon.svg","/_astro/VideoPlayer.Cz8NXLQg.js","/_astro/ViteDevServerStopped.BeabtL6n.js","/_astro/bash.CG6S6Dwl.js","/_astro/browser.Bx-dz3bs.js","/_astro/browser.De2YF0rA.js","/_astro/client.Dq0OWfUj.js","/_astro/client.eUMmiz80.js","/_astro/index.3hTWlXj8.js","/_astro/index2.DYoSGbyz.js","/_astro/index3.Cujmhtj8.js","/_astro/index4.DGI9jVf5.js","/_astro/javascript.BJ-GTedN.js","/_astro/json.unC8z3UW.js","/_astro/jsx.B6rkBCHQ.js","/_astro/refractor.BNioXz4n.js","/_astro/resources.WhFkcqEB.js","/_astro/resources2.CuA-AQMO.js","/_astro/resources3.CsuKY0KU.js","/_astro/resources4.ktR1of5P.js","/_astro/resources5.D3IPBzmR.js","/_astro/resources6.F4TWBGWE.js","/_astro/resources7.BHmPcXiL.js","/_astro/resources8.NxKEJTc7.js","/_astro/stegaEncodeSourceMap.DkM6p5eK.js","/_astro/studio-component.BnJw6X2h.js","/_astro/studio-component.DA67tP__.js","/_astro/typescript.TImZN0qJ.js","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"2z88tBWwkH/4pBZNsN6JWLfqRkquApX4eZNQS3dQBjA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
