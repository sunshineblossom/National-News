<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html>
<head>
	 <title>民新网</title>
	<meta charset="utf-8" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/video.css">
</head>
<body>
<jsp:include page="header.jsp" />
<div class="main-content">
    <div class="title-content">
        <span class="glyphicon glyphicon-hd-video hd-video-icon"></span>
        <span class="category">视频</span>
    </div>
    <div class="left-content">
        <video class="video-content" src="${video.path}" controls></video>
        <div class="video-info">
             <div class="video-title">
                 <span>${video.title}</span>
             </div>
             <div class="editor-info">
                 <a href="${pageContext.request.contextPath}/user/redirectToUserInfo/${editor.uid}/${editor.level}">
                    <img class="v-editor-img" src="${editor.userImage}">
                     <span style="display:none;" id="focusUserId">${editor.uid}</span>
                    <span class="v-editor">${editor.username}</span>
                 </a>
                <button class="btn btn-info btn-xs v-focus" id="v-focus">关注</button>
                <div class="play-times">
                     <span>${video.playnumber}</span>次播放
                </div>
             </div>
        </div> 
    </div>
    <div class="right-content">
        <div class="ref-title">
            <span>相关视频</span>
            <ul class="ref-list">
                <c:set var="index" value="0" />
                <c:forEach items="${refMap}" var="mapItem">
                <li>
                    <a href="${pageContext.request.contextPath}/video/videodetial/${mapItem.key.videoId}/${mapItem.key.uploaderId}">
                        <div class="item-content">
                            <div class="item-left">
                                <video src="${mapItem.key.path}" class="video" id="video${index}"></video>
                                <div class="float-icon">
                                    <span class="glyphicon glyphicon-play" id="video-tag${index}">15:01</span>
                                </div>
                            </div>
                            <div class="item-right">
                                <div class="item-title">
                                    <span>${mapItem.key.title}</span>
                                </div>
                                <div class="ref-video-info">
                                    <span class="glyphicon glyphicon-expand playtimes-icon"></span>
                                    <c:choose>
                                        <c:when test="${mapItem.key.playnumber>10000}">
                                            <span class="v-playtimes">
                                            <fmt:formatNumber type="number" value="${mapItem.key.playnumber/10000}" pattern="0.00" maxFractionDigits="2"/>万
                                            </span>
                                        </c:when>
                                        <c:otherwise>
                                            <span class="v-playtimes">${mapItem.key.playnumber}</span>
                                        </c:otherwise>
                                    </c:choose>
                                    <%--<span class="glyphicon glyphicon-comment comment-icon"></span>--%>
                                    <a href="${pageContext.request.contextPath}/user/redirectToUserInfo/${mapItem.value.uid}/${mapItem.value.level}">
                                        <img src="${mapItem.value.userImage}" class="comment-icon" alt="">
                                        <span class="v-comment-number">${mapItem.value.username}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <c:set var="index" value="${index+1}" />
                </c:forEach>
                <span style="display: none" id="index">${index}</span>
            </ul>
        </div>
    </div>
</div>
<script src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script src="${pageContext.request.contextPath}/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/video.js"> </script>
</body>
</html>