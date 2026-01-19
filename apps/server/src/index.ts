import { Elysia } from "elysia";

const app = new Elysia()
  .get("/health", () => ({ ok: true }))
  .listen(3001);

console.log("🧠 Server running at http://localhost:3001");
