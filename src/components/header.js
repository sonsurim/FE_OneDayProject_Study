import CommonButtonToggler from './common/CommonButtonToggler.js'

export default function Header({ target, initialState }) {
  const logo = createElement('a', '.header__logo')
  logo.textContent = '25 JS Project'

  this.render = () => {
    target.appendChild(logo)
    new CommonButtonToggler(target)
  }

  this.render()
}
