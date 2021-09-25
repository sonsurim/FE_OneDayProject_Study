export default function HeaderToggler({ target, onClick }) {
  const togglerBtn = createElement('button', '.header__toggler')
  const btnInnerHtml = createDom(`<a><div class="header__toggler-wrapper">
                                    <div class="header__toggler-inner"></div>
                                  </div></a>`)

  togglerBtn.appendChild(btnInnerHtml)
  target.appendChild(togglerBtn)

  togglerBtn.addEventListener('click', () => {
    onClick()
  })
}
