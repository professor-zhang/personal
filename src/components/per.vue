<template>
  <div class='per'>
    <div class="header">
      <h2>这是我的个人技能</h2>
      <h3>我知道我是做什么的</h3>
      <span></span>
    </div>
    <ul class="content">
      <li>熟练掌握HTML/XHTML、JavaScript、CSS，熟悉W3C标准，对表现与数据分离、Web语义化等有深刻理解 </li>
      <li>熟悉 ES6/ES7 语法，了解并会使用TypeScript开发并维护项目</li>
      <li>熟悉JQuery的使用，有一定的JQuery插件开发经验</li>
      <li>掌握MVVM的开发模式并且以模块化、组件化的形式开发，熟悉Vue全家桶技术栈、熟悉了解React技术栈</li>
      <li>掌握less、Sass等css预处理技术使其思路清晰、分层明确，代码可读性强、复用性高</li>
      <li>熟练使用Git、Svn等版本控制器并能很好的进行代码管理；并能使用Nlim、Yarn等包管理工具</li>
      <li>了解httli协议，熟悉基于Ajax、Axios技术的应用开发；很好的处理前后端数据交互；能及时的与后端人员沟通</li>
      <li>了解熟悉fis、gluli、grunt，webliack等前端自动化工具</li>
      <li>了解使用各种调试、抓包工具，能独立分析、自动化前端工具、解决和归纳问题</li>
      <li>对不同设备及平台有一定了解，熟悉浏览器兼容性问题的调试处理</li>
      <li>了解nodejs</li>
    </ul>
  </div>
</template>

<style scoped lang="less">
  .per {
    margin: 0;
    background: white;
    padding: 50px 0 0 110px;
    width: 100%;
    box-sizing: border-box;

    .header {

      h2 {
        color: #2ecc71;
      }

      h3 {
        color: #5B5B5B;
      }

      span {
        background: #5B5B5B;
      }
    }

    .content {
      width: 100%;
      height: calc(100% - 184px);
      color: #5e7289;
      text-align: left;

      li {
        margin-top: 20px;
      }
    }
  }
</style>
<style scoped lang="less">
  @import "~@/style/media.less";
</style>
