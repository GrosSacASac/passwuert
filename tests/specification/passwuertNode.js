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

const pass = `€Ereozuipeiopuzr@nigøƒ-♠•Í`;
const badPassword = `12345678`;

const promisifySyncFunction = (syncFunction) => (...x) => {
    return Promise.resolve(syncFunction(...x));
};

[
    {
        hashPasswordImplementation: hashPassword,
        hashPasswordWithRandomSaltImplementation: hashPasswordWithRandomSalt,
        comparePasswordToHashedImplementation: comparePasswordToHashed,
        name: `webcrypto`,
    },
    {
        hashPasswordImplementation: promisifySyncFunction(hashPasswordLegacy),
        hashPasswordWithRandomSaltImplementation: promisifySyncFunction(hashPasswordWithRandomSaltLegacy),
        comparePasswordToHashedImplementation: promisifySyncFunction(comparePasswordToHashedLegacy),
        name: `node legacy`,
    },
].forEach(({
    hashPasswordImplementation,
    hashPasswordWithRandomSaltImplementation,
    comparePasswordToHashedImplementation,
    name}) => {

        test(`${name} hashPasswordWithRandomSalt returns  with hashed, salt, iterations`, async t => {
            const h = await hashPasswordWithRandomSaltImplementation(`a`);
            t.truthy(Object.hasOwn(h, `hashed`));
            t.truthy(Object.hasOwn(h, `salt`));
            t.truthy(Object.hasOwn(h, `iterations`));
        });

        
        test(`${name} passing the same password to comparePasswordToHashed,
        and hashPasswordWithRandomSalt should always return true`, async t => {
            t.truthy(await comparePasswordToHashedImplementation(
                pass,
                await hashPasswordWithRandomSaltImplementation(pass),
            ));
            
        });


        test(`${name} comparePasswordToHashed should be false when comparing different passwords and salt`, async t => {
            t.false(await comparePasswordToHashedImplementation(pass, await hashPasswordWithRandomSaltImplementation(badPassword)));
        });

        test(`${name} comparePasswordToHashed should be false when comparing with same password and different salt`,async t => {
            const hashAndSaltA = await hashPasswordWithRandomSaltImplementation(pass);
            const hashAndSaltB = await hashPasswordWithRandomSaltImplementation(pass);
            t.false(await comparePasswordToHashed(pass, {
                hashed: hashAndSaltA.hashed,
                salt: hashAndSaltB.salt
            }));
        });

});
