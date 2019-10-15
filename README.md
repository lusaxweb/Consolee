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

<img width="100%" src="https://raw.githubusercontent.com/lusaxweb/Consolee/master/img/log.jpg" alt="consoleejs" />
<img width="100%" src="https://raw.githubusercontent.com/lusaxweb/Consolee/master/img/logMoz.jpg" alt="consoleejs" />

```js
import consolee from 'consolee'

consolee.warn({
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

<img width="100%" src="https://raw.githubusercontent.com/lusaxweb/Consolee/master/img/warn.jpg" alt="consoleejs" />
<img width="100%" src="https://raw.githubusercontent.com/lusaxweb/Consolee/master/img/warnMoz.jpg" alt="consoleejs" />

```js
import consolee from 'consolee'

consolee.error({
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

<img width="100%" src="https://raw.githubusercontent.com/lusaxweb/Consolee/master/img/error.jpg" alt="consoleejs" />
<img width="100%" src="https://raw.githubusercontent.com/lusaxweb/Consolee/master/img/errorMoz.jpg" alt="consoleejs" />

```js
import consolee from 'consolee'

consolee.success({
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

<img width="100%" src="https://raw.githubusercontent.com/lusaxweb/Consolee/master/img/success.jpg" alt="consoleejs" />
<img width="100%" src="https://raw.githubusercontent.com/lusaxweb/Consolee/master/img/successMoz.jpg" alt="consoleejs" />

## props

- **el**: Html element to refer to the error.
- **link**: Url to more information about the error.
- **text**: String with console information.
- **title**: Console title.
- **icon**: change icon or add.

