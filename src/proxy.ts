import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale } from "./i18n/config";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}`;
  return NextResponse.redirect(url, 307);
}

export const config = { matcher: ["/"] };
