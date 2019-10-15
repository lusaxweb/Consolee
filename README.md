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
  el: document.getElementById('myId'),, // <--- HTMLElement
  link: 'https://github.com/lusaxweb/Consolee', // <--- link url more info
  text: `• Warn info: El formato de la propiedad color es incorrecto
• Prop: color
• value: Example
• Valores Permitidos: (RGB, HEX, RGB Numbers, Vuesax Colors)
• Example: color="#000" or color="rgb(255,255,255)"`, // <--- text info console
  title: 'CONSOLEE' // <--- title console
})
```

<img width="40%" src="https://raw.githubusercontent.com/lusaxweb/Consolee/master/img/log.jpg" alt="vuesax" />

## props

- **el**: html element para hacer referencia al error.
- **link**: url hacia mas información sobre el error.
- **text**: string con la información del console.
- **title**: titulo del console.

