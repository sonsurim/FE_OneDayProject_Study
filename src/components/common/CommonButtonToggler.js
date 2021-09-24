export default function CommonToggler(target) {
  const togglerBtn = createElement('button', '.nav__toggler', '.nav__toggler-r')
  const btnTemplate = `<a><div class="nav__toggler-wrapper">
                            <div class="nav__toggler-inner"></div>
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
