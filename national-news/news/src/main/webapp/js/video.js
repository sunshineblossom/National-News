$(document).ready(function(){
    var basePath = $("#basePath").val();
    $(function(){
       for(var i=0;i<parseInt($("#index").text());i++){

           setTime(i);
       }
   })
    function checkLogin(){
        var data = {"userId":$("#uid").val(),"focusUserId":$("#focusUserId").text()};
        if($("#uid").val()!=""&& $("#uid").val()!=null){
            $.ajax({
                url :basePath +"/focus/validateFocus",
                type : "POST",
                dataType : "json",
                contentType : "application/json;charset=utf-8",
                cache : false,
                async : false,
                data :JSON.stringify(data),
                success : function(result) {
                    if(result!=null){
                        chageStatus();
                    }
                },
                error : function() {
                    alert("系统异常，请稍后重试！");

                }// 这里不要加","
            });
            return true;
        }else{
            alert("前请先登录！");
            return false;
        }
    }
    $("#v-focus").click(function(){
        if(checkLogin()==true){
            alert("checkLogin:true")
            var data = {"userId":$("#uid").val(),"focusUserId":$("#focusUserId").text()};
            if($("#v-focus").text()=="关注"){
                $.ajax({
                    url :basePath +"/focus/addFocus",
                    type : "POST",
                    dataType : "json",
                    contentType : "application/json;charset=utf-8",
                    cache : false,
                    async : false,
                    data :JSON.stringify(data),
                    success : function(result) {
                        if(result!=0){
                            chageStatus();
                        }
                    },
                    error : function() {
                        alert("系统异常，请稍后重试！");

                    }// 这里不要加","
                });
            }
        }
    });

    function chageStatus(){
            $("#v-focus").removeClass("btn-info");
            $("#v-focus").addClass("btn-default");
            $("#v-focus").text("已关注");
    }
    //设置视频播放时长
    function setTime(index) {
        var video = $("#video"+index);
        video.on("loadedmetadata",function(){

            $("#video-tag"+index).text(new Date(video[0].duration*1000).format("mm:ss"));
        })
    }
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

});