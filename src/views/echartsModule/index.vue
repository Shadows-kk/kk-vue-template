<template>
  <div class="echartsWrapper">
    <div class="chart-item">
      <LineChart ref="lcRef" :width="width" :height="height" />
    </div>
    <div class="chart-item">
      <PieChart />
    </div>
    <div class="chart-item">
      <BarChart />
    </div>
  </div>
  <el-button @click="changeSize">修改图表尺寸</el-button>
  <el-button @click="resetSize">还原图表尺寸</el-button>
</template>

<script setup>
const lcRef = ref(null);
const width = ref("200px");
const height = ref("200px");
const changeSize = () => {
  width.value = "400px";
  height.value = "400px";

  setTimeout(() => {
    lcRef.value.lineRef.resize();
  });
};
const resetSize = () => {
  width.value = "200px";
  height.value = "200px";
  setTimeout(() => {
    lcRef.value.lineRef.resize();
  });
};
</script>

<style lang="scss" scoped>
.echartsWrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.chart-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30vh;
  height: 300px;
}
</style>
