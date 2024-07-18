const accountId = 14453
let accountEmail = "narendra@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"

// accountId = 2
accountEmail = "abc@gmail"
accountPassword = "321321321"
accountCity = "Mumbai"

let accountState;
/* prefer not to user var because of issue inn block scope and functionla scope */

console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])