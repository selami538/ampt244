function translateResponseLocation(headers) {
  const newHeaders = new Headers(headers);
 //Delete Cloudflare default access control allow origin hea12dersssa
  if (headers.has("*")) {
       newHeaders.delete("*")       
  }
  newHeaders.delete("*") 
  newHeaders.delete("set-cookie")
 //Now add our domain access control allossw origin 234d
  newHeaders.set("Access-Control-Allow-Origin","*")       
  return newHeaders;
}

async function handleRequest(request) {
  const parsedUrl = new URL(request.url)
  let path = parsedUrl.pathname.replace("/stream","")
  let search = parsedUrl.search
  var last = path + search

  let response = await fetch("https://esraerol2.volestream.lat/" + last)

  return new Response(
        response.body,
        {
            status: response.status,
          
            headers: translateResponseLocation(response.headers)
        }
    )
  
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
}).
