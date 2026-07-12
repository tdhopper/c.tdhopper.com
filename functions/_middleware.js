// Keep Cloudflare preview deployments (and the *.pages.dev production alias)
// out of search indexes, while the real custom domain stays fully indexable.
async function noindexPagesDev(context) {
  const response = await context.next();
  const host = new URL(context.request.url).hostname;
  if (host.endsWith(".pages.dev")) {
    const headers = new Headers(response.headers);
    headers.set("X-Robots-Tag", "noindex, nofollow");
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }
  return response;
}

// Host-level redirects previously handled by Netlify (www force-301, podcast subdomain).
async function hostRedirects(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "www.tdhopper.com") {
    url.hostname = "tdhopper.com";
    return Response.redirect(url.toString(), 301);
  }
  if (url.hostname === "podcast.tdhopper.com") {
    return Response.redirect(`https://tdhopper.com/podcast${url.pathname}${url.search}`, 301);
  }
  return context.next();
}

export const onRequest = [noindexPagesDev, hostRedirects];
