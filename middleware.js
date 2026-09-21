import { NextResponse } from 'next/server';

export function middleware(request) {
	const host = request.headers.get('host') || '';

	const requestHeaders = new Headers(request.headers);
	requestHeaders.set('x-pathname', request.nextUrl.pathname);

	const response = NextResponse.next({ request: { headers: requestHeaders } });

	if (host.endsWith('.latzwebdesign.com') || host.endsWith('.vercel.app')) {
		response.headers.set('X-Robots-Tag', 'noindex, nofollow');
	}

	return response;
}

export const config = { matcher: '/:path*' };