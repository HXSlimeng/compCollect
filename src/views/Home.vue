<template>
  <div class="home" ref="topApp">
    <nav class="navbar">
      <div class="myName">
          <div>HXSlimeng</div>
      </div>
      <ul class="navItem" @click="showNavBar()" >
        <a v-for="item,index in navItems" :key="index" :class="{liActive:item.active}" @click="resetActive(index)" ><li>{{item.title}}</li></a>
      </ul>
      <div class="menuFlow" @click="showNavBar()">
        <svg-icon icon-class="menu"></svg-icon>
      </div>
    </nav>    <div class="scrollElement"></div>
    <div class="contact" v-show="false">
      <div class="github">
        <a href="https://github.com/HXSlimeng">
        <svg-icon icon-class="github"></svg-icon>
        </a>
      </div>
      <div class="weChat" @click="showQrcodeAct()" >
        <svg-icon icon-class="wechat"></svg-icon>
        <div class="qrcode">
          <img src="../assets/QRcode.jpg" width="200" height="200" alt="" draggable="false">
        </div>
      </div>
      <div class="email">
        <svg-icon icon-class="email"></svg-icon>
      </div>
    </div>
    <div class="main">
      <div class="firstPage snap_item">
        <div class="wholeAva">
           <svg-icon icon-class="leftTo" class="leftToIcon"></svg-icon>
            <div class="avator" @click="pushAvator">
              <img :src="require('../assets/QRcode.jpg')" alt="" >
            </div>
           <svg-icon icon-class="rightTo" class="rightToIcon"></svg-icon>
        </div>
        <div class="helloWorld">
          <h1><span v-for="item,index in helloText1" :key="index" class="helloText1">{{item}}</span></h1>
            <span v-for="item,index in helloText" :key="index" class="helloText">{{item}}</span>
          <!-- <span>——A Web Developer</span>  -->
        </div>
      </div>
      <div class="briefIntrod snap_item">
          <div id="botbox">
            <div class="startTag">self-introduction</div>
            <div class="flowTitle"><svg t="1640139222394" @click="hideCode" class="icon flowCode" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3717" xmlns:xlink="http://www.w3.org/1999/xlink" width="1.1rem" height="1.1rem"><defs></defs><path d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z" p-id="3718" fill="#fff"></path></svg>
                                  <span>const </span><span> object </span> = </div>
            <div class="introdMain">
              <div class="mymessage">
              <h3>关于我</h3>
                <section>
                    <div>{</div>
                    <div  v-for="item,index in myType" :key="index">
                      <svg-icon :icon-class="item.iconClass" class="infoSvg"/>
                      <span class="myKey">{{item.key}} </span>
                      <span class="myValue">{{"'" + item.value  + "'"}}</span>
                    </div>
                    <div>}</div>
                </section>
              </div>
              <div class="leftPrag">
                
                <section>
                <h3 >主要技术栈</h3>
                <p>目前主要的技术栈是vue,开发过原生微信小程序,喜欢尝试各种新技术,诸如<span class="newStack">{{newStack.join(',')}}</span>也在不断的学习当中...</p>
                </section>
                <div class="Stacks">
                  <svg-icon v-for="(item,index) in tecStack" :icon-class="item" class="tecSvgs" :key="index"/>
                </div>
              </div>
            </div>
              <div class="endTag">self-introduction</div>

          </div>
      </div>
      <div class="secIntrod snap_item">
        <div id="myProj">
          <div :class="{ projs:index%2 == 0,projs1:index%2 != 0 }" v-for="item,index in projArr" :key="index" @mouseenter="openProj" @mouseleave="closeProj">
            <div class="imageForProj">
              <img :src="item.projLink" alt="" height="180" width="180">
            </div>
            <div class="linkToProj">
              <button class="transferBtn" @click="enterProj">Go</button>
              <h2>{{item.projName}}</h2>
              <p>项目简介:{{item.projDescribe}}</p>
            </div>
              <div class="shadowBox1" :class="[index%2 == 0 ? 'shBox12' : 'shBox11']"></div>
              <div class="shadowBox2" :class="[index%2 == 0 ? 'shBox22' : 'shBox21']"></div>
          </div>
        </div>
      </div>
      <div class="threeItem snap_item">

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'Home',
  components: {
  },
  mounted(){
    let stackItem = document.querySelectorAll('.tecSvgs');
      stackItem.forEach((item,index)=>item.classList.add(this.tecStack[index]));

    let ScrollTrigger = this.$scrollTrigger;
    this.$gsap.registerPlugin(ScrollTrigger);
    const scene1 = this.$gsap.timeline();
        ScrollTrigger.create({
            animation: scene1,
            trigger: ".scrollElement",
            start: "30% top",
            end: "38% top",
            scrub: 1,
        });
    !this.getMatchMedia() && scene1.from(".projs1", { x:'-50vw',duration:3},0).from(".projs", { x:'50vw',duration:3},0)
    .from(".shBox12",{x:400,duration:0.3},3)
    .from(".shBox11",{x:-400,duration:0.3},3)
    .from(".shBox22",{x:600,duration:0.3},3.1)
    .from(".shBox21",{x:-600,duration:0.3},3.1)

    //代码块动画
    const scene2 = this.$gsap.timeline();
    ScrollTrigger.create({
            animation: scene2,
            trigger: ".scrollElement",
            start: "10% top",
            end: "25% top",
        });
    scene2.from('.startTag',{width:0,duration:2, ease:'steps(19)'})
    .to(".flowCode",{rotation: 90, duration:.6 },2)
    .from(".leftPrag",{y:-150,opacity:0, duration:.6 },2)
    .from(".mymessage",{y:-150,opacity:0, duration:.6 },2)
    // .to(".tecSvgs",{y:-100,x:-100,duration:.6})
    this.tecStack.forEach((val,index) => {
      scene2.from('.' + val,{y:-100,opacity:0,duration:.3, ease:'bounce'})

    })
    scene2.from(".endTag",{ width:0, duration:2, ease:'steps(20)'})

    // this.createWebGlElement();

  },
  data(){
    return{
      showQRcode:false,
      myType:[
        /* {
          key:'工作年限',
          value:'2年'
        }, */
        {
          key:'年龄',
          value:23,
          iconClass:'age'
        },
        {
          key:'职业',
          value:'前端工程师',
          iconClass:'job'
        },
        {
          key:'职业',
          value:'前端工程师',
          iconClass:'job'
        },
        {
          key:'职业',
          value:'前端工程师',
          iconClass:'job'
        },
        {
          key:'职业',
          value:'前端工程师',
          iconClass:'job'
        },
      ],
      projArr:[
        {
          projName:'web前端',
          projDescribe:'web前端项目的描述，web前端项目的描述，web前端项目的描述。',
          projLink:require('../assets/web.png')
        },
        {
          projName:'微信小程序',
          projDescribe:'微信小程序的描述，微信小程序的描述，微信小程序的描述。',
          projLink:require('../assets/wx.jpg')
        },
        {
          projName:'手机App',
          projDescribe:'手机App的描述，手机App的描述，手机App的描述。',
          projLink:require('../assets/app.png')
        },
        {
          projName:'PC客户端',
          projDescribe:'PC客户端的描述，PC客户端的描述，PC客户端的描述。',
          projLink:require('../assets/email.jpg')
        }
      ],
      showCode:true,
      navItems:[
        {
          title:'Hi',
          href:'.firstPage',
          active:true
        },
        {
          title:'个人简介',
          href:'#botbox',
          active:false
        },
        {
          title:'项目',
          href:'#myProj',
          active:false,
        },
        {
          title:'成就小demo',
          href:'#botbox',
          active:false
        },
      ],
      showTopBar:true,
      scrollItem:[
        '.firstPage',
        '.briefIntrod',
        '.secIntrod',
        '.briefIntrod'
      ],
      tecStack:[
        'vue',
        'wechatProj',
        'typescript',
        'JavaScript'
      ],
      newStack:['Vuetify','Vite','Gsap'],
      helloText1:'Hi~ 我是李孟',
      helloText:'——A Web Developer',
      T0:{}
    }
  },
  methods:{
    iconjump(str){
      this.$gsap.fromTo('.' + str, {duration:1,y:0},{ duration:1,y:20} )
    },
    getclass(index){
      return 'proj' + index;
    },
    hideCode(){
      if (this.showCode) {
          this.$gsap.to(".flowCode",{rotation: 0, duration:.6 })
          this.$gsap.to(".leftPrag",{y:-150,opacity:0, duration:.6 })
          this.$gsap.to(".mymessage",{y:-150,opacity:0, duration:.6 })
      }else{
          this.$gsap.to(".flowCode",{rotation: 90, duration:.6 })
          this.$gsap.to(".leftPrag",{y:0,opacity:1, duration:.6 })
          this.$gsap.to(".mymessage",{y:0,opacity:1, duration:.6 })
      }
      this.showCode = ! this.showCode
    },
    openProj(e){
      let btn = e.target.children[1].children[0];
      let parag = e.target.children[1].children[2];
      this.$gsap.to(btn, {y:-10,duration:0.4,opacity:1})
      this.$gsap.to(parag, {y:10,duration:0.4,opacity:1,delay:0.2})
    },
    closeProj(e){
      let btn = e.target.children[1].children[0];
      let parag = e.target.children[1].children[2];
      this.$gsap.to(btn, {y:10,duration:0.4,opacity:0})
      this.$gsap.to(parag, {y:-10,duration:0.4,opacity:0,delay:0.2})
    },
    resetActive(index){
      let param = document.querySelector(this.scrollItem[index]).offsetTop;
      this.navItems.forEach((item,itIndex)=>{
        item.active = itIndex == index ? true : false;
      })
      window.scrollTo({
        top:param,
        behavior:'smooth'
      })
    },
    showNavBar(){
      let matchMedia = this.getMatchMedia();
      if (!matchMedia) {
        return;
      }
      if (this.showTopBar) {
        this.$gsap.to('.navItem',{x:-210});
        this.$gsap.to('.menuFlow',{opacity:1});
      }else{
        this.$gsap.to('.navItem',{x:0});
        this.$gsap.to('.menuFlow',{opacity:.3});
      }
      this.showTopBar = !this.showTopBar;

    },
    getMatchMedia(){
      return window.matchMedia("(max-width:768px)").matches
    },
    scrollBehavier(){
      let param = document.querySelector('.secIntrod').offsetTop;
      window.scrollTo({
        top:param,
        behavior:'smooth'
      })
    },
    showQrcodeAct(){
      if (this.showQRcode) {
        this.$gsap.fromTo('.qrcode',{opacity:1,x:0},{x:-200,opacity:0})
      }else{
        this.$gsap.fromTo('.qrcode',{x:-200,opacity:0},{opacity:1,x:0})
      }
      this.showQRcode = !this.showQRcode;
    },
    pushAvator(){
      let avat = document.querySelector('.avator');
      let tween = this.$gsap.timeline();
      document.querySelector('.leftToIcon').style.display = 'none'
      document.querySelector('.rightToIcon').style.display = 'none'
      if (this.getMatchMedia()) {
        tween.to(avat,{y:'-25vh',height:'30vw',width:'30vw',borderRadius:'16vw',},0);
        }else{
        tween.to(avat,{x:'-40vw',y:'-25vh',height:'10vw',width:'10vw',borderRadius:'5vw',border:'0'},0);
        }
        tween.staggerFromTo(".helloText1", 0.5, 
          {ease: 'back.out(1.7)', opacity: 0, bottom: -80},
          {ease: 'back.out(1.7)', opacity: 1, bottom: 0}, 0.05)
        tween.staggerFromTo(".helloText", 0.5, 
          {ease: 'back.out(1.7)', opacity: 0, bottom: -80},
          {ease: 'back.out(1.7)', opacity: 1, bottom: 0}, 0.05)
    },
    enterProj(){
      this.$router.push('proj1')
    },
    createWebGlElement(){
      /**
     * 创建场景对象Scene
     */
    var scene = new THREE.Scene();
    /**
     * 创建网格模型
     */
    // var geometry = new THREE.SphereGeometry(60, 40, 40); //创建一个球体几何对象
    var geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
    var material = new THREE.MeshPhongMaterial({
      color:'red',
      specular:0x4488ee,
      shininess:12,
      transparent:true
    }); //材质对象Material
    var mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
    scene.add(mesh); //网格模型添加到场景中
    /**
     * 光源设置
     */
    //点光源
    var point = new THREE.PointLight(0xffffff);
    point.position.set(400, 200, 300); //点光源位置
    scene.add(point); //点光源添加到场景中
    //环境光
    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);
    // console.log(scene)
    // console.log(scene.children)
    /**
     * 相机设置
     */
    var width = window.innerWidth; //窗口宽度
    var height = window.innerHeight; //窗口高度
    var k = width / height; //窗口宽高比
    var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
    //创建相机对象
    var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
    camera.position.set(200, 300, 200); //设置相机位置
    camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
    /**
     * 创建渲染器对象
     */
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);//设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
    //执行渲染操作   指定场景、相机作为参数
    renderer.render(scene,camera);//执行渲染操作
    var controls = new THREE.OrbitControls(camera,renderer.domElement);//创建控件对象
    controls.addEventListener('change', () => {renderer.render(scene,camera)});//监听鼠标、键盘事件
    //坐标辅助线
    /* var axisHelper = new THREE.AxesHelper(250);
    scene.add(axisHelper); */
    }
    
  },
  
  computed:{
    itemName(){
      return function(tagName){
        return '<' + tagName + '>';
      } 
    },
    itemEndTag(){
      return function(tagName){
        return '</' + tagName + '>';
      } 
    }
  }
}
</script>
<style lang="less" scoped>
@borderRadiu:20px;
@boxShadow:rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
@bgcolor:#363434;
@maxWidth:~"(max-width:768px)";
@keyframes bottomLine {
  from{
    width: 0;
  }
  to{
    width: 100%;
  }
}
.snap_item{
  scroll-snap-align: center;
}
.home{
  display: flex;
  flex-direction: column;
}
.navbar{
  position: fixed;
  width: 100vw;
  display: flex;
  align-items: center;
  // background-color: rgba(32, 35, 42, .5);
  background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    box-shadow:inset 0 0 6px rgba(255, 255, 255, 0.2);
  z-index: 999;
  height: 10vh;
  .navItem{
    position: fixed;
    right: 10vw;
    font-size: 1.1rem;
    cursor: pointer;
    @media @maxWidth{
      display: flex;
      flex-direction: column;
      top: 11vh;
      right: -200px;
      z-index: 999;
      background:rgba(255, 255, 255, 0.2);
      -webkit-backdrop-filter: blur(8px);
      backdrop-filter: blur(8px);
      box-shadow:inset 0 0 6px rgba(255, 255, 255, 0.2);
    }
    li{
      height: 100%;
      display: block;
    }
    a{
      float: right;
      height: 9vh;
      line-height: 9vh;
      padding: 0px 2vw;
      border-bottom: solid 2px rgba(97, 218, 251,0);
      &:after{
          content: '';
          display: block;
          height: 3px;
          transform: translate(-50%);
          position: relative;
          left: 50%;
        }
      &:hover{
        color: rgb(97, 218, 251);
        &:after{
          @media @maxWidth {
            display: none;
          }
          content: '';
          display: block;
          height: 3px;
          background-color: rgb(97, 218, 251);
          animation: bottomLine .5s;
        }
      }
    }
    .liActive{
       &:after{
          content: '';
          display: block;
          height: 3px;
          background-color: rgb(97, 218, 251);
          position: relative;
        }
      color: rgb(97, 218, 251);
      @media @maxWidth{
        border-left: solid 2px rgb(97, 218, 251);
        border-bottom:none;
        &:after{
          display: none;
        }
      }
    }
  }
  .menuFlow{
    position: absolute;
    right: 5vw;
      opacity: .3;
    svg{
      display: none;
      @media @maxWidth {
        display: unset;
      }
    }
  }

}
#boxView{
  border-radius: 20px;
  width: 200px;
  height: 200px;
  background-color: @bgcolor;
  box-shadow: @boxShadow;
}

