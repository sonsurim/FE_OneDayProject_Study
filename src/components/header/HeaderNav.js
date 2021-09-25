import { CONTENT_LIST } from '../../data/data.js'
import { markCurrentItem } from '../../utils/render.js'

export default function HeaderNav({
  target,
  initialState,
  onClickItem,
  onClickMask,
}) {
  const nav = createElement('nav', '.nav')
  const mask = createElement('div', '.mask', '.hide')
  target.appendChild(mask)
  target.appendChild(nav)

  this.state = initialState
  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { currentPage } = this.state
    const isInitialize = !document.querySelector('.nav__list')

    if (!isInitialize) {
      markCurrentItem(currentPage)
      return
    }

    const navInnerHtml = createDom(`<div class="nav__list-wrapper">
                                      <ul class="nav__list">
                                        ${CONTENT_LIST.map((content) => {
                                          const activeClass =
                                            content === currentPage
                                              ? 'active'
                                              : ''
                                          return `<li class="nav__list-item ${activeClass}">
                                                    <span data-item="${content}">${content}</span>
                                                  </li>`
                                        }).join('')}
                                      </ul>
                                    </div>`)
    nav.appendChild(navInnerHtml)
  }

  nav.addEventListener('click', (e) => {
    const { item } = e.target.dataset
    if (!item) {
      return
    }

    onClickItem(item)
  })

  mask.addEventListener('click', (e) => {
    onClickMask()
  })
}
