
			$(function(){
				var h;
				var one=$("html");
				
			$(window).scroll(function(){
				h=$(window).scrollTop();
				console.log(h)
				if(h>50){
				$('#bottm').show();
				
				}
				else{
					$('#bottm').hide();
				}
			})
			$("#bottm").click(function(){
				h=$(window).scrollTop();
				
					$("body").animate({scrollTop:0},500);
					alert(h)
				})
		})	

