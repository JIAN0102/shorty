/*
 * @Author:Jim Chen
 * @Date:2023-02-13 13:37:59
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-13 14:55:39
 * @Description:
 */
import { sendRedirect } from "h3";

export function useExternalRedirect(url: string, code: number = 302) {
  // Check if the url is valid url
  if (/^(https?:\/\/)/.test(url)) {
    // Check if it is inside server
    if (process.server) {
      const nuxtApp = useNuxtApp();

      if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
        return nuxtApp.callHook("app:redirected").then(() => {
          if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
            return sendRedirect(nuxtApp.ssrContext.event, url, code);
          }
        });
      }
    } else {
      window.location.href = url;
    }
  } else {
    throw new Error("Invalid url");
  }
}
