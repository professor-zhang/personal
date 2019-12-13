<template>
  <div class='contact'>
    <div class="header">
      <h2>这就是我家所在的位置</h2>
      <h3>我知道我是怎么回家的</h3>
      <span></span>
    </div>
    <div class="div1" id="container">

    </div>
    <div class="header">
      <h2>这就是我的个人联系方式</h2>
      <h3>我知道你可以联系我</h3>
      <span></span>
    </div>
    <div class="div2">
      <div class="div3">
        <img alt="" class="im" src="../../static/phon.png"/>
        <span>{{phone}}</span>
      </div>
      <div class="div3">
        <img alt="" class="im" src="../../static/wx.png"/>
        <span>{{WeChat}}</span>
      </div>
      <div class="div3">
        <a target="_blank" class="div3" href="http://wpa.qq.com/msgrd?v=3&uin=1184974796&site=qq&menu=yes"
           style="text-decoration: none">
          <img alt="" class="im" src="../../static/qq.png"/>
          <span>{{$store.state.con}}</span>
        </a>
      </div>

      <div class="div3">
        <img alt="" class="im" src="../../static/yx.png"/>
        <span>{{mailbox}}</span>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'contact',
		data() {
			return {
				phone: '15228371961',
				mailbox: '1184974796@qq.com',
				WeChat: 'lei16209',
				QQ: '1184974796',
			}
		},
		mounted() {
			setTimeout(() => {
				let map = new AMap.Map('container', {
					zoom: 13,//级别
					center: [104.052657, 30.596527],//中心点坐标
					resizeEnable: true
				});
				let marker = new AMap.Marker({
					position: new AMap.LngLat(104.052657, 30.596527),
					offset: new AMap.Pixel(-25, -60),
					icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png', // 添加 Icon 图标 URL
					title: '我家'
				});
				map.add(marker)
			},1000);
		},

	}
</script>

<style scoped lang="less">
  .contact {
    margin: 0;
    width: 100%;
    background: url("../../static/touch-background.jpg");
    background-size: cover;
    padding: 50px 110px 110px;


    .div1 {
      height: 350px;
      margin-top: 20px;
    }

    .div2 {
      display: flex;
      justify-content: center;
      margin-top: 20px;

      .div3 {
        width: 328px;
        height: 55px;
        border: 1px solid white;
        text-align: left;
        display: flex;
        align-items: center;

        a {
          border: none;
        }

        .im {
          width: 35px;
          height: 35px;
          margin-left: 20px;
        }

        span {
          margin-left: 20px;
          font-size: 24px;
          color: white;
        }
      }

      .div3 + .div3 {
        margin-left: 20px;
      }
    }


  }


</style>
<style scoped lang="less">
  @import "~@/style/media.less";

  @media screen and (max-width: 480px) {
    .contact {
      .div2 {
        flex-direction: column;

        .div3 + .div3 {
          margin-top: 20px;
          margin-left: 0;
        }
      }
    }
  }
</style>
