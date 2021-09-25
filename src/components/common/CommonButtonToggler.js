export default function CommonToggler(target) {
  const togglerBtn = createElement('button', '.header__toggler')
  const btnTemplate = `<a><div class="header__toggler-wrapper">
                            <div class="header__toggler-inner"></div>
                        </div></a>`
  const btnChildNodes = createDom(btnTemplate)

  this.render = () => {
    togglerBtn.appendChild(btnChildNodes)
    target.appendChild(togglerBtn)
  }

  this.init = () => {
    this.render()

    togglerBtn.addEventListener('click', () => {
      togglerBtn.classList.toggle('is-active')
    })
  }

  this.init()
}
