(function (doc) {
  var isTransition = false,
    isStart = false,
    translateX = 0,
    translateY = 0,
    winWidth = 0,
    winHeight = 0,
    halfWinWidth = 0,
    newDragDom = null,
    newDragDomWidth = 0,
    newDragDomHeight = 0,
    halfDragWinWidth = 0;


  winWidth = doc.body.clientWidth;
  winHeight = doc.body.clientHeight;
  halfWinWidth = winWidth / 2;

  function touchstart(e) {
    e.preventDefault();
    if (!isTransition) isStart = true;
  }

  function touchmove(e) {
    e.preventDefault();
    // 过渡动画与是否开始
    if (!isTransition && isStart) {
      var pageXY = e.changedTouches[0];
      if (pageXY.pageX !== translateX) translateX = pageXY.pageX - 25;
      if (pageXY.pageY !== translateY) translateY = pageXY.pageX - 25;
    }
  }

  function touchend(e) {
    e.preventDefault();
    // 当前手松开的时候判断接近于屏幕的那一边就自动靠着哪一边
    if (isStart) {
      translateX = translateX <= halfWinWidth ? 0 : winWidth - newDragDomWidth;
      if (translateY <= 0) {
        translateY = 0;
      } else if (translateY >= winHeight - newDragDomHeight) {
        translateY = winHeight - newDragDomHeight;
      }
      isTransition = true;
      isStart = false;
    }
  }

  function transitionend() {
    isTransition = false;
  }

  function bindEvent() {
    newDragDom.addEventListener('touchstart', touchstart);
    newDragDom.addEventListener('touchmove', touchmove);
    newDragDom.addEventListener('touchend', touchend);
    newDragDom.addEventListener('transitionend', transitionend);
  }

  drag = function (paramObject) {
    newDragDom = doc.getElementById(paramObject.domId);
    newDragDomWidth = newDragDom.offsetWidth;
    newDragDomHeight = newDragDom.offsetHeight;
    halfDragWinWidth = newDragDom.offsetWidth / 2;
    bindEvent();
  };
})(document);
