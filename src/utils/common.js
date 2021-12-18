// menu has child
export const hasChild = (routes) => {
  return Array.isArray(routes.children) && routes.children.length > 0;
};

export function debounce(cb, wait = 2000) {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      cb(args);
    }, wait);
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
