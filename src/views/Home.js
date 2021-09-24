import CommonContentColumn from '../components/common/CommonContentColumn.js'

export default function Home(target) {
  const article = createElement('article', '.content')

  const contentList = [
    'colors',
    'hex-colors',
    'quote',
    'carousel',
    'counter',
    'digital-clock',
    'message',
  ]

  this.render = () => {
    contentList.forEach((content) => {
      new CommonContentColumn({ target: article, content })
    })

    target.appendChild(article)
  }

  this.init = () => {
    this.render()
  }
  this.init()
}
