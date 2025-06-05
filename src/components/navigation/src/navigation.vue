<script name="navigation" setup>
const list = [
  {
    name: "关注",
    path: "/",
    subList: [
      { name: "关注1", path: "/" },
      { name: "关注2", path: "/" },
      { name: "关注3", path: "/" },
    ],
  },
  { name: "观点", path: "/" },
  { name: "研习", path: "/" },
  { name: "分享", path: "/" },
  { name: "行色", path: "/" },
  { name: "所闻", path: "/" },
  { name: "杂谈", path: "/" },
];
</script>

<template>
  <div class="top-nav">
    <!-- 左侧：Logo 和 首页 -->
    <div class="nav-section left">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <router-link to="/">首页</router-link>
    </div>

    <!-- 中间：导航菜单 -->
    <div class="nav-section center">
      <ul class="nav-menu">
        <li v-for="item in list" :key="item.name" class="menu-item">
          <router-link :to="item.path">{{ item.name }}</router-link>
          <ul class="sub-menu" v-if="item.subList">
            <li v-for="subItem in item.subList" :key="subItem.name">
              <router-link :to="subItem.path">{{ subItem.name }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- 右侧：搜索框 -->
    <div class="nav-section right">
      <img src="@/assets/hunt.png" alt="Logo" class="hunt" />
    </div>
  </div>
</template>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  padding: 0 20px;
  box-sizing: border-box;
}

.nav-section {
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
}

.left {
  justify-content: flex-start;
}

.left .logo {
  width: 30px; /* Logo 大小 */
  height: 30px;
  margin-right: 10px;
}

.left a,
.left .router-link-exact-active {
  color: #232323;
  text-decoration: none;
  margin-left: 10px;
}

.center {
  flex: 1;
  justify-content: center;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 20px; /* 菜单项间距 */
}

.nav-menu li a,
.nav-menu li .router-link-exact-active {
  color: #333;
  text-decoration: none;
}

.right {
  justify-content: flex-end;
}
.right .hunt {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.search-icon {
  font-size: 18px;
  cursor: pointer;
}

/* 二级菜单样式 */
.menu-item {
  position: relative;
}

.sub-menu {
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 100px;
  z-index: 1;
  top: 130%;
  left: 50%; /* 水平居中 */
  transform: translateX(-50%); /* 水平居中 */
  padding: 10px 0;
  margin-top: 10px; /* 与一级菜单的间距 */
}
.sub-menu::before {
  content: "";
  position: absolute;
  top: -10px; /* 位于菜单上方 */
  left: 50%;
  transform: translateX(-50%);
  border-width: 0 10px 10px;
  border-style: solid;
  border-color: transparent transparent hsla(0, 0%, 15%, 0.07); /* 小三角样式 */
}
.sub-menu li {
  padding: 8px 16px;
}

.sub-menu li:hover {
  background-color: #f1f1f1;
}

.menu-item:hover .sub-menu {
  display: block;
}
</style>
