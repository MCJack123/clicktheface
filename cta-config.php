// This is a PHP file.
function loadFile($file) {
$fileo = fopen($file, "r");
echo fread($fileo, filesize($file));
fclose($fileo);
}
