<template>
  <div class="loginPage">
    <div class="loginPanel">
      <div class="title">kk-vue-template</div>
      <el-form class="formWrapper">
        <el-form-item label="账号">
          <el-input
            v-model="loginInfo.account"
            placeholder="请输入账号"
            clearable
          />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="loginInfo.passWord"
            placeholder="请输入密码"
            type="password"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import Mock from "mockjs";
import localCache from "@/plugins/cache";
import { useRoute } from "vue-router";
const loginInfo = reactive({
  account: "",
  passWord: "",
});
const router = useRouter();

const Random = Mock.Random;
const login = async () => {
  ElMessage.success("登录成功");
  localCache.setCache("kk-template-token", Random.word());
  router.push("/");
};
</script>

<style lang="scss" scoped></style>
