import Header from './components/header.js'
import Nav from './components/nav.js'
import Content from './components/content.js'

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

  new Header({ target: headerElement, initialState: this.state })
  const nav = new Nav({ target: navElement, initialState: this.state })
  const content = new Content({ target: mainElement, initialState: this.state })

  target.appendChild(headerElement)
  target.appendChild(navElement)
  target.appendChild(mainElement)
}
