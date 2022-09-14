// run changePassword first
import {comparePasswordToHashed} from "../lib/passwuert.js";

const password = prompt("password");
let savedData;
try {
    savedData = await Deno.readTextFile("./example/hashedPassword.json")
} catch (probablyNotFoundError) {
    console.log("Password not found. Use changePassword.js first.")
}

const hashed = JSON.parse(savedData)
    
const isCorrect = await comparePasswordToHashed(password,hashed);
if (!isCorrect) {
    throw "incorrect password";
} else {
    console.log("password corect");
}
console.log("secret.txt content:");
console.log(await Deno.readTextFile("./example/secret.txt"));
