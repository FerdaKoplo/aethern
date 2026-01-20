import Elysia from "elysia";
import { auth } from "../service/auth.service";

export const authController = new Elysia({ prefix: "/api/auth" }).mount(
  auth.handler,
);
