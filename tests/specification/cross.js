import test from "ava";
import {
    hashPassword,
    hashPasswordWithRandomSalt,
    comparePasswordToHashed,
} from "../../lib/passwuertNode.js";
import {
    hashPasswordLegacy,
    hashPasswordWithRandomSaltLegacy,
    comparePasswordToHashedLegacy,
} from "../../lib/passwuertNode.js";




const pass ="pass";



test(`hashPasswordWithRandomSalt returns a promise`, t => {
    t.is(typeof hashPasswordWithRandomSalt("a").then, `function`);
});

test(`legacy and webcrypto should do the same`, async t => {
    t.truthy(await comparePasswordToHashed(
        pass,
        hashPasswordWithRandomSaltLegacy(pass)
    ));

});

test(`legacy and webcrypto should do the same reverse`, async t => {
    t.truthy(comparePasswordToHashedLegacy(
        pass,
        await hashPasswordWithRandomSalt(pass)
    ));

});

