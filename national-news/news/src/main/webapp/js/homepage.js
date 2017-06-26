$(document).ready(function () {
    var basePath = $("#basePath").val();
    //加载首页数据
    // $(".hotpoint").empty();
    // $.ajax({
    //     url: basePath + "/news/selectHotNews",
    //     type: "POST",
    //     dataType: "json",
    //     contentType: "application/json;charset=utf-8",
    //     cache: false,
    //     async: true,
    //     success: function (newsList) {
    //         if (newsList != null) {
    //             for(var i = 0; i<newsList.length; i++){
    //               var news_id = newsList[i].newsId;
    //                 alert(news_id);
    //                 var news_title = newsList[i].title;
    //                 var editorId = newsList[i].editorId;
    //                 $.ajax({
    //                     url: basePath + "/picture/selectOneByNewsId",
    //                     type: "POST",
    //                     dataType: "json",
    //                     contentType: "application/json;charset=utf-8",
    //                     cache: false,
    //                     async: true,
    //                     data:{"newsId":news_id},
    //                     success: function (picList) {
    //                         if (picList != null) {
    //                            $(".hotpoint").append("<li class='hotpoint-item'><div class='row'><div class='col-lg-2'> <a href='#'><img src='"+picList.path+"'></a>"
    //                                 +"</div> <div class='col-lg-10'><a href='"+basePath+"/news/newsdetial/"+news_id+"/"+editorId+"'> <p>"+news_title+"</p></a></div></div></li>")
    //                         }
    //                     },
    //                     error: function () {
    //                         alert("系统异常，请稍后重试！");
    //                         // $('.myModal').modal('hide');
    //                     }
    //                 });
    //             }
    //         }
    //     },
    //     error: function () {
    //         alert("系统异常，请稍后重试！");
    //         // $('.myModal').modal('hide');
    //     }
    // });
  //  加载热门图片
    $.ajax({
        url: basePath + "/picGroup/selectHotPicGroup",
        type: "POST",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        cache: false,
        async: true,
        success: function (hotPicGroupList) {
            console.log("hotPicGroupList:"+hotPicGroupList)
            if(hotPicGroupList !=null ){
                $(".supertopic").empty();
              for(var i=0;i<hotPicGroupList.length;i++){
                  var picNumber = hotPicGroupList[i].picNumber;
                  var groupId = hotPicGroupList[i].id;
                  var grouptitle = hotPicGroupList[i].grouptitle;
                  $.ajax({
                      url: basePath + "/picture/selectByGroupId",
                      type: "POST",
                      dataType: "json",
                      contentType: "application/json;charset=utf-8",
                      cache: false,
                      async: false,
                      data:{"groupId": groupId},
                      success: function (picture) {
                          console.log("picture:"+picture);
                          if(picture !=null ){
                              $(".supertopic").append("<li><a href='"+basePath+"/picGroup/picturedetial/"+groupId+"/"+picture.editorId+"'><div class='hotimages'><div class='hotimages-left'><img src='"+picture.path+"' alt=''> <span>"+picNumber+"图</span> </div> <div class='hotimages-right'><span>"+grouptitle+"</span></div> </div> </a></li>");
                          }
                      },
                      error: function () {
                          alert("系统异常，请稍后重试！");
                      }
                  });
              }
            }
        }
    });
    // 加载热门视频
    $.ajax({
        url: basePath + "/video/selectHotVideo",
        type: "POST",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        cache: false,
        async: true,
        data:{},
        success: function (videoList) {
            console.log("videoList"+videoList)
            if(videoList !=null ){
                $(".hotvideo").empty();
                for(var i=0;i<videoList.length;i++){
                    $(".hotvideo").append("<li class='hotvideo-item'><a href='"+basePath+"/video/videodetial/"+videoList[i].videoId+"/"+videoList[i].uploaderId+"'><div class='hotvideo-content'><div class='hot-video-left'><video src='"+videoList[i].path+"' style='width: 118px;height: 68px;' id='video"+i+"'  class='video"+i+"'></video>"+
                        "<span class='glyphicon glyphicon-play-circle video-tag' id='video-tag"+i+"'>05:07</span></div><div class='hot-video-right hotvideo-description'>"+videoList[i].title+"</div></div></a></li>");
                    //我们需要使用loadedmetadata事件来确保视频元数据已经加载，否则将会获取不到视频时长，可能会显示为NaN
                    //设置视频的播放时长
                    if(i==0){
                        var video = $("#video0");
                        video.on("loadedmetadata",function(){
                            $("#video-tag0").text(new Date(video[0].duration*1000).format("mm:ss"));
                        })
                    }else{
                        setTime(i);
                    }

                }
            }
        },
        error: function () {
            alert("系统异常，请稍后重试！");
        }
    });
    //设置视频的播放时长
    function setTime(index) {
        var video = $("#video"+index);
        video.on("loadedmetadata",function(){
            $("#video-tag"+index).text(new Date(video[0].duration*1000).format("mm:ss"));
        })
    }
    // // 加载首页Content数据
    // $(".content").empty();
    // $.ajax({
    //     url: basePath + "/news/selectInOneDay",
    //     type: "POST",
    //     dataType: "json",
    //     contentType: "application/json;charset=utf-8",
    //     cache: false,
    //     async: true,
    //     data:{},
    //     success: function (newsList) {
    //         console.log(newsList);
    //         if (newsList != null) {
    //             for(var i = 0; i<newsList.length; i++){
    //                 getAllInfo(newsList[i].newsId, newsList[i].editorId);
    //             }
    //         }
    //     },
    //     error: function () {
    //         alert("系统异常，请稍后重试！");
    //         // $('.myModal').modal('hide');
    //     }
    // });
    $(".btn-login").click(function () {
        var login_username = $("#login-username").val();
        var data = {"username": login_username, "password": $("#login-password").val()};
        $.ajax({
            url: basePath + "/user/login.action",
            type: "POST",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            cache: false,
            async: true,
            data: JSON.stringify(data),
            success: function (result) {
                if (result != null) {
                    console.log(result)
                    //隐藏弹出层
                    $('.myModal').modal('hide');

                    window.location.href = basePath + "/user/homepage.action";
                }
            }
        });
    })

    // 设置分类列表
    // $.ajax({
    //     url: basePath + "/category/selectAll",
    //     type: "POST",
    //     dataType: "json",
    //     contentType: "application/json;charset=utf-8",
    //     cache: false,
    //     async: true,
    //     data: {},
    //     success: function (result) {
    //         if (result != null) {
    //             // console.log(result)
    //             // console.log(result[0].categoryId);
    //
    //             for (var i = 0; i < result.length; i++) {
    //                 $(".nav-stacked").append("<li><a href=\""+basePath+"/news/selectByCategoryId/"+result[i].categoryId+"\"><span class='categoryId' style='display:none;'>" + result[i].categoryId + "</span><strong>" + result[i].categoryName + "</strong></a></li>")
    //             }
    //         }
    //     },
    //     error: function () {
    //         alert("系统异常，请稍后重试！");
    //         // $('.myModal').modal('hide');
    //     }// 这里不要加","
    // });
    // 点击左侧导航栏
    // $("body").on("click", ".nav-stacked>li>a", function () {
    //     // 1.更新content内容
    //     // 1.1如果图片数大于等于3使用news-list来显示
    //     // 1.2如果图片数小于3选取一张图片显示
    //     // 获取分类id
    //     var categoryId = $(this).children("span.categoryId").text();
    //     var data = {"categoryId": categoryId};
    //     $.ajax({
    //         url: basePath + "/news/selectByCategory",
    //         type: "POST",
    //         dataType: "json",
    //         contentType: "application/json;charset=utf-8",
    //         cache: false,
    //         async: true,
    //         data: JSON.stringify(data),
    //         success: function (newsList) {
    //             if (newsList != null) {
    //                 console.log(newsList[0].title)
    //                 for (var i = 0; i < newsList.length; i++) {
    //                     getAllInfo(newsList[i].newsId, newsList[i].editorId)
    //                 }
    //             }
    //             getAllInfo(newsList[1].newsId, newsList[1].editorId);
    //         },
    //         error: function () {
    //             alert("系统异常，请稍后重试！");
    //             // $('.myModal').modal('hide');
    //         }// 这里不要加","
    //     });
    // })


    // var getAllInfo = function (newsId, editorId) {
    //     //1.查询图片信息
    //
    //     $.ajax({
    //         url: basePath + "/picture/selectByNewsId",
    //         type: "POST",
    //         dataType: "json",
    //         contentType: "application/json;charset=utf-8",
    //         cache: false,
    //         async: true,
    //         data: {"newsId": newsId},
    //         success: function (pictureList) {
    //             if (pictureList.length >= 3) {
    //                 //  2.查询新闻信息
    //                 $.ajax({
    //                     url: basePath + "/news/selectByPrimaryKey",
    //                     type: "POST",
    //                     dataType: "json",
    //                     contentType: "application/json;charset=utf-8",
    //                     cache: false,
    //                     async: true,
    //                     data: {"newsId": newsId},
    //                     success: function (news) {
    //                         // // 3.查询用户信息
    //                         $.ajax({
    //                             url: basePath + "/user/selectByPrimaryKey",
    //                             type: "POST",
    //                             dataType: "json",
    //                             contentType: "application/json;charset=utf-8",
    //                             cache: false,
    //                             async: true,
    //                             data: {"uid": editorId},
    //                             success: function (editor) {
    //                                 // 3.显示信息（三张图片）
    //                                 $(".content").append("<div class='news-list'><div class='news-item'><div class='news-body'> <a href='"+basePath+"/news/newsdetial/"+news.newsId+"/"+editor.uid+"'><span class='news-item-title'>" + news.title + "</span></a><div class='pic-list'> <ul class='pic-list-3'>"
    //                                     + "<li><a href='" + basePath + "/news/newsdetial/" + news.newsId + "/"+editor.uid+"'><img src='" + pictureList[0].path + "' alt='' class='img-thumbnail pic-item'></a></li><li class='pic-list-item'><a href='" + basePath + "/news/newsdetial/" + news.newsId + "/"+editor.uid+"'><img src='" + pictureList[1].path + "' alt='' class='img-thumbnail pic-item'></a></li>"
    //                                     + "<li class='pic-list-item'><a href='" + basePath + "/news/newsdetial/" + news.newsId + "/"+editor.uid+"'><img src='" + pictureList[2].path + "' alt='' class='img-thumbnail pic-item'></a></li> </ul> </div> <div class='news-ref-info container'> <div class='col-lg-6 news-ref-info-left'> <a href='" + basePath + "/user/redirectToUserInfo/" + editor.uid + "/" + editor.level + "' class='user-img'><img src='" + editor.userImage + "' alt=''></a> <a href='" + basePath + "/user/redirectToUserInfo/" + editor.uid + "/" + editor.level + "' class='user-name' style='text-decoration: none'><span><strong>" + editor.username + "</strong></span></a> <span class='sub-timestamp'><strong>" + new Date(parseInt(news.publishTime)).format("MM-dd hh:mm") + "</strong></span>"
    //                                     + "</div></div> </div> </div> </div>");
    //                             },
    //                             error: function () {
    //                                 alert("系统异常，请稍后重试！");
    //                             }
    //                         });
    //                     },
    //                     error: function () {
    //                         alert("系统异常，请稍后重试！");
    //                     }// 这里不要加","
    //                 });
    //             } else if (pictureList.length > 0 && pictureList.length < 3) {
    //                 $.ajax({
    //                     url: basePath + "/news/selectByPrimaryKey",
    //                     type: "POST",
    //                     dataType: "json",
    //                     contentType: "application/json;charset=utf-8",
    //                     cache: false,
    //                     async: true,
    //                     data: {"newsId": newsId},
    //                     success: function (news) {
    //                         // // 3.查询用户信息
    //                         $.ajax({
    //                             url: basePath + "/user/selectByPrimaryKey",
    //                             type: "POST",
    //                             dataType: "json",
    //                             contentType: "application/json;charset=utf-8",
    //                             cache: false,
    //                             async: true,
    //                             data: {"uid": editorId},
    //                             success: function (editor) {
    //                                 //     3.显示信息（一张图片）
    //                                 $(".content").append("<div class=\"news-item-pic1\"><a href=\"" + basePath + "/news/newsdetial/" + news.newsId + "/"+editor.uid+"\"><div class=\"news-item-ref-left\">"
    //                                     + "<img src=\"" + pictureList[0].path + "\" class=\"thumbnail pic-item\"></div><div class=\"news-item-ref-right\"><span class=\"news-item-title\">" + news.title + "</span>"
    //                                     + "<div class=\"news-item-ref-footer\"><div><a href=\""+basePath+"/user/"+editor.uid+"/"+editor.level+"\" class=\"user-img\"><img src=\""+editor.userImage+"\"></a><a href=\""+basePath+"/user/"+editor.uid+"/"+editor.level+"\" class=\"user-name\" style=\"text-decoration: none\"><span><strong>" + editor.username + "</strong></span></a>"
    //                                     + "<span class=\"sub-timestamp\"><strong>"+new Date(parseInt(news.publishTime)).format("MM:dd hh:mm")+"</strong></span></div></div></div></a></div>")
    //                             },
    //                             error: function () {
    //                                 alert("系统异常，请稍后重试！");
    //                             }
    //                         });
    //                     },
    //                     error: function () {
    //                         alert("系统异常，请稍后重试！");
    //                     }// 这里不要加","
    //                 });
    //             }
    //         },
    //         error: function () {
    //             alert("系统异常，请稍后重试！");
    //         }// 这里不要加","
    //     });
    //
    // }

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