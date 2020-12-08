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


function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return decodeURI(r[2]);
	return "";
}

//中奖名单样式控制
		$(function(){
			var index=Math.floor(Math.random()*10);
			if(index===10 || index===9){
				index=5;
			}

			$('.ca-title .ca-menu').addClass('cactive');
			$('.ca-title span').click(function(){
				$('.ca-title span').removeClass('cactive');
				$(this).addClass('cactive');})

			console.log("index="+index);

			//开箱动画弹窗
			var currentIndex=0;
			$("img[name='nottarget']").each(function () {
				//中奖的情况
				if(currentIndex++===index){
					$(this).click(function () {
						var name= getQueryString("name");
						var gift= getQueryString("gift");
						$("div[name='ptarget']").append("<p>恭喜"+name+"宝贝获得"+gift+"</p>");
						$(this).addClass('caseopen1');
						var that = this;
						that.addEventListener("webkitAnimationEnd", function () {
							// this.className = "";
							setTimeout(function () {
								$(that).attr({src: "img/game/caopen.png", alt: "宝箱"});
								$('.ca-prmsg').fadeIn(500);
								$(".ca-prmsg").click(function () {
									$('.ca-prmsg').fadeOut(500);
								});
							}, 300);
							$('.ca-content dl dt img').removeClass('caseopen1');

							console.log("name="+name);
						})
						$(".ca-content dl dt img").attr({src: "img/game/caclose.png", alt: "蛋壳"});
					})
				}else{
					$(this).click(function () {
						$(this).addClass('caseopen1');
						var that=this;
						that.addEventListener("webkitAnimationEnd", function() {
							setTimeout(function(){
								$(that).attr({ src: "img/game/caopen.png", alt: "宝箱" });
								$('.ca-prmsg-not').fadeIn(500);
								$(".ca-prmsg-not").click(function(){
									$('.ca-prmsg-not').fadeOut(500);
								});
							},300);
							$('.ca-content dl dt img').removeClass('caseopen1');
						})
						$(".ca-content dl dt img").attr({ src: "img/game/caclose.png", alt: "蛋壳" });
					})
				}

			})


		})