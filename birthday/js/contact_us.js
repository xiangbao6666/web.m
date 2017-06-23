			$(function(){
				var i=0;
				$(".click").click(function(){
					i++;
					if(i%2==0){
						$(".hide").css("height","0");
					}
					else{
						$(".hide").css("height","230px");
					}
				})
				
				
				$(window).scroll(function(event) {
					if($(this).scrollTop()<100){
						$("#to_top").css("opacity","0");
					}
					if($(this).scrollTop()>=100){
						$("#to_top").css("opacity","1");
					}
				});
				
				$("#to_top").click(function(event) {
					$("html,body").animate({scrollTop:"0px"},500)
				});
			})