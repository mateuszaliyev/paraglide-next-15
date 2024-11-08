import type { NextRequest } from "next/server";

import { middleware as paraglide } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const response = paraglide(request);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/image (image optimization files)
     * - _next/static (static files)
     * - api (API routes)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/image|_next/static|api|favicon.ico).*)",
  ],
};
