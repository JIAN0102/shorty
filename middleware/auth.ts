/*
 * @Author:Jim Chen
 * @Date:2023-02-13 09:58:52
 * @LastEditors:Jim Chen
 * @LastEditTime:2023-02-13 14:06:08
 * @Description:
 */
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();

  if (!user.value) {
    return navigateTo("/auth");
  }
});
