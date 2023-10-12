const wait = (delay = 0) =>
  new Promise((resolve) => setTimeout(resolve, delay))

const setVisible = (elementOrSelector, visible) =>
  ((typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none')

page = document.getElementById('page')
setVisible('.page', false)
setVisible('#loading', true)

document.addEventListener('DOMContentLoaded', () =>
  wait(3000).then(() => {
    setVisible('.page', true)
    requestAnimationFrame(function () {
      page.classList.add('visible')
    })
    setVisible('#loading', false)
  })
)