#botbox{
  padding: 20px;
  width: 80vw;
  min-height: 72vh;
  margin: auto;
  margin-top: 3vh;
  /* position: relative;
  top: 50px; */
  border-radius: 20px;
  // background-color: ;
  background-image: linear-gradient(#333333 , #5A5454);
  box-shadow:  @boxShadow;
  // z-index: -1;
  .flowTitle{
    font-size: 1.5rem;
    background-color: rgba(255, 255, 255, .1);
    svg{
      position: relative;
      top: .1rem;
      font-size: 1.1rem;
    }
    span{
      color: #E5C07B;
      &:nth-child(2){
        color:#C678DD;
      }
    }
  }
  .introdMain{
    display: flex;
    width: 100%;
    overflow: hidden;
    
    @media @maxWidth{
      flex-direction: column;
    }
    .mymessage{
      padding: 20px;
      font-weight: 100;
      display: block;
      width: 50%;
      display: flex;
      flex-direction: column;
      position: relative;
      white-space: nowrap;
      .infoSvg{
        height: 1rem;
      }
      section{
        margin: 20px;
      .myKey{
        color: #D19A66;
        &::after{
          content: '= ';
          color: white;
        }
      }
      .myValue{
        color: 	#98C379;
      }
      }
      div{
        min-width: 20vw;
        &:last-child{
          color: white;
        }
        &:first-child{
          color: white;
        }

      }
    }
    .leftPrag{
      margin: 20px;
      height: 50vh;
      .myOwnPic{
        opacity: .5;
        position: absolute;
        bottom: 0px;
        right: 0px;
      }
      section{
          // height: 30vh;
          font-family: PingFangSC-Ultralight, sans-serif;
        p{
          font-weight: 1;
          line-height: 5vh;
          margin: 20px;
          text-indent: 2em;
          .newStack{
            font-size: 1.5rem;
            color: #E5C07B;
            font-style: italic ;
            overflow: hidden;
          }
        }
      }
      .Stacks{
        height: 20vh;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        .tecSvgs{
          bottom: 0;
          width: 50px;
          height: 50px;
          opacity: 1;
        }
      }
    
    }
  }
  .startTag{
    max-width: 11.8rem;
    letter-spacing: .2rem;
    margin: 10px;
    color: #E06C75;
    overflow: hidden;
    white-space: nowrap;
    animation: /* typewriter 2s steps(4) .5s 1 normal both, */
    cursorblink 0.5s 4;
    &:before{
      content: '<';
      color: white;
    }
    &::after{
      content:'>';
      color: white;
    }
  }

@keyframes cursorblink {
  from {
    border-right: .1rem solid #dedede;
  }
  
  to {
    border-right: .1rem solid #666;
  }
}
@keyframes btnoutline {
            0%{
              outline: solid 2px #ff6d24;
            }
            100%{
              outline: solid 5px #ff6d24;
            }
          }
  .endTag{
    .startTag();
     max-width: 13.3rem;
     animation: cursorblink 0.5s 3s infinite;
    &:before{
      content: '< / ';
    }
  }
  
}
.contact{
  height: 400px;
  width: 60px;
  position: fixed;
  border-radius: 20px;
  box-shadow:  @boxShadow;
  top: 50%;
  transform: translateY(-50%) ;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
  background-color: @bgcolor;
}
.weChat{
  cursor: pointer;
  div{
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: @borderRadiu;
    position: absolute;
    left: 70px;
    bottom: 70px;
    box-shadow:  @boxShadow;
    border: solid 10px #4c587c;
    z-index: 2;
    opacity: 0;
  }
 image{
  width: 300px;
  height: 300px;
}
}
.scrollElement{
  position: absolute;
  height: 500vh;
  width: 20px;
}
@font-face {
  src: url("https://www.axis-praxis.org/fonts/webfonts/MetaVariableDemo-Set.woff2")
    format("woff2");
  font-family: "Meta";
  font-style: normal;
  font-weight: normal;
}
  .myName{
    @media  @maxWidth{
        /* margin-left: 30%;
        transform: translateX(-50%); */
      }
      margin-left: 20px;
    div{
      transition: all 0.5s;
      -webkit-text-stroke: 4px #a4adad;
      font-variation-settings: "wght" 900, "ital" 1;
      font-size: 3.5rem;
      /* text-align: center; */
      color: transparent;
      font-family: "Meta", sans-serif;
      text-shadow: 2px 2px 0px #262c3e,
        3px 3px 0px #262c3e,
        4px 4px 0px #262c3e,
        5px 5px 0px #262c3e,
        9px 9px 2px #262c3e;
      cursor: pointer;
      &:hover {
        font-variation-settings: "wght" 100, "ital" 0;
        text-shadow: none;
      }
    }
  }
