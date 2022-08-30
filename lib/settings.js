export {
    defaultDigestNameLegacy,
    defaultDigestName,
    saltLength,
    ancientIterations,
    defaultIterations,
    defaultKeyLen,
};

const defaultDigestNameLegacy = `sha512`;
const defaultDigestName = `SHA-512`;
const saltLength = 16;
const ancientIterations = 6; // can remove if no ancient from pre v1 anymore
const defaultIterations = 10 ** 3;
const defaultKeyLen = 16;

