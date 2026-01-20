import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../lib/prisma.client";
import { TRUSTED_ORIGINS } from "../lib/process.env";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  trustedOrigins: TRUSTED_ORIGINS,

  emailAndPassword: {
    enabled: true,
  },
});
