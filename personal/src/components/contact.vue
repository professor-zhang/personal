<template>
  <div class='contact'>
    <div class="header">
      <h2 style="color: white;font-size: 4.2em;font-weight: 300;">这就是我家所在的位置</h2>
      <h3 style="font-size: 2em;color: white;font-weight: 500;text-transform: uppercase;margin: 33px 0 0 0;">我知道我是怎么回家的</h3>
      <span style="display: block;width: 100%;max-width: 140px;height: 1px;background: white;margin: 14px 0 0 0;"></span>
    </div>
    <div class="div1">

    </div>
    <div class="header">
      <h2 style="color: white;font-size: 4.2em;font-weight: 300;">这就是我的个人联系方式</h2>
      <h3 style="font-size: 2em;color: white;font-weight: 500;text-transform: uppercase;margin: 33px 0 0 0;">我知道你可以联系我</h3>
      <span style="display: block;width: 100%;max-width: 140px;height: 1px;background: white;margin: 14px 0 0 0;"></span>
    </div>
    <div class="div2">
      <div class="div3">
        <img class="im" src="../../static/phon.png">
        <span style="margin-left: 20px;font-size: 24px;color: white;">{{phone}}</span>
      </div>
      <div class="div3" style="margin: 0px 20px">
        <img class="im" src="../../static/wx.png">
        <span style="margin-left: 20px;font-size: 24px;color: white;">{{WeChat}}</span>
      </div>
      <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1184974796&site=qq&menu=yes" style="text-decoration: none">
        <div class="div3" style="margin-right: 20px">
          <img class="im" src="../../static/qq.png">
          <span style="margin-left: 20px;font-size: 24px;color: white;">{{$store.state.con}}</span>
        </div>
      </a>
      <div class="div3">
        <img class="im" src="../../static/yx.png">
        <span style="margin-left: 20px;font-size: 16px;color: white;">{{mailbox}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contact',
    data(){
      return{
        phone:'15228371961',
        mailbox:'1184974796@qq.com',
        WeChat:'lei16209',
        QQ:'1184974796'
      }
    },
    mounted(){
      //this.QQ = this.$store.state.con
    }
  }
</script>

<style scoped>
  .contact {
    margin: 0;
    width: 100%;
    background:url("../../static/touch-background.jpg");
    background-size: cover;
    padding: 50px 110px 110px ;
  }
  .header{
    text-align: left;
  }
  .div1{
    height: 350px;
    background: red;
    margin-top: 20px;
  }
  .div2{
    height: 55px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .div3{
    width: 328px;
    height: 100%;
    border: 1px solid white;
    text-align: left;
    display: flex;
    align-items: center;
  }
  .im{
    width: 35px;
    height: 35px;
    margin-left: 20px;
  }
</style>
