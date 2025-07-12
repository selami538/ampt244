export async function onRequest({ request }) {
  const url = new URL(request.url);
  const path = url.searchParams.get("path");
  if (!path) return new Response("Path param missing", { status: 400 });

  const targetUrl = `https://fcdnals.johntaylors029.workers.dev/hls/${path}`;
  const res = await fetch(targetUrl);
  return new Response(res.body, {
    status: res.status,
    headers: res.headers,
  });
}
