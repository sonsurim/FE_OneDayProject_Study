import { push } from '../../routes/router.js'
import { toggleNav } from '../../utils/render.js'

import HeaderNav from './HeaderNav.js'
import HeaderLogo from './HeaderLogo.js'
import HeaderToggler from './HeaderToggler.js'

export default function Header({ target, initialState }) {
  this.state = initialState
  this.setState = (nextState) => {
    this.state = nextState
    headernav.setState(nextState)
  }

  new HeaderLogo({
    target,
    onClick() {
      push('Home')
    },
  })

  const headernav = new HeaderNav({
    target,
    initialState: this.state,
    onClickItem(item) {
      push(item)
    },
    onClickMask() {
      toggleNav()
    },
  })

  new HeaderToggler({
    target,
    onClick() {
      toggleNav()
    },
  })
}
