<template>
  <div class='index'>
    <div class="left-menu">
      <div class="home">
        <router-link to="/">
          <img src="../../static/in.png" class="icon"/>
        </router-link>
      </div>
      <div class="menu-list">
        <ul class="list-item">
          <li class="item"
              :class="[ item.path === $route.path && 'item-click' ]"
              v-for="(item,index) of menus"
              :key="index">
            <router-link :to="item.path" class="link">
              <span class="icon"><i :class="[item.icon]"></i></span>
              <div class="item-text">
                <p class="text-title">{{item.title}}</p>
                <p class="text-introduce">{{item.intro}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="move" :style="translate"
         @touchstart="touchstart"
         @touchmove="touchmove"
         @touchend="touchend"
         @transitionend="transitionend"
         :class="{'move-transition': isTransition}"
    >
    </div>
    <div class="view-content">
      <transition
        mode="out-in"
        enter-active-class="animated jackInTheBox"
        leave-active-class="animated zoomOutDown"
      >
        <router-view></router-view>
      </transition>
    </div>
    <div class="putOnRecords">
      <a target="_blank" href="http://www.beian.miit.gov.cn">
        蜀ICP备19012610号-2
      </a>
    </div>
  </div>
</template>

<script>
	import 'animate.css';

	let winWidth, winHeight, halfWinWidth;
	export default {
		name: 'index',
		data() {
			return {
				menus: this.$store.state.menus,
				translateX: 0,
				translateY: 0,
				isTransition: false,// 是否有过渡效果
				isStart: false,// 时候开始
			}
		},
		computed: {
			translate() {
				return {
					transform: `translate(${this.translateX}px,${this.translateY}px)`
				}
			}
		},
		methods: {
			touchstart(e) {
				e.preventDefault();
				// 当前过渡动画时候执行完毕
				if (!this.isTransition) this.isStart = true;
			},
			touchmove(e) {
				e.preventDefault();
				// 过渡动画与是否开始
				if (!this.isTransition && this.isStart) {
					const {pageX, pageY} = e.changedTouches[0];
					if (pageX !== this.translateX) {
						this.translateX = pageX - 25;
					}
					if (pageY !== this.translateY) {
						this.translateY = pageY - 25;
					}
				}
			},
			touchend(e) {
				e.preventDefault();
				// 当前手松开的时候判断接近于屏幕的那一边就自动靠着哪一边
				if (this.isStart) {
					this.translateX = this.translateX <= halfWinWidth ? 0 : winWidth - 50;
					if (this.translateY <= 0) {
						this.translateY = 0;
					} else if (this.translateY >= winHeight - 50) {
						this.translateY = winHeight - 50;
					}
					this.isTransition = true;
					this.isStart = false;
				}

			},
			transitionend() {
				this.isTransition = false;
			}
		},
		mounted() {
			// 进来获取屏幕的高度与宽度;
			const {clientWidth, clientHeight} = document.body;
			// 保存在内存中
			winWidth = clientWidth;
			winHeight = clientHeight;
			// 获取屏幕一半的数值
			halfWinWidth = clientWidth / 2
		}

	}
</script>

<style scoped lang="less">
  .index {
    display: flex;
    height: 100vh;
    overflow: hidden;

    .left-menu {
      width: 240px;
      height: 100%;
      background: #2D2D2D;

      .home {
        height: 224px;

        .icon {
          width: 100px;
          height: 100px;
          margin-top: 50px;
          cursor: pointer;
          transition: 0.5s;

          &:hover {
            transform: rotate(360deg);
            transition: 1s;
          }
        }
      }

      .menu-list {
        height: calc(100% - 224px);
        margin-top: 100px;


        .list-item {
          display: flex;
          align-items: center;
          list-style: none;
          flex-direction: column;

          .item {
            width: 100%;
            height: 72px;
            color: white;
            display: flex;
            cursor: pointer;

            &:hover {
              background: #2ecc71;

              .icon {
                transition: 0.5s;
                transform: rotate(360deg);
              }
            }

            .link {
              display: flex;
              width: 100%;
              color: white;
              text-decoration: none;

              .icon {
                height: 50px;
                width: 50px;
                margin: 10px 0 0 10px;
                border: none;
                transition: 1s;

                i {
                  font-size: 50px;
                }
              }

              .item-text {
                width: calc(100% - 72px);
                height: 100%;

                p {
                  text-align: left;
                  padding-left: 20px;
                }

                .text-title {
                  height: 46px;
                  font-size: 24px;
                  line-height: 46px;
                }

                .text-introduce {
                  color: rgba(255, 255, 255, 0.5)
                }
              }
            }

          }

          .item-click {
            background-color: #2ecc71;
          }
        }
      }
    }

    .move {
      /*display: none;*/
      position: fixed;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: red;
      z-index: 111;
    }

    .move-transition {
      transition: transform .8s ease;
    }

    .view-content {
      width: calc(100% - 240px);
      height: 100vh;
      overflow-y: hidden;
      overflow-x: hidden;

      & > div {
        width: 100%;
        min-height: 100%;
        box-sizing: border-box;
      }
    }

    .putOnRecords {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);

      a {
        color: #767676;
        text-decoration: none;
      }
    }
  }

</style>

<style scoped lang="less">
  @media screen and (max-width: 480px) {
    .index {
      height: 100vh;

      .left-menu {
        display: none;
      }

      .move {
        display: block;
      }

      .view-content {
        overflow-y: auto;
        width: 100%;
      }
    }
  }
</style>
