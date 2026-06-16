const ALLOWED_ORIGIN = "http://localhost:3000";

export function setCorsHeaders(res: import("node:http").ServerResponse): void {
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, API-KEY");
}

