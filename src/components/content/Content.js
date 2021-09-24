import Home from '../../views/Home.js'

export default function Content({ target, initialState }) {
  this.state = initialState
  this.setState = (nextState) => {
    this.state = nextState
    console.log(nextState)
  }

  new Home(target)
}
