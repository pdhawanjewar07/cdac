import http, { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const PORT = 5050;
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    // Recreate __dirname <Bcause of type="module" in typescript env>
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    // send file function
    const sendFile = (filePath) => {
        const fullPath = path.join(__dirname, "pages", filePath);
        fs.readFile(fullPath, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Server Error");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    };
    // root "/"
    if (url === "/" && method === "GET") {
        sendFile("root.html");
        return;
    }
    // home "/home"
    if (url === "/home" && method === "GET") {
        sendFile("home.html");
        return;
    }
    // about us "/aboutus" with POST only
    if (url === "/aboutus" && method === "POST") {
        sendFile("aboutus.html");
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
});
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
