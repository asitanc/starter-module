import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request) {
    const shouldHandleLocale =
        !PUBLIC_FILE.test(request.nextUrl.pathname) &&
        !request.nextUrl.pathname.includes('/api/') &&
        request.nextUrl.locale === 'default';

    const url = request.nextUrl.clone()
    url.pathname = `/cs${request.nextUrl.pathname}`

    return shouldHandleLocale
        ? NextResponse.rewrite(url)
        : undefined;
}