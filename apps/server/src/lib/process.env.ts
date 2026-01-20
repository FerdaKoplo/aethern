const trustedOriginsRaw = process.env.BETTER_AUTH_TRUSTED_ORIGINS;

if (!trustedOriginsRaw) {
  throw new Error("Environtment Better Auth Is Missing");
}

export const TRUSTED_ORIGINS = trustedOriginsRaw.split(",");
