import { CONTENT_LIST } from '../data/data.js'

import CommonContentColumn from '../components/common/CommonContentColumn.js'

export default function Home(target) {
  const article = createElement('article', '.content')

  this.render = () => {
    CONTENT_LIST.forEach((content) => {
      new CommonContentColumn({ target: article, content })
    })

    target.appendChild(article)
  }

  this.render()
}
