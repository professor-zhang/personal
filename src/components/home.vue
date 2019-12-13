<template>
  <div class='home'>
    <div class="intro">
      <div class="head-portrait">
        <img src="" alt="">
      </div>
      <h1>张垒</h1>
      <div>web前端工程师/前端工程师</div>
      <div>工作两年多了</div>
    </div>
    <div class="div-box">
      <div class="div1" v-for="(item, index) of menus" :key="index" @click="skip(item.path)">
        <span class="icon"><i :class="[item.icon]"></i></span>
        <div class="div2">
          <hr class="left">
          <hr class="top">
          <hr class="right">
          <hr class="bottom">
          <span class="link">{{item.title}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'home',
		data() {
			return {
				menus: this.$store.state.menus,
			}
		},
		methods: {
			skip(path) {
				this.$router.push(path)
			}
		},
		mounted() {
			axios.get('/api/info.json').then(res => {
				console.log(res)
			})
		}
	}
</script>

<style scoped lang="less">
  .home {
    display: flex;
    background: url("../../static/front-background.jpg");
    background-size: cover;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .intro {
      margin-bottom: 3rem;
      color: white;

      .head-portrait {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: red;
        margin: 0 auto;
      }
    }

    .div-box {
      width: 80%;
      display: flex;
      justify-content: space-around;
      overflow: hidden;

      .div1 {
        width: 180px;
        cursor: pointer;

        &:hover {
          .icon {
            transform: rotate(360deg);
          }

          .div2 {
            span {
              color: white;
            }

            hr {
              opacity: 1;
            }

            .left {
              top: 0;
            }

            .top {
              left: 0;
            }

            .right {
              bottom: 0;
            }

            .bottom {
              right: 0;
            }
          }
        }

        .icon {
          display: inline-block;
          transition: .5s;

          i {
            color: white;
            font-size: 4rem;
          }
        }

        .div2 {
          position: relative;

          .link {
            border: 2px solid rgba(255, 255, 255, 0.8);
            width: 176px;
            height: 46px;
            display: block;
            line-height: 46px;
            color: darkgrey;
            margin-top: 24px;
            text-decoration: none;
          }

          .left {
            top: -110px;
          }

          .top {
            bottom: 0;
            left: -224px;
          }

          .right {
            right: 0;
            bottom: -110px;
          }

          .bottom {
            right: -224px;
          }

          .top, .bottom {
            width: 178px;
            height: 0;
          }

          .left, .right {
            width: 0;
            height: 48px;
          }

          span {
            transition: color 0.5s;
          }

          hr {
            position: absolute;
            opacity: 0;
            transition: 0.5s;
          }
        }

      }
    }
  }


</style>
<style scoped lang="less">
  @media screen and (max-width: 480px) {
    .home {
      .div-box {
        flex-direction: column;
        align-items: center;
        /*height: 100vh;*/

        .div1 {
          height: 150px;
        }
      }
    }
  }

</style>
