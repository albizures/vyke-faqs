---
title: How to capitalize a string with JavaScript
featured: false
tags:
  - vanillajs
description: JavaScript doesn't have a capitalize function
---

JavaScript doesn't have a capitalize function, but it's easy to write one from scratch

```js
function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

capitalize("hello, world!"); // -> 'Hello, world!'
```

And in case it's need to have all world capitalize:

```js
function capitalize(value: string) {
  const [head, tail] = [
    value.charAt(0).toUpperCase(),
    value.slice(1).replace(/\s(\w)/g, (match) => {
      return match.toUpperCase();
    }),
  ];
  return `${head}${tail}`;
}
capitalize("hello, world!"); // -> 'Hello, World!'
```

> [!NOTE]  
> Bear in mind that any uppercase letter in the middle of a word would be kept as is

## Alternatives

Alternatively there are packages with this functionality:

- [\_.capitalize](https://lodash.com/docs/4.17.15#capitalize) (lodash)
- [capitalize](https://sugarjs.com/docs/#/String/capitalize) (Sugar.js)

Or using css:

```css
.text {
  text-transform: capitalize;
}
```
