import { NextResponse } from 'next/server.js';
import type { NextRequest } from 'next/server.js';

// 301 redirect from the old Vercel domain to the canonical domain, so Google
// consolidates all signals (and search results) onto portofolio.mudaku.my.id.
// The old host stays deployed on purpose — it must keep answering with this
// redirect, not a 404.
const OLD_HOST = 'damarkusumo.vercel.app';
const NEW_ORIGIN = 'https://portofolio.mudaku.my.id';

// request.nextUrl is unreliable for host checks: local `next start` normalizes
// it to the bind address (e.g. localhost) instead of the Host header, and on
// Vercel the headers are the source of truth anyway. x-forwarded-host wins
// over host because some platforms rewrite host to an internal address.
function getEffectiveHostname(request: NextRequest): string {
  const raw =
    request.headers.get('x-forwarded-host') ??
    request.headers.get('host') ??
    '';
  return raw.split(',')[0].trim().toLowerCase().split(':')[0];
}

// Note: no matcher — every path (HTML, assets, robots.txt, sitemap.xml) must
// redirect, and shared modules must not be imported here (see proxy docs).
//
// The explicit `next/server.js` specifier (instead of `next/server`) is
// deliberate: `next` ships no "exports" map, so plain Node ESM — which runs
// our test suite — cannot resolve the extensionless subpath. Next's bundler
// resolves both forms to the same file.
export function proxy(request: NextRequest) {
  if (getEffectiveHostname(request) === OLD_HOST) {
    const destination = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      NEW_ORIGIN
    );
    return NextResponse.redirect(destination, 301);
  }
}
