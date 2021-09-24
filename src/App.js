import Header from './components/Header.js'
import Nav from './components/Nav.js'
import Content from './components/content/Content.js'

export default function App(target) {
  const headerElement = createElement('header')
  const navElement = createElement('nav')
  const mainElement = createElement('main')

  this.state = {
    currentPage: ['Colors'],
  }

  this.setState = (nextState) => {
    this.state = nextState
    nav.setState(nextState)
    content.setState(nextState)
  }

  new Header(headerElement)
  const nav = new Nav({ target: navElement, initialState: this.state })
  const content = new Content({ target: mainElement, initialState: this.state })

  target.appendChild(headerElement)
  target.appendChild(navElement)
  target.appendChild(mainElement)
}
