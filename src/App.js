import PeopleInfo from './PeopleInfo.js'

export default function App({ target }) {
  this.state = {
    currentPeople: '',
  }

  this.setState = (nextState) => {
    this.state = nextState
  }

  new PeopleInfo({
    target,
    initialState: this.state,
    onSubmit: (text) => {
      console.log(text)
      return 0
    },
  })
}
