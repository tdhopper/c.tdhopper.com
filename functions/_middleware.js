// Host-level redirects previously handled by Netlify (www force-301, podcast subdomain).
export async function onRequest(context) {
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
