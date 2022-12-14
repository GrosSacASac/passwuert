export {
    hashPassword,  // export for testing
    hashPasswordWithRandomSalt,
    comparePasswordToHashed,
};

import {pbkdf2Sync, webcrypto } from "node:crypto";

import {
    defaultDigestNameLegacy,
    saltLength,
    ancientIterations,
    defaultIterations,
    defaultKeyLen,
} from "./settings.js";



const hashPassword = (password, salt, iterations, digestName = defaultDigestNameLegacy, keylen = defaultKeyLen) => {
    return pbkdf2Sync(password, salt, iterations, keylen, digestName);
};

const hashPasswordWithRandomSalt = (password, digestName, keylen) => {
    const salt = webcrypto.getRandomValues(new Uint8Array(saltLength));
    
    return {
        hashed: Array.from(hashPassword(password, salt, defaultIterations, digestName, keylen)),
        salt: Array.from(salt),
        iterations: defaultIterations,
    };
};

const comparePasswordToHashed = (password, {hashed, salt, iterations = ancientIterations}, digestName, keylen) => {
    if (typeof salt === `string`) { // deal with old data
        salt = Array.from(salt, (v => {
            return v.charCodeAt(0);
        }));
    }
    return hashPassword(password, new Uint8Array(salt), iterations, digestName, keylen).every((number, i) => {
        return hashed[i] === number;
    });

};
