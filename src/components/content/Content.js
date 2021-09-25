import Home from '../../views/Home.js'

export default function Content({ target, initialState }) {
  this.state = initialState
  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    target.innerHTML = ''

    const { currentPage } = this.state

    switch (currentPage) {
      case 'colors':
        break
      case 'hex-colors':
        break
      case 'quote':
        break
      case 'carousel':
        break
      case 'counter':
        break
      case 'digital-clock':
        break
      case 'message':
        break
      default:
        new Home(target)
    }
  }
}
