const markCurrentItem = (currentPage) => {
  const prevItem = document.querySelector('.active')
  const currentItem = document.querySelector(
    `[data-item="${currentPage}"]`,
  )?.parentNode

  removeClass(prevItem, 'active')
  addClass(currentItem, 'active')
}

const toggleNav = () => {
  const nav = document.querySelector('.nav')
  const mask = document.querySelector('.mask')
  const togglerBtn = document.querySelector('.header__toggler')

  togglerBtn.classList.toggle('is-active')
  nav.classList.toggle('show')
  mask.classList.toggle('show')
}

export { markCurrentItem, toggleNav }
