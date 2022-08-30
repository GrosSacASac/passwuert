import { webcrypto } from "node:crypto";

if (!globalThis?.crypto?.subtle?.importKey) {
    globalThis.crypto = webcrypto;
}
