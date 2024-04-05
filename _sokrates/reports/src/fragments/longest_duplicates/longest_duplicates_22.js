controllers/authentication.js [27:50]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  var password = generator.generate({
    length: 7,
    numbers: true
  });
user.setPassword(password);
user.save();
var idB = req.body.tel;

  if (user) {
 
console.log("user",idB);
   let users = await User.find({"acte":1});
let use = await User.find({"tel":idB});
 var s = "BT-GN";
var p = users[0].actes + 1;
users[0].actes = p;
    users[0].save();
console.log("bellab bella",users);
console.log("mon",users);
var t = req.body.commune;
var ts = t.substring(0,3);
var reference = ts+p+s ;
   use[0].reference = reference;
  var object = {
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



controllers/authentication.js [191:215]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  var password = generator.generate({
    length: 7,
    numbers: true
  });
user.setPassword(password);
user.save();
var idB = req.body.tel;

  if (user) {

console.log("user",idB);
 let users = await User.find({"acte":1});
let use = await User.find({"tel":idB});
var s = "BT-GN";
var p = users[0].actes + 1;
users[0].actes = p;
  users[0].save();
// users[0].identifiant;
console.log("bellab bella",users);
console.log("mon",users);
var t = req.body.commune;
var ts = t.substring(0,3);
var reference = ts+p+s ;
 use[0].reference = reference;
var object = {
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



