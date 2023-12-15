<template>
  <div
    id="echart"
    ref="chartRef"
    :style="{ width: props.width, height: props.height }"
  ></div>
</template>

<script setup>
import echarts from "../config/echartsConfig.js";
const props = defineProps({
  option: Object,
  theme: String,
  // 宽高必须指定 否则无法显示
  width: { type: String,defaut:'200px', required: true },
  height: { type: String,default:'200px', required: true },
  loading: Boolean, // 受控
  onMoseover: (...args) => {},
  onMouseout: (...args) => {},
});
const chartRef = ref(null);
const chartInstance = ref();
// 绘制
const draw = () => {
  if (chartInstance.value) {
    chartInstance.value.setOption(props.option, { notMerge: true });
  }
};
// 初始化
const init = () => {
  if (!chartRef.value) return;
  // 校验Dom节点上是否已挂载了ECharts实例，只有未挂载的时候才初始化
  chartInstance.value = echarts.getInstanceByDom(chartRef.value);
  if (!chartInstance.value) {
    // 不能使用ref或者reactive代理第三方类实例，实例会被转成代理对象从而影响echarts对内部属性的访问
    chartInstance.value = markRaw(
      echarts.init(chartRef.value, props.theme, {
        renderer: "canvas",
      })
    );
  }
  // 绑定mouseover事件
  if (props.onMoseover) {
    chartInstance.value.on("mouseover", (event) => {
      props.onMoseover(event, chartInstance.value, props.option);
    });
  }
  // 绑定 mouseout 事件：
  if (props.onMouseout) {
    chartInstance.value.on("mouseout", (event) => {
      props.onMouseout(event, chartInstance.value, props.option);
    });
  }
  draw();
};
// 窗口自适应并开启过渡动画
const resize = () => {
  if (chartInstance.value) {
    console.log(
      'resize'
    );
    chartInstance.value.resize({ animation: { duration: 300 } });
  }
};
// 自适应防抖
const debouncedResize = useDebounceFn(resize, 500, { maxWait: 800 });
watch(props, () => {
  draw();
});
watch(
  () => props.loading,
  (loading) => {
    loading
      ? chartInstance.value.showLoading()
      : chartInstance.value.hideLoading();
  }
);
onMounted(() => {
  init();
  window.addEventListener("resize", debouncedResize);
});
onBeforeUnmount(() => {
  // 组件实例被销毁之后，销毁实例，避免内存泄漏
  chartInstance.value && chartInstance.value.dispose();
  window.removeEventListener("resize", debouncedResize);
});
defineExpose({
  getCurrentInstance: () => chartInstance.value,
  resize,
  draw,
});
</script>

<style lang="scss" scoped>
</style>
