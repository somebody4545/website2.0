(function () {
  const body = document.body
  const e = document.documentElement
  let scrollPercent
  $(window)
    .unbind('scroll')
    .scroll(function () {
      scrollPercent = ($(window).scrollTop() / body.scrollHeight) * 100
      console.log(scrollPercent)
      console.log($(window).scrollTop())
      console.log(body.scrollHeight)
      body.style.backgroundPosition = '0px ' + scrollPercent + '%'
    })
})()
