const ROUTE_EVENT_NAME = 'route-change'

const initRouter = (onRoute) => {
  window.addEventListener(ROUTE_EVENT_NAME, (e) => {
    const { nextUrl } = e.detail

    if (nextUrl) {
      history.pushState(null, null, `/content/${nextUrl}`)
      onRoute()
    }
  })
}

const push = (nextUrl) => {
  window.dispatchEvent(
    new CustomEvent('route-change', {
      detail: {
        nextUrl,
      },
    }),
  )
}

export { initRouter, push }
