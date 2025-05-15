import { createRouter, createWebHistory } from "vue-router";
import { autoImportRoutes } from "../utils/autoRoutes";
console.log(autoImportRoutes());
const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...autoImportRoutes(),
    // 可在此添加手动配置的特殊路由
  ],
});
export default router;
