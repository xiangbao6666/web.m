$(function(){
	var tiemr;
	var n=0;
	var index;
	setTimeout(function(){
		$(".content_one").hide();
		$(".content").show();
	},1000);
	
	function show(){
		timer=setInterval(function(){
			n++;
			if(n==6){
				n=0;
			}
			$(".uls li").eq(n).stop().fadeIn().siblings().fadeOut();
			$(".ols li span").eq(n).addClass("sp_one").parent().siblings().children().removeClass("sp_one");
		},3000);
	}
		
	show();
	$(".ols li").on("tap",function(){
			clearInterval(timer);
			$(this).find("span").addClass("sp_one").parent().siblings().children().removeClass("sp_one");
			$(".uls li").eq($(this).index()).stop().fadeIn().siblings().fadeOut();
			n=$(this).index();
			setTimeout(function(){
				clearInterval(timer);
				show();
			},2000);
	})
		
	$(".header_div-theer span").on("tap",function(){
		index=$(this).index();
		$(this).addClass("sp-therr").siblings().removeClass("sp-therr");
		if(index==0){
			var sulr="http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=5&limit=9&rt=1&_t=1497875959398&ch=001201";
			//  http://proxy.e12e.com/?https://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1058964184CCD0&cp=5948FC7CCD903E1&min_behot_time=0
			dataOne(sulr);
		}
		if(index==1){
			var sulr="http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=4&limit=10&rt=1&_t=1497878482680&ch=001201";
			dataTwo(sulr);
		}
		if(index==2){
			var sulr="http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=2&limit=10&rt=1&_t=1497877330322&ch=001201";
			dataTheer(sulr)
		}
		return index;
	})
	
	
	function dataOne(sulr){
		var stdiv="<div class='tdiv'><i></i>loading...</div>";
		//$(".section_show").html(stdiv);
			var obj=[];
			$.ajax({
			url:sulr,
			type:"get",
			async:true,
			dataType:"json",
			success:function(data){
				var src="";
				obj.push(data);
				var len=obj[0].vArticleList.length;
				for(var i=0;i<len;i++){
					var sUserIcon=obj[0].vArticleList[i].stFunUser.sUserIcon;
					var sUserName=obj[0].vArticleList[i].stFunUser.sUserName;
					var sTitle=obj[0].vArticleList[i].sTitle;
					var sGifUrl=obj[0].vArticleList[i].vContent[1].sPoster;
					var sPlayUrl=obj[0].vArticleList[i].vContent[1].sPlayUrl;
					var sUserId=obj[0].vArticleList[i].stFunUser.sUserId;
					
					var iTimesUp=obj[0].vArticleList[i].iTimesUp;
					var iTimesDown=obj[0].vArticleList[i].iTimesDown;
					var iCommentNum=obj[0].vArticleList[i].iCommentNum;
					var iTimesShare=obj[0].vArticleList[i].iTimesShare;
					var lFunId=obj[0].vArticleList[i].lFunId;
					
					var obj1=obj[0].vArticleList[i].vGodComments;

					if(obj[0].vArticleList[i].vGodComments >=1){
						var sText=obj1[0].sText;
						var sUserName=obj1[0].stFunUser.sUserName;
						var sp=sUserName+":"+sText;
						
						src+="<a class='section-two-div_a_one'><h5 class='one' ><img src="+sUserIcon+">";
						src+="<span class='a_one_s1'>"+sUserName+"</span></h5><div class='two' id="+lFunId+" >";
						src+="<h4>"+sTitle+"</h4><div class='contents af2'><img src="+sGifUrl+" myAttr="+sPlayUrl+" /></div></div>";
						src+="<h6><p><span class='sp1'><i>赞</i>&nbsp;</span><span class='sp_1'>"+iTimesUp+"</span></p>";
						src+="<p><span class='sp2'><i>踩</i>&nbsp;</span><span class='sp_2'>"+iTimesDown+"</span></p>";
						src+="<p><span>评论&nbsp;</span><span class='sp_3'>"+iCommentNum+"</span></p>";
						src+="<p><span>转发&nbsp;</span><span class='sp_4'>"+iTimesShare+"</span></p></h6>";
						src+="<p class='shenping'><span class='shenping1'></span><span class='shenping2'>" + sp + "</span></p></a>";

					}
					else{						
						src+="<a class='section-two-div_a_one'><h5 class='one' ><img src="+sUserIcon+">";
						src+="<span class='a_one_s1'>"+sUserName+"</span></h5><div class='two' id="+lFunId+" >";
						src+="<h4>"+sTitle+"</h4><div class='contents af2'><img src="+sGifUrl+" myAttr="+sPlayUrl+" /></div></div>";
						src+="<h6><p><span class='sp1'><i>赞</i>&nbsp;</span><span class='sp_1'>"+iTimesUp+"</span></p>";
						src+="<p><span class='sp2'><i>踩</i>&nbsp;</span><span class='sp_2'>"+iTimesDown+"</span></p>";
						src+="<p><span>评论&nbsp;</span><span class='sp_3'>"+iCommentNum+"</span></p>";
						src+="<p><span>转发&nbsp;</span><span class='sp_4'>"+iTimesShare+"</span></p></h6></a>";
					}

					$(".section-div-two").html(src);
				}
			}

		});		
	}	
	
	function dataTwo(sulr){
		var stdiv="<div class='tdiv'><i></i>loading...</div>";
		//$(".section_show").html(stdiv);
		var objOne=[];
		$.ajax({
			type:"get",
			url:sulr,
			async:true,
			dataType:"json",
			callback:"callback",
			success:function(data){
				objOne.push(data);
				var src="";
				var lenOne=objOne[0].vArticleList.length;
				for(var i=0;i<lenOne;i++){
					var sUserIcon=objOne[0].vArticleList[i].stFunUser.sUserIcon;
					var sUserName=objOne[0].vArticleList[i].stFunUser.sUserName;
					var sTitle=objOne[0].vArticleList[i].sTitle;
					var sGifUrl=objOne[0].vArticleList[i].vContent[1].sGifUrl;
					var sUserId=objOne[0].vArticleList[i].stFunUser.sUserId;
					
					var iTimesUp=objOne[0].vArticleList[i].iTimesUp;
					var iTimesDown=objOne[0].vArticleList[i].iTimesDown;
					var iCommentNum=objOne[0].vArticleList[i].iCommentNum;
					var iTimesShare=objOne[0].vArticleList[i].iTimesShare;
					var lFunId=objOne[0].vArticleList[i].lFunId;
					
					var obj1=objOne[0].vArticleList[i].vGodComments;

					if(objOne[0].vArticleList[i].vGodComments >=1){
						var sText=obj1[0].sText;
						var sUserName=obj1[0].stFunUser.sUserName;
						var sp=sUserName+":"+sText;
						
						src+="<a class='section-two-div_a_one'><h5 class='one' ><img src="+sUserIcon+">";
						src+="<span class='a_one_s1'>"+sUserName+"</span></h5><div class='two' id="+lFunId+" >";
						src+="<h4>"+sTitle+"</h4><div class='contents'><img src="+sGifUrl+"></div></div>";
						src+="<h6><p><span class='sp1'><i>赞</i>&nbsp;</span><span class='sp_1'>"+iTimesUp+"</span></p>";
						src+="<p><span class='sp2'><i>踩</i>&nbsp;</span><span class='sp_2'>"+iTimesDown+"</span></p>";
						src+="<p><span>评论&nbsp;</span><span class='sp_3'>"+iCommentNum+"</span></p>";
						src+="<p><span>转发&nbsp;</span><span class='sp_4'>"+iTimesShare+"</span></p></h6>";
						src+="<p class='shenping'><span class='shenping1'></span><span class='shenping2'>" + sp + "</span></p></a>";

					}
					else{						
						src+="<a class='section-two-div_a_one'><h5 class='one' ><img src="+sUserIcon+">";
						src+="<span class='a_one_s1'>"+sUserName+"</span></h5><div class='two' id="+lFunId+" >";
						src+="<h4>"+sTitle+"</h4><div class='contents'><img src="+sGifUrl+"></div></div>";
						src+="<h6><p><span class='sp1'><i>赞</i>&nbsp;</span><span class='sp_1'>"+iTimesUp+"</span></p>";
						src+="<p><span class='sp2'><i>踩</i>&nbsp;</span><span class='sp_2'>"+iTimesDown+"</span></p>";
						src+="<p><span>评论&nbsp;</span><span class='sp_3'>"+iCommentNum+"</span></p>";
						src+="<p><span>转发&nbsp;</span><span class='sp_4'>"+iTimesShare+"</span></p></h6></a>";
					}
					$(".section-div-two").html(src);
				}
			}
		});		
	}
	
	function dataTheer(sulr){
		var stdiv="<div class='tdiv'><i></i>loading...</div>";
		//$(".section_show").html(stdiv);
	var objTwo=[];
		$.ajax({
			type:"get",
			url:sulr,
			async:true,
			dataType:"json",
			success:function(data){
				objTwo.push(data);
				var src="";
				var lenTwo=objTwo[0].vArticleList.length;
				for(i=0;i<lenTwo;i++){
					var sUserIcon=objTwo[0].vArticleList[i].stFunUser.sUserIcon;
					var stFunUser=objTwo[0].vArticleList[i].stFunUser.sUserName;
					var sTitle=objTwo[0].vArticleList[i].sTitle;
					var sImgUrl=objTwo[0].vArticleList[i].vContent[1].vImgUrls[0].sImgUrl;
					var sUserId=objTwo[0].vArticleList[i].stFunUser.sUserId;
					
					var iTimesUp=objTwo[0].vArticleList[i].iTimesUp;
					var iTimesDown=objTwo[0].vArticleList[i].iTimesDown;
					var iCommentNum=objTwo[0].vArticleList[i].iCommentNum;
					var iTimesShare=objTwo[0].vArticleList[i].iTimesShare;
					var lFunId=objTwo[0].vArticleList[i].lFunId;
					var obj1=objTwo[0].vArticleList[i].vGodComments;
					
					if(objTwo[0].vArticleList[i].vGodComments >=1){
						var sText=obj1[0].sText;
						var sUserName=obj1[0].stFunUser.sUserName;
						var sp=sUserName+":"+sText;
						
						src+="<a class='section-two-div_a_one'><h5 class='one' ><img src="+sUserIcon+">";
						src+="<span class='a_one_s1'>"+stFunUser+"</span></h5><div class='two' id="+lFunId+" >";
						src+="<h4>"+sTitle+"</h4><div class='contents'><img src="+sImgUrl+" ></div></div>";
						src+="<h6><p><span class='sp1'><i>赞</i>&nbsp;</span><span class='sp_1'>"+iTimesUp+"</span></p>";
						src+="<p><span class='sp2'><i>踩</i>&nbsp;</span><span class='sp_2'>"+iTimesDown+"</span></p>";
						src+="<p><span>评论&nbsp;</span><span class='sp_3'>"+iCommentNum+"</span></p>";
						src+="<p><span>转发&nbsp;</span><span class='sp_4'>"+iTimesShare+"</span></p></h6>";
						src+="<p class='shenping'><span class='shenping1'></span><span class='shenping2'>" + sp + "</span></p></a>";

					}
					else{						
						src+="<a class='section-two-div_a_one'><h5 class='one' ><img src="+sUserIcon+">";
						src+="<span class='a_one_s1'>"+stFunUser+"</span></h5><div class='two' id="+lFunId+" >";
						src+="<h4>"+sTitle+"</h4><div class='contents'><img src="+sImgUrl+" ></div></div>";
						src+="<h6><p><span class='sp1'><i>赞</i>&nbsp;</span><span class='sp_1'>"+iTimesUp+"</span></p>";
						src+="<p><span class='sp2'><i>踩</i>&nbsp;</span><span class='sp_2'>"+iTimesDown+"</span></p>";
						src+="<p><span>评论&nbsp;</span><span class='sp_3'>"+iCommentNum+"</span></p>";
						src+="<p><span>转发&nbsp;</span><span class='sp_4'>"+iTimesShare+"</span></p></h6></a>";
					}
					$(".section-div-two").html(src);
				}
				
			}
		});	
	}
	
	dataOne("http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=5&limit=9&rt=1&_t=1497875959398&ch=001201");
	
	$(window).scroll(function(){
			var h=$(window).scrollTop();
			var hh=$(window).height();
			if(h>hh){
				$(".bottom").show();
			}
			else{
				$(".bottom").hide();
			}
	})
	$(".bottom").on("tap",function(){
		$("body").animate({scrollTop:0},500);
		return false;
	})

	var sy,sh,dir,flag=false,tdiv;
	$(".section_show").on("touchstart",function(ev){ //touchstart事件：当手指触摸屏幕时候触发。
		sy=ev.touches[0].pageY; // 计算初始位移 touches，多点触碰时的位置数组
		sh=$(this).scrollTop();
	})
	$(".section_show").on("touchmove",function(ev){ //touchmove事件：当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用preventDefault()事件可以阻止滚动。
		dir=ev.touches[0].pageY-sy;  //方向(上拉或下拉)
		if(dir>0&&sh==0){
			if(!flag){
				tdiv=$("<div class='tdiv'><i></i>loading...</div>").prependTo($(this));//在每个 当前元素的开头插入内容
				flag=true;				
			}

		}
	})
	$(".section_show").on("touchend",function(ev){  //　touchend事件：当手指从屏幕上离开的时候触发
		index=$(".sp-therr").index();
		var a=sy-dir;
		if(dir>50 && sh==0){
			if(index==0){
				var sulr="http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=5&limit=9&rt=1&_t=1497875959398&ch=001201";
				dataOne(sulr);
				console.log(dir,sh)
				dir=0;
			}
			if(index==1){
				var sulr="http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=4&limit=10&rt=1&_t=1497878482680&ch=001201";
				dataTwo(sulr);
				dir=0;
			}
			if(index==2){
				var sulr="http://proxy.e12e.com/?https://fun.html5.qq.com/api/list_2?key=2&limit=10&rt=1&_t=1497877330322&ch=001201";
				dataTheer(sulr);
				dir=0;
			}	
		}
		console.log(dir,sh)
		flag=false;
		$(".tdiv").remove();
	})
	
	
	var q=0;
	var w=0;
	$(".section_show").on("tap",".sp1",function(){
		q++;
		if(q==1){
			$(this).find("i").addClass("color1");
			var con=parseInt($(this).next().html())+1;
			$(this).next().html(con);
		}
		if(w==1){
			$(this).parent().next().find("i").removeClass("color2");
			var con=parseInt($(this).parent().next().find(".sp_2").html())-1;
			$(this).parent().next().find(".sp_2").html(con);
			w=0;
		}
		else if(q==2){
			$(this).find("i").removeClass("color1");
			var con=parseInt($(this).next().html())-1;
			$(this).next().html(parseInt(con));
			q=0;
		}
	})
	
	$(".section_show").on("tap",".sp2",function(){
		w++;
		if(w==1){
			$(this).find("i").addClass("color2");
			var con2=parseInt($(this).next().html())+1;
			$(this).next().html(con2);
		}
		if(q==1){
			$(this).parent().prev().find("i").removeClass("color1");
			var con2=parseInt($(this).parent().prev().find(".sp_1").html())-1;
			$(this).parent().prev().find(".sp_1").html(parseInt(con2));
			q=0;
		}
		else if(w==2){
			$(this).find("i").removeClass("color2");
			var con2=parseInt($(this).next().html())-1;
			$(this).next().html(con2);
			w=0;
		}
	})

	var l=0;
	$(".section_show").on("tap",".contents",function(){
		l++;
		var sulr=$(this).parent().attr("id");
			console.log($(this).parent().attr("id"))
		var a=$(".one").find("img").attr("src");
		var b=$(".one").find("span").html();
		var c=$(".two").find("h4").html();
		var d;
		if(!$(this).find("img").attr("src")){
			d=0;
		}
		else{
			d=$(this).find("img").attr("src");
		}
		var e=$(".sp_1").html();
		var f=$(".sp_2").html();
		var g=$(".sp_3").html();
		var h=$(".sp_4").html();
		var n=$(this).find(".shenping2").html();
		var m;
		if(!$(this).find("img").attr("myattr")){
			m=0;
		}
		else{
			m=$(this).find("img").attr("myattr");
		}
		if(l==1 && $(this).find("img").attr("myattr")){
			$(this).replaceWith("<video src="+m+" autoplay='autoplay' controls='controls'></video>");
			l=0;
			if($(this).replaceWith("<video src="+m+" autoplay='autoplay' controls='controls'></video>")){
				$(".section_show").on("tap","video",function(){
					var arr=[sulr,a,b,c,d,e,f,g,h,n,m];
					sessionStorage.setItem("idulr",arr);
					$(location).prop("href","about.html");
				})

			}
		}
		else{
			var arr=[sulr,a,b,c,d,e,f,g,h,n,m];
			sessionStorage.setItem("idulr",arr);
			$(location).prop("href","about.html");
				
		}
	})
	
	
});






