import { push } from '../../routes/router.js'
import { BASE_IMG_URL } from '../../data/data.js'

export default function CommonContentColumn({ target, content }) {
  const contentColumn = createElement('div', '.content__column')
  contentColumn.setAttribute('data-column', content)

  this.render = () => {
    const columnTemplate = `<img class="column__img" src="${BASE_IMG_URL}/${content}.png">
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
