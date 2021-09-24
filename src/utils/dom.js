function $($element) {
  if (!$element) {
    return
  }

  return document.querySelector($element)
}

function createDom(template) {
  const domParser = new DOMParser()
  const doc = domParser.parseFromString(template, 'text/html')
  console.log(doc)
  const childNode = Array.from(doc.body.childNodes)
  const fragment = document.createDocumentFragment()

  fragment.append(...childNode)
  return fragment
}

function createElement(element, ...option) {
  const $element = document.createElement(element)

  if (option.length) {
    option.forEach((option) => {
      const optionName = option.substring(1)

      switch (option[0]) {
        case '#':
          $element.setAttribute('id', optionName)
          break
        default:
          $element.classList.add(optionName)
      }
    })
  }

  return $element
}

function addClass($element, ...classNames) {
  if (!$element) {
    return
  }

  classNames.forEach((className) => $element?.classList.add(className))
}

function addClassAll($NodeList, className) {
  $NodeList.forEach(($element) => {
    $element?.classList.add(className)
  })
}

function removeClass($element, ...classNames) {
  if (!$element) {
    return
  }

  classNames.forEach((className) => $element?.classList.remove(className))
}

function removeClassAll($NodeList, className) {
  $NodeList.forEach(($element) => {
    $element?.classList.remove(className)
  })
}

function replaceClass($element, currentClassName, replaceClassName) {
  if (!$element) {
    return
  }

  $element.classList.replace(currentClassName, replaceClassName)
}
