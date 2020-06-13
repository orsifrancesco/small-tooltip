# small-tooltip

[![NPM version](https://img.shields.io/npm/v/small-tooltip.svg?style=flat)](https://www.npmjs.com/package/small-tooltip)

Just a small tooltip for ES6 and/or React.

## Installation

```bash
$ npm install small-tooltip
```

## Examples

```jsx

  // just paste these two lines of code in your main file (index.js.. or app.js..)
  // that's it, I will be always available in all the pages of your project!

  import smallTooltip from 'small-tooltip';
  import 'small-tooltip/smallTooltip.css';


```

```html

  <!-- html -->

  <div data-tip="I'm a small tooltip">Move your mouse here to see me</div>

```

```jsx

  // simple javascript

  document.body.insertAdjacentHTML('beforeend', `
    <i data-tip="I'm a lovely small tooltip!!">❤❤❤</i>
  `);

  // or React

  function App() {

    return (
      <h2 data-tip="I'm another small tooltip">Move your mouse here to see me as well!</h2>
    );

  }

```

## License

Licensed under MIT