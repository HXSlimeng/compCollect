<template>
  <div class="my_page">
    <!-- <div id="myecharts"></div> -->
    <div style="margin: 40px auto">
      <wl-gantt
        :data="elementData"
        end-date="2022-2-28"
        start-date="2022-02-01"
        dataType="monthAndDay"
        :columns="columns"
        use-real-time
        :contextMenuOptions="contextMenuOptions"
      ></wl-gantt>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      linedata: [150, 230, 224, 218, 135, 147, 260],
      elementData: [{}, {}],
      columns: [{ type: "name", minWidth: 200, colType: "expand" }],
      contextMenuOptions: [{ label: "任务名称", prop: "name" }],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 方法集合
  methods: {},
};
</script>

<style lang="less" scoped>
//@import url(); 引入公共css类
.my_page {
  width: 100vw;
}
#myecharts {
  height: 400px;
  width: 600px;
}
</style>
