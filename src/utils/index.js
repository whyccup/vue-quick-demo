/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
    if (arguments.length === 0) {
      return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
        time = parseInt(time)
      }
      if ((typeof time === 'number') && (time.toString().length === 10)) {
        time = time * 1000
      }
      date = new Date(time)
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const timeStr = format.replace(/{([ymdhisa])+}/g, (result, key) => {
      const value = formatObj[key]
      // Note: getDay() returns 0 on Sunday
      if (key === 'a') {
        return ['日', '一', '二', '三', '四', '五', '六'][value]
      }
      return value.toString().padStart(2, '0')
    })
    return timeStr
  }
  
  /**
   * @param {number} time
   * @param {string} option
   * @returns {string}
   */
  export function formatTime(time, option) {
    if (('' + time).length === 10) {
      time = parseInt(time) * 1000
    } else {
      time = +time
    }
    const d = new Date(time)
    const now = Date.now()
  
    const diff = (now - d) / 1000
  
    if (diff < 30) {
      return '刚刚'
    } else if (diff < 3600) {
      // less 1 hour
      return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
      return Math.ceil(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
      return '1天前'
    }
    if (option) {
      return parseTime(time, option)
    } else {
      return (
        d.getMonth() +
        1 +
        '月' +
        d.getDate() +
        '日' +
        d.getHours() +
        '时' +
        d.getMinutes() +
        '分'
      )
    }
  }
  
  /**
   * @param {string} url
   * @returns {Object}
   */
  export function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
      return {}
    }
    return JSON.parse(
      '{"' +
      decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
      '"}'
    )
  }
  /* 
  滚动到顶部
  */
  const cubic = value => Math.pow(value, 3);
  const easeInOutCubic = value => value < 0.5 ?
    cubic(value * 2) / 2 :
    1 - cubic((1 - value) * 2) / 2;
  export function scrollToTop(el) {
    const beginTime = Date.now();
    const beginValue = el.scrollTop;
    console.log(beginValue, el)
    const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16));
    const frameFunc = () => {
      const progress = (Date.now() - beginTime) / 500;
      if (progress < 1) {
        el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
        rAF(frameFunc);
      } else {
        el.scrollTop = 0;
      }
    };
    rAF(frameFunc);
  }
  
  // 滚动条在Y轴上的滚动距离
  export function getScrollTop() {
    let scrollTop = 0
    let bodyScrollTop = 0
    let documentScrollTop = 0
    if (document.body) {
      bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
  }
  
  
  // 文档的总高度
  export function getScrollHeight() {
    let scrollHeight = 0
    let bodyScrollHeight = 0
    let documentScrollHeight = 0
    if (document.body) {
      bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
  }
  
  // 浏览器视口的高度
  export function getWindowHeight() {
    let windowHeight = 0;
    if (document.compatMode === "CSS1Compat") {
      windowHeight = document.documentElement.clientHeight;
    } else {
      windowHeight = document.body.clientHeight;
    }
    return windowHeight;
  }
  
  // 抖动
  export function jitter(doom, self) {
    const run = 4
    const x = 5
    const ms = 50
    doom.style = `transform: translate3d(${-x}px, ${0}px, ${0}px); transition: transform ${ms / 1000}s linear 0s;`
    for (let i = 0; i < run; i++) {
      setTimeout(() => {
        // 清除动画，让其可以再次被触发
        if (i + 1 === run) {
          self.checkedAnimat = 0
          doom.style =
            `transform: translate3d(${0}px, ${0}px, ${0}px); transition: transform ${ms / 1000}s linear 0s;`
          return
        }
        // 执行左右抖动
        if (i % 2) {
          doom.style =
            `transform: translate3d(${x}px, ${0}px, ${0}px); transition: transform ${ms / 1000}s linear 0s;`
        } else {
          doom.style =
            `transform: translate3d(${-x}px, ${0}px, ${0}px); transition: transform ${ms / 1000}s linear 0s;`
        }
      }, ms * i);
    }
  }
  