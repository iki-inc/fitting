# Fitting

Library to calculate with JS when `background-size` or `object-fit` is not available.

## Methods

### `Fitting.cover(base, target[, options]): { width: number, height: number, x: numner, y: numner }`

Same as `background-size: cover`.

#### Parameters

**`base`**  
params: `{ width: number, height: number }`

Base size.

**`target`**  
params: `{ width: number, height: number }`

Original size of the element to be changed.

**`options`** (Optional)  
params: `{ scale?: number, scaleX?: number, scaleY?: number }`

Scale option to extend the calculation of the original element.

**If present at the same time of `scale`, `scaleX` and `scaleY` is `scaleX` or `scaleY` > `scale`**  
e.g.:  
`{ scale: 0.5 }`  
X scale = 0.5  
Y scale = 0.5

`{ scaleX: 0.5 }`  
X scale = 0.5 (scaleX)  
Y scale = 1 (default)

`{ scaleY: 0.5 }`  
X scale = 1 (default)  
Y scale = 0.5 (scaleY)

`{ scale: 2, scaleX: 0.5 }`  
X scale = 0.5 (scaleX)  
Y scale = 2 (scale)

`{ scale: 2, scaleY: 0.5 }`  
X scale = 2 (scale)  
Y scale = 0.5 (scaleY)

#### Example

```js
import Fitting from '@iki-inc/fitting'

console.log(
  Fitting.cover({ width: 800, height: 400 }, { width: 1000, height: 200 })
)
// -> width: 2000, height: 400, x: -600, y: 0

console.log(
  Fitting.cover(
    { width: 800, height: 400 },
    { width: 1000, height: 200 },
    { scale: 0.5 }
  )
)
// -> width: 1000, height: 200, x: -100, y: 100
```

```
top left | top center | top right
middle left | center | middle right
bottom left | bottom center | bottom right
```
