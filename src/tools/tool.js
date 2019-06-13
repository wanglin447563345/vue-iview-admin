// 防抖
export const debounce = (fn, wait) => {
     this.timer = null
    return () => {
        if(this.timer !== null) {
            clearTimeout(timer)
        }
        this.timer = setTimeout(fn, wait)
    }
}