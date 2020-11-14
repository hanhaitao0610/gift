function plusReady() {
 plus.key.addEventListener('backbutton', function() {
  bui.back();
 }, false);
 plus.navigator.setStatusBarBackground("#f8f8f8");
 plus.navigator.setStatusBarStyle("dark");
}
if (window.plus) {
 plusReady();
} else {
 document.addEventListener('plusready', plusReady, false);
}
var pageview = {};
bui.ready(function(argument) {
 pageview.bind();
});
pageview.bind = function() {
 bui.btn({
  id: ".bui-page",
  handle: ".bui-btn,a"
 }).load();
};

//中奖名单样式控制
		$(function(){
			$('.ca-title .ca-menu').addClass('cactive');
			$('.ca-title span').click(function(){
				$('.ca-title span').removeClass('cactive');
				$(this).addClass('cactive');})
		//开箱动画弹窗
			$('.ca-content dl dt img').click(function(){
				$(this).addClass('caseopen');
				var that=this;
				that.addEventListener("webkitAnimationEnd", function() {
				       // this.className = "";
					   setTimeout(function(){
						   $(that).attr({ src: "img/game/caopen.png", alt: "宝箱" });
						  $('.ca-prmsg').fadeIn(500);
						   $(".ca-prmsg").click(function(){
						     $('.ca-prmsg').fadeOut(500);
						    });
					   },300);
					  $('.ca-content dl dt img').removeClass('caseopen');
				    })
				 $(".ca-content dl dt img").attr({ src: "img/game/caclose.png", alt: "蛋壳" });
				})
			})