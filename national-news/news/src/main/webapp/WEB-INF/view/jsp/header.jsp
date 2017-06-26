<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<title>民新网</title>
	<meta charset="utf-8"/>
	<link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap-theme.min.css">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/header.css">
</head>
<body>
<input id="basePath" type="hidden" value="${pageContext.request.contextPath}">
<nav class="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
	<div class="container-fluid">
		<div class="navbar-header">
			<a class="navbar-brand" href="${pageContext.request.contextPath}"><strong>民新网</strong></a>
		</div>
		<%--<!--向左对齐-->--%>
		<ul class="nav navbar-nav navbar-left">
			<li>
				<a href="${pageContext.request.contextPath}/news/selectInOneDay">
					<span class="glyphicon glyphicon-home"></span>
					<strong>首页</strong>
				</a>
			</li>
			<li>
				<a id="header-picture" href="${pageContext.request.contextPath}/news/selectByCategoryId/3"><span class="glyphicon glyphicon-picture"></span>
					<strong>图片</strong>
				</a>
			</li>
			<li>
				<a id="header-video" href="${pageContext.request.contextPath}/news/selectByCategoryId/4">
					<span class="glyphicon glyphicon-hd-video"></span>
					<strong>视频</strong>
				</a>
			</li>
			<%--<li class="dropdown">--%>
				<%--<a href="#" class="dropdown-toggle" data-toggle="dropdown">--%>
					<%--<strong>榜单</strong><b class="caret"></b>--%>
				<%--</a>--%>
				<%--<ul class="dropdown-menu">--%>
					<%--<li><a href="#"><strong>小时榜</strong></a></li>--%>
					<%--<li class="divider"></li>--%>
					<%--<li><a href="#"><strong>周榜</strong></a></li>--%>
					<%--<li class="divider"></li>--%>
					<%--<li><a href="#"><strong>月榜</strong></a></li>--%>
				<%--</ul>--%>
			<%--</li>--%>
			<li>
				<form class="navbar-form navbar-left">
					<div class="form-group">
						<input type="text" id="searchInput" class="form-control" placeholder="热门话题：">
					</div>
					<a href="javascript:void(0)" class="btn btn-default search-btn"><strong>搜索</strong></a>
				</form>
			</li>
		</ul>

		<c:choose>
			<c:when test="${user.username==null || user.username==''}">
				<%--<!--向右对齐-->--%>
				<ul id="login-area" class="nav navbar-nav navbar-right">
					<li>
						<a href="${pageContext.request.contextPath}/user/register"><strong>注册</strong></a>
					</li>
					<li>
						<a href="#"><span>|</span></a>
					</li>
					<li>
						<a href="#" data-toggle="modal" data-target=".myModal"><strong>登录</strong></a>
					</li>
				</ul>
			</c:when>
			<%--<!--向右对齐-->--%>
			<c:otherwise>
				<ul id="login-after" class="nav navbar-nav navbar-right">
					<li>
						<a href="${pageContext.request.contextPath}/user/selfInfo/${user.uid}/${user.level}" class="login-after-username">
							<input id="uid" type="hidden" value="${user.uid}">
							<strong>${user.username}</strong>
							<input id="user-level"type="hidden" value="${user.level}">
						</a>
					</li>
					<%--<li>--%>
						<%--<a href="javascript:void(0)" class="login-after-focus"><input type="hidden" value="0" id="focusStatus"></span><strong>我的关注</strong></a>--%>
					<%--</li>--%>
					<%--<li>--%>
						<%--<a href="javascript:void(0)" class="login-after-fans"><input type="hidden" value="0" id="fansStatus"><strong>我的粉丝</strong></a>--%>
					<%--</li>--%>
					<li>
						<a href="${pageContext.request.contextPath}/user/quit"><strong>退出</strong></a>
					</li>
				</ul>
			</c:otherwise>
		</c:choose>
	</div>
</nav>
<%--<!-- 遮罩层实现登录注册 -->--%>
<div class="container-fluid text-center regist-login">
	<div class="modal fade myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><%--<!--modal,弹出层父级,fade使弹出层有一个运动过程-->--%>
		<div class="modal-dialog"> <%--<!--modal-dialog,弹出层-->--%>
			<div class="modal-content regist-content"> <%--<!--modal-content,弹出层内容区域-->--%>
				<div class="modal-header">
					<div class="container-fluid text-center">
						<div class="row"><button class="close" data-dismiss="modal">×</button><%--<!--将关闭按钮放在标题前面可以使按钮位于右上角-->--%></div>
					</div>
				</div><%--<!--modal-header,弹出层头部区域-->--%>
				<div class="modal-body">

					<div class="container login-content">
						<div class="login-username">
							<span class="glyphicon glyphicon-user user-icon1"></span>
							<input id="login-username" class="input-username" placeholder="手机号/邮箱">
							<input id="userId" type="hidden" value="1">
						</div>
						<div class="login-password">
							<span class="glyphicon glyphicon-lock password-icon"></span>
							<input id="login-password" class="input-username" type="password" placeholder="6~12位密码">
						</div>
						<div class="remember-me">
							<input type="checkbox">
							<span>&nbsp;记住我一个月</span>
						</div>
						<div class="btn-login-area">
							<button type="button" class="btn btn-success btn-login">登录</button>
						</div>
						<div class="btn-regist-area">
							<button type="button" class="btn btn-danger btn-regist">立即注册</button>
						</div>
					</div>

				</div><%--<!--modal-body,弹出层主体区域-->--%>

			</div>
		</div>
	</div>
</div>
<script src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script src="${pageContext.request.contextPath}/bootstrap/js/bootstrap.min.js"></script>
<script src="${pageContext.request.contextPath}/js/header.js"></script>
</body>
</html>