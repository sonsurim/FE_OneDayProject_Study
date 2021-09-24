import { push } from '../routes/router.js'
import CommonButtonToggler from './common/CommonButtonToggler.js'

export default function Header(target) {
  const logo = createElement('a', '.header__logo')
  logo.textContent = '25 JS Project'

  this.render = () => {
    target.appendChild(logo)
    new CommonButtonToggler(target)
  }

  this.init = () => {
    this.render()

    logo.addEventListener('click', (e) => {
      push('Home')
    })
  }

  this.init()
}
