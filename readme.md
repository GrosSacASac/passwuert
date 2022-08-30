# [passwuert](https://github.com/GrosSacASac/passwuert)

## Installation

[`npm i passwuert`](https://www.npmjs.com/package/passwuert)

## Usage

[See example](https://github.com/GrosSacASac/passwuert/tree/main/example)

## passwuert.js

```js
import {
    hashPasswordWithRandomSalt,
    comparePasswordToHashed,
} from "passwuert";
// or from "passwuert/lib/passwuertNodeLegacy.js"

// deno
import {
    hashPasswordWithRandomSalt,
    comparePasswordToHashed,
} from "https://unpkg.com/passwuert/lib/passwuert.js";
```

## About

### Difference between passwuertNodeLegacy.js and passwuertNode.js

passwuertNode.js imports passwuert.js which uses webcrypto. passwuertNodeLegacy uses custom Node.js specific functions that existed before and the functions are sync.

### Changelog

[Changelog](./changelog.md)

### License

[CC0](./license.txt)

<!-- ### Related -->
