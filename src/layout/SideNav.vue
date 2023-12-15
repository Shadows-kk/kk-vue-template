<template>
  <div class="nav">
    <template v-for="(item, index) in navList" :key="index">
      <div
        class="navItem"
        :class="{ actived: defaultFocus === item.path }"
        @click="handleClick(item)"
      >
        <span> {{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
const defaultFocus = ref("formModule");
const navList = [
  { icon: "formModule", title: "表单模块", path: "formModule" },
  { icon: "3DModule", title: "3D模块", path: "3DModule" },
  { icon: "echartsModule", title: "echarts", path: "echartsModule" },
];

const router = useRouter();
const handleClick = (item) => {
  defaultFocus.value = item.path;
  router.push(`/${item.path}`);
};
const route = useRoute();

onMounted(() => {
  const currentPath = route.path;
  defaultFocus.value = currentPath.split("/")[1];
});
</script>

<style lang="scss" scoped></style>
