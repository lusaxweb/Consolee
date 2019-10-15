

interface Iconsolee {
  warn: any
}

declare global {
  interface Window {
      consolee: Iconsolee
  }
}

window.console = window.console || {}
