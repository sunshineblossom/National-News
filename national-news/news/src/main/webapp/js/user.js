$(document).ready(function () {
    //启用ueditor
    var ue = UE.getEditor('editor');
    //获取根路径
    var basePath = $("#basePath").val();
    //启用bootstrap下拉菜单
    $('.dropdown-toggle').dropdown();
    //初始化日志Ueditor
    var log_editor = UE.getEditor("log-editor", {
        toolbars: [
            [
                'simpleupload', //单图上传
                'insertimage', //多图上传
                'emotion', //表情
                'insertvideo' //视频
            ]
        ]
    });
    //加载主页日志
    $(function () {
        var data = {userId: $("#uid").val()};
        alert("aa");
        console.log(data);
        $.ajax({
            url: basePath + "/share/selectAllByUserId",
            type: "POST",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            cache: false,
            async: true,
            data: JSON.stringify(data),
            success: function (shareQueryVos) {
                if (shareQueryVos != null) {
                    //清空content;
                    $(".content").empty();
                    for (var i = 0; i < shareQueryVos.length; i++) {
                        var publishTime = new Date(shareQueryVos[i].shareDate)
                        if(shareQueryVos[i].parentShareId == null || shareQueryVos[i].parentShareId==""){

                            $(".content").append("<div class=\"mylog\"><input style='display: none;' value='"+shareQueryVos[i].shareId+"'><div class=\"log-head\"><a href=\"#\"><img class=\"log-user-img\" src=\"" + $(".user-img").attr("src") + "\"></a><div class=\"row log-username\"><a href=\"#\">" + $(".pf-username").text() + "</a></div>" +
                                "<div class=\"row log-publishtime\"><span>" + (publishTime.getMonth()+1) + "月" + publishTime.getDate() + "日 " + publishTime.getHours() + ":" + publishTime.getMinutes() + "</span></div></div><div class=\"log-content\">" + shareQueryVos[i].shareContent + "</div>" +
                                "<div class=\"log-footer\"><div class=\"row\"><div class=\"col-lg-3 log-share\" data-toggle=\"modal\" data-target=\".share\"><a href=\"#\"><span class=\"glyphicon glyphicon-share-alt\"></span>&nbsp;转发<span class='shareNumber'>" + shareQueryVos[i].shareNumber + "</span></a></div>" +
                                "<div class=\"col-lg-3 log-comment\"><a href=\"javascript:void(0);\"><span style=\"display: none;\" class=\"click-count\">0</span><span class=\"glyphicon glyphicon-comment\"></span>&nbsp;评论<span class='commentNumber'>" + shareQueryVos[i].commentNumber + "</span></a></div><div class=\"col-lg-3 log-handup\"><span class=\"up-click-number\" style=\"display:none;\">0</span><a href=\"javascript:void(0);\"><span class=\"glyphicon glyphicon-hand-up\"></span>&nbsp;点赞<span class='upNumber'>" + shareQueryVos[i].upNumber + "</span></a></div>" +
                                "<div class=\"col-lg-3 log-delete\"><a href=\"#\"></span>&nbsp;删除</a></div></div></div></div>");
                        }else{
                            var parentShareDate = new Date(shareQueryVos[i].parentShare.shareDate)
                            $(".content").append("<div class=\"mylog\"><input style='display: none;' value='"+shareQueryVos[i].shareId+"'><div class=\"log-head\"><a href=\""+basePath+"/user/redirectToUserInfo/"+shareQueryVos[i].user.uid+"/"+shareQueryVos[i].user.level+"\"><img class=\"log-user-img\" src=\""+shareQueryVos[i].user.userImage+"\"></a><div class=\"row log-username\"><a href=\""+basePath+"/user/redirectToUserInfo/"+shareQueryVos[i].user.uid+"/"+shareQueryVos[i].user.level+"\">"+shareQueryVos[i].user.username+"</a></div>" +
                                "<div class=\"row log-publishtime\"><span>"  + (publishTime.getMonth()+1) + "月" + publishTime.getDate() + "日 " + publishTime.getHours() + ":" + publishTime.getMinutes() + "</span></div></div><div class=\"log-content\">" + shareQueryVos[i].shareContent + "</div>" +
                                "<div class=\"share-ref\"><div class=\ref-mylog\"><div class=\"ref-log-head\"><a href=\""+basePath+"/user/redirectToUserInfo/"+shareQueryVos[i].parentShareUser.uid+"/"+shareQueryVos[i].parentShareUser.level+"\"><img class=\"ref-log-user-img\" src=\""+shareQueryVos[i].parentShareUser.userImage+"\"></a><div class=\"row ref-log-username\"><a href=\""+basePath+"/user/redirectToUserInfo/"+shareQueryVos[i].parentShareUser.uid+"/"+shareQueryVos[i].parentShareUser.level+"\">"+shareQueryVos[i].parentShareUser.username+"</a></div>" +
                                "<div class=\"row ref-log-publishtime\"><span>"+ (parentShareDate.getMonth()+1) + "月" + parentShareDate.getDate() + "日 " + parentShareDate.getHours() + ":" + parentShareDate.getMinutes() + "</span></div></div><div class=\"ref-log-content\">"+shareQueryVos[i].parentShare.shareContent+"</div>" +
                                "</div></div><div class=\"log-footer\"><div class=\"row\"><div class=\"col-lg-3  \" data-toggle=\"modal\" data-target=\".share\"><a href=\"#\"><span class=\"glyphicon glyphicon-share-alt\"></span>&nbsp;"+shareQueryVos[i].shareNumber+"</a></div>"+
                                "<div class=\"col-lg-3 log-comment\"><a href=\"javascript:void(0);\"><span style=\"display: none;\" class=\"click-count\">0</span><span class=\"glyphicon glyphicon-comment\"></span>&nbsp;评论<span class='commentNumber'>" + shareQueryVos[i].commentNumber + "</span></a></div><div class=\"col-lg-3 log-handup\"><span class=\"up-click-number\" style=\"display:none;\">0</span><a href=\"javascript:void(0);\"><span class=\"glyphicon glyphicon-hand-up\"></span>&nbsp;点赞<span class='upNumber'>" + shareQueryVos[i].upNumber + "</span></a></div>" +
                                "<div class=\"col-lg-3 log-delete\"><a href=\"#\"></span>&nbsp;删除</a></div></div></div></div>");
                        }
                    }
                    //    checkUser();
                }
            },
            error: function () {
                alert("系统异常，请稍后重试！");
            }// 这里不要加","
        });

    })

    $("body").on("click", ".photo", function () {
        //1.清空content主题区
        $(".content").empty();
        $(".content").html($(".log-edit-module").html())
        var data = {"userId":$("#uid").val()}
        //2.content添加我的日志列表
        //加载我的日志按时间排序
        $.ajax({
            url: basePath + "/share/selectByUserIdWithPicture",
            type: "POST",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            cache: false,
            async: true,
            data: JSON.stringify(data),
            success: function (shareQueryVos) {
                if (shareQueryVos != null) {
                    for (var i = 0; i < shareQueryVos.length; i++) {
                        var publishTime = new Date(shareQueryVos[i].shareDate)
                        $(".content").append("<div class=\"mylog\"><div class=\"log-head\"><a href=\"#\"><img class=\"log-user-img\" src=\"" + $(".user-img").attr("src") + "\"></a><div class=\"row log-username\"><a href=\"#\">" + $(".log-username").children().eq(1).text() + "</a></div>" +
                            "<div class=\"row log-publishtime\"><span>" + (publishTime.getMonth()+1) + "月" + publishTime.getDate() + "日 " + publishTime.getHours() + ":" + publishTime.getMinutes() + "</span></div></div><div class=\"log-content\">" + shareQueryVos[i].shareContent + "</div>" +
                            "<div class=\"log-footer\"><div class=\"row\"><div class=\"col-lg-3 log-share\" data-toggle=\"modal\" data-target=\".share\"><a href=\"#\"><span class=\"glyphicon glyphicon-share-alt\"></span>&nbsp;转发<span class='shareNumber'>" + shareQueryVos[i].shareNumber + "</span></a></div>" +
                            "<div class=\"col-lg-3 log-comment\"><a href=\"javascript:void(0);\"><span style=\"display: none;\" class=\"click-count\">0</span><span class=\"glyphicon glyphicon-comment\"></span>&nbsp;评论<span class='commentNumber'>" + shareQueryVos[i].commentNumber + "</span></a></div><div class=\"col-lg-3 log-handup\"><span class=\"up-click-number\" style=\"display:none;\">0</span><a href=\"javascript:void(0);\"><span class=\"glyphicon glyphicon-hand-up\"></span>&nbsp;点赞<span class='upNumber'>" + shareQueryVos[i].upNumber + "</span></a></div>" +
                            "<div class=\"col-lg-3 log-delete\"><a href=\"#\"></span>&nbsp;删除</a></div></div></div></div>");
                    }
                    //    checkUser();
                }
            },
            error: function () {
                alert("系统异常，请稍后重试！");
            }// 这里不要加","
        });
    });
    //发布我的日志
    $("body").on("click",".log-submit",function(){
        alert("提交")
        if($("#uid").val()!=null&&$("#uid").val()!=''){
            var data = {"userId":$("#uid").val(),"shareContent":log_editor.getContent()}
            $.ajax({
                url: basePath + "/share/insertAndGetId",
                type: "POST",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                cache: false,
                async: true,
                data: JSON.stringify(data),
                success: function (shareId) {
                    if (shareId!= -1) {
                        window.location.reload(true);
                    }
                },
                error: function () {
                    alert("系统异常，请稍后重试！");
                }// 这里不要加","
            });
        }else{
            alert("请先登录！")
        }
    })
    $("#save").on("click", function () {
        if($("#title").val()==null||$("#title").val()==''||$("#categoryId").val()==''||$("#categoryId").val()==null||$("#keyword").val()==null||$("#keyword").val()==''){
            alert("请完善信息");
        }else{
            var data = {
                "editorId": $("#uid").val(),
                "publishTime": new Date(),
                "title": $("#title").val(),
                "keyword": $("#keyword").val(),
                "categoryId": $("#categoryId").val(),
                "content": ue.getContent()
            }
            $.ajax({
                url: basePath + "/news/add.action",
                type: "POST",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                cache: false,
                async: true,
                data: JSON.stringify(data),
                success: function (result) {
                    alert(result);
                },
                error: function () {
                    alert("系统异常，请稍后重试！");
                }// 这里不要加","
            });
        }
    })
    //点击我的主页
    $(".homepage").click(function () {
        // 隐藏编辑区
        hide_edit_content();
        //校验右侧标志位
        validate_right_flag();
        //1.清空content主题区
        $(".content").empty();
        //2.content添加我的日志列表
        var data = {userId: $("#uid").val()};
        $.ajax({
            url: basePath + "/share/selectAllByUserId",
            type: "POST",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            cache: false,
            async: true,
            data: JSON.stringify(data),
            success: function (shareQueryVos) {
            	if (shareQueryVos != null) {
                  	 for (var i = 0; i < shareQueryVos.length; i++) {
                           var publishTime = new Date(shareQueryVos[i].shareDate)
                           if(shareQueryVos[i].parentShareId == null || shareQueryVos[i].parentShareId==""){

                               $(".content").append("<div class=\"mylog\"><input style='display: none;' value='"+shareQueryVos[i].shareId+"'><div class=\"log-head\"><a href=\"#\"><img class=\"log-user-img\" src=\"" + $(".user-img").attr("src") + "\"></a><div class=\"row log-username\"><a href=\"#\">" + $(".pf-username").text() + "</a></div>" +
                                   "<div class=\"row log-publishtime\"><span>" + (publishTime.getMonth()+1) + "月" + publishTime.getDate() + "日 " + publishTime.getHours() + ":" + publishTime.getMinutes() + "</span></div></div><div class=\"log-content\">" + shareQueryVos[i].shareContent + "</div>" +
                                   "<div class=\"log-footer\"><div class=\"row\"><div class=\"col-lg-4 log-share\" data-toggle=\"modal\" data-target=\".share\"><a href=\"#\"><span class=\"glyphicon glyphicon-share-alt\"></span>&nbsp;转发<span class='shareNumber'>" + shareQueryVos[i].shareNumber + "</span></a></div>" +
                                   "<div class=\"col-lg-4 log-comment\"><a href=\"javascript:void(0);\"><span style=\"display: none;\" class=\"click-count\">0</span><span class=\"glyphicon glyphicon-comment\"></span>&nbsp;评论<span class='commentNumber'>" + shareQueryVos[i].commentNumber + "</span></a></div><div class=\"col-lg-4 log-handup\"><span class=\"up-click-number\" style=\"display:none;\">0</span><a href=\"javascript:void(0);\"><span class=\"glyphicon glyphicon-hand-up\"></span>&nbsp;点赞<span class='upNumber'>" + shareQueryVos[i].upNumber + "</span></a></div>" +
                                   "</div></div></div>");
                           }else{
                           	alert("父级share为空");
                               var parentShareDate = new Date(shareQueryVos[i].parentShare.shareDate)
                               $(".content").append("<div class=\"mylog\"><input style='display: none;' value='"+shareQueryVos[i].shareId+"'><div class=\"log-head\"><a href=\""+basePath+"/user/redirectToUserInfo/"+shareQueryVos[i].user.uid+"/"+shareQueryVos[i].user.level+"\"><img class=\"log-user-img\" src=\""+shareQueryVos[i].user.userImage+"\"></a><div class=\"row log-username\"><a href=\""+basePath+"/user/redirectToUserInfo/"+shareQueryVos[i].user.uid+"/"+shareQueryVos[i].user.level+"\">"+shareQueryVos[i].user.username+"</a></div>" +
                                   "<div class=\"row log-publishtime\"><span>"  + (publishTime.getMonth()+1) + "月" + publishTime.getDate() + "日 " + publishTime.getHours() + ":" + publishTime.getMinutes() + "</span></div></div><div class=\"log-content\">" + shareQueryVos[i].shareContent + "</div>" +
                                   "<div class=\"share-ref\"><div class=\ref-mylog\"><div class=\"ref-log-head\"><a href=\""+basePath+"/user/redirectToUserInfo/"+shareQueryVos[i].parentShareUser.uid+"/"+shareQueryVos[i].parentShareUser.level+"\"><img class=\"ref-log-user-img\" src=\""+shareQueryVos[i].parentShareUser.userImage+"\"></a><div class=\"row ref-log-username\"><a href=\""+basePath+"/user/redirectToUserInfo/"+shareQueryVos[i].parentShareUser.uid+"/"+shareQueryVos[i].parentShareUser.level+"\">"+shareQueryVos[i].parentShareUser.username+"</a></div>" +
                                   "<div class=\"row ref-log-publishtime\"><span>"+ (parentShareDate.getMonth()+1) + "月" + parentShareDate.getDate() + "日 " + parentShareDate.getHours() + ":" + parentShareDate.getMinutes() + "</span></div></div><div class=\"ref-log-content\">"+shareQueryVos[i].parentShare.shareContent+"</div>" +
                                   "</div></div><div class=\"log-footer\"><div class=\"row\"><div class=\"col-lg-4  \" data-toggle=\"modal\" data-target=\".share\"><a href=\"#\"><span class=\"glyphicon glyphicon-share-alt\"></span>&nbsp;"+shareQueryVos[i].shareNumber+"</a></div>"+
                                   "<div class=\"col-lg-4 log-comment\"><a href=\"javascript:void(0);\"><span style=\"display: none;\" class=\"click-count\">0</span><span class=\"glyphicon glyphicon-comment\"></span>&nbsp;评论<span class='commentNumber'>" + shareQueryVos[i].commentNumber + "</span></a></div><div class=\"col-lg-4 log-handup\"><span class=\"up-click-number\" style=\"display:none;\">0</span><a href=\"javascript:void(0);\"><span class=\"glyphicon glyphicon-hand-up\"></span>&nbsp;点赞<span class='upNumber'>" + shareQueryVos[i].upNumber + "</span></a></div>" +
                                   "</div></div></div>");
                           }
                       }
                      //    checkUser();
                  }
            },
            error: function () {
                alert("系统异常，请稍后重试！");
            }// 这里不要加","
        });

        // for (var i = 5 - 1; i >= 0; i--) {
        //     $(".content").append("<div class=\"mylog\"><div class=\"log-head\"><a href=\"#\"><img class=\"log-user-img\" src=\"../images/9.jpg\"></a><div class=\"row log-username\"><a href=\"#\">呆呆的木头人</a></div>" +
        //         "<div class=\"row log-publishtime\"><span>3月18日 20:59</span></div></div><div class=\"log-content\">现在都到白色情人节的尾巴了，然鹅我却在今天压了一下午的马路，关键是还被骂了一下午....伤心..发个微博纪念一下...</div>" +
        //         "<div class=\"log-footer\"><div class=\"row\"><div class=\"col-lg-3 log-share\" data-toggle=\"modal\" data-target=\".share\"><a href=\"#\"><span class=\"glyphicon glyphicon-share-alt\"></span>&nbsp;转发</a></div>" +
        //         "<div class=\"col-lg-3 log-comment\"><a href=\"javascript:void(0);\"><span style=\"display: none;\" class=\"click-count\">0</span><span class=\"glyphicon glyphicon-comment\"></span>&nbsp;评论</a></div><div class=\"col-lg-3 log-handup\"><span class=\"up-click-number\" style=\"display:none;\">0</span><a href=\"javascript:void(0);\"><span class=\"glyphicon glyphicon-hand-up\"></span>&nbsp;<span>12</span></a></div>" +
        //         "<div class=\"col-lg-3 log-delete\"><a href=\"#\"></span>&nbsp;删除</a></div></div></div></div>");
        // }

    })
    //点击管理中心
    $(".manage-center").click(function () {
        // 隐藏编辑区
        hide_edit_content();
        //校验右侧标志位
        validate_right_flag();
        //1.清空主题区
        $(".content").empty();

        $(".content").html($(".profile-info").html());
        $(".edit-area").css("display", "none");

    })
    //点击编辑
    $("body").on("click", ".btn-edit", function () {
        var ele = $(this);
        ele.removeClass();
        ele.text("保存");
        ele.addClass("btn btn-default btn-save");
        // 需要获取后台数据

        //删除原有内容
        $(".show-area").css("display", "none");
        //重设左右间距

        //添加新内容
        $(".edit-area").css("display", "block");
    })
    //点击保存个人信息
    $("body").on("click", ".btn-save", function () {
        var ele = $(this);
        var data = {"uid":$("#uid").val(),"username":$("#update-username").val(),"sex":$("input[name='sex']:checked").val(),"birthday":$("#update-birthday").val(),"selfIntroduce":$("#update-selfIntroduce").val(),"email":$("#update-email").val()}
        alert("abb")
        $.ajax({
            url: basePath + "/user/updateInfo",
            type: "POST",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            cache: false,
            async: true,
            data: JSON.stringify(data),
            success: function (user) {
                if(user!=null){
                    ele.removeClass();
                    ele.text("编辑");
                    ele.addClass("btn btn-default btn-edit");
                    // 需要获取后台数据
                    $("#show-username").text(user.username);
                    $("#show-sex").text(user.sex);
                    $("#show-birthday").text(new Date(user.birthday).Format("yyyy-MM-dd"));
                    $("#show-selfIntroduce").text(user.selfIntroduce);
                    $("#show-registTime").text(new Date(user.registTime).Format("yyyy-MM-dd"));
                    $("#show-email").text(user.email);
                    //删除原有内容
                    $(".edit-area").css("display", "none");
                    //添加新内容
                    $(".show-area").css("display", "block");
                }
            },
            error: function () {
                alert("系统异常，请稍后重试！");
            }// 这里不要加","
        });

    })
    function getFocus(method,message){
        var data = {"userId":$("#uid").val()}
        if($("#uid").val()!=null&&$("#uid").val()!=''){
            $.ajax({
                url: basePath + "/focus/"+method,
                type: "POST",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                cache: false,
                async: true,
                data: JSON.stringify(data),
                success: function (focusQueryVos) {

                    for (var i = 0; i < focusQueryVos.length; i++) {

                        if(focusQueryVos[i].user.level=='1'){
                            if(focusQueryVos[i].news!=null){
                                var newsPublishTime = new Date(focusQueryVos[i].news.publishTime);
                                $(".focus-fans-list>ul").append("<li><a href=\""+basePath+"/user/redirectToUserInfo/"+focusQueryVos[i].user.uid+"/"+focusQueryVos[i].user.level+"\"><div class=\"focus-user-img\"><img src=\""+focusQueryVos[i].user.userImage+"\"><div class=\"focus-username\"><span>"+focusQueryVos[i].user.username+"</span><div><span class='focus-publishtime'>"+(newsPublishTime.getMonth()+1)+"月"+newsPublishTime.getDate()+"日 "+newsPublishTime.getHours()+":"+newsPublishTime.getMinutes()+"</span></div></div></div></a><div class=\"focus-user-info\">" +
                                    "<div class=\"focus-introduce\">"+focusQueryVos[i].news.content+"</div></div><div class=\"cancle-focus\"><input type='hidden' value='"+focusQueryVos[i].focus.fid+"'><button class=\"btn btn-danger btn-sm\">"+message+"</button>" +
                                    "</div></li>");
                            }else{
                                $(".focus-fans-list>ul").append("<li><a href=\""+basePath+"/user/redirectToUserInfo/"+focusQueryVos[i].user.uid+"/"+focusQueryVos[i].user.level+"\"><div class=\"focus-user-img\"><img src=\""+focusQueryVos[i].user.userImage+"\"><div class=\"focus-username\"><span>"+focusQueryVos[i].user.username+"</span><div><span class='focus-publishtime'></span></div></div></div></a><div class=\"focus-user-info\">" +
                                    "<div class=\"focus-introduce\"></div></div><div class=\"cancle-focus\"><input type='hidden' value='"+focusQueryVos[i].focus.fid+"'><button class=\"btn btn-danger btn-sm\">"+message+"</button>" +
                                    "</div></li>");
                            }
                        }else{
                            if(focusQueryVos[i].share!=null){
                                var newsPublishTime = new Date(focusQueryVos[i].share.shareDate);
                                $(".focus-fans-list>ul").append("<li><a href=\""+basePath+"/user/redirectToUserInfo/"+focusQueryVos[i].user.uid+"/"+focusQueryVos[i].user.level+"\"><div class=\"focus-user-img\"><img src=\""+focusQueryVos[i].user.userImage+"\"><div class=\"focus-username\"><span>"+focusQueryVos[i].user.username+"</span><div><span class='focus-publishtime'>"+(newsPublishTime.getMonth()+1)+"月"+newsPublishTime.getDate()+"日 "+newsPublishTime.getHours()+":"+newsPublishTime.getMinutes()+"</span></div></div></div></a><div class=\"focus-user-info\">" +
                                    "<div class=\"focus-introduce\">"+focusQueryVos[i].share.shareContent+"</div></div><div class=\"cancle-focus\"><input type='hidden' value='"+focusQueryVos[i].focus.fid+"'><button class=\"btn btn-danger btn-sm\">"+message+"</button>" +
                                    "</div></li>");
                            }else{
                                $(".focus-fans-list>ul").append("<li><a href=\""+basePath+"/user/redirectToUserInfo/"+focusQueryVos[i].user.uid+"/"+focusQueryVos[i].user.level+"\"><div class=\"focus-user-img\"><img src=\""+focusQueryVos[i].user.userImage+"\"><div class=\"focus-username\"><span>"+focusQueryVos[i].user.username+"</span><div><span class='focus-publishtime'></span></div></div></div></a><div class=\"focus-user-info\">" +
                                    "<div class=\"focus-introduce\"></div></div><div class=\"cancle-focus\"><input type='hidden' value='"+focusQueryVos[i].focus.fid+"'><button class=\"btn btn-danger btn-sm\">"+message+"</button>" +
                                    "</div></li>");
                            }
                        }
                    }
                },
                error: function () {
                    alert("系统异常，请稍后重试！");
                }// 这里不要加","
            });
        }else{
            alert("请先登录！");
        }
    }
    //显示关注列表
    $(".right-nav").on("click", ".focus>div>a", function () {
        showFocus();
    })
    function showFocus(){
        //清空主题区
        $(".content").empty();
        // 設置主題區內容
        $(".content").html($(".fans-focus-module").html())
        //清空关注内容
        $(".focus-fans-list>ul").html("");
        //添加关注列表
        //获取所有关注
        getFocus("selectAllFocus","取消关注");
        //撤销粉丝底线
        $(".fans-header").css("border-bottom", "none");
        //4.设置focus-fans-header>ul>li底边变红
        $(".focus-header").css("border-bottom", "#eb7350 2px solid");
    }
    //显示粉丝列表
    $(".right-nav").on("click", ".fans>div>a", function () {
        //清空主题区
        $(".content").empty();
        // 設置主題區內容
        $(".content").html($(".fans-focus-module").html())
        //清空关注内容
        $(".focus-fans-list>ul").html("");
        //显示粉丝列表
        getFocus("selectAllFans","屏蔽粉丝")
        //撤销关注底线
        $(".focus-header").css("border-bottom", "none");
        //4.设置focus-fans-header>ul>li底边变红
        $(".fans-header").css("border-bottom", "#eb7350 2px solid");
    })

    $("body").on("click", ".focus-header", function () {
        $(".focus-fans-list>ul").html("");
        //添加关注列表
        getFocus("selectAllFocus","取消关注")
        //撤销关注底线
        $(".fans-header").css("border-bottom", "none");
        //4.设置focus-fans-header>ul>li底边变红
        $(".focus-header").css("border-bottom", "#eb7350 2px solid");
    })
    $("body").on("click", ".fans-header", function () {
        $(".focus-fans-list>ul").html("");
        //显示粉丝列表
        getFocus("selectAllFans","屏蔽粉丝");

        //撤销关注底线
        $(".focus-header").css("border-bottom", "none");
        //4.设置focus-fans-header>ul>li底边变红
        $(".fans-header").css("border-bottom", "#eb7350 2px solid");
    })

    /*评论回复*/
    $("body").on("click", ".reply-count", function () {
        /*这里应该先从数据库中加载出来所有的数据保存到一个数组里面*/
        var ele = $(this);
        if (ele.parent().next().attr("class") == "reply-wrap") {
            ele.parent().next(".reply-wrap").remove();
        }
        var comment_num_second = $(this).prev().text();
        if (ele.text().indexOf("条回复") != -1) {
            /*1.切换图标*/
            ele.children().removeClass();
            /*2.转换文字和图标*/
            ele.html("收起回复<span class=\"glyphicon glyphicon-chevron-up icon-up\">");
            /*3.添加5个元素*/
            var data = {commentId:$(this).prev().prev().val()}

            $.ajax({
                url: basePath + "/commentlevel2/selectByCommentId",
                type: "POST",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                cache: false,
                async: true,
                data: JSON.stringify(data),
                success: function (commentLevel2QueryVos) {
                    for (var i = 0; i < commentLevel2QueryVos.length; i++) {
                        var publishTime = new Date(commentLevel2QueryVos[i].commentLevel2.publishtime);
                        // if (i < 10) {
                        ele.parent().parent(".comment-item-box").append("<div class=\"c-reply-comment\"><div class=\"comment-user-img\"><a href=\""+basePath+"/user/redirectToUserInfo/"+commentLevel2QueryVos[i].user.uid+"/"+commentLevel2QueryVos[i].user.level+"\"><img src=\""+commentLevel2QueryVos[i].user.userImage+"\" class=\"img-circle\"></a><a href=\""+basePath+"/user/redirectToUserInfo/"+commentLevel2QueryVos[i].user.uid+"/"+commentLevel2QueryVos[i].user.level+"\" class=\"comment-username\">"+commentLevel2QueryVos[i].user.username+"</a>"
                            + "<span class=\"comment-date\">"+publishTime.getMonth()+"月"+publishTime.getDate()+"日 "+publishTime.getHours()+":"+publishTime.getMinutes()+"</span></div><div class=\"comment-content\">"
                            + "<p>"+commentLevel2QueryVos[i].commentLevel2.content+"</p>"
                            + "</div><div class=\"comment-action\"><span class=\"reply\">回复</span><div class=\"up-and-report\"><span class=\"up-number\">"+commentLevel2QueryVos[i].upNumber+"</span>"
                            + "<span class=\"glyphicon glyphicon-hand-up up-icon\"></span>"
                            + "<span class=\"glyphicon glyphicon-exclamation-sign report-icon\"></span></div></div></div>");

                    }
                },
                error: function () {
                    alert("系统异常，请稍后重试！");
                }// 这里不要加","
            });

        }
        else if (ele.text().indexOf("收起回复") != -1) {
            /*隐藏二级评论*/
            ele.parent().nextAll(".c-reply-comment").remove();
            /*隐藏二级评论里的加载更多评论*/
            ele.parent().nextAll(".c-load-more").remove();
            /*1.切换图标*/
            ele.children().removeClass();
            /*2.转换文字和图标*/
            ele.html(comment_num_second + "条回复<span class=\"glyphicon glyphicon-chevron-down icon-down\">");
        }
    })

    /*添加一级回复*/
    var flag = true;
    $("body").on("click", ".reply", function () {
        var ele = $(this);
        if (flag) {
            /*关闭2级评论*/
            if (ele.next().next().text() == "收起回复") {
                /*隐藏二级评论*/
                ele.parent().nextAll(".c-reply-comment").remove();
                /*隐藏二级评论里的加载更多评论*/
                ele.parent().nextAll(".c-load-more").remove();
                /*2.转换文字和图标*/
                ele.next().next().html(ele.next().text() + "条回复<span class=\"glyphicon glyphicon-chevron-down icon-down\">");
            }
            /*一级回复*/
            if (ele.parent().parent().attr("class") == "comment-item-box") {
                /*一级回复*/
                ele.parent().parent(".comment-item-box").append("<div class=\"reply-wrap\"><div class=\"reply-input\">"
                    + "<textarea class=\"comment-inputtext\" placeholder=\"写下您的评论...\">"
                    + "</textarea></div><div class=\"reply-input-footer\"><div class=\"comment-submit\">评论</div></div></div>");
                flag = false;
            }
            /*二级级回复*/

            if (ele.next().attr("class") == "up-and-report") {

                /*一级回复*/
                ele.parent().parent(".c-reply-comment").append("<div class=\"reply-wrap\"><div class=\"reply-input\">"
                    + "<textarea class=\"comment-inputtext\" placeholder=\"写下您的评论...\">"
                    + "</textarea></div><div class=\"reply-input-footer\"><div class=\"comment-submit\">评论</div></div></div>");
                flag = false;
            }
        }
        else {
            /*一级回复*/
            ele.parent().next(".reply-wrap").remove();
            flag = true;
        }
    })

    /*点击评论*/
    $("body").on("click", ".log-comment", function () {
        var ele = $(this);
        var click_count_ele = ele.children().children("span.click-count");
        var click_count = click_count_ele.text();
        if (click_count == "0") {
            ele.parent().parent().parent().append("<div class=\"comment\"><div class=\"comment-raise\"><div class=\"user-icon-default\"><span class=\"glyphicon glyphicon-user\"></span></div><div class=\"input-group input-box\"><input type=\"text\" class=\"form-control input-area\" placeholder=\"填写您的评论...\" aria-describedby=\"basic-addon2\">" +
                "<span class=\"input-group-addon\" id=\"basic-addon2\">评论</span></div></div><div class=\"comment-list\"><ul></ul></div><div class=\"load-more\">查看更多评论</div></div>");
            var data = {"shareId":ele.parent().parent().parent().children().eq(0).val()};

            $.ajax({
                url: basePath + "/comment/selectByShareId",
                type: "POST",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                cache: false,
                async: true,
                data: JSON.stringify(data),
                success: function (commentQueryVos) {
                    console.log(commentQueryVos);
                    for (var i = 0; i < commentQueryVos.length; i++) {
                        var publishTime = new Date(commentQueryVos[i].comment.publishTime);
                        //加载回复需要ajax
                        ele.parent().parent().next(".comment").children(".comment-list").children().append("<li class=\"comment-item\"><div class=\"comment-item-box\"><div class=\"comment-user-img\"><a href=\""+basePath+"/user/redirectToUserInfo/"+commentQueryVos[i].user.uid+"/"+commentQueryVos[i].user.level+"+\"><img src=\""+commentQueryVos[i].user.userImage+"\"></a>" +
                            "<a href=\""+basePath+"/user/redirectToUserInfo/"+commentQueryVos[i].user.uid+"/"+commentQueryVos[i].user.level+"+\" class=\"comment-username\">"+commentQueryVos[i].user.username+"</a><span class=\"comment-date\">"+(publishTime.getMonth()+1)+"月"+publishTime.getDate()+"日 "+publishTime.getHours()+":"+publishTime.getMinutes()+"</span></div><div class=\"comment-content\"><p>"+commentQueryVos[i].comment.content+"</p>" +
                            "</div><div class=\"comment-action\"><span class=\"reply\">回复&nbsp;⋅&nbsp;</span><input type='hidden' value='"+commentQueryVos[i].comment.commentId+"'><span style=\"display: none;\">"+commentQueryVos[i].secondCommentNumber+"</span><span class=\"reply-count\">"+commentQueryVos[i].secondCommentNumber+"条回复<span class=\"glyphicon glyphicon-chevron-down icon-down\"></span></span>" +
                            "<div class=\"up-and-report\"><span class=\"up-number\">"+commentQueryVos[i].upNumber+"</span><span class=\"glyphicon glyphicon-hand-up up-icon\"></span><span class=\"glyphicon glyphicon-exclamation-sign report-icon\"></span>" +
                            "</div></div></div></li>");
                    }

                },
                error: function () {
                    alert("系统异常，请稍后重试！");
                }// 这里不要加","
            });
            click_count_ele.text(1);
        } else if (click_count == 1) {
            ele.parent().parent().next(".comment").remove();
            click_count_ele.text(0);
        }
    })
    $("body").on("click", ".log-share", function () {
        var ele = $(this);

        var content = ele.parent().parent().prev().html();

        var username = ele.parent().parent().prev().prev("div.log-head").children("div.log-username").children().text();
        //设置用户名
        $(".share-username").text("@" + username);
        //设置shareId
        $(".source-shareId").val(ele.parent().parent().parent().children().eq(0).val())
        //如果内容长度大于50那么取出末尾变为原文链接
        if (content.length > 200) {
            $(".share-source-content").html(content.substring(0, 199));
            $(".share-source-content").after("<a href=\"#\">原文链接</a>");
        } else {
            $(".share-source-content").html(content);
        }
        var share_number = ele.children().eq(1).text();
        $(".share-list-number>span").text(share_number);
    })
    //刪除文章或者日誌
    $("body").on("click", ".log-delete", function () {
        var ele = $(this);
        if(confirm("确定要删除？")){
            var data = {"shareId":$(this).parent().parent().parent().children().eq(0).val()};
            console.log("shareId:"+data)
            alert($(this).parent().parent().parent().children().eq(0).val());
            $.ajax({
                url: basePath + "/share/deleteOne",
                type: "POST",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                cache: false,
                async: true,
                data: JSON.stringify(data),
                success: function (result) {
                    if(result>0){
                        ele.parent().parent().parent("div.mylog").remove();
                    }
                },
                error: function () {
                    alert("系统异常，请稍后重试！");
                }// 这里不要加","
            });
        }
    })
    //点击转发，将转发内容添加到我的日志中
    $("body").on("click", ".share-submit", function () {
        $('#shareModal').modal('hide');
        $(".modal-backdrop").removeClass("in").addClass("out");
        var data = {"userId":$("#uid").val(),"shareDate":new Date(),"shareContent":$(".share-c-input").val(),"parentShareId":$(".source-shareId").val()}
        console.log(data);
        $.ajax({
            url: basePath + "/share/insert",
            type: "POST",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            cache: false,
            async: true,
            data: JSON.stringify(data),
            success: function (result) {
                if(result>0){
                    window.location.reload(true);
                }
            },
            error: function () {
                alert("系统异常，请稍后重试！");
            }// 这里不要加","
        });
        //alert($(""))
        // var ele = $(this);
        // var comment = ele.parent().prev().val();
        // var date = new Date();
        // var publishtime = date.getMonth() + "月" + date.getDate() + "日" + "&nbsp;" + date.getHours() + ":" + date.getMinutes();
        // $(".content").append("<div class=\"mylog\"><div class=\"log-head\"><a href=\"#\"><img class=\"log-user-img\" src=\""+$(".user-img-region>a>img").attr("src")+"\"></a><div class=\"row log-username\"><a href=\"#\">"+$(".pf-username").text()+"</a></div>" +
        //     "<div class=\"row log-publishtime\"><span>" + publishtime + "</span></div></div><div class=\"log-content\">" + comment + "</div>" +
        //     "<div class=\"share-ref\"><div class=\ref-mylog\"><div class=\"ref-log-head\"><a href=\"#\"><img class=\"ref-log-user-img\" src=\""+$(".user-img-region>a>img").attr("src")+"\"></a><div class=\"row ref-log-username\"><a href=\"#\">"+$(".pf-username").text()+"</a></div>" +
        //     "<div class=\"row ref-log-publishtime\"><span>3月18日 20:59</span></div></div><div class=\"ref-log-content\">现在都到白色情人节的尾巴了，然鹅我却在今天压了一下午的马路，关键是还被骂了一下午....伤心..发个微博纪念一下...</div>" +
        //     "</div></div><div class=\"log-footer\"><div class=\"row\"><div class=\"col-lg-3  \" data-toggle=\"modal\" data-target=\".share\"><a href=\"#\"><span class=\"glyphicon glyphicon-share-alt\"></span>&nbsp;2113</a></div><div class=\"col-lg-3 log-comment\"><a href=\"#\"><span class=\"glyphicon glyphicon-comment\"></span>&nbsp;2121</a></div>" +
        //     "<span style=\"display: none;\" class=\"click-count\">0</span><div class=\"col-lg-3 log-handup\"><a href=\"javascript:void(0);\"><span class=\"glyphicon glyphicon-hand-up\"></span>&nbsp;<span class=\"a-up-number\">12</span></a></div>" +
        //     "<div class=\"col-lg-3 log-delete\"><a href=\"#\"></span>&nbsp;删除</a></div></div></div></div>");

    });
    $("body").on("click", ".log-handup", function () {
        //获取点击当前元素
        var ele = $(this);
        //将图标变红
        ele.children().children().css("color", "#eb7350");
        //将点赞数加1
        var statusEle = ele.children("span.up-click-number");
        //alert(ele.children("span.up-click-number").text())
        if (statusEle.text() == "0") {
            var up_number_ele = statusEle.next().children("span.glyphicon").next();
            var current_number = up_number_ele.text();
            up_number_ele.text(parseInt(current_number) + 1);
            statusEle.text(1);
            //添加ajax提交点赞数加1
            // $.ajax({

            // })
            var data = {"userId":$("#uid").val(),"upAndDown":1,"shareId":ele.parent().parent().parent().children().eq(0).val()}
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
                        ele.children().eq(1).css("color","red");
                    }
                },
                error: function () {
                    alert("系统异常，请稍后重试！");
                }
            });
        } else if (statusEle.text() == "1") {

            //添加ajax提交点赞数减1
            // $.ajax({

            // })
            var data = {"userId":$("#uid").val(),"upAndDown":1,"shareId":ele.parent().parent().parent().children().eq(0).val()}
            $.ajax({
                url: basePath + "/up/countDown",
                type: "POST",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                cache: false,
                async: true,
                data:JSON.stringify(data),
                success: function (result) {
                    var up_number_ele = statusEle.next().children("span.glyphicon").next();
                    var current_number = up_number_ele.text();
                    up_number_ele.text(parseInt(current_number) - 1);
                    ele.children().eq(1).css("color", "#808080");
                    statusEle.text(0);
                },
                error: function () {
                    alert("系统异常，请稍后重试！");
                }
            });
        }
        //更新后台数据
        // $.ajax({

        // })
    })

    /*添加一级回复*/
    $("body").on("click","#basic-addon2",function(){
        var content = $(".input-area").val();
        if(content==""||content==null){
            alert("别光点按钮啊，至少说点啥啊！");
        }else{
            var data = {"userId":$("#uid").val(),"shareId":$(this).parent().parent().parent().parent().children().eq(0).val(),"content":content}
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
    //添加二级回复
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
            data={"content":""+$("#uid").next().text()+" 回复@"+$(this).parent().parent().parent().children().eq(0).children().eq(1).text()+"//"+ele.val(),"userId":$("#uid").val(),"commentId":$(this).parent().parent().parent().prev().children().eq(1).val(),"upId":$(this).parent().parent().parent("div.c-reply-comment").prev("div.comment-action").children().val()}
            alert("二级回复"+$(this).parent().parent().parent().prev().children().eq(1).val());
        }else{
            data= {"content":ele.val(),"userId":$("#uid").val(),"commentId":$(this).parent().parent().prev().children().eq(1).val()};
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
    //点赞功能的实现
    //  点赞以后点赞的图标变红
    //  点赞数加1
    //  只能点一次，再点则取消点赞
    $("body").on("click",".up-icon",function(){
        //    alert("点赞")
        //    获取commentId,UserId
        var data = {"commentId":$(this).parent().prev().prev().prev().val(),"userId":$("#uid").val(),"upAndDown":1,"shareId":$(this).parent().parent().parent().parent().parent().parent().parent().parent().children().eq(0).val()}
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
                    alert("aa")
                    ele.prev().text(parseInt(ele.prev().text())+1)
                    ele.css("color","red");
                }
            },
            error: function () {
                alert("系统异常，请稍后重试！");
            }
        });
    })
    //点击举报功能
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

    $("body").on("click",".btn-danger",function () {
        var ele = $(this);

        if(ele.text()=='取消关注'||ele.text()=='屏蔽粉丝'){
            $.ajax({
                url: basePath + "/focus/deleteByPrimaryKey",
                type: "POST",
                dataType: "json",
                contentType: "application/json;charset=utf-8",
                cache: false,
                data:{"fid":ele.prev().val()},
                async: true,
                success: function (result) {
                    if(result>0){
                        window.location.reload(true);
                    }
                },
                error: function () {
                    alert("系统异常，请稍后重试！");
                }// 这里不要加","
            });
        }
    })
    var validate_right_flag = function () {
        $(".btn-edit-article").css("display", "none");
        $(".focus-fans-module").css("display", "block");
    }
    var hide_edit_content = function () {
        // 隐藏编辑区
        $(".news-edit-module").css("display", "none");
        //显示主题区
        $(".content").css("display", "block");
        //显示右侧导航栏
        $(".right-nav").css("display", "block");

    }
    Date.prototype.Format = function (fmt) { //author: meizz
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