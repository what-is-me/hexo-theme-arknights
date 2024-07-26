/* global hexo */

'use strict';

function initHeader(str) {
  return str.replaceAll(/<h[1-6] id=".*?">.*?<\/h[1-6]>/g, (match) => {
    const link = match.match(/(?<=id=").*?(?=")/)[0],
      pre = match.match(/<h[1-6] id=".*?">/)[0],
      nxt = match.slice(pre.length)
    if (!match.match(/<a href="#.*?" class="headerlink" title=".*?"><\/a>/g)) {
      return `${pre}<a href="#${link}" class="headerlink" title="${link}"></a>${nxt}`
    }
    return match
  })
}

const genNextTitleNum = (title_num, depth) => {
  const next_title_num = Array.from({ length: depth }, (_, i) => (i < title_num.length ? title_num[i] : 0))
  next_title_num[depth - 1]++
  return next_title_num
}

function initHeader2(str) {
  let title_num = []
  return str.replaceAll(/<h[1-6] id=".*?"><a href=".*?" class="headerlink" title=".*?"><\/a>.*?<\/h[1-6]>/g, (match) => {
    const parts = match.match(/(<h[1-6] id=".*?"><a href=".*?" class="headerlink" title=".*?"><\/a>)(.*?)<\/h([1-6])>/)
    const header_level = Number(parts[3])
    title_num = genNextTitleNum(title_num, header_level)
    let before_title = ""
    if (header_level === 1){
      before_title = `No.${title_num[0]} `
    }else{
      before_title = `${title_num.slice(1).join('.')}. `
    }
    return `${parts[1]}${before_title}${parts[2]}</h${parts[3]}>`
  })
}

function apply(data, ...fns) {
  for (const fn of fns) {
    data.content = fn(data.content)
    data.more = fn(data.more)
  }
  return data
}

hexo.extend.filter.register('after_post_render', (data) => {
  return apply(data, initHeader, initHeader2)
});
