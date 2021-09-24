export default function Nav({ target, initialState }) {
  this.state = initialState
  this.setState = (nextState) => {
    this.state = nextState
    console.log(nextState)
  }
}
