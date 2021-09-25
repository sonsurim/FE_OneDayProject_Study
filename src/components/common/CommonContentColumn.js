import { push } from '../../routes/router.js'
import { BASE_IMG_URL } from '../../data/data.js'

export default function CommonContentColumn({ target, content }) {
  const contentColumn = createElement('div', '.content__column')
  contentColumn.setAttribute('data-column', content)

  this.render = () => {
    const columnTemplate = `<div class="column__img-wrapper">
                              <div class="column__mask">
                                <span>Go to ${content}</span>
                              </div>
                              <div class="column__img column__img-${content}">
                            </div>
                            <div class="column__title-wrapper">
                              <h3 class="column__tile">${content}</h3>
                            </div>`
    const columnChildNodes = createDom(columnTemplate)

    contentColumn.appendChild(columnChildNodes)
    target.appendChild(contentColumn)
  }

  this.init = () => {
    this.render()

    contentColumn.addEventListener('click', (e) => {
      const { column } = e.currentTarget.dataset

      push(column)
    })
  }

  this.init()
}
