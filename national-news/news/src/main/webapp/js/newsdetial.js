$(document).ready(function() {
	var basePath = $("#basePath").val();

    $(function(){
        for(var i=0;i<parseInt($("#index").val());i++){

            setTime(i);

        }
    })
    //设置视频播放时长
    function setTime(index) {
        var video = $("#video"+index);

        video.on("loadedmetadata",function(){

            $("#video-tag"+index).text(new Date(video[0].duration*1000).format("mm:ss"));
        })
    }
    
    $(".search-btn").click(function(){	
    	window.location.href=basePath+"/news/selectByKeyword/"+$(".search-input").val();
    })
    //1.如果没有回复则将向下的图标隐藏
	$("body").on("click",".reply-count",function(){
		/*这里应该先从数据库中加载出来所有的数据保存到一个数组里面*/
		//加载二级评论根据id加载
        //	设置二级评论列表
        var ele=$(this);
        console.log(ele);
        if(ele.parent().next().attr("class")=="reply-wrap"){
            ele.parent().next(".reply-wrap").remove();
        }
        var comment_num_second=$(this).prev().prev().text();
        if(ele.text().indexOf("条回复")!=-1){
            /*1.切换图标*/
            ele.children().removeClass();
            /*2.转换文字和图标*/
            ele.html("收起回复<span class=\"glyphicon glyphicon-chevron-up icon-up\">");
            /*3.添加5个元素*/
            var data = {commentId:$(this).prev('input').val()}
            $.ajax({
                url :basePath +"/commentlevel2/selectByCommentId",
                type : "POST",
                dataType : "json",
                contentType : "application/json;charset=utf-8",
                cache : false,
                async : true,
                data :JSON.stringify(data),
                success : function(list) {
                    console.log(list);
                    for (var i = 0; i <list.length ; i++) {
                      //  if(i<5){
                         //   alert(list[i].user.userImage);
                            ele.parent().parent(".comment-item-box").append("<div class=\"c-reply-comment\"><div class=\"user-img\"><a href=\""+basePath+"/user/redirectToUserInfo/"+list[i].user.uid+"/"+list[i].user.level+"\"><img src=\""+list[i].user.userImage+"\" class=\"img-circle\"></a><a href=\""+basePath+"/user/redirectToUserInfo/"+list[i].user.uid+"/"+list[i].user.level+"\" class=\"username\">"+list[i].user.username+"</a>"
                                +"<span class=\"comment-date\">"+new Date(list[i].commentLevel2.publishtime).format("MM-dd hh:mm")+"</span></div><div class=\"comment-content\">"
                                +"<p>"+list[i].commentLevel2.content+"</p>"
                                +"</div><div class=\"comment-action\"><input type='hidden' value='"+list[i].commentLevel2.scid+"' class='commentLevel2Id'><span class=\"reply\">回复</span><div class=\"up-and-report\"><span class=\"up-number\">"+list[i].upNumber+"</span>"
                                +"<span class=\"glyphicon glyphicon-hand-up up-icon\"></span>"
                                +"<span class=\"glyphicon glyphicon-exclamation-sign report-icon\"></span></div></div></div>");
                       // }
                       //  else{
                       //      ele.parent().parent(".comment-item-box").append("<div class=\"c-load-more\">查看更多评论</div>");
                       //      return 0;
                       //  }
                    }
                },
                error : function() {
                    alert("系统异常，请稍后重试！");

                }// 这里不要加","
            });


        }
        else if(ele.text().indexOf("收起回复")!=-1){
            /*隐藏二级评论*/
            ele.parent().nextAll(".c-reply-comment").remove();
            /*隐藏二级评论里的加载更多评论*/
            ele.parent().nextAll(".c-load-more").remove();
            /*1.切换图标*/
            ele.children().removeClass();
            /*2.转换文字和图标*/
            ele.html(comment_num_second+"条回复<span class=\"glyphicon glyphicon-chevron-down icon-down\">");
        }

	})
    $("body").on("click",".comment-submit",function(){
        //验证是否登录
        var ele = $(this).parent().prev("div.reply-input").children();
        var data;
        //判断是否是二级回复：
        //     如果是二级回复就去取到一级回复的id
        //         1.将upid设置为1级回复的id
        //         2.显示时在内容之前添加如“xxx回复@xxx//content”
        //     如果不是则直接添加回复
        if($(this).parent().parent().parent().attr("class")=="c-reply-comment"){ //二级回复
            data={"content":""+$("#uid").next().text()+" 回复@"+$(this).parent().parent().prev().prev().prev("div.user-img").children().eq(1).text()+"//"+ele.val(),"userId":$("#uid").val(),"commentId":$(this).parent().parent("div.reply-wrap").prev("div.comment-action").children().val(),"upId":$(this).parent().parent().parent("div.c-reply-comment").prev("div.comment-action").children().val()}
            alert("二级回复"+$(this).parent().parent().prev().prev().prev("div.user-img").children().eq(1).text());
        }else{
            data= {"content":ele.val(),"userId":$("#uid").val(),"commentId":$(this).parent().parent("div.reply-wrap").prev("div.comment-action").children().val()};
        }
        console.log(data);
    //    添加二级评论到数据库
        $.ajax({
            url :basePath +"/commentlevel2/addComment",
            type : "POST",
            dataType : "json",
            contentType : "application/json;charset=utf-8",
            cache : false,
            async : true,
            data :JSON.stringify(data),
            success : function(result) {
              if(result=="1"){
                  // 刷新页面
                  window.location.reload(true);
              }else{
                 alert("fail")
              }
            },
            error : function() {
                alert("系统异常，请稍后重试！");
            }
        });
    })
	/*添加一级回复*/
	var flag=true;
	$("body").on("click",".reply",function(){
		var ele = $(this);
		if(flag){
				/*关闭2级评论*/
			if(ele.next().next().text()=="收起回复"){
				/*隐藏二级评论*/
				ele.parent().nextAll(".c-reply-comment").remove();
				/*隐藏二级评论里的加载更多评论*/
				ele.parent().nextAll(".c-load-more").remove();
				/*2.转换文字和图标*/
				ele.next().next().html(ele.next().text()+"条回复<span class=\"glyphicon glyphicon-chevron-down icon-down\">");
			}
			/*一级回复*/
			if(ele.parent().parent().attr("class")=="comment-item-box"){
				/*一级回复*/
				ele.parent().parent(".comment-item-box").append("<div class=\"reply-wrap\"><div class=\"reply-input\">"
										+"<textarea class=\"comment-inputtext\" placeholder=\"写下您的评论...\">"
										+"</textarea></div><div class=\"reply-input-footer\"><div class=\"comment-submit\">评论</div></div></div>");
				flag=false;
			}
			/*二级级回复*/
		
			if(ele.next().attr("class")=="up-and-report"){
			
				/*一级回复*/
				ele.parent().parent(".c-reply-comment").append("<div class=\"reply-wrap\"><div class=\"reply-input\">"
										+"<textarea class=\"comment-inputtext\" placeholder=\"写下您的评论...\">"
										+"</textarea></div><div class=\"reply-input-footer\"><div class=\"comment-submit\">评论</div></div></div>");
				flag=false;
			}		
		}
		else{
			/*一级回复*/
			ele.parent().next(".reply-wrap").remove();
			flag=true;
		}
	})

	/*添加一级回复*/
    $("#basic-addon2").click(function(){
        var content = $(".input-area").val();
        if(content==""||content==null){
            alert("别光点按钮啊，至少说点啥啊！");
        }else{
            var data = {"userId":$("#uid").val(),"newsId":$("#newsId").val(),"content":content}
            $.ajax({
                url: basePath + "/comment/addComment",
                type: "POST",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                cache: false,
                async: true,
                data:JSON.stringify(data),
                success: function (result) {
                    if(result=="1"){
                        window.location.reload(true);
                    }
                },
                error: function () {
                    alert("系统异常，请稍后重试！");
                }
            });
        }
    })
    //点赞功能的实现
    //  点赞以后点赞的图标变红
    //  点赞数加1
    //  只能点一次，再点则取消点赞
    $("body").on("click",".up-icon",function(){
    //    alert("点赞")
    //    获取commentId,UserId
        var data = {"commentId":$(this).parent().prev().prev().val(),"userId":$("#uid").val(),"upAndDown":1,"newsId":$("#newsId").val()}
        var ele = $(this);
        $.ajax({
            url: basePath + "/up/addUp",
            type: "POST",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            cache: false,
            async: true,
            data:JSON.stringify(data),
            success: function (result) {
                if(result=="1"){
                    ele.prev().text(parseInt(ele.prev().text())+1)
                    ele.css("color","red");
                }
            },
            error: function () {
                alert("系统异常，请稍后重试！");
            }
        });
    })
    $("body").on("click",".report-icon",function(){
        //    获取commentId,UserId
        var data = {"commentId":$(this).parent().prev().prev().val(),"userId":$("#uid").val(),"upAndDown":0,"newsId":$("#newsId").val()}
        var ele = $(this)
        $.ajax({
            url: basePath + "/up/addUp",
            type: "POST",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            cache: false,
            async: true,
            data:JSON.stringify(data),
            success: function (result) {
                if(result=="1"){
                    //设置图标变红:
                    ele.css("color","red");
                }
            },
            error: function () {
                alert("系统异常，请稍后重试！");
            }
        });
    })
    Date.prototype.format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1,                 //月份
            "d+": this.getDate(),                    //日
            "h+": this.getHours(),                   //小时
            "m+": this.getMinutes(),                 //分
            "s+": this.getSeconds(),                 //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds()             //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
})
