export async function onRequest(context) {
  const { request } = context;
  const parsedUrl = new URL(request.url);
  let path = parsedUrl.pathname.replace("/stream", "");
  let search = parsedUrl.search;
  let last = path + search;

  let response = await fetch("https://esraerol2.volestream.lat/" + last);

  const headers = new Headers(response.headers);
  headers.delete("set-cookie");
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");

  return new Response(response.body, {
    status: response.status,
    headers,
  });
}
