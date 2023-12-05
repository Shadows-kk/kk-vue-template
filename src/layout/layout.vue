<template>
  <el-container class="admin_container admin-module">
    <el-aside width="260px" class="aside_style column-space-center">
      <div class="logo column-center">
        <div class="title">kk-template</div>
        <div class="subTitle">功能展示模版</div>
      </div>
      <SideNav></SideNav>
      <div class="user column-center" @click="logout">
        <el-avatar :icon="UserFilled" />
        <div class="subTitle">{{ username }}</div>
      </div>
    </el-aside>
    <el-main class="main_style">
      <div class="container">
        <router-view />
      </div>
    </el-main>
  </el-container>
</template>
<script setup>
import { UserFilled } from "@element-plus/icons-vue";
import SideNav from "./SideNav.vue";
import showMsg from "@/plugins/showMsg.jsx";
const router = useRouter();
const username = ref("程独秀");
const logout = () => {
  showMsg("此操作将退出登录，是否继续", (close) => {
    router.push("/login");
    close();
  });
};
onMounted(() => {
  window.document.documentElement.setAttribute("root-module", "admin");
});
onUnmounted(() => {
  window.document.documentElement.removeAttribute("root-module");
});
</script>

<style lang="scss" scoped>
.btnWrapper {
  .item {
    cursor: pointer;

    width: 100%;
    text-align: center;
    padding: 5px 0;
    &:hover {
      background-color: #eee;
    }
  }
}
</style>
