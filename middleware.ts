import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/src/lib/supabase/middleware";

// Routes that don't require authentication
const PUBLIC_ROUTES = ["/login"];

// Routes that require authentication
const PROTECTED_PREFIXES = ["/admin", "/api/cms", "/api/auth/users"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if this is a protected route
  const isProtectedRoute = PROTECTED_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix),
  );

  // Check if this is a public route (like login)
  const isPublicRoute = PUBLIC_ROUTES.some((route) => pathname === route);

  // If not a protected route, just update session and continue
  if (!isProtectedRoute) {
    const { supabaseResponse } = await updateSession(request);
    return supabaseResponse;
  }

  // Get the current user
  const { user, supabaseResponse } = await updateSession(request);

  // If it's the login page and user is authenticated, redirect to admin
  if (isPublicRoute && user) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // If it's a protected route and user is not authenticated
  if (!isPublicRoute && !user) {
    // For API routes, return 401
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    // For admin pages, redirect to login
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
