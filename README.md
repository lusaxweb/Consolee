# Consoleejs

> Simple library console javascript styling

## install 

```
npm i consolee
```

## usage

```js
import consolee from 'consolee'

consolee.log({
  el, // <--- HTMLElement
  link: 'https://lusaxweb.github.io/vuesax/', // <--- link url more info
  text: `• Component: ${el.__vue__.$vnode.componentOptions.tag}
• Warn info: El formato de la propiedad color es incorrecto
• Prop: color
• value: ${color}
• Valores Permitidos: (RGB, HEX, RGB Numbers, Vuesax Colors)
• Example: color="#000" or color="rgb(255,255,255)"`, // <--- text info console
  title: 'VUESAX' // <--- title console
})
```

## props

- **el**: html element para hacer referencia al error.
- **link**: url hacia mas información sobre el error.
- **text**: string con la información del console.
- **title**: titulo del console.

