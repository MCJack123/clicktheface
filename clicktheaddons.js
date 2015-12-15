// Initiate databases
var log = "";
var addons = new Object();
addons.all = new Array(256);
addons.all[0] = 0;
var userdatabase = new Object();
// Addon functions
function newAddon(name, price, useFunction, onClick, repTimeSec) {  // Make a new addon
// Syntax: <name of the new addon>, <faces to spend for addon>, <use a function on repeat?>, <function or number of points on repeat>, <time between>
if (score < 0) brokenGame();
console.log("Creating addon " + name);
addons.all[0]++;
addons.all[addons.all[0]] = name;
 addons[name] = new Object();
 addons[name].displayname = name;
 addons[name].price = price;
 addons[name].runFuncOnClick = useFunction;
 addons[name].timePerClick = repTimeSec * 1000;
 userdatabase[name] = new Object();
 userdatabase[name].bought = 0;
 userdatabase[name].customPrice = price;
 userdatabase[name].interval = new Array(99);
 if (useFunction == true)  addons[name].clickFunction = onClick;
 else  addons[name].timeValue = onClick;
}
function buyAddon(name) {  // Buy an addon
if (score < 0) brokenGame();
console.log("Buying addon " + name);
if (name == "") {alert("Please enter a valid addon."); return false; }
if (addons[name] == null) {alert(name + " is not a valid addon."); return false; }
if (score < addons[name].price) {alert("You do not have enough faces."); return false; }
score = score - addons[name].price;
if (addons[name].runFuncOnClick) userdatabase[name].interval[userdatabase[name].bought] = setInterval(addons[name].clickFunction(), addons[name].timePerClick);
else userdatabase[name].interval[userdatabase[name].bought] = setInterval(function () {score = score + addons[name].timeValue;}, addons[name].timePerClick);
userdatabase[name].bought++;
if (userdatabase[name].interval[userdatabase[name].bought - 1] == undefined || userdatabase[name].interval[userdatabase[name].bought - 1] == null || userdatabase[name].interval[userdatabase[name].bought - 1] == "") return false;
else return true;
}
function sellAddon(name) {  // Sell an addon
if (score < 0) brokenGame();
if (name == "") {alert("Please enter a valid addon."); return false; }
if (addons[name] == null) {alert(name + " is not a valid addon."); return false; }
if (addons[name].bought > 0) {
score += addons[name].price / 2;
clearInterval(userdatabase[name].interval[userdatabase[name].bought]);
userdatabase[name].bought--;
if (userdatabase[name].interval[userdatabase[name].bought + 1] == undefined || userdatabase[name].interval[userdatabase[name].bought + 1] == null || userdatabase[name].interval[userdatabase[name].bought + 1] == "") return true;
else return false;
}
else {alert("You cannot sell 0 " + name + "s for faces."); return false; }
}
// Example addon
function createSampleAddon(buy) {if (score < 0) brokenGame(); newAddon("Clicker", 15, false, 3, 5); if (buy) buyAddon("Clicker"); }
function loadConfig() {
 var incode = <?php $fileo = fopen("ctf-config.csv", "r"); echo fread($fileo, filesize("ctf-config.csv")); fclose($fileo); ?>;
 incode.split("|");
 var i = 1;
 while (i <= incode.length) {
  incode[i-1].split(",");
  i++;
 }
 i = 0;
 var name = "";
 while (i < incode.length) {
  name = incode[i][0];
  addons[name] = new Object();
  addons[name].displayName = name;
  addons[name].price = incode[i][1];
  addons[name].runFuncOnClick = false;
  addons[name].timeValue = incode[i][2];
  addons[name].timePerClick = incode[i][3] * 1000;
  userdatabase[name] = new Object();
  userdatabase[name].bought = 0;
  userdatabase[name].customPrice = incode[i][1];
  userdatabase[name].interval = new Array(99);
  addons.all[0] += 1;
  addons.all[addons.all[0]] = name;
 }
}
