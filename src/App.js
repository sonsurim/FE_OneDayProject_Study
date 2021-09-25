import { initRouter } from './routes/router.js'

import Header from './components/Header.js'
import Nav from './components/Nav.js'
import Content from './components/content/Content.js'

export default function App(target) {
  const maskElement = createElement('div', '.mask', '.hide')
  const headerElement = createElement('header', '.header')
  const navElement = createElement('nav', '.nav')
  const mainElement = createElement('main', '.content-wrapper')

  this.state = {
    currentPage: 'Home',
  }

  this.setState = (nextState) => {
    this.state = nextState

    nav.setState(nextState)
    content.setState(nextState)
  }

  const goHome = () => {
    const nextState = {
      currentPage: 'Home',
    }

    this.setState(nextState)
    history.replaceState(null, null, '/content/Home')
  }

  this.route = () => {
    const { pathname } = window.location
    const contentRegExp = new RegExp('/content/[A-Za-z-]*')

    if (contentRegExp.test(pathname)) {
      const contentId = pathname.replace('/content/', '')

      if (!contentId) {
        goHome()
        return
      }

      const nextState = { currentPage: contentId }
      this.setState(nextState)
      return
    }

    goHome()
  }

  new Header(headerElement)
  const nav = new Nav({ target: navElement, initialState: this.state })
  const content = new Content({ target: mainElement, initialState: this.state })

  target.appendChild(maskElement)
  target.appendChild(headerElement)
  target.appendChild(navElement)
  target.appendChild(mainElement)

  this.route()
  initRouter(this.route)

  window.addEventListener('popstate', (e) => {
    this.route()
  })
}
