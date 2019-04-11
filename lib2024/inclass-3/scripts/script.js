
window.onload = init;
 function init() {
  	document.querySelector('#show').onclick = showContent;
    document.querySelector('#hide').onclick = hideContent;
	document.querySelector('#small').onclick = smallText;
	document.querySelector('#big').onclick = bigText;
	document.querySelector('#blue').onclick = blueBackground;
	document.querySelector('#red').onclick = redBackground;
 };

$('#hide').click(function() {
	document.getElementById('content').style.display="none";
});
$('#show').click(function() {
 	document.getElementById('content').style.display="block";
});
$('#small').click(function() {
	document.getElementById('content').style.fontSize="12px";
});
$('#big').click(function() {
 	document.getElementById('content').style.fontSize="48px";
});
$('#blue').click(function() {
	document.getElementById('content').style.backgroundColor="#3333ff"
});
$('#red').click(function() {
 	document.getElementById('content').style.backgroundColor="#ff3333"
});