(function () {
  const body = document.getElementById('page')
  const e = document.documentElement
  let scrollPercent
  body.onscroll = (event) => {
    scrollPercent = (body.scrollTop / body.scrollHeight) * 100
    console.log(scrollPercent)
    console.log(body.scrollTop)
    console.log(body.scrollHeight)
    body.style.backgroundPosition = '0px ' + scrollPercent + '%'
  }
})()
