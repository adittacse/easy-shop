import { NextResponse } from 'next/server';
import { jwtVerify } from "jose";

// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {
    const { pathname } = request.nextUrl;
    try {
        let cookie = request.cookies.get("jwt-token")?.value;
        if (!cookie || !cookie.startsWith("Bearer ")) {
            throw new Error("Invalid token!");
        }
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        await jwtVerify(cookie.split("Bearer ")[1], secret);
        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL(`/login?redirectUrl=${pathname}`, request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/profile/:path*', '/dashboard/:path*'],
}