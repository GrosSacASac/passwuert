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
} from "passwuert"; // async
// or from "passwuert/lib/passwuertNodeLegacy.js" // sync



// deno
import {
    hashPasswordWithRandomSalt,
    comparePasswordToHashed,
} from "https://unpkg.com/passwuert/lib/passwuert.js"; // async

// password is a string
// digestname is optional, default sha512 or SHA-512
// keylen is optional, the length of the result hash, default 16
// use async keyword for async version
const { hash, salt, iterations } = hashPasswordWithRandomSalt(password, digestName, keylen);
// again digestName and keylen are optional but should be the same as used above
const samePassword = comparePasswordToHashed(password, {hash, salt, iterations}, digestName, keylen)
```

## digestname choices

- BLAKE2b512
- BLAKE2s256
- MD4
- MD5
- MD5-SHA1
- MDC2
- RIPEMD160
- SHA1
- SHA224
- SHA256
- SHA3-224
- SHA3-256
- SHA3-384
- SHA3-512
- SHA384
- SHA512
- SHA512-224
- SHA512-256
- SHAKE128
- SHAKE256
- SM3

## About

### Difference between passwuertNodeLegacy.js and passwuertNode.js

passwuertNode.js imports passwuert.js which uses webcrypto. passwuertNodeLegacy uses custom Node.js specific functions that existed before and the functions are sync.

### Difference with [bcrypt](https://www.npmjs.com/package/bcrypt)

- Does not depend on Python or C++
- Uses modern WebCrypto API
- Works in the browser and Deno too
- hash, salt and iterations are returned as 3 separate items
- Requires Node18+


### Changelog

[Changelog](./changelog.md)

### License

[CC0](./license.txt)

<!-- ### Related -->
