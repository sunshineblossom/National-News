<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>民新网</title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/homepage.css">
</head>
<body>
<input id="basePath" type="hidden" value="${pageContext.request.contextPath}">
<jsp:include page="header.jsp"/>

<div class="nav-left">
    <div class="nav-left-title"><img src="/news/images/logo.png" alt="logo">
        <div>
            <strong>民新网</strong>
        </div>
    </div>
    <ul class="nav nav-pills nav-stacked">
       <c:forEach items="${categoryList}" var="categoryItem">
           <li><a href="${pageContext.request.contextPath}/news/selectByCategoryId/${categoryItem.categoryId}"><strong>${categoryItem.categoryName}</strong></a></li>
       </c:forEach>
    </ul>
</div>
<div class="content">

<c:forEach var="newsItem" items="${newsList}">
    <c:choose>
        <c:when test="${fn:length(newsItem.pictureList) ge 3}">
            <div class="news-list">
                <div class="news-item">
                    <div class="news-body">
                        <a href="${pageContext.request.contextPath}/news/newsdetial/${newsItem.news.newsId}/${newsItem.editor.uid}">
                            <span class="news-item-title">${newsItem.news.title}</span>
                        </a>
                        <div class="pic-list">
                            <ul class="pic-list-3">
                                <li>
                                    <a href="${pageContext.request.contextPath}/news/newsdetial/${newsItem.news.newsId}/${newsItem.editor.uid}">
                                         <img class="img-thumbnail pic-item" alt="" src="${newsItem.pictureList[0].path}">
                                    </a>
                                </li>
                                <li class="pic-list-item">
                                    <a href="${pageContext.request.contextPath}/news/newsdetial/${newsItem.news.newsId}/${newsItem.editor.uid}">
                                        <img class="img-thumbnail pic-item" alt="" src="${newsItem.pictureList[1].path}">
                                    </a>
                                </li>
                                <li class="pic-list-item">
                                    <a href="${pageContext.request.contextPath}/news/newsdetial/${newsItem.news.newsId}/${newsItem.editor.uid}">
                                        <img class="img-thumbnail pic-item" alt="" src="${newsItem.pictureList[2].path}">
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="news-ref-info container">
                            <div class="col-lg-6 news-ref-info-left">
                                <a class="user-img" href="${pageContext.request.contextPath}/user/redirectToUserInfo/${newsItem.editor.uid}/${newsItem.editor.level}">
                                    <img alt="" src="${newsItem.editor.userImage}">
                                </a>
                                <a class="user-name" style="text-decoration: none;" href="${pageContext.request.contextPath}/user/redirectToUserInfo/${newsItem.editor.uid}/${newsItem.editor.level}">
                                    <span><strong>${newsItem.editor.username}</strong></span>
                                </a>
                                <span class="sub-timestamp"><strong><fmt:formatDate value="${newsItem.news.publishTime}" pattern="MM月dd日 HH:mm"></fmt:formatDate></strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </c:when>
        <c:when test="${(newsItem.videoList ne null) and  (fn:length(newsItem.videoList) gt 0) }">
            <div class="news-item-pic1">
                <a href="${pageContext.request.contextPath}/news/newsdetial/${newsItem.news.newsId}/${newsItem.editor.uid}">
                    <div class="news-item-ref-left">
                        <video src="${newsItem.videoList[0].path}" style="width: 146px;height: 92px;"></video>
                    </div></a><div class="news-item-ref-right">
                <a href="${pageContext.request.contextPath}/video/videodetial/${newsItem.videoList[0].videoId}/${newsItem.editor.uid}">
                    <span class="news-item-title">${newsItem.news.title}</span>
                </a>
                <div class="news-item-ref-footer">
                    <div>
                        <a href="${pageContext.request.contextPath}/user/redirectToUserInfo/${newsItem.editor.uid}/${newsItem.editor.level}" class="user-img">
                            <img src="${newsItem.editor.userImage}">
                        </a>
                        <a href="${pageContext.request.contextPath}/user/redirectToUserInfo/${newsItem.editor.uid}/${newsItem.editor.level}" class="user-name" style="text-decoration: none">
                            <span><strong>${newsItem.editor.username}</strong></span></a><span class="sub-timestamp"><strong><fmt:formatDate value="${newsItem.news.publishTime}" pattern="MM月dd日 HH:mm"/></strong></span>
                    </div>
                </div>
            </div>
            </div>
        </c:when>
       <c:when test="${(fn:length(newsItem.pictureList) lt 3) and (fn:length(newsItem.pictureList) gt 0)}">
           <div class="news-item-pic1">
               <a href="${pageContext.request.contextPath}/news/newsdetial/${newsItem.news.newsId}/${newsItem.editor.uid}">
                   <div class="news-item-ref-left">
                       <img src="${newsItem.pictureList[0].path}" class="thumbnail pic-item">
                   </div></a><div class="news-item-ref-right">
               <a href="${pageContext.request.contextPath}/news/newsdetial/${newsItem.news.newsId}/${newsItem.editor.uid}">
                   <span class="news-item-title">${newsItem.news.title}</span>
               </a>
               <div class="news-item-ref-footer">
                   <div>
                       <a href="${pageContext.request.contextPath}/user/redirectToUserInfo/${newsItem.editor.uid}/${newsItem.editor.level}" class="user-img">
                           <img src="${newsItem.editor.userImage}">
                       </a>
                       <a href="${pageContext.request.contextPath}/user/redirectToUserInfo/${newsItem.editor.uid}/${newsItem.editor.level}" class="user-name" style="text-decoration: none">
                           <span><strong>${newsItem.editor.username}</strong></span></a><span class="sub-timestamp"><strong><fmt:formatDate value="${newsItem.news.publishTime}" pattern="MM月dd日 HH:mm"/></strong></span>
                   </div>
               </div>
           </div>
           </div>
       </c:when>
    </c:choose>
</c:forEach>
</div>

<div class="nav-right">
    <div class="hotpoint-module">
        <span class="hotpoint-title">24小时热榜</span>
        <div class="hotpoint-list">
            <ul class="hotpoint">
                <c:forEach items="${hotList}" var="hotNews">
                    <li class="hotpoint-item">
                        <div class="row">
                            <div class="col-lg-2">
                                <a href="${pageContext.request.contextPath}/news/newsdetial/${hotNews.newsId}/${hotNews.editorId}"><img src="${hotNews.pictureList[0].path}"></a>
                            </div>
                            <div class="col-lg-10">
                                <a href="${pageContext.request.contextPath}/news/newsdetial/${hotNews.newsId}/${hotNews.editorId}">
                                    <p>
                                        ${hotNews.title}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </li>
                </c:forEach>
            </ul>
        </div>
    </div>
    <div class="supertopic-module">
        <span class="hotpoint-title">热门图片</span>
        <div class="supertopic-list" id="supertopic-list">
            <ul class="supertopic">
                <li><a href="#">
                    <div class="hotimages">
                        <div class="hotimages-left">
                            <img src="http://localhost:8080/news/upload/image/news/20170517/1495009466176001332.jpg" alt="">
                            <span>8图</span>
                        </div>
                        <div class="hotimages-right">
                            <span>开眼啦！“一带一路”上最拉风专机“挤爆”首都机场！</span>
                        </div>
                    </div>
                </a></li>
                <li><a href="#">
                    <div class="hotimages">
                        <div class="hotimages-left">
                            <img src="http://localhost:8080/news/upload/image/news/20170517/1495009466176001332.jpg" alt="">
                            <span>8图</span>
                        </div>
                        <div class="hotimages-right">
                            <span>开眼啦！“一带一路”上最拉风专机“挤爆”首都机场！</span>
                        </div>
                    </div>
                </a></li>
                <li><a href="#">
                    <div class="hotimages">
                        <div class="hotimages-left">
                            <img src="http://localhost:8080/news/upload/image/news/20170517/1495009466176001332.jpg" alt="">
                            <span>8图</span>
                        </div>
                        <div class="hotimages-right">
                            <span>开眼啦！“一带一路”上最拉风专机“挤爆”首都机场！</span>
                        </div>
                    </div>
                </a></li>
                <li><a href="#">
                    <div class="hotimages">
                        <div class="hotimages-left">
                            <img src="http://localhost:8080/news/upload/image/news/20170517/1495009466176001332.jpg" alt="">
                            <span>8图</span>
                        </div>
                        <div class="hotimages-right">
                            <span>开眼啦！“一带一路”上最拉风专机“挤爆”首都机场！</span>
                        </div>
                    </div>
                </a></li>
            </ul>
        </div>
    </div>
    <div class="hotvideo-module">
        <span class="hotpoint-title">热门视频</span>
        <div class="hotvideo-list">
            <ul class="hotvideo">
                <li class="hotvideo-item"><a href="#">
                    <div class="hotvideo-content">
                        <div class="hot-video-left">
                            <video src="http://localhost:8080/news/upload/video/20170520/1495250012227051051.mp4" style="width: 118px;height: 68px;" id="videotest"></video>
                            <span class="glyphicon glyphicon-play-circle video-tag">05:07</span>
                        </div>
                        <div class="hot-video-right hotvideo-description">
                            大鹏殴打老板 没想到老板保镖是邹市明 笑死我了
                        </div>
                    </div>
                </a></li>
                <li class="hotvideo-item"><a href="#">
                    <div class="hotvideo-content">
                        <div class="hot-video-left">
                            <video src="http://localhost:8080/news/upload/video/20170520/1495250012227051051.mp4" style="width: 118px;height: 68px;"></video>
                            <span class="glyphicon glyphicon-play-circle video-tag">05:07</span>
                        </div>
                        <div class="hot-video-right hotvideo-description">
                            大鹏殴打老板 没想到老板保镖是邹市明 笑死我了
                        </div>
                    </div>
                </a></li>
                <li class="hotvideo-item"><a href="#">
                    <div class="hotvideo-content">
                        <div class="hot-video-left">
                            <video src="http://localhost:8080/news/upload/video/20170520/1495250012227051051.mp4" style="width: 118px;height: 68px;"></video>
                            <span class="glyphicon glyphicon-play-circle video-tag">05:07</span>
                        </div>
                        <div class="hot-video-right hotvideo-description">
                            大鹏殴打老板 没想到老板保镖是邹市明 笑死我了
                        </div>
                    </div>
                </a></li>
            </ul>
        </div>
    </div>
</div>
<script src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script src="${pageContext.request.contextPath}/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/homepage.js"></script>
</body>
</html>