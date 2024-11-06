window.showDialog = function showDialog(index) {
  var allDialog = $(".pup-bg");
  $(allDialog[index]).removeClass("hidden");
};
window.hiddenDialog = function hiddenDialog(index) {
  var allDialog = $(".pup-bg");
  $(allDialog[index]).addClass("hidden");
};
 
// 再玩一次 
$(".again").on("touchstart",function(){
  game = new Game("#canvas");
})    