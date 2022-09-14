import {hashPasswordWithRandomSalt} from "../lib/passwuert.js";

const password = prompt("password to save");
const hashed = await hashPasswordWithRandomSalt(password);
await Deno.writeTextFile("./example/hashedPassword.json", JSON.stringify(hashed));
console.log("saved");
