export {
    hashPassword, // export for testing
    hashPasswordWithRandomSalt,
    comparePasswordToHashed,
 };

import {
    defaultDigestName,
    saltLength,
    ancientIterations,
    defaultIterations,
    defaultKeyLen,
} from "./settings.js";


const keylen8 = defaultKeyLen * 8;

const enc = new TextEncoder(); // not required in node

const hashPassword = async (password, salt, iterations, keylen=keylen8, digestName=defaultDigestName) => {
    const keyMaterial = await crypto.subtle.importKey(
        `raw`,
        enc.encode(password),
        { name: `PBKDF2` },
        false,
        [`deriveBits`/* , "deriveKey" */],
    );
    const derivedBitsArrayBuffer = await crypto.subtle.deriveBits(
        {
        name: `PBKDF2`,
        salt,
        iterations,
        hash: digestName,
        },
        keyMaterial,
        keylen,
    );

    return derivedBitsArrayBuffer;
};

const hashPasswordWithRandomSalt = async (password) => {
    const salt = crypto.getRandomValues(new Uint8Array(saltLength));
    
    const hashed = await hashPassword(password, salt, defaultIterations);

    return {
        hashed: Array.from(new Uint8Array(hashed)),
        salt: Array.from(salt),
        iterations: defaultIterations,
    };
};

const comparePasswordToHashed = async (password, {hashed, salt, iterations = ancientIterations}) => {
    return Array.from(new Uint8Array(await hashPassword(password, new Uint8Array(salt), iterations))).every((number, i) => {
        return hashed[i] === number;
    });
};

