export {
    digestNameLegacy,
    digestName,
    saltLength,
    ancientIterations,
    iterations,
    keylen,
};

const digestName = "SHA-512";
const saltLength = 16;
const ancientIterations = 6; // can remove if no ancient from pre v1 anymore
const iterations = 10**3;
const keylen = 16;

const digestNameLegacy = `sha512`;
