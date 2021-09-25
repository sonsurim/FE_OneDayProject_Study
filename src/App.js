import { initRouter } from './routes/router.js'

import Header from './components/header/Header.js'
import Content from './components/content/Content.js'

export default function App(target) {
  const headerElement = createElement('header', '.header')
  const mainElement = createElement('main', '.content-wrapper')

  this.state = {
    currentPage: 'Home',
  }

  this.setState = (nextState) => {
    this.state = nextState

    header.setState(nextState)
    content.setState(nextState)
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

  const header = new Header({ target: headerElement, initialState: this.state })
  const content = new Content({ target: mainElement, initialState: this.state })

  const goHome = () => {
    const nextState = {
      currentPage: 'Home',
    }

    this.setState(nextState)
    history.replaceState(null, null, '/content/Home')
  }

  target.appendChild(headerElement)
  target.appendChild(mainElement)

  this.route()
  initRouter(this.route)

  window.addEventListener('popstate', (e) => {
    this.route()
  })

  window.addEventListener('scroll', (e) => {
    const isScrolled = document.querySelector('.is-scrolled')

    if (window.scrollY && isScrolled) {
      return
    }

    window.scrollY
      ? addClass(headerElement, 'is-scrolled')
      : removeClass(headerElement, 'is-scrolled')
  })
}
