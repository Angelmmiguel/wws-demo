/**
 * Builds a reply to the given request
 */
const reply = (request) => {
    // Body response
    const body = `<!DOCTYPE html>
  <head>
    <title>Wasm Workers Server</title>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta charset="UTF-8">
  </head>
  <body>
    <main>
      <h1>Hello from Wasm Workers Server 👋</h1>
      <p>This is a branch in development!</p>
      <pre><code>Replying to ${request.url}
  Method: ${request.method}
  User Agent: ${request.headers.get("user-agent")}
  Payload: ${request.body || "-"}</code></pre>
    </main>
  </body>`;

    return new Response(body);
}

// Subscribe to the Fetch event
addEventListener("fetch", event => {
    return event.respondWith(reply(event.request));
});
