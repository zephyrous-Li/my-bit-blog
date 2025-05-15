// 递归处理路由结构
function createRoutes(files, basePath = "") {
  return Object.entries(files).map(([filePath, component]) => {
    // 转换路径格式：src/views/about/index.vue → /about
    let routePath = filePath
      .replace("../views/", "")
      .replace(/\.vue$/, "") // ✅ 先去掉 .vue 后缀
      .replace(/index$/, "") // ✅ 替换 views/index → views/
      .replace(/\//g, "") // 可选：如果只剩 '/' 也可去除
      .replace(/\[(\w+)\]/, ":$1"); // ✅ 动态路由 [id] → :id

    // 处理动态参数
    const isDynamic = routePath.includes(":");
    const routeName = routePath
      .split("/")
      .map((part) => {
        if (isDynamic && part.startsWith(":")) {
          return part.replace(":", "");
        }
        return part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join("");

    const children = component.children
      ? createRoutes(component.children, `${basePath}/${routePath}`)
      : [];

    return {
      path: routePath ? `/${routePath}` : "/", // 特殊处理根路径
      name: routeName || "Home",
      component: component.default || component,
      children: children.length > 0 ? children : undefined,
    };
  });
}

// 主入口函数
export function autoImportRoutes() {
  const views = import.meta.glob("../views/**/*.vue", { eager: true });
  return createRoutes(views);
}
