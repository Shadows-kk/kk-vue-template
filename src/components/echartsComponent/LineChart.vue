<template>
  <vue-echarts
    ref="lineRef"
    :option="options"
    :width="width"
    :height="height"
  ></vue-echarts>
</template>

<script setup>
const lineRef = ref(null);
const props = defineProps({
  width: { type: String, default: "200px" },
  height: { type: String, default: "200px" },
});
const options = {
  title: {
    text: "标题",
    triggerEvent: true,
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
};

const onMouseover = (chart, option) => {
  option.yAxis.nameTextStyle = {
    color: "#ccc",
  };
  chart.setOption(option);
};
// 鼠标移出，隐藏y轴 name
const onMouseout = (chart, option) => {
  option.yAxis.nameTextStyle.color = "transparent";
  chart.setOption(option);
};
defineExpose({
  lineRef,
});
</script>

<style lang="scss" scoped></style>
