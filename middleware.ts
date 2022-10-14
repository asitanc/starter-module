import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
    const shouldHandleLocale =
        !PUBLIC_FILE.test(request.nextUrl.pathname) &&
        !request.nextUrl.pathname.includes('/api/') &&
        request.nextUrl.locale === 'default';

    const url = request.nextUrl.clone()
    url.pathname = `/${request.nextUrl.pathname}`

    return shouldHandleLocale
        ? NextResponse.rewrite(url)
        : undefined;
}
