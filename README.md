# ClickTheFace
A silly little game that I made in one day in JavaScript.
Yeah, that's in JS. You can download the JavaScript files, or import them from here: cppconsole.bruienne.com/clicktheface/clickthe[addons or face].js .

## Functions & Usage

### Base game

#### initAll(picname, scorename, width)

A handy function to automatically initialize the image and score texts.

picname: Required. The file path of the picture to be clicked on.

scorename: Optional. The text to be displayed above the score. Defaults to "Score:".

width: Optional. Width of the picture to be displayed. Defaults to 200.

#### doClick(scoremax)

The function that runs when you click the picture.

scoremax: Optional. The maximum score until the game is overwritten with "Why are you still clicking?" Defaults to 100000

#### youWin()

A secret that will give you 10000000000 points and say "You win! Perfect!" along with a sound in winSound.mp3.

#### youLose()

A secret that will give you one less point than scoremax in doClick. One click will override your game.



### ClickTheAddons

note: all arguments are required.

#### newAddon(name, price, useFunction, onClick, repTimeSec)

A function to make a new addon.

name: The name of the new addon.

price: The points required to buy the addon.

useFunction: Boolean specifying if a function will be called for every repetition.

onClick: Either the function to be called or the points to be given every repetition.

repTimeSec: Number of seconds for each point.

#### buyAddon(name)

A function to buy an addon and do onClick from newAddon().

name: Name of addon to buy.

#### sellAddon(name)

Same as buyAddon, but selling and giving back half of what was paid.

name: Name of addon to sell.

#### createSampleAddon(buy)

Create a sample addon, Clicker, that costs 15 points and gives 3 points every 5 seconds.

buy: Boolean specifying if one Clicker should be bought on run.

## Variables and Objects

I have a few variables and objects that can be accessed for any need.

score: The score.

#### addons: A complex object containing all the addon information.

addons.all - Array containing all the names of the addons. Item 0 is the number of addons. Other items are the names.
  
addons.name - The actual addon data. Replace name with the name of your addon.
  
 addons.name.displayname - Useless variable with the name of the addon.
  
 addons.name.price - Price of the addon.
  
 addons.name.runFuncOnClick - Run a function on every repeat?
  
 addons.name.timePerClick - Time between each function or points.
  
 addons.name.clickFunction - if runFuncOnClick is true, function to be run after timePerClick ms.
  
 or
  
 addons.name.timeValue - Points given per timePerClick.
  


#### userdatabase: Contains the user data related to the addons

 userdatabase.name: All the data is in here. Replace name with your addon.
  
  userdatabase.name.bought: How many of name were bought.
  
  userdatabase.name.customPrice: Useless variable containing (maybe) a custom price.
  
  userdatabase.name.interval: An array containing the interval integers returned from setInterval.



That is all there is to ClickTheFace!
