<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>管理员登录</title>
<link  href="${pageContext.request.contextPath}/css/adminlogin.css" type="text/css" rel="stylesheet" />
</head>

<body>
  <div class="login_div">
      <form id="loginForm" action="${pageContext.request.contextPath}/admin/login" method="post">
         <input type="text" name="adminname" class="adminname" /><br/>
         <input type="password" name="adminpassword" class="adminpassword" /><br/>
         <div id="login-btn"  class="login_but">登录</div>
      </form>
  </div>
  <script src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script>
    $(document).ready(function(){
        $("#login-btn").click(function () {
            $("#loginForm").submit();
        })
    })
</script>
</body>
</html>
