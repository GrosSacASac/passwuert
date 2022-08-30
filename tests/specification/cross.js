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


const pass = `pass`;



test(`legacy and webcrypto should do the same`, async t => {
    t.truthy(await comparePasswordToHashed(
        pass,
        hashPasswordWithRandomSaltLegacy(pass),
    ));

});

test(`legacy and webcrypto should do the same reverse`, async t => {
    t.truthy(comparePasswordToHashedLegacy(
        pass,
        await hashPasswordWithRandomSalt(pass),
    ));

});

