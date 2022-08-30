import test from "ava";
import {
    hashPassword,
    hashPasswordWithRandomSalt,
    comparePasswordToHashed,
} from "../../lib/passwuertNode.js";

test(`hashPasswordWithRandomSalt returns a promise`, t => {
    t.is(typeof hashPasswordWithRandomSalt(`a`).then, `function`);
});

