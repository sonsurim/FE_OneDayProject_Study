export default function Colors(target) {
  const colorsHtml = createDom(`<div class="container colors">
                                  <div class="colors__click-btn">Click Me!</div>
                                </div>`)
  target.appendChild(colorsHtml)

  this.init = () => {
    const COLOR_CHIP = [
      '#e74c3c',
      '#f1c40f',
      '#2ecc71',
      '#1abc9c',
      '#00a8ff',
      '#5352ed',
      '#34495e',
      '#9b59b6',
      '#7f8c8d',
    ]

    const $container = document.querySelector('.container')
    const $clickBtn = document.querySelector('.colors__click-btn')

    window.addEventListener('click', (e) => {
      const isClickBtn = e.target.classList.contains('colors__click-btn')
      const randomNum = Math.ceil(Math.random() * 8)

      if (isClickBtn) {
        addClass($clickBtn, 'colors__click-btn-focus')
        $container.style.backgroundColor = COLOR_CHIP[randomNum]
      } else {
        removeClass($clickBtn, 'colors__click-btn-focus')
      }
    })
  }

  this.init()
}
