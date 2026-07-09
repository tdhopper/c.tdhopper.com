// Replicates Netlify's force-200 rewrite of /podcast/feed to the Anchor.fm RSS feed.
export async function onRequest() {
  const upstream = await fetch("https://anchor.fm/s/10e345fbc/podcast/rss");
  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      "content-type": upstream.headers.get("content-type") || "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}