.main{
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
  .firstPage{
    width: 100vw;
    height: 100vh;
    background: #5d5d5a;
    display: flex;
    align-items: center;
    justify-content: center;
    @keyframes avatorShadow{
      0%{
        box-shadow: 0px 0px 1vw;
      }
      50%{
        box-shadow: 0px 0px 3vw;
      }
      100%{
        box-shadow: 0px 0px 1vw;
      }
    }
    @keyframes leftTo {
      50%{
        transform: translateX(-1vw);
        opacity: .5;
      }
      100%{
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes rightTo {
      50%{
        transform: translateX(1vw);
        opacity: .5;
      }
      100%{
        transform: translateX(0);
        opacity: 1;
      }
    }
    .wholeAva{
      display: flex;
      position: absolute;
      z-index: 2;
      align-items: center;
      .leftToIcon{
        animation: leftTo 1.5s ease infinite;
      }
      .rightToIcon{
        animation: rightTo 1.5s ease infinite;
      }
      .avator{
          width: 20vw;
          height: 20vw;
          margin: 0 2vw;
          border-radius: 11vw;
          border: solid 1vw #857671;
          overflow: hidden;
          animation: avatorShadow 1.5s ease infinite;
          @media @maxWidth {
            width: 30vw;
            height: 30vw;
             border-radius: 16vw;
          }
          &:hover{
            box-shadow: 0px 0px 3vw #aa530e;
            animation: none;
          }
          img{
            width: inherit;
            height: inherit;
          }
      }
    }
    .helloWorld{
      text-align: center;
      h1{
        .helloText1{
          font-size: 4rem;
          color: #fff4e3;
          font-weight: 1;
          position: relative;
          opacity: 0;
          @media @maxWidth {
            font-size: 2rem;
          }
        }
      }
    .helloText{
      color: #ffa45c;
      position: relative;
      opacity: 0;
      /* span{
        display: block;
      } */
    }
    }
  }
  .briefIntrod{
    padding-top: 10vh;
  }
  .secIntrod{
    width: 100vw;
     padding-top: 10vh;
     overflow: hidden;
    #myProj{
      padding-top: 3vh;
      padding-bottom: 3vh;
      width: 90vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      .projs{
        width: 80vw;
        height: 22vh;
        display: flex;
        margin-top: 1vw;
        overflow: hidden;
        box-shadow: @boxShadow;
        background: @bgcolor;
        @media @maxWidth{
          flex-direction: column;
          height: 50vh;
        }
        .imageForProj{
          margin: 1vh;
          width: 20vh;
          height: 20vh;
          overflow: hidden;
          border-radius: 20px;
          img{
            transition: .6s;
            width: 20vh;
            height: 20vh;
            &:hover{
              transition: .6s;
              transform: scale(1.3);
            }
          }
        }
          .shadowBox1{
            width: 30vw;
            height: 100%;
            position: absolute;
            right: -10vw;
            background-color: rgba(255, 255, 255, .2);
            transform: skew(-40deg,0deg)
          }
          .shadowBox2{
            .shadowBox1();
            transform: skew(-60deg,0deg)
          }
        .linkToProj{
          margin: 15px;
          display: flex;
          flex-direction: column;
          
          button{
            border: none;
            outline: none;
            width: 150px;
            height: 35px;
            font-size: 1.1rem;
            color: #e2ded3;
            background-color: #ff6d24;
            border-radius: 5px;
            position: relative;
            top: 10px;
            opacity: 0;
            cursor: pointer;
            transition: .3s;
            &:hover{
              color: #ff6d24;
              background: #e2ded3;
              transition: .3s;
              outline: solid 5px #ff6d24;
              
            }
          }
          h2{
            margin-top: 10px;
            color: #d9dad7;

          }
          p{
            margin-top: 10px;
            position: relative;
            top: -10px;
            opacity: 0;
          }
        }
      }
      .projs1{
        .projs();
        flex-direction: row-reverse;
        .shadowBox1{
            width: 30vw;
            height: 100%;
            position: absolute;
            left: -10vw;
            transform: skew(40deg,0deg)
          }
          .shadowBox2{
            .shadowBox1();
            transform: skew(60deg,0deg)
          }
          .linkToProj{
            align-items: flex-end;
          }
      }
    }
  }
}
</style>
