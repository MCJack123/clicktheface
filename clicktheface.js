var score = 0;
var enableAudio = true;
if (enableAudio) var audio = new Audio('onClickSound.mp3');
gblScoreMax = -1;
// Game function
function doClick(scoremax) {  // When you click the picture
  scoremax = typeof scoremax !== 'undefined' ? scoremax : 100000;
  if (gblScoreMax == -1) gblScoreMax = scoremax;
  score = score + 3;
  if (score > scoremax) document.write("Why are you still clicking?");
  document.getElementById("scoretext").innerHTML = score;
  if (enableAudio) audio.play();
  if (score < 0) brokenGame();
}
// Secrets
function youWin() {  // Secret: Win the game
  if (enableAudio) var overkill = new Audio('winSound.mp3');
  if (enableAudio) overkill.play();
  score = score + 10000000000;
  document.write("you win! perfect!<br>");
  document.write("With a score of: " + score);
}
function youLose() {  // Secret: Get to 1000 points
  score = gblScoreMax - 1;
  if (enableAudio) audio.play();
  document.getElementById("scoretext").innerHTML = score;
}
// Initializer
function initAll(picname, scorename, width, doaud) {
  scorename = typeof scorename !== 'undefined' ? scorename : 'Score: ';
  width = typeof width !== 'undefined' ? width : 200;
  enableAudio = typeof doaud !== 'undefined' ? doaud : true;
  var x = document.createElement("IMG");
  x.setAttribute("src", picname);
  x.setAttribute("width", width);
  x.setAttribute("onClick", "doClick()");
  document.body.appendChild(x);
  var y = document.createElement("P");
  var z = document.createElement("P");
  y.setAttribute("id", "name");
  z.setAttribute("id", "scoretext");
  document.body.appendChild(y);
  document.body.appendChild(z);
  document.getElementById("name").innerHTML = scorename;
  document.getElementById("scoretext").innerHTML = score;
  setInterval(function() {document.getElementById("scoretext").innerHTML = score; }, 1);
}
function brokenGame() {
	document.write("HOW??????????? WHA????????? HMMM?????????");
}
