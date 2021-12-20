// 多次触发，每隔一段时间执行一次
export const throttle = (func, delay=2000) => {
    let isWork = null
    return (params) => {
        !isWork && clearTimeout(isWork)
        isWork = false
        isWork = setTimeout(() => {
            func(params)
            isWork = true
        }, delay);
    }
}