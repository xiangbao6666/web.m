$(function() {
      var index;
	$(".header_item_ul li").on("tap", function() {
		$(this).addClass("border1").siblings().removeClass("border1");
		index = $(this).index();
		if(index == 0) {
			var sulr = "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=5&limit=8&rt=1&_t=1497877111819&ch=001201";
			datas(sulr);
		} else if(index == 1) {
			var sulr = "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=5&limit=9&rt=1&_t=1497875959398&ch=001201";
			datas1(sulr);
		} else if(index == 2) {
			var sulr = "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=4&limit=10&rt=1&_t=1497878482680&ch=001201";
			datas5(sulr);
		} else if(index == 3) {
			var sulr = "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=2&limit=10&rt=1&_t=1497877330322&ch=001201";
			datas2(sulr);
		} else if(index == 4) {
			var sulr = "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=1&limit=11&rt=1&_t=1497878786426&ch=001201";
			datas4(sulr);
		}
    return index;
    
	})
	function datas(sulr) {
		var stdiv = "<div class='tdiv'>loading...</div>";
		$(".section").html(stdiv);
		var obj = [];
		var str = "";
		$.ajax({
			type: "get",
			url: sulr,
			async: true,
			dataType: "json",
			success: function(data) {
				obj.push(data);
				var len = obj[0].vArticleList.length;
				for(var i = 0; i < len; i++) {
					var sTitle = obj[0].vArticleList[i].vContent[0].sText;
					var UserName = obj[0].vArticleList[i].stFunUser.sUserName;
					var UserIcon = obj[0].vArticleList[i].stFunUser.sUserIcon;
					var UserId = obj[0].vArticleList[i].stFunUser.UserId;

					var sPoster = obj[0].vArticleList[i].vContent[1].sPoster;
					var iTimesUp = obj[0].vArticleList[i].iTimesUp;
					var iTimesDown = obj[0].vArticleList[i].iTimesDown;
					var iCommentNum = obj[0].vArticleList[i].iCommentNum;
					var iTimesShare = obj[0].vArticleList[i].iTimesShare;
					var lFunId=obj[0].vArticleList[i].lFunId;
					

					var obj1 = obj[0].vArticleList[i].vGodComments;
					if(obj[0].vArticleList[i].vGodComments.length >= 1) {
						var vGodComments = obj1[0].sText;
						var sUserName = obj1[0].stFunUser.sUserName;
						var sp = sUserName + "：" + vGodComments
						str += "<div class='content'><div class='one'><img src=" +
							UserIcon + " align='absmiddle'/><span>" +
							UserName + "</span></div><div class='two'  id="+lFunId+"><div class='two1'><p>" +
							sTitle + "</p></div><div class='two2'><img src=" +
							sPoster + " /></div></div>" +
							"<div class='there'>" +
							"<div class='there1'><span class='sp1'><i class='iconfont'>&#xe6af;</i></span><span class='sp1_1'>" + iTimesUp + "</span></div>" +
							"<div class='there2'><span class='sp2'><i class='iconfont'>&#xe69c;</i></span><span class='sp2_2'>" + iTimesDown + "</span></div>" +
							"<div class='there3'><span class='sp3'><i class='iconfont'>&#xe69b;</i></span><span class='sp3_3'>" + iCommentNum + "</span></div>" +
							"<div class='there4'><span class='sp4'><i class='iconfont'>&#xe718;</i></span><span class='sp4_4'>" + iTimesShare + "</span></div>" +
							"</div><p class='shenping'><span class='shenping1'></span><span class='shenping2'>" +
							"" + sp + "</span></p></div>"
					} else {
						str += "<div class='content'><div class='one'><img src=" +
							UserIcon + " align='absmiddle'/><span>" +
							UserName + "</span></div><div class='two' id="+lFunId+"><div class='two1'><p>" +
							sTitle + "</p></div><div class='two2'><img src=" +
							sPoster + " /></div></div>" +
							"<div class='there'>" +
							"<div class='there1'><span class='sp1'><i class='iconfont'>&#xe6af;</i></span><span class='sp1_1'>" + iTimesUp + "</span></div>" +
							"<div class='there2'><span class='sp2'><i class='iconfont'>&#xe69c;</i></span><span class='sp2_2'>" + iTimesDown + "</span></div>" +
							"<div class='there3'><span class='sp3'><i class='iconfont'>&#xe69b;</i></span><span class='sp3_3'>" + iCommentNum + "</span></div>" +
							"<div class='there4'><span class='sp4'><i class='iconfont'>&#xe718;</i></span><span class='sp4_4'>" + iTimesShare + "</span></div>" +
							"</div></div>"
					}
                   
				}
				$(".section").html(str);

			}
		});
	}

	function datas1(sulr) {
		var stdiv = "<div class='tdiv'>loading...</div>";
		$(".section").html(stdiv);
		var obj = [];
		var str = "";
		$.ajax({
			type: "get",
			url: sulr,
			async: true,
			dataType: "json",
			success: function(data) {
				obj.push(data);
				var len = obj[0].vArticleList.length;
				for(var i = 0; i < len; i++) {
					var sTitle = obj[0].vArticleList[i].vContent[0].sText;
					var UserName = obj[0].vArticleList[i].stFunUser.sUserName;
					var UserIcon = obj[0].vArticleList[i].stFunUser.sUserIcon;
					var UserId = obj[0].vArticleList[i].stFunUser.UserId;
					var sPlayUrl = obj[0].vArticleList[i].vContent[1].sPlayUrl;
					var sPoster = obj[0].vArticleList[i].vContent[1].sPoster;
					var iTimesUp = obj[0].vArticleList[i].iTimesUp;
					var iTimesDown = obj[0].vArticleList[i].iTimesDown;
					var iCommentNum = obj[0].vArticleList[i].iCommentNum;
					var iTimesShare = obj[0].vArticleList[i].iTimesShare;
					var lFunId=obj[0].vArticleList[i].lFunId;
            console.log(sPlayUrl);
					var obj1 = obj[0].vArticleList[i].vGodComments;
					if(obj[0].vArticleList[i].vGodComments.length >= 1) {
						var vGodComments = obj1[0].sText;
						var sUserName = obj1[0].stFunUser.sUserName;
						var sp = sUserName + "：" + vGodComments
						str += "<div class='content' ><div class='one'><img src=" +
							UserIcon + " align='absmiddle'/><span>" +
							UserName + "</span></div><div class='two' id="+lFunId+"><div class='two1'><p>" +
							sTitle + "</p></div><div class='two2 af2'><img src=" +
							sPoster + " myAttr="+sPlayUrl+" /></div></div>" +
							"<div class='there'>" +
							"<div class='there1'><span class='sp1'><i class='iconfont'>&#xe6af;</i></span><span class='sp1_1'>" + iTimesUp + "</span></div>" +
							"<div class='there2'><span class='sp2'><i class='iconfont'>&#xe69c;</i></span><span class='sp2_2'>" + iTimesDown + "</span></div>" +
							"<div class='there3'><span class='sp3'><i class='iconfont'>&#xe69b;</i></span><span class='sp3_3'>" + iCommentNum + "</span></div>" +
							"<div class='there4'><span class='sp4'><i class='iconfont'>&#xe718;</i></span><span class='sp4_4'>" + iTimesShare + "</span></div>" +
							"</div><p class='shenping'><span class='shenping1'></span><span class='shenping2'>" +
							"" + sp + "</span></p></div>"
					} else {
						str += "<div class='content'><div class='one'><img src=" +
							UserIcon + " align='absmiddle'/><span>" +
							UserName + "</span></div><div class='two' id="+lFunId+"><div class='two1'><p>" +
							sTitle + "</p></div><div class='two2 af2'><img src=" +
							sPoster + " myAttr="+sPlayUrl+" /></div></div>" +
							"<div class='there'>" +
							"<div class='there1'><span class='sp1'><i class='iconfont'>&#xe6af;</i></span><span class='sp1_1'>" + iTimesUp + "</span></div>" +
							"<div class='there2'><span class='sp2'><i class='iconfont'>&#xe69c;</i></span><span class='sp2_2'>" + iTimesDown + "</span></div>" +
							"<div class='there3'><span class='sp3'><i class='iconfont'>&#xe69b;</i></span><span class='sp3_3'>" + iCommentNum + "</span></div>" +
							"<div class='there4'><span class='sp4'><i class='iconfont'>&#xe718;</i></span><span class='sp4_4'>" + iTimesShare + "</span></div>" +
							"</div></div>"
					}

				}
				$(".section").html(str);

			}
		});
	}

	function datas2(sulr) {
		var stdiv = "<div class='tdiv'>loading...</div>";
		$(".section").html(stdiv);
		var obj = [];
		var str = "";
		$.ajax({
			type: "get",
			url: sulr,
			async: true,
			dataType: "json",
			success: function(data) {
				obj.push(data);
				var len = obj[0].vArticleList.length;
				for(var i = 0; i < len; i++) {
					var sTitle = obj[0].vArticleList[i].vContent[0].sText;
					var UserName = obj[0].vArticleList[i].stFunUser.sUserName;
					var UserIcon = obj[0].vArticleList[i].stFunUser.sUserIcon;
					var UserId = obj[0].vArticleList[i].stFunUser.UserId;
					var sPoster = obj[0].vArticleList[i].vContent[1].vImgUrls[0].sImgUrl;
					var iTimesUp = obj[0].vArticleList[i].iTimesUp;
					var iTimesDown = obj[0].vArticleList[i].iTimesDown;
					var iCommentNum = obj[0].vArticleList[i].iCommentNum;
					var iTimesShare = obj[0].vArticleList[i].iTimesShare;
          var lFunId=obj[0].vArticleList[i].lFunId;
					var obj1 = obj[0].vArticleList[i].vGodComments;
					if(obj[0].vArticleList[i].vGodComments.length >= 1) {
						var vGodComments = obj1[0].sText;
						var sUserName = obj1[0].stFunUser.sUserName;
						var sp = sUserName + "：" + vGodComments
						str += "<div class='content'><div class='one'><img src=" +
							UserIcon + " align='absmiddle'/><span>" +
							UserName + "</span></div><div class='two'><div class='two1'><p>" +
							sTitle + "</p></div><div class='two2' id="+lFunId+"><img src=" +
							sPoster + " /></div></div>" +
							"<div class='there'>" +
							"<div class='there1'><span class='sp1'><i class='iconfont'>&#xe6af;</i></span><span class='sp1_1'>" + iTimesUp + "</span></div>" +
							"<div class='there2'><span class='sp2'><i class='iconfont'>&#xe69c;</i></span><span class='sp2_2'>" + iTimesDown + "</span></div>" +
							"<div class='there3'><span class='sp3'><i class='iconfont'>&#xe69b;</i></span><span class='sp3_3'>" + iCommentNum + "</span></div>" +
							"<div class='there4'><span class='sp4'><i class='iconfont'>&#xe718;</i></span><span class='sp4_4'>" + iTimesShare + "</span></div>" +
							"</div><p class='shenping'><span class='shenping1'></span><span class='shenping2'>" +
							"" + sp + "</span></p></div>"
					} else {
						str += "<div class='content'><div class='one'><img src=" +
							UserIcon + " align='absmiddle'/><span>" +
							UserName + "</span></div><div class='two' id="+lFunId+"><div class='two1'><p>" +
							sTitle + "</p></div><div class='two2'><img src=" +
							sPoster + " /></div></div>" +
							"<div class='there'>" +
							"<div class='there1'><span class='sp1'><i class='iconfont'>&#xe6af;</i></span><span class='sp1_1'>" + iTimesUp + "</span></div>" +
							"<div class='there2'><span class='sp2'><i class='iconfont'>&#xe69c;</i></span><span class='sp2_2'>" + iTimesDown + "</span></div>" +
							"<div class='there3'><span class='sp3'><i class='iconfont'>&#xe69b;</i></span><span class='sp3_3'>" + iCommentNum + "</span></div>" +
							"<div class='there4'><span class='sp4'><i class='iconfont'>&#xe718;</i></span><span class='sp4_4'>" + iTimesShare + "</span></div>" +
							"</div></div>"
					}

				}
				
				$(".section").html(str);

			}
		});
	}

	function datas4(sulr) {
		var stdiv = "<div class='tdiv'>loading...</div>";
		$(".section").html(stdiv);
		var obj = [];
		var str = "";
		$.ajax({
			type: "get",
			url: sulr,
			async: true,
			dataType: "json",
			success: function(data) {
				obj.push(data);
				var len = obj[0].vArticleList.length;
				for(var i = 0; i < len; i++) {
					var sTitle = obj[0].vArticleList[i].vContent[0].sText;
					var UserName = obj[0].vArticleList[i].stFunUser.sUserName;
					var UserIcon = obj[0].vArticleList[i].stFunUser.sUserIcon;
					var UserId = obj[0].vArticleList[i].stFunUser.UserId;
					var sPoster = obj[0].vArticleList[i].vContent[0].sText;
					var iTimesUp = obj[0].vArticleList[i].iTimesUp;
					var iTimesDown = obj[0].vArticleList[i].iTimesDown;
					var iCommentNum = obj[0].vArticleList[i].iCommentNum;
					var iTimesShare = obj[0].vArticleList[i].iTimesShare;
           var lFunId=obj[0].vArticleList[i].lFunId;
					var obj1 = obj[0].vArticleList[i].vGodComments;
					if(obj[0].vArticleList[i].vGodComments.length >= 1) {
						var vGodComments = obj1[0].sText;
						var sUserName = obj1[0].stFunUser.sUserName;
						var sp = sUserName + "：" + vGodComments
						str += "<div class='content'><div class='one'><img src=" +
							UserIcon + " align='absmiddle'/><span>" +
							UserName + "</span></div><div class='two' id="+lFunId+"><div class='two1'><p>" +
							sTitle + "</p></div><div class='two2'></div></div>" +
							"<div class='there'>" +
							"<div class='there1'><span class='sp1'><i class='iconfont'>&#xe6af;</i></span><span class='sp1_1'>" + iTimesUp + "</span></div>" +
							"<div class='there2'><span class='sp2'><i class='iconfont'>&#xe69c;</i></span><span class='sp2_2'>" + iTimesDown + "</span></div>" +
							"<div class='there3'><span class='sp3'><i class='iconfont'>&#xe69b;</i></span><span class='sp3_3'>" + iCommentNum + "</span></div>" +
							"<div class='there4'><span class='sp4'><i class='iconfont'>&#xe718;</i></span><span class='sp4_4'>" + iTimesShare + "</span></div>" +
							"</div><p class='shenping'><span class='shenping1'></span><span class='shenping2'>" +
							"" + sp + "</span></p></div>"
					} else {
						str += "<div class='content'><div class='one'><img src=" +
							UserIcon + " align='absmiddle'/><span>" +
							UserName + "</span></div><div class='two' id="+lFunId+"><div class='two1'><p>" +
							sTitle + "</p></div><div class='two2'></div></div>" +
							"<div class='there'>" +
							"<div class='there1'><span class='sp1'><i class='iconfont'>&#xe6af;</i></span><span class='sp1_1'>" + iTimesUp + "</span></div>" +
							"<div class='there2'><span class='sp2'><i class='iconfont'>&#xe69c;</i></span><span class='sp2_2'>" + iTimesDown + "</span></div>" +
							"<div class='there3'><span class='sp3'><i class='iconfont'>&#xe69b;</i></span><span class='sp3_3'>" + iCommentNum + "</span></div>" +
							"<div class='there4'><span class='sp4'><i class='iconfont'>&#xe718;</i></span><span class='sp4_4'>" + iTimesShare + "</span></div>" +
							"</div></div>"
					}

				}
			
				$(".section").html(str);

			}
		});
	}
  
  	function datas5(sulr) {
		var stdiv = "<div class='tdiv'>loading...</div>";
		$(".section").html(
			
		);
		var obj = [];
		var str = "";
		$.ajax({
			type: "get",
			url: sulr,
			async: true,
			dataType: "json",
			success: function(data) {
				obj.push(data);
				var len = obj[0].vArticleList.length;
				for(var i = 0; i < len; i++) {
					var sTitle = obj[0].vArticleList[i].vContent[0].sText;
					var UserName = obj[0].vArticleList[i].stFunUser.sUserName;
					var UserIcon = obj[0].vArticleList[i].stFunUser.sUserIcon;
					var UserId = obj[0].vArticleList[i].stFunUser.UserId;
					var sGifUrl = obj[0].vArticleList[i].vContent[1].sPoster;
					var sPoster = obj[0].vArticleList[i].vContent[1].sGifUrl;
					var iTimesUp = obj[0].vArticleList[i].iTimesUp;
					var iTimesDown = obj[0].vArticleList[i].iTimesDown;
					var iCommentNum = obj[0].vArticleList[i].iCommentNum;
					var iTimesShare = obj[0].vArticleList[i].iTimesShare;
					var circleId=obj[0].vArticleList[i];
					var lFunId=obj[0].vArticleList[i].lFunId;

					var obj1 = obj[0].vArticleList[i].vGodComments;
					if(obj[0].vArticleList[i].vGodComments.length >= 1) {
						var vGodComments = obj1[0].sText;
						var sUserName = obj1[0].stFunUser.sUserName;
						var sp = sUserName + "：" + vGodComments
						str += "<div class='content'><div class='one'><img src=" +
							UserIcon + " align='absmiddle'/><span>" +
							UserName + "</span></div><div class='two' id="+lFunId+"><div class='two1'><p>" +
							sTitle + "</p></div><div class='two2'><img src=" +
							sPoster + " /></div></div>" +
							"<div class='there'>" +
							"<div class='there1'><span class='sp1'><i class='iconfont'>&#xe6af;</i></span><span class='sp1_1'>" + iTimesUp + "</span></div>" +
							"<div class='there2'><span class='sp2'><i class='iconfont'>&#xe69c;</i></span><span class='sp2_2'>" + iTimesDown + "</span></div>" +
							"<div class='there3'><span class='sp3'><i class='iconfont'>&#xe69b;</i></span><span class='sp3_3'>" + iCommentNum + "</span></div>" +
							"<div class='there4'><span class='sp4'><i class='iconfont'>&#xe718;</i></span><span class='sp4_4'>" + iTimesShare + "</span></div>" +
							"</div><p class='shenping'><span class='shenping1'></span><span class='shenping2'>" +
							"" + sp + "</span></p></div>"
					} else {
						str += "<div class='content'><div class='one'><img src=" +
							UserIcon + " align='absmiddle'/><span>" +
							UserName + "</span></div><div class='two' id="+lFunId+"><div class='two1'><p>" +
							sTitle + "</p></div><div class='two2'><img src=" +
							sPoster + " /></div></div>" +
							"<div class='there'>" +
							"<div class='there1'><span class='sp1'><i class='iconfont'>&#xe6af;</i></span><span class='sp1_1'>" + iTimesUp + "</span></div>" +
							"<div class='there2'><span class='sp2'><i class='iconfont'>&#xe69c;</i></span><span class='sp2_2'>" + iTimesDown + "</span></div>" +
							"<div class='there3'><span class='sp3'><i class='iconfont'>&#xe69b;</i></span><span class='sp3_3'>" + iCommentNum + "</span></div>" +
							"<div class='there4'><span class='sp4'><i class='iconfont'>&#xe718;</i></span><span class='sp4_4'>" + iTimesShare + "</span></div>" +
							"</div></div>"
					}
                   
				}
        $(".section").html(str);
			}
		});
	}
    
    
    var n=0;
    var m=0;
     $(".section").on("tap",".sp1",function(){
     	n++
     	if(n==1){
     		$(this).find("i").addClass("color1");
     		var con=parseInt($(this).next().html())+1;
     		$(this).next().html(con);
     		
     		if(m==1){
     			var con=parseInt($(this).parent().next().find(".sp2_2").html())-1;
     			$(this).parent().next().find(".sp2_2").html(parseInt(con));
     			$(this).parent().next().find("i").removeClass("color2");
     			m=0;
     			
     		}
     		
     	}else if(n==2){
     		$(this).find("i").removeClass("color1");
     		var con=parseInt($(this).next().html())-1;
     		$(this).next().html(con)
     		n=0;
     	}

     })

     $(".section").on("tap",".sp2",function(){
     	m++
     	if(m==1){
     		$(this).find("i").addClass("color2");
     		var con1=parseInt($(this).next().text())+1;
     		$(this).next().html(con1);
     		if(n==1){
     			var con=parseInt($(this).parent().prev().find(".sp1_1").html())-1;
     			$(this).parent().prev().find(".sp1_1").html(parseInt(con));
     			$(this).parent().prev().find("i").removeClass("color1");
     			n=0;
     		}
     	}else if(m==2){
     		$(this).find("i").removeClass("color2");
     		var con1=parseInt($(this).next().html())-1;
     		$(this).next().html(con1)
     		m=0;
     	}

     })





            var sy, st, dir, flag = false, tdiv;
			$(".section").on("touchstart", function(ev) {
				sy = ev.touches[0].pageY;
				st = $(this).scrollTop();
			})
			$(".section").on("touchmove", function(ev) {
				dir = ev.touches[0].pageY - sy;
				if(dir > 0 && st == 0) {
					if(!flag) {
					    tdiv = $("<div class='tdiv'>loading...</div>").prependTo($(this));
						flag = true;
					}
				}
			})

			$(".section").on("touchend", function(ev) {
				index=$(".border1").index();
				var a=sy-dir;
				if(dir > 50 && st == 0) {
					if(index == 0) {
						var sulr = "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=5&limit=8&rt=1&_t=1497877111819&ch=001201";
						datas(sulr);                        
					} else if(index == 1) {
						var sulr = "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=5&limit=10&rt=1&_t=1498034647584&ch=881123";
						datas1(sulr);
					
					} else if(index == 2) {
						var sulr = "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=4&limit=8&rt=2&_t=1498034736845&ch=881123";
						datas5(sulr);
					} else if(index == 3) {
						var sulr = "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=2&limit=11&rt=2&_t=1498034971522&ch=881123";
						datas2(sulr);
					} else if(index == 4) {
						var sulr = "http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=1&limit=9&rt=2&_t=1498034813841&ch=881123";
						datas4(sulr);
					}
				}
				flag=false;
				$(".tdiv").remove()
			});
          datas("http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=5&limit=8&rt=1&_t=1497877111819&ch=001201");
          
          $(".gotop").click(function () {
		        var speed=200;//滑动的速度
		        $('body,html,section').animate({ scrollTop: 0 }, speed);
		        return false;
		 });
          
          $(".section").on("tap",".content",function(){
          	var surl=$(this).find(".two").attr('id');
            var a=$(this).find(".one").find("img").attr('src');
            var b=$(this).find(".one").find("span").html();
            var c=$(this).find(".two1").find("p").html();
            var d;
            if(!$(this).find(".two2").find("img").attr('src')){
            	d=0;
            }else{
            	d=$(this).find(".two2").find("img").attr('src');
            }
            
            
            var e=$(this).find(".sp1_1").html();
            var f=$(this).find(".sp2_2").html();
            var g=$(this).find(".sp3_3").html();
            var h=$(this).find(".sp4_4").html();
            var n=$(this).find(".shenping2").html();
            var m;
            if (!$(this).find(".two2").find("img").attr('myAttr')) {
            	m=0;
            }else{
            		m=$(this).find(".two2").find("img").attr('myAttr');
            }
            
            
            var arr=[surl,a,b,c,d,e,f,g,h,n,m];
          	sessionStorage.setItem("urlid",arr);
          	$(location).prop('href', 'about.html');
          	
          })




});