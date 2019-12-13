import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  con: 1184974796,
  menus: [
    {
      icon: 'lei-icon-test',
      path: '/per',
      title: '技能',
      intro: '个人掌握的知识'
    },
    {
      icon: 'lei-anli',
      path: '/case',
      title: '经历',
      intro: '自己的一些工作经历'
    },
    {
      icon: 'lei-lianxikefu',
      path: '/contact',
      title: '个人',
      intro: '可以联系到我的'
    }
  ]
};

export default new Vuex.Store({
  state
})
