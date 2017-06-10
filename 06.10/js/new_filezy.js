$(function(){
	$(".bnt").on("tap",function(){
		$.ajax({
			url:"data.json",
			type:"get",
			dataType:"json",
			success:function(data){
				var arr=data.train;
				var src="";
				for(var i=0;i<arr.length;i++){
					function show(){
						src="<li class='lis'><h5>"+arr[i].car+
						'<sapn class="h5-sapn">'+arr[i].count+'</sapn>'+"</h5>"+
						"<p>"+arr[i].start+"<span>"+arr[i].placestart+
						"</span><span class='ps'>"+arr[i].price+"</span>"+"</p>"+
						"<p>"+arr[i].end+"<span>"+arr[i].placeend+"<span>"+
						"<span>"+arr[i].time+"</span>"
						"</p></li>";
						var html=$(".dis").html();
						html=src+html;
						$(".dis").html(html);
					}
					var c=$(".c").val();
					var z=$(".z").val();
					var f=$(".f").val();
					var cs=arr[i].car;
					var zs=arr[i].placeend;
					var fs=arr[i].placestart;
					var d="";		
					if(c==cs){
						show();
						$("#sections").css("transform","translate3d(-50%,0,0)");
					}
					if(z==zs){
						show();
						$("#sections").css("transform","translate3d(-50%,0,0)");
					}
					if(f==fs){
						show();
						$("#sections").css("transform","translate3d(-50%,0,0)");
					}
					else if(c==d&&z==d&&f==d){
						alert("请输入内容");
						arr.length=1;
					}
//					else{
//						alert("请输入正确车次和站名");
//						arr.length=1;
//					}

					
				}
			}
		})
		$(".uls-2").on("tap",function(){
			$('#sections').css("transform","translate3d(0,0,0)");
		})
	})
})



//&&z!=zs&&f!=fs