import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
	const session = cookies().get("session");

	if (request.nextUrl.pathname.startsWith("/_next")) {
		return NextResponse.next();
	}

	if (!request.nextUrl.pathname.startsWith("/login") && !session) {
		return Response.redirect(new URL("/login", request.url));
	}
}
