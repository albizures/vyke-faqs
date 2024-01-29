---
title: How to remove all styles from an element with JavaScript
featured: false
tags:
  - vanillajs
description: When changes have been made to an element's original style but now it's need to return it to its original style.
---

When changes have been made to an element's original style but now it's need to return it to its original style.

### In case the changed properties are known:

Setting the property as `null` will remove the value leaving the default style from the class

```js
element.style.border = null;
```

> [!WARNING]  
> Important to note that `undefined` won't work here

### When the properties are unknown or they are to many

This will remove the attribute style all together from the element:

```js
element.removeAttribute("style");
```
