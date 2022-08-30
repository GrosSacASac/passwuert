import test from "ava";
import {
    hashPassword,
    hashPasswordWithRandomSalt,
    comparePasswordToHashed,
} from "../../lib/passwuertNode.js";
import {
    hashPassword as hashPasswordLegacy,
    hashPasswordWithRandomSalt as hashPasswordWithRandomSaltLegacy,
    comparePasswordToHashed as comparePasswordToHashedLegacy,
} from "../../lib/passwuertNodeLegacy.js";


[
    {
        hashPasswordImplementation: hashPassword,
        hashPasswordWithRandomSaltImplementation: hashPasswordWithRandomSalt,
        comparePasswordToHashedImplementation: comparePasswordToHashed,
        name: "webcrypto"
    },
    {
        hashPasswordImplementation: hashPasswordLegacy,
        hashPasswordWithRandomSaltImplementation: hashPasswordWithRandomSaltLegacy,
        comparePasswordToHashedImplementation: comparePasswordToHashedLegacy,
        name: "node legacy"
    }
].forEach(({
    hashPasswordImplementation,
    hashPasswordWithRandomSaltImplementation,
    comparePasswordToHashedImplementation,
    name}) => {

        test(`${name} hashPasswordWithRandomSalt returns  with hashed, salt, iterations`, async t => {
            const h = await hashPasswordWithRandomSaltImplementation(`a`)
            t.truthy(Object.hasOwn(h, `hashed`));
            t.truthy(Object.hasOwn(h, `salt`));
            t.truthy(Object.hasOwn(h, `iterations`));
        });
});
