
const getIcon = (props: any) => {
  if (props.type === 'warn') {
    return props.icon || '😬'
  } else if (props.type === 'error') {
    return props.icon ||  '❗️'
  } else if (props.type === 'success') {
    return props.icon ||  '✔️'
  } else {
    return props.icon || ''
  }
}

const getColorHeader = (props: any) => {
  if (props.type === 'warn') {
    return '#ffba00'
  } else if (props.type === 'error') {
    return 'rgb(255,71,87)'
  } else if (props.type === 'success') {
    return 'rgb(70,201,58)'
  } else {
    return '#fff'
  }
}

const base = (props: any) => {
  const header = `%c${getIcon(props)} ${props.title || props.type.toUpperCase() || ''}`
  const headerStyle = `color: ${ getColorHeader(props) === '#fff' ? '#5b5777' : '#fff'}; font-weight: bold; font-size: 13px; border-radius: 0px 16px 16px 16px; padding-left: 4px; padding-right: 15px; padding-top: 4px; padding-bottom: 4px; background: ${getColorHeader(props)}; letter-spacing: 1px; margin: auto; text-shadow: 3px 3px 3px rgba(0,0,0,.2); box-shadow: 0px -5px 10px 5px rgba(0,0,0,.1)`
  const text = `%c
-------------------------------
${props.text}
-------------------------------${ props.el ? '\n' : ''}`
  const print = [
    header + text + `${ props.link ? '%c👆 More info:' : ''} ${props.link || ''}\n` + '%c Powered by Consolee\n',
    headerStyle,
    props.type === 'success' ? `color: ${getColorHeader(props)}` : '',
    props.type === 'success' ? `color: ${getColorHeader(props)}` : '',
    'font-size: 9px; opacity: 0.6; padding-top: 10px; text-align: right; width: 100%; display: block; margin-left: auto;',
    '\n',
    props.el ? props.el : '',
  ]
  if (props.type === 'warn') {
    console.warn(...print)
  } else if(props.type === 'error') {
    console.error(...print)
  } else {
    console.log(...print)
  }
}

const warn = (props: any) => {
  base({
    type: 'warn',
    ...props
  })
}
const log = (props: any) => {
  base({
    type: 'log',
    ...props
  })
}
const error = (props: any) => {
  base({
    type: 'error',
    ...props
  })
}
const success = (props: any) => {
  base({
    type: 'success',
    ...props
  })
}

// (window as any).consolee = consolee

export default {
  error,
  log,
  warn,
  success
}
