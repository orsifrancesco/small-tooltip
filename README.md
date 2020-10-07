# small-tooltip

[![NPM version](https://img.shields.io/npm/v/small-tooltip.svg?style=flat)](https://www.npmjs.com/package/small-tooltip)

Just a small tooltip for ES6 and/or React.

![smallTooltip](https://user-images.githubusercontent.com/6490641/84581443-c6ea3380-add8-11ea-9d92-94564feb488a.gif "small-tooltip")

## Installation

```bash
$ npm install small-tooltip
```

## Examples

```jsx

  // just paste these few lines of code in your main file (index.js.. or app.js..)
  // that's it, I will be always available in all the pages of your project!
  // ..available for the dynamic elements as well..

  import SmallTooltip from 'small-tooltip';
  import 'small-tooltip/smallTooltip.css';    // <-- easy to customize

  const smallTooltip = new SmallTooltip();
  smallTooltip.init();

```

```html

  <!-- html -->
  <div id="small-tooltip"></div>
  <div data-tip="I'm a small tooltip">Move your mouse here to see me</div>

```

```jsx

  // simple javascript

  document.body.insertAdjacentHTML('beforeend', `<div id="small-tooltip"></div>`);
  document.body.insertAdjacentHTML('beforeend', `
    <i data-tip="I'm a lovely small tooltip!!">❤❤❤</i>
  `);

  // or React

  function App() {

    return (
      <>
        <div id="small-tooltip"></div>
        <h2 data-tip="I'm another small tooltip">Move your mouse here to see me as well!</h2>
      </>
    );

  }

```

## Demo

[Just a example project where you can see small-tooltip in action..](https://messagerimus.com)

## License

Licensed under MIT