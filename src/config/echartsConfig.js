import * as echarts from "echarts/core";
import { LineChart,PieChart,BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
// 引入标签自动布局
import { LabelLayout } from "echarts/features";
// 注册组件
echarts.use([
  LineChart,
  PieChart,
  BarChart,
  CanvasRenderer,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LabelLayout,
]);
export default echarts;
