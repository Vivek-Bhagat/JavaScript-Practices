const accountId = 144553;
let accountEmail = "testserver@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2;  // not allowed

accountEmail = "abc.gmial.com";
accountPassword = "1213";
accountCity = "bangluru";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
