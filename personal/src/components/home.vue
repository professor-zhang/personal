<template>
  <div class='home' style="width: 100%;">
    <div class="div-box">
      <div class="div1">
        <img class="im1" src="../../static/jj.png"/>
        <div class="div2">
          <hr class="left">
          <hr class="top">
          <hr class="right">
          <hr class="bottom">
          <router-link to="/per" class="link1">
            <span>简介</span>
          </router-link>
        </div>
      </div>
      <div class="div1" style="margin: 0 120px">
        <img class="im1" src="../../static/ys.png"/>
        <div class="div2">
          <hr class="left">
          <hr class="top">
          <hr class="right">
          <hr class="bottom">
          <router-link to="/case" class="link1">
            <span>案例</span>
          </router-link>
        </div>
      </div>
      <div class="div1">
        <img class="im1" src="../../static/gr.png"/>
        <div class="div2">
          <hr class="left">
          <hr class="top">
          <hr class="right">
          <hr class="bottom">
          <router-link to="/contact" class="link1">
            <span>个人</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
  }
</script>

<style scoped>
  .home {
    margin: 0;
    padding: 0;
    display: flex;
    background: url("../../static/front-background.jpg");
    background-size: cover;
    align-items:center;
  }
  .div-box{
    width: 100%;
    height: 260px;
    display: flex;
    flex-direction: row;
    justify-content: center
  }
  .div1{
    width: 180px;
    height: 100%;
  }
  .im1{
    width: 100%;
    height: 180px;
    transition: 0.3s;
    cursor: pointer;
  }
  .im1:hover{
    transform: rotate(360deg);
    transition: 0.3s;
  }
  .link1{
    border: 2px solid rgba(255,255,255,0.8);
    width: 176px;
    height: 46px;
    display: block;
    line-height: 46px;
    color: darkgrey;
    margin-top: 24px;
    text-decoration:none;
  }
  .div2:hover span{
    color: white;
    transition: 0.5s;
  }
  .div2:hover hr{
    opacity:1;
    transition: 0.5s;
  }
  .div2:hover .left{
    top: 0px;
  }
  .div2:hover .top{
    left: 0px;
  }
  .div2:hover .right{
    bottom: 0px;
  }
  .div2:hover .bottom{
    right: 0px;
  }
  .div2{
    position: relative;
  }
  hr{
    position: absolute;
    opacity:0;
    transition: 0.5s;
  }
  .left{
    top: -110px;
  }
  .top{
    bottom: 0px;
    left: -224px;
  }
  .right{
    right: 0px;
    bottom: -110px;
  }
  .bottom{
    right: -224px;
  }
  .top,.bottom{
    width: 178px;
    height: 0px;
  }
  .left,.right{
    width: 0px;
    height: 48px;
  }
</style>
