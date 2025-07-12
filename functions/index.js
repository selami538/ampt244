export async function onRequest({ request }) {
  const url = new URL(request.url)

  if (url.pathname.startsWith('/stream')) {
    // proxy mantığı
    let path = url.pathname.replace("/stream", "")
    let search = url.search
    let last = path + search

    let response = await fetch("https://esraerol2.volestream.lat/" + last)

    const headers = new Headers(response.headers)
    headers.delete("set-cookie")
    headers.set("Access-Control-Allow-Origin", "*")

    return new Response(response.body, {
      status: response.status,
      headers
    })
  }

  // diğer tüm yollar için 404 atma (ya da fallback)
  return new Response("Not found", { status: 404 })
}
