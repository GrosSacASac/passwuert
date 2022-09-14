# Example

hashPassword.js will prompt to store a new password into hashedPassword.json.

Then viewSecret.js will prompt for the saved password. If it is correct you could log in for example, or like in this example, display the content of secret.txt.


`deno run --allow-write="./example/hashedPassword.json" ./example/changePassword.js`

then 

`deno run --allow-read="./example/hashedPassword.json","./example/secret.txt" ./example/viewSecret.js`