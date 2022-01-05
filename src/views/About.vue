<template>
  <div class='my_page'>
    <!-- <div id="myecharts"></div> -->
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      linedata:[150, 230, 224, 218, 135, 147, 260],
    }
  },
  computed: {},
  watch: {},
  created () {
    
  },
  mounted () {
    /* let Lecharts = this.$echarts.init(document.querySelector('#myecharts'));
    let options = {
      animation:false,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value',
        data:[0, 20, 40, 60, 80, 100]
      },
      series: [
        {
          data: this.linedata,
          type: 'line',
          smooth: true
        }
      ]
    }
    Lecharts.setOption(options);
    setInterval(() => {
      this.linedata.push( ~~(Math.random()*100));
      this.linedata.shift();
      Lecharts.setOption({
        series:[{
          data:this.linedata
        }]
      })
    }, 2000); */
    
  },
  beforeCreate () { }, // 生命周期 - 创建之前
  beforeMount () { }, // 生命周期 - 挂载之前
  beforeUpdate () { }, // 生命周期 - 更新之前
  updated () { }, // 生命周期 - 更新之后
  beforeDestroy () { }, // 生命周期 - 销毁之前
  destroyed () { }, // 生命周期 - 销毁完成
  activated () { }, // 如果页面有keep-alive缓存功能，这个函数会触发
  // 方法集合
  methods: {

  }
}
</script>

<style lang='less' scoped>
//@import url(); 引入公共css类
  #myecharts{
    height: 400px;
    width: 600px;
  }
</style>

