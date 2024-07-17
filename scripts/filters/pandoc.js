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

function initHeader2(str) {
  return str.replaceAll(/<h[1-6] id=".*?"><a href=".*?" class="headerlink" title=".*?"><\/a>.*?<\/h[1-6]>/g, (match) => {
    return match.replace(/(<h[1-6] id=".*?"><a href=".*?" class="headerlink" title=".*?"><\/a>)(.*?)(<\/h[1-6]>)/, '$1<span class="header-auto-count">$2</span>$3')
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
