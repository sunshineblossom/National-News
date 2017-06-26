$(document).ready(function() {
    var basePath=$("#basePath").val();
    $('.dropdown-toggle').dropdown();
    //加载首页数据
    $(".btn-login").click(function(){
        var login_username= $("#login-username").val();
        var data = {"username":login_username,"password":$("#login-password").val()};
        console.log(data)
        $.ajax({
            url :basePath +"/user/login",
            type : "POST",
            dataType : "json",
            contentType : "application/json;charset=utf-8",
            cache : false,
            async : true,
            data :JSON.stringify(data),
            success : function(result) {
                if(result!=null){
                    console.log(result)
                    //隐藏弹出层
                    $('.myModal').modal('hide');
                    window.location.reload(true);
                }
            },
            error : function() {
                alert("系统异常，请稍后重试！");

            }// 这里不要加","
        });
    });

    $(".search-btn").click(function () {
        window.location.href=basePath+"/news/selectByKeyword/"+$("#searchInput").val();
    });
    $(".btn-regist").click(function () {
        window.location.href=basePath+"/user/register";
    })
    // $(".login-after-focus").click(function(){
    //     alert("aa")
    //   $("#focusStatus").val(1)
    //   window.location.href=basePath+"/user/redirectToUserInfo/"+$("#uid").val()+"/"+$("#user-level").val()
    // })
    // $(".login-after-fans").click(function(){
    //     alert("bb")
    //     $("#fansStatus").val(1)
    //     window.location.href=basePath+"/user/redirectToUserInfo/"+$("#uid").val()+"/"+$("#user-level").val()
    // })
})
