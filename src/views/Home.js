export default function Home(target) {
  const article = createElement('article', '.content')

  this.render = () => {
    target.innerHTML = ''

    article.innerHTML = 'HomePage'
    target.appendChild(article)
  }

  this.init = () => {
    this.render()
  }
  this.init()
}
