<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="utf-8"/>
    <title>民新网</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/picture.css">
</head>
<body>
<jsp:include page="header.jsp" />
<%--<!--头部导航栏-->--%>
<%--<nav class="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">--%>
  <%--<div class="container-fluid">--%>
        <%--<div class="navbar-header">--%>
            <%--<a class="navbar-brand" href="#"><strong>民新网</strong></a>--%>
        <%--</div>--%>
        <%--<!--向左对齐-->--%>
        <%--<ul class="nav navbar-nav navbar-left">--%>
        	<%--<li><a href="#"><strong>推荐</strong></a></li>--%>
        	<%--<li><a href="#"><strong>美食</strong></a></li>--%>
        	<%--<li><a href="#"><strong>文化</strong></a></li>--%>
        	<%--<li><a href="#"><strong>节日</strong></a></li>--%>
        	<%--<li><a href="#"><strong>视频</strong></a></li>--%>
        	<%--<li><a href="#"><strong>图片</strong></a></li>--%>
        	<%--<li><a href="#"><strong>热点</strong></a></li>--%>
        	<%--<li><a href="#"><strong>旅游</strong></a></li>--%>
        	<%--<li class="dropdown">--%>
                <%--<a href="#" class="dropdown-toggle" data-toggle="dropdown">--%>
                    <%--<strong>更多</strong><b class="caret"></b>--%>
                <%--</a>--%>
                <%--<ul class="dropdown-menu">--%>
                    <%--<li><a href="#"><strong>经济</strong></a></li>--%>
                    <%--<li class="divider"></li>--%>
                    <%--<li><a href="#"><strong>政策</strong></a></li>--%>
                    <%--<li class="divider"></li>--%>
                    <%--<li><a href="#"><strong>习俗</strong></a></li>--%>
                <%--</ul>--%>
            <%--</li>--%>
        <%--</ul>--%>
         <%--<!--向右对齐-->--%>
        <%--<ul class="nav navbar-nav navbar-right">--%>
            <%--<li>--%>
                <%--<a href="register.jsp"><strong>注册</strong></a>--%>
            <%--</li>--%>
            <%--<li>--%>
                <%--<a href="#"><span>|</span></a>--%>
            <%--</li>--%>
            <%--<li>--%>
                <%--<a href="#" data-toggle="modal" data-target=".myModal"><strong>登录</strong></a>--%>
            <%--</li>--%>
        <%--</ul>--%>
  <%--</div>--%>
<%--</nav>--%>
<%--<!-- 遮罩层实现登录注册 -->--%>
<%--<div class="container-fluid text-center regist-login">--%>
  		<%--<div class="modal fade myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><!--modal,弹出层父级,fade使弹出层有一个运动过程-->--%>
		    <%--<div class="modal-dialog"><!--modal-dialog,弹出层-->--%>
		      <%--<div class="modal-content regist-content"><!--modal-content,弹出层内容区域-->--%>
			        <%--<div class="modal-header">--%>
			         <%--<div class="container-fluid text-center">--%>
			         	<%--<div class="row"><button class="close" data-dismiss="modal">×</button><!--将关闭按钮放在标题前面可以使按钮位于右上角--></div>--%>
			         <%--</div>--%>
			        <%--</div><!--modal-header,弹出层头部区域-->--%>
			        <%--<div class="modal-body">--%>
			         	<%--<div class="container login-content">--%>
			         		<%--<div class="login-username">--%>
			         			<%--<span class="glyphicon glyphicon-user user-icon"></span>--%>
			         			<%--<input class="input-username" placeholder="手机号/邮箱">--%>
			         		<%--</div>--%>
			         		<%--<div class="login-password">--%>
			         			<%--<span class="glyphicon glyphicon-lock user-icon"></span>--%>
			         			<%--<input class="input-username" placeholder="6~12位密码">--%>
			         		<%--</div>--%>
			         		<%--<div class="remember-me">--%>
			         			<%--<input type="checkbox">--%>
			         			<%--<span>&nbsp;记住我一个月</span>--%>
			         		<%--</div>--%>
			         		<%--<div class="btn-login-area">--%>
			         			<%--<button type="button" class="btn btn-success btn-login">登录</button>--%>
			         		<%--</div>--%>
			         		<%--<div class="btn-regist-area">--%>
			         			<%--<button type="button" class="btn btn-danger btn-regist">立即注册</button>--%>
			         		<%--</div>--%>
			         	<%--</div>	--%>
			        <%--</div><!--modal-body,弹出层主体区域-->--%>
			       <%----%>
		      <%--</div>--%>
		    <%--</div>--%>
		<%--</div>--%>
<%--</div>--%>
<!-- container -->
<div class="container">
        <div class="image-box">
            <div class="image-list">
                <ul>
                    <c:set var="index" value="1"/>
                    <c:forEach var="picItem" items="${picList}">
                    <c:choose>
                        <c:when test="${index==1}">
                            <li class="image-item img-1"><img src="${picItem.path}" alt="${picItem.description}"></li>
                        </c:when>
                        <c:otherwise>
                            <li class="image-item img-${index}" style="display: none;"><img src="${picItem.path}" alt="${picItem.description}"></li>
                        </c:otherwise>
                    </c:choose>
                    <c:set var="index" value="${index+1}"/>
                    </c:forEach>
                </ul>
                <div class="left-arrow">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                </div>
                <div class="right-arrow">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                </div>
            </div>
            <div class="image-info">
                <h2 class="group-title">${picGroup.grouptitle}</h2>
                <div class="user-info">
                    <a href="${pageContext.request.contextPath}/user/redirectToUserInfo/${editor.uid}/${editor.level}"><img src="${editor.userImage}" class="user-image"><span class="editorname">${editor.username}</span></a>
                    <input type="hidden" id="editorId" value="${editor.uid}">
                    <button class="btn btn-danger btn-xs focus" role="button">关注</button>
                </div>
                <div class="image-number">
                    <span class="current-image">1</span>/<span class="total-image">${index}</span>
                    <span class="image-description">体型巨大、肉食性最强的白熊，主要分布在在北冰洋附近有浮冰的海域</span>
                </div>
            </div>
        </div>
</div>
<script src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script src="${pageContext.request.contextPath}/bootstrap/js/bootstrap.min.js"></script>
<script src="${pageContext.request.contextPath}/js/picture.js"></script>
</body>
</html>