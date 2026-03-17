import http, { IncomingMessage, ServerResponse } from "http";

const PORT: number = 5050;

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse): void => {
    const url: string | undefined = req.url;
    const method: string | undefined = req.method;

    // ROOT "/"
    if (url === "/" && method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Root API</h1>");
      return;
    }

    // "/index"
    if (url === "/index" && method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Index Page</h1>");
      return;
    }

    // "/home"
    if (url === "/home" && method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Home Page</h1>");
      return;
    }

    // "/aboutus" with POST only
    if (url === "/aboutus" && method === "POST") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>About Us</h1>");
      return;
    }

    // Method not allowed for /aboutus
    if (url === "/aboutus" && method !== "POST") {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Method Not Allowed");
      return;
    }

    // Not found
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route Not Found");
  }
);

server.listen(PORT, (): void => {
  console.log(`Server running at http://localhost:${PORT}`);
});