//	$(".section_show").on("tap",".contents ",function(){
//		var sulr=$(".two").attr("id");
//		var a=$(".one").find("img").attr("src");
//		var b=$(".one").find("span").html();
//		var c=$(".two").find("h4").html();
//		var d;
//		if(!$(this).find("img").attr("src")){
//			d=0;
//		}
//		else{
//			d=$(this).find("img").attr("src");
//		}
//		var e=$(".sp_1").html();
//		var f=$(".sp_2").html();
//		var g=$(".sp_3").html();
//		var h=$(".sp_4").html();
//		var n=$(this).find(".shenping2").html();
//		var m;
//		if(!$(this).find("img").attr("myattr")){
//			m=0;
//		}
//		else{
//			m=$(this).find("img").attr("myattr");
//		}
//		var arr=[sulr,a,b,c,d,e,f,g,h,n,m];
//		sessionStorage.setItem("idulr",arr);
//		$(location).prop("href","about.html");
////		console.log(n,m)
//	})

















//function dataOne(sulr){
//		var stdiv="<div class='tdiv'><i></i>loading...</div>";
//		//$(".section_show").html(stdiv);
//			var obj=[];
//			$.ajax({
//			url:sulr,
//			type:"get",
//			async:true,
//			dataType:"json",
//			success:function(data){
//				var src="";
//				obj.push(data);
//				var len=obj[0].data.length;
//				for(var i=0;i<len;i++){
//					var title=obj[0].data[i].title;
//					var media_name=obj[0].data[i].media_name;
//					var comment_count=obj[0].data[i].comment_count;
//					var datetime=obj[0].data[i].datetime;
//					if(typeof obj[0].data[i].image_list[0]!="undefined"){
//						var image_list=obj[0].data[i].image_list[0].url;
//						var image_list_1=obj[0].data[i].image_list[1].url;
//						var image_list_2=obj[0].data[i].image_list[2].url;
//					}
//					src+="<a href='' class='section-two-div_a'><div class='section-two-div_one'><h5>"+title+"</h5>";
//					src+="<ul><li><img src="+image_list+"></li><li><img src="+image_list_1+"></li><li><img src="+image_list_2+"></li></ul>";
//					src+="<span>"+media_name+"</span><span>评论:"+comment_count+"</span>";
//					src+="<span>"+datetime+"</span></div></a>";
//					$(".section-div-two").html(src);
//				}
//
//			}
//
//		});		
//	}	
























//	$(".btn").on("tap",function(){
//		var a=[];
//		$.ajax({
//			url:"http://proxy.e12e.com/?http://m.yuedu.163.com/reader/book/info.json?source_uuid=973722a3a9c4498fa18f946f5a542288_4",
//			type:"get",
//			dataType:"json",
//			success:function(data){
//				var arr=data;
//				a.push(arr);
//
//				console.log(a[0].data)
//			}
//		})
//	})