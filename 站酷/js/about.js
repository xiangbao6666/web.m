$(function(){
	$(".header1 span").on("tap",function(){
		$(location).prop('href', 'index.html');
	})
	var urlid=[];
	urlid= sessionStorage.getItem("idulr").split(',');
	var ifUlr="http://proxy.e12e.com/?https://fun.html5.qq.com/api/getcomment_2?&size=12&_t=1498007720253&ch=881123";
	var str="";
	var src1="";
	if(urlid[4]==0){
		 str+= "<a class='section-two-div_a_one'><h5 class='one'><img src=" + urlid[1] + " align='absmiddle'/>";
		 str+="<span class='a_one_s1'>" + urlid[2] + "</span></h5><div class='two'><h4>"+urlid[3]+"</h4></div>";				
		 str+="<h6><p><span class='sp1'><i>赞</i>&nbsp;</span><span class='sp_1'>"+urlid[5]+"</span></p>";
		 str+="<p><span class='sp2'><i>踩</i>&nbsp;</span><span class='sp_2'>"+urlid[6]+"</span></p>";
		 str+="<p><span>评论&nbsp;</span><span class='sp_3'>"+urlid[7]+"</span></p>";
		 str+="<p><span>转发&nbsp;</span><span class='sp_4'>"+urlid[8]+"</span></p></h6></a>";										 
	}else{
		 str+="<a class='section-two-div_a_one'><h5 class='one'><img src=" + urlid[1] + " align='absmiddle'/>";
		 str+="<span class='a_one_s1'>" + urlid[2] + "</span></h5><div class='two'><h4>"+urlid[3]+"</h4>";
		 str+="<div class='contents'><img src="+urlid[4]+" ></div></div>";
		 str+="<h6><p><span class='sp1'><i>赞</i>&nbsp;</span><span class='sp_1'>"+urlid[5]+"</span></p>";
		 str+="<p><span class='sp2'><i>踩</i>&nbsp;</span><span class='sp_2'>"+urlid[6]+"</span></p>";
		 str+="<p><span>评论&nbsp;</span><span class='sp_3'>"+urlid[7]+"</span></p>";
		 str+="<p><span>转发&nbsp;</span><span class='sp_4'>"+urlid[8]+"</span></p></h6></a>";
							
	}

	$.get(ifUlr,{id: urlid[0]},function(data){
		var obj=JSON.parse(data);  //JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
		var res=obj.commonComment;
		var len=obj.commonComment.length;
		var src2="";
		var src3="";
		var src4="";
		var res1=obj.wonderComment;
		console.log(obj)
		if(len > 0){
			for(var i=0;i<len;i++){
				var userFaceIcon=res[i].userFaceIcon;//评论用户头像
				var userName=res[i].userName;//评论用户
				var praiseNum=res[i].praiseNum;//点赞数
				var comment1=res[i].comment;//评论内容
				var referUser=res[i].referUser;//回复评论用户
				var referComment=res[i].referComment;//回复评论内容
				
				if(!referUser){
					src2+="<li><p class='yonghu'><img src="+userFaceIcon+" align='center'/><span>"+userName+"</span>";
					src2+="<span class='zan'>赞"+praiseNum+"</span></p>"+"<p class='neirong'>"+ comment1+"<p>";
					src2+="<time>06-04 </time>"+"</li>";
				}
				else{
					src2+="<li><p class='yonghu'><img src="+userFaceIcon+" align='center'/><span>"+userName+"</span>";
					src2+="<span class='zan'>赞"+praiseNum+"</span></p>"+"<p class='neirong'>"+ comment1+"<span class='huif'>"+referUser+'&nbsp;:&nbsp;';
					src2+=referComment+"</span><p><time>06-04</time></li>";	
				}
			}
			if(res1!=null){
				for(var i=0;i<res1.length;i++){
					var userFaceIcon=res1[i].userFaceIcon;
					var userName=res1[i].userName;
					var comment1=res1[i].comment;
					var praiseNum=res1[i].praiseNum;

					src4+="<li><p class='yonghu'><img src="+userFaceIcon+" align='center' /><span class='yhname'>"+userName+"</span>";
					src4+="<span class='zan'>赞"+praiseNum+"</span></p><p class='neirong'>"+comment1+"</p>";
					src4+="<time>06-04</time><li>";		
				}
				src3="<ul class='shengp'><p class='spl_title'>神评论</p>"+src4+"</ul>";
			}
			else{
				
			}
			src1="<div class='comment'>"+src3+"<ul class='xinp'><p class='xxpl_title'>新鲜评论</p>"+src2+"</ul></div>";
		}
		$(".section").html(str+src1);
	})

	var n=0;
	var m=0;
	$(".section").on("tap",".sp1",function(){
		n++;
		if(n==1){
			$(this).find("i").addClass("color1");
			var con=parseInt($(this).next().html())+1;
			$(this).next().html(con);
		}
		if(m==1){
			var con=parseInt($(this).parent().next().find(".sp2_2").html())-1;
			$(this).parent().next().find(".sp2_2").html(parseInt(con));
			$(this).parent().next().find("i").removeClass("color2");
			m=0;
		}
		else if(n==2){
			$(this).find("i").removeClass("color1");
			var con=parseInt($(this).next().html())-1;
			$(this).next().html(con);
			n=0;
		}
	})
	
	$(".section").on("tap",".sp2",function(){
		m++;
		if(m==1){
			$(this).find("i").addClass("color2");
			var con1=parseInt($(this).next().text())+1;
			$(this).next().html(con1);
		}
		if(n==1){
			var con1=parseInt($(this).parent().prev().find(".sp1_1").html())-1;
			$(this).parent().prev().find(".sp1_1").html(parseInt(con1));
			$(this).parent().prev().find("i").removeClass("color1");
			n=0;
		}
		else if(m==2){
			$(this).find("i").removeClass("color2");
			var con1=parseInt($(this).next().text())-1;
			$(this).next().html(con1);
			m=0;
		}
	})

	$(".section").on("tap",".contents","img",function(){
		if(urlid[10]==0){
		}
		else{					
			$(this).replaceWith("<video src="+urlid[10]+" autoplay='autoplay' controls='controls'></video>");
			//replaceWith() 方法用指定的 HTML 内容或元素替换被选元素
		}
	})
	if(urlid[10]==0){
		$(".contents").removeClass("af2");
	}else{
		$(".contents").addClass("af2");
	}
	
});