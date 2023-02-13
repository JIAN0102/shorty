/*
 * @Author:Jim Chen
 * @Date:2023-02-13 14:54:55
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-13 15:05:42
 * @Description:
 */
type UserAgent = {
  userAgent: string;
  ip?: string;
};

export function useUserAgent(): UserAgent | null {
  if (process.server) {
    const nuxtApp = useNuxtApp();

    const req = nuxtApp.ssrContext?.event.node.req;

    if (nuxtApp.ssrContext && req) {
      const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
      const userAgent = req.headers["user-agent"];

      return {
        userAgent: userAgent || "",
        ip: typeof ip === "string" ? ip : ip?.[0],
      };
    }
  } else {
    return {
      userAgent: navigator.userAgent,
    };
  }

  return null;
}
