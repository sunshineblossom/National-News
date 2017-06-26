$(document).ready(function(){
	var basePath= $("#basePath").val();
	var userId = $("#uid").val()
	if(userId!=null && userId!=''){
            //验证是否关注
	        var data = {"userId":userId,"focusUserId":$("#editorId").val()}

			$.ajax({
				url :basePath +"/focus/validateFocus",
				type : "POST",
				dataType : "json",
				contentType : "application/json;charset=utf-8",
				cache : false,
				async : true,
				data :JSON.stringify(data),
				success : function(result) {
					if(result!=null){
					//	改变focus的颜色
						$(".focus").removeClass("btn-danger");
						$(".focus").text("已关注");
						$(".focus").addClass("btn-default");
					}
				},
				error : function() {

				}// 这里不要加","
			});
	}
	$(".btn-danger").click(function () {
		if($("#uid").val()!=null&&$("#uid").val()!=''){
			var data = {"userId":userId,"focusUserId":$("#editorId").val()}
			$.ajax({
				url :basePath +"/focus/addFocus",
				type : "POST",
				dataType : "json",
				contentType : "application/json;charset=utf-8",
				cache : false,
				async : true,
				data :JSON.stringify(data),
				success : function(result) {
					//	改变focus的颜色
					$(".focus").removeClass("btn-danger");
					$(".focus").text("已关注");
					$(".focus").addClass("btn-default");
				},
				error : function() {
					alert("系统异常，请稍后重试！");
				}// 这里不要加","
			});
		}
	})
	var ele = $(".image-item>img");
	if(ele.width()>ele.height()){
		ele.css("width","800px");
		ele.css("height","auto");
	}else{
			ele.css("width","auto");
			ele.css("height","500px");
	}
	if(ele.width()>800){
		ele.css("width","800px")
	}
	if(ele.height()>500){
		ele.css("height","500px")
	}
	
	$(".left-arrow").on("mouseenter",function(){
		$(".left-arrow>span").css("display","block");
	});
	$(".left-arrow").on("mouseleave",function(){
		$(".left-arrow>span").css("display","none");
	});
	$(".right-arrow").on("mouseenter",function(){
		$(".right-arrow>span").css("display","block");
	});
	$(".right-arrow").on("mouseleave",function(){
		$(".right-arrow>span").css("display","none");
	});

	//右切换图片
	$(".right-arrow").on("click",function(){
		
		var len = $(".image-list>ul>li").length;
	
		var current_index = Number($(".current-image").text());
		
		if((current_index+1)>len){
			//隐藏最后一张图片
			$(".img-"+current_index).css("display","none");
			//显示第一张图片
			$(".img-1").css("display","block");
			//设置图片相关信息
			image_infoset(1);
		}else{
			//隐藏当前图片
			$(".img-"+current_index).css("display","none");
			//显示下一张图片
			$(".img-"+(current_index+1)).css("display","block");
			//设置下一张图片相关信息
			image_infoset(current_index+1)
		}
	})
	//左切换图片
	$(".left-arrow").on("click",function(){
		
		var len = $(".image-list>ul>li").length;
	
		var current_index = Number($(".current-image").text());
		
		if((current_index-1)<1){
			//隐藏最后一张图片
			$(".img-"+current_index).css("display","none");
			//显示第一张图片
			$(".img-"+len).css("display","block");
			//设置图片相关信息
			image_infoset(len);
		}else{
			//隐藏当前图片
			$(".img-"+current_index).css("display","none");
			//显示下一张图片
			$(".img-"+(current_index-1)).css("display","block");
			//设置下一张图片相关信息
			image_infoset(current_index-1)
		}
	})
	function image_infoset(image_index){
		
		$(".current-image").text(image_index)
		$(".image-description").text($(".img-"+image_index).children().attr("alt"));
	}
})