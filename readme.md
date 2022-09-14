# [passwuert](https://github.com/GrosSacASac/passwuert)

Hash password and compare to hashed.

## Why

Hash passwords to not store passwords in plaintext. Having passwords in plaintext is risky, because they can be leaked as soon as the system or the administrator is compromised. Also it is forbidden to store password in plaintext files.

To still be able to verify a password we simply hash it again with the same function. If the result is the same then it means the inputs were the same.

We add salt, to slow down potential hackers. The salt is random, so that if 2 people use the same password, the data will not look the same.

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
