<template>
  <div id="app">
  <transition @leave="leave" @enter="enter" @after-enter="afterEnter" name="transanima" mode="out-in">
      <router-view/>
  </transition>
    <div class="transItems">
      <div v-for="item in 10" :key="item" ref="transItem" class="transItem" :style="{ backgroundColor:transColor[item-1]}">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      transColor:[
        '#3341FF',
        '#3341FF',
        '#1C60E8',
        '#1C60E8',
        '#31A6FF',
        '#31A6FF',
        '#1BC2E8',
        '#1BC2E8',
        '#32FEE5',
        '#32FEE5',
      ]
    }
  },
  methods:{
    leave(el,done){
      let tween = this.$gsap.timeline()
      let transDom = this.$refs.transItem;
      // tween.to('.transItems',{x:0,duration:.6})
      transDom.forEach(item => {
        tween.to(item,{x:'-100vw',duration:.04})
      });
      setTimeout(() => {
        transDom.forEach(item => {
        tween.fromTo(item,.04,{x:'-100vw'},{x:'-200vw'});
      });
        done()
      }, 400);
    },
    enter(el,done){
      
    },
    afterEnter(el){
    },

  }
}
</script>
<style lang="less">
@import url('css/reset.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
body{
  background: #e2ded3;
}
.transItems{
  position: fixed;
  width: 100vw;
  height: 100%;
  top: 0;
  z-index: 100000;
  left: 100vw;
    .transItem{
      background-color: #5D5D5A;
      width: 100%;
      height: 10%;
    }
}
</style>
