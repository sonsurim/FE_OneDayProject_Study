export default function HeaderLogo({ target, onClick }) {
  const logo = createElement('a', '.header__logo')
  logo.textContent = '25 JS Project'
  target.appendChild(logo)

  logo.addEventListener('click', (e) => {
    onClick()
  })
}
