// 定义转移HTML字符的函数
function htmlEscape(htmlstr) {
  return htmlstr.replace(/<|>|"|&/g, (match) => {
    switch (match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case '&':
        return '&amp; '
    }
  })
}

// 定义还原HTML字符串的函数
function htmlunescape(str) {
  return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
    switch (match) {
      case '&lt;':
        return '<'
      case '&gt;':
        return '>'
      case '&quot;':
        return '"'
      case '&amp;':
        return '&'
    }
  })
}

module.exports = {
  htmlEscape,
  htmlunescape
  
}