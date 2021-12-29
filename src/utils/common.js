// menu has child
export const hasChild = (routes) => {
  return Array.isArray(routes.children) && routes.children.length > 0;
};

export function debounce(cb, wait = 1000) {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      cb(args);
    }, wait);
  };
}

export function throttle1(func, delay = 1000) {
  let isWorking = false;
  return (params) => {
    if (isWorking) {
      return false;
    }
    isWorking = true;
    setTimeout(() => {
      func(params);
      isWorking = false;
    }, delay);
  };
}

// 多次触发，每隔一段时间执行一次
export function throttle(fn, threshhold = 160) {
  var timeout;
  var start = new Date();
  return function () {
    var context = this,
      args = arguments,
      curr = new Date() - 0;

    clearTimeout(timeout); //总是干掉事件回调
    if (curr - start >= threshhold) {
      console.log("now", curr, curr - start); //注意这里相减的结果，都差不多是160左右
      fn.apply(context, args); //只执行一部分方法，这些方法是在某个时间段内执行一次
      start = curr;
    } else {
      //让方法在脱离事件后也能执行一次
      timeout = setTimeout(function () {
        fn.apply(context, args);
      }, threshhold);
    }
  };
}

// export function debounce(func, delay=2000) {
// var timeout;
// return function(e) {
// clearTimeout(timeout);
// var context = this, args = arguments
// timeout = setTimeout(function(){
// func.apply(context, args);
// }, delay)
// };
// };
