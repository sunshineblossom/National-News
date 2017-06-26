<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<title>民新网</title>
	<meta charset="utf-8"/>
	<link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/others.css">
</head>
<body>

<jsp:include page="header.jsp" />
<div class="container-fluid text-center">
	<div class="modal fade share" id="shareModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content share-content">
				<div class="modal-header">
					<div class="container-fluid text-center">
						<div class="row">
							<div class="col-lg-2"><span class="share-header">转发</span></div>
							<div class="col-lg-10"><button class="close" data-dismiss="modal">×</button></div>
						</div>
					</div>
				</div>
				<div class="modal-body">
					<div class="source">
						<input type="hidden" class="source-shareId" value="1">
						<a href="#" class="share-username">@私人音乐厅</a>:<span class="share-source-content"></span>
					</div>
					<div class="share-comment">
						<textarea class="share-c-input" placeholder="写下您的评论..."></textarea>
						<div class="share-c">
							<div class="share-submit">
								转发
							</div>
						</div>
					</div>
					<div class="share-list-region">
						<div class="share-list-number">当前已转发<span>51</span>次</div>
						<div class="separator"></div>
					</div>
				</div>

			</div>
		</div>
	</div>
</div>
<div class="main-content">
	<div class="top">
		<div class="user-img-region">
			<a href="#"><img src="${editor.userImage}" class="user-img"></a>
		</div>
		<div class="username-region">
			<h3 class="pf-username">${editor.username}</h3>
			<input type="hidden" value="${editor.uid}" class="userId">
		</div>
		<div class="self-introduction">
			<a href="#">${editor.selfIntroduce}</a>
		</div>
		<div class="focus-btn">
			<span class="glyphicon glyphicon-plus"></span>
			<span >&nbsp;&nbsp;关注</span>
		</div>
		<div class="nav-btn">
			<div class="row">
				<div class="col-lg-6">
					<a href="javascript:void(0);" class="homepage">他的主页</a>
				</div>
				<div class="col-lg-6">
					<a href="javascript:void(0);" class="photo">他的相册</a>
				</div>
			</div>
		</div>
	</div>
	<div class="content">

	</div>
	<div class="right-nav">
		<div class="focus-fans-module">
			<div class="row focus-fans">
				<div class="col-lg-6 focus"><div class="row"><a href="#">${focusQueryVo.focusNumber}</a></div><div class="row"><span>他的关注</span></div></div>
				<div class="col-lg-6 fans"><div class="row"><a href="#">${focusQueryVo.fansNumber}</a></div><div class="row"><span>他的粉丝</span></div></div>
			</div>
		</div>
	</div>
	<div class="fans-focus-module" style="display: none;">
		<div class="focus-fans-list">
			<div class="focus-fans-header">
				<ul>
					<li class="focus-header"><a href="#">他的关注</a></li>
					<li class="fans-header"><a href="#">他的粉丝</a></li>
				</ul>
			</div>
			<ul>

			</ul>
		</div>
	</div>
</div>
<script src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script src="${pageContext.request.contextPath}/bootstrap/js/bootstrap.min.js"></script>
<script src="${pageContext.request.contextPath}/js/others.js"></script>

</body>
</html>