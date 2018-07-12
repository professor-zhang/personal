<template>
  <div class='index' style="overflow: hidden">
    <div class="box1">
      <div style="height: 224px;">
        <router-link to="/">
          <img @click="zlonclick($event)" src="../../static/in.png" class="im" @mouseenter="dataDetails($event)" @mouseleave="hiddenDetail($event)">
        </router-link>
      </div>
      <div style="height: calc(100% - 224px);margin-top: 100px;">
        <ul class="lie_box">
          <li class="lie" @click="zlonclick($event)">
            <router-link to="/per" class="a1">
              <img class="img1" src="../../static/jj.png">
              <div class="div1">
                <p class="p1">简介</p>
                <p class="p2">简单的介绍自己</p>
              </div>
            </router-link>
          </li>
          <li class="lie" style="margin: 10px 0" @click="zlonclick($event)">
            <router-link to="/case" class="a1">
              <img class="img1" src="../../static/ys.png">
              <div class="div1">
                <p class="p1">案例</p>
                <p class="p2">展示自己的项目</p>
              </div>
            </router-link>
          </li>
          <li class="lie" @click="zlonclick($event)">
            <router-link to="/contact" class="a1">
            <img class="img1" src="../../static/gr.png">
              <div class="div1">
                <p class="p1">个人</p>
                <p class="p2">可以联系到我的</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <transition
      mode="out-in"
      enter-active-class="animated jackInTheBox"
      leave-active-class="animated zoomOutDown"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Public from '../assets/public'
  export default {
    name: 'index',
    data(){
      return{
        show:true
      }
    },
    methods:{
      dataDetails(ev){
        ev.target.setAttribute("src","../../static/in-1.png")
        event.stopPropagation()
      },
      hiddenDetail(ev){
        ev.target.setAttribute("src","../../static/in.png")
        event.stopPropagation()
      },
      zlonclick(ev){
        Public.zlonclick(ev)
      },
    },
    mounted(){
      Public.froute(this.$route.path)
    },
    watch:{
      $route(to,from){
        Public.froute(to.path)
      }
    }
  }
</script>

<style scoped>
  .index {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
  }
  .box1{
    min-width: 240px;
    width: 240px;
    height: 100%;
    min-height: 100vh;
    background: #2D2D2D;
  }
  .lie_box{
    display: flex;
    align-items:center;

    list-style: none;
    flex-direction: column
  }
  .lie{
    width: 100%;
    height: 72px;
    color: white;
    display: flex;
    cursor: pointer;
  }
  .lie:hover{
    background: #2ecc71;
  }
  .lie:hover .img1{
    transition: 0.5s;
    transform:rotate(360deg);
  }
  .p1{
    height: 46px;
    font-size: 24px;
    line-height: 46px;
  }
  .p2{
    color:rgba(255,255,255,0.5)
  }
  .p1,.p2{
    text-align: left;
    padding-left: 20px;
  }
  .div1{
    width: calc(100% - 72px);
    height: 100%;
  }
  .img1{
    height: 50px;
    width: 50px;
    margin: 10px 0 0 10px;
    border: none;
    transition: 1s;
  }
  .im{
    width: 100px;
    height: 100px;
    margin-top: 50px;
    cursor: pointer;
    transition: 0.5s;
  }
  .im:hover{
    transform: rotate(360deg);
    transition: 1s;
  }
  .a1{
    display: flex;
    width: 100%;
    color: white;
    text-decoration:none;
  }
</style>
