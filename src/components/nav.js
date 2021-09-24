import { push } from '../routes/router.js'
import { CONTENT_LIST } from '../data/data.js'

export default function Nav({ target, initialState }) {
  const navWrapper = createElement('div', '.nav__list-wrapper')

  this.state = initialState
  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  const markCurrentItem = (currentPage) => {
    const prevItem = document.querySelector('.active')
    const currentItem = document.querySelector(
      `[data-item="${currentPage}"]`,
    ).parentNode

    removeClass(prevItem, 'active')
    addClass(currentItem, 'active')
  }

  this.render = () => {
    const { currentPage } = this.state
    const isInitialize = document.querySelector('.nav__list')

    if (isInitialize) {
      markCurrentItem(currentPage)
      return
    }

    const navTemp = `<ul class="nav__list">
                      ${CONTENT_LIST.map((content) => {
                        const activeClass =
                          content === currentPage ? 'active' : ''
                        return `<li class="nav__list-item ${activeClass}">
                                  <span data-item="${content}">${content}</span>
                                </li>`
                      }).join('')}
                    </ul>`

    const navChildNodes = createDom(navTemp)
    navWrapper.appendChild(navChildNodes)
    target.appendChild(navWrapper)
  }

  this.init = () => {
    navWrapper.addEventListener('click', (e) => {
      const { item } = e.target.dataset

      if (!item) {
        return
      }

      push(item)
    })
  }

  this.init()
}
