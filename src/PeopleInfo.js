export default function PeopleInfo({ target, initialState, onSubmit }) {
  // [{이름: “윤승록”, MBTI: “INFP”}, …]
  const infoFormat = document.createElement('div')
  infoFormat.className = 'informationForm' // css적용을 위한 클래스이

  target.appendChild(infoFormat)

  this.render = () => {
    infoFormat.innerHTML = `
    <div class= 'peopleInfoBlock'>
      <textarea class='inputText'  placeholder='사용자 정보를 입력해 주세요' /></textarea>
      <button class='submitbutton'>팀 제작 시작</button>
    <div>
    `
  }

  this.render()

  infoFormat.addEventListener('click', (e) => {
    const target = e.target.closest('button')
    if (target) {
      const textareaElement = e.target.parentNode.querySelector('.inputText')
      const text = textareaElement.value
      onSubmit(text)
    }
  })
}
