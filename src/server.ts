import { createServer } from "node:http";
import { readDb } from "./storage/fileStorage.js";
import { setCorsHeaders } from "./utils/cors.js";

const PORT = 8080;

const server = createServer((req, res) => {
  setCorsHeaders(res);

  // Preflight
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const { method, url } = req;

  // GET /api/todo-lists
  if (method === "GET" && url === "/api/todo-lists") {
    const db = readDb();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(db.todoLists));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Not found" }));
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});