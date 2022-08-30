export {
    hashPassword,  // export for testing
    hashPasswordWithRandomSalt,
    comparePasswordToHashed,
};

import {pbkdf2Sync, webcrypto } from "node:crypto";

import {
    digestNameLegacy,
    saltLength,
    ancientIterations,
    iterations,
    keylen,
} from "./settings.js";



const hashPassword = (password, salt, iterations) => {
    return pbkdf2Sync(password, salt, iterations, keylen, digestNameLegacy);
};

const hashPasswordWithRandomSalt = (password) => {
    const salt = webcrypto.getRandomValues(new Uint8Array(saltLength));
    
    return {
        hashed: Array.from(hashPassword(password, salt, iterations)),
        salt: Array.from(salt),
        iterations,
    };
};

const comparePasswordToHashed = (password, {hashed, salt, iterations = ancientIterations}) => {
    return hashPassword(password, new Uint8Array(salt), iterations).every((number, i) => {
        return hashed[i] === number;
    });

};
