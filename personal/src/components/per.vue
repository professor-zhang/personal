<template>
  <div class='per' style="width: 100%;">
    <div class="header">
      <h2 style="color: #2ecc71;font-size: 4.2em;font-weight: 300;">这就是我的一份个人简历</h2>
      <h3 style="font-size: 2em;color: #5B5B5B;font-weight: 500;text-transform: uppercase;margin: 33px 0 0 0;">我知道我是做什么的</h3>
      <span style="display: block;width: 100%;max-width: 140px;height: 1px;background: #5B5B5B;margin: 14px 0 0 0;"></span>
    </div>
    <div class="content">
      <div class="div1">
        <h2 style="color: #2ecc71;font-weight: 500;">基本介绍：</h2>
        <P style="letter-spacing:5px">&emsp;{{introduce}}</p>
      </div>
      <div class="div1">
        <h2 style="color: #2ecc71;font-weight: 500;">教育介绍：</h2>
        <P style="letter-spacing:5px">&emsp;{{education}}</p>
      </div>
      <div class="div1">
        <h2 style="color: #2ecc71;font-weight: 500;">项目介绍：</h2>
        <P style="letter-spacing:5px">&emsp;{{project}}</p>
      </div>
      <div class="div1">
        <h2 style="color: #2ecc71;font-weight: 500;">自我评价：</h2>
        <P style="letter-spacing:5px">&emsp;{{evaluate}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'per',
    data(){
      return{
        introduce:'您好！我叫张垒。今年22岁,我是一个刚毕业的学生,我也出来工作一年了,我是2017/8月份出来工作的,一直工作到今年的6月(2017/8-2018/6)底辞职,' +
        '上一家公司只要是做贷款中介平台，也是公司自己的一个项目，我只要在公司里负责整个平台的前端开发,页面效果和数据交互都是由我自己独立开发完成,' +
        '我之所以离开上一家公司只要是因为,整个项目完成后就基本没有什么压力了,想要趁着自己现在还有干劲,给自己一些压力才选择离开公司。',
        project:'自己开始自学的时候做了几个demo,比如小米官网首页、2048小游戏、打字游戏;都是用到了jq加bootstrap,这里用jq主要是它把js的一些方法简洁化了,比如获取dom的选择器,' +
        '事件的操作,自己觉得用起来还是很方便的,公司的项目比如成长金服、微信公众号宸衷展业助手、微信公众号成长服务圈;用到了jq、bootstrap、vue、vue-router、' +
        'vuex、axios;还有到了一些UI组件,全部都是自己独立完成,独立解决问题或者找朋友讨论。',
        education:'我毕业于四川工商职业技术学院的一个大专生,我在学校里的专业是软件技术,在学校里主要学习服务器端的语言java,我之所以选择前端是因为当时' +
        '大三出来工作时在一家外包公司里面工作。但时自己就是在里面打打杂,叫我切切图,自己没事的时候就学习学习,后来自己就慢慢的学习起前端来了(自己也养成了自学的习惯),自己自学了3个月左右就' +
        '自己做了一些demo,一些朋友有什么项目就拿给我做,再到今天1月份的时候后,老板的另一家公司说要做一个平台,然后我就去做这个平台的前端,过了没几天老板的外包团队就解散了,自己就在这个' +
        '公司里了。',
        evaluate:'我性格开朗、为人稳重、有活力，待人真诚、做事负责认真、积极主动、刻苦耐劳、有较强的学习能力；善于合作，具有良好的团队精神和强烈的集体荣誉感;' +
        '工作认真负责，积极主动，能吃苦耐劳，敢于创新，敢于迎接挑战，敢于承担责任;对工作热情，富拼搏精神，逐步完善自己，时刻不断严格要求自己，' +
        '注重团队合作精神和集体观念,喜欢接受难度较大的工作挑战。自己自学所有相关知识，对新的事物、新的知识接受的较快，现在自己也一直在学习其他相关的知识。',
      }
    }
  }
</script>

<style scoped>
  .per {
    margin: 0;
    background: white;
    padding: 50px 110px 110px ;
  }
  .header{
    text-align: left;
  }
  .content{
    width: 100%;
    height: calc(100% - 184px);
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;/*
    justify-content:center;*/
    align-items: center;
  }
  .div1{
    width: 45%;
    height: 220px;
    padding-right: 50px;
    text-align: left;

  }
  label{
    display: inline-block;
    width: 80px;
    text-align: right;
  }
</style>
