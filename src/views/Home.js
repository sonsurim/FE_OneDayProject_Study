import { CONTENT_LIST } from '../data/data.js'

export default function Home({ target, onClick }) {
  const article = createElement('article', '.content')

  this.render = () => {
    CONTENT_LIST.forEach((content) => {
      const articleInnerHtml = createDom(`
        <div class="content__column" data-column="${content}">
          <div class="column__img-wrapper">
            <div class="column__mask">
              <span>Go to ${content}</span>
            </div>
            <div class="column__img column__img-${content}">
          </div>
          <div class="column__title-wrapper">
            <h3 class="column__tile">${content}</h3>
          </div>
        </div>
      `)
      article.appendChild(articleInnerHtml)
    })
  }

  this.render()
  target.appendChild(article)

  article.addEventListener('click', (e) => {
    const { className } = e.target
    const { column } = e.target.parentNode.parentNode.dataset

    if (className === 'content__column') {
      const { column } = e.target.dataset
      onClick(column)
    }

    if (!className === 'article') {
      return
    }

    onClick(column)
  })
}
