import test from "ava";
import { 
    hashPassword,
    hashPasswordWithRandomSalt,
    comparePasswordToHashed,
} from "../../lib/passwuertNode.js";



test(`hashPasswordWithRandomSalt returns a promise`, t => {
    t.is(typeof hashPasswordWithRandomSalt("a").then, `function`);
});

test(`hashPasswordWithRandomSalt resolves with hashed, salt, iterations`, async t => {
    return hashPasswordWithRandomSalt("a").then(value => {
        t.truthy(Object.hasOwn(value, "hashed"));
        t.truthy(Object.hasOwn(value, "salt"));
        t.truthy(Object.hasOwn(value, "iteration"));
    });
});
