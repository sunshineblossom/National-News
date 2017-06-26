<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8"/>
    <title>民新网</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/newsdetial.css">
</head>
<body>
<jsp:include page="header.jsp"/>
<div class="newsdetial">
    <div class="news-title">
        <h1>${news.title}</h1>
        <input type="hidden" value="${news.newsId}" id="newsId">
        <div class="news-ref">
            <span class="news-ref-sourcefrom">${editor.username}</span>
            <span class="time"><fmt:formatDate value="${news.publishTime}" dateStyle="full"/></span>
        </div>
    </div>
    <div class="news-body">
        ${news.content}
    </div>
    <div class="comment">
        <div class="c-header">
            <em>${fn:length(commentListFull)}&nbsp;</em>
            条评论
        </div>
        <div class="comment-raise">
            <div class="user-icon-default">
                <span class="glyphicon glyphicon-user user-icon"></span>
            </div>
            <div class="input-group input-box">
                <input type="text" class="form-control input-area" placeholder="填写您的评论..."
                       aria-describedby="basic-addon2">
                <span class="input-group-addon" id="basic-addon2">评论</span>
            </div>
        </div>
        <div class="comment-list">
            <ul>
                <c:forEach var="list" items="${commentListFull}">
                    <li class="comment-item">
                        <div class="comment-item-box">
                            <div class="user-img"><a
                                    href="${pageContext.request.contextPath}/user/redirectToUserInfo/${list.user.uid}/${list.user.level}"><img
                                    src="${list.user.userImage}" class="img-circle"></a>
                                <a href="${pageContext.request.contextPath}/user/redirectToUserInfo/${list.user.uid}/${list.user.level}"
                                   class="username">${list.user.username}</a>
                                <span class="comment-date"><fmt:formatDate value="${list.comment.publishTime}"
                                                                           pattern="MM-dd hh:mm"/></span>
                            </div>
                            <div class="comment-content">
                                <p>${list.comment.content}</p>
                            </div>
                            <div class="comment-action">
                                <c:choose>
                                    <c:when test="${list.secondCommentNumber==0}">
                                        <input type="hidden" class="commentLevel1Id" value="${list.comment.commentId}">
                                        <span class="reply">回复</span>
                                    </c:when>
                                    <c:otherwise>
                                        <input type="hidden" class="commentLevel1Id" value="${list.comment.commentId}">
                                        <span class="reply">回复&nbsp;⋅&nbsp;</span>
                                        <span style="display: none;">${list.secondCommentNumber}</span>
                                        <input type="hidden" value="${list.comment.commentId}">
                                        <span class="reply-count">${list.secondCommentNumber}条回复
                                            <span class="glyphicon glyphicon-chevron-down icon-down"></span>
								        </span>
                                    </c:otherwise>
                                </c:choose>
                                <div class="up-and-report">
                                    <span class="up-number">${list.upNumber}</span>
                                    <span class="glyphicon glyphicon-hand-up up-icon"></span>
                                    <span class="glyphicon glyphicon-exclamation-sign report-icon"></span>
                                </div>
                            </div>
                        </div>
                    </li>
                </c:forEach>
            </ul>
        </div>
        <%--<div class="load-more">--%>
            <%--查看更多评论--%>
        <%--</div>--%>
        <%--<div class="relative-recommand">--%>
            <%--<div class="relative-recommand-title">相关推荐</div>--%>
            <%--<div class="pic-1-list">--%>
                <%--<div class="pic-1-item"><a href="#">--%>
                    <%--<div class="pic-1-item-left">--%>
                        <%--<img src="../images/6.jpg" class="thumbnail pic-item">--%>
                    <%--</div>--%>
                    <%--<div class="pic-1-item-right">--%>
                        <%--<span class="news-item-title">朝鲜连续报道卫星发展史 韩媒：或欲发射远程火箭</span>--%>
                        <%--<div class="pic-1-item-footer">--%>
                            <%--<a href="#" class="recommand-user-img"><img--%>
                                    <%--src="http://localhost:8080/news/upload/image/news/20170517/1495009466176001332.jpg"--%>
                                    <%--alt=""></a>--%>
                            <%--<a href="#" class="user-name"--%>
                               <%--style="text-decoration: none"><span><strong>蠢蛋儿</strong></span></a>--%>
                            <%--<span class="sub-timestamp"><strong>3月22日 19:02</strong></span>--%>
                        <%--</div>--%>
                    <%--</div>--%>
                <%--</a>--%>
                <%--</div>--%>

            <%--</div>--%>
            <%--<div class="news-list">--%>
                <%--<div class="news-item">--%>
                    <%--<div class="news-body"><a href="/news/news/newsdetial/18/1"><span class="news-item-title">开眼啦！“一带一路”上最拉风专机“挤爆”首都机场！</span></a>--%>
                        <%--<div class="pic-list">--%>
                            <%--<ul class="pic-list-3">--%>
                                <%--<li><a href="/news/news/newsdetial/18/1"><img--%>
                                        <%--src="http://localhost:8080/news/upload/image/news/20170517/1495009466176001332.jpg"--%>
                                        <%--alt="" class="img-thumbnail pic-item"></a></li>--%>
                                <%--<li class="pic-list-item"><a href="/news/news/newsdetial/18/1"><img--%>
                                        <%--src="http://localhost:8080/news/upload/image/news/20170517/1495009556983082788.jpg"--%>
                                        <%--alt="" class="img-thumbnail pic-item"></a></li>--%>
                                <%--<li class="pic-list-item"><a href="/news/news/newsdetial/18/1"><img--%>
                                        <%--src="http://localhost:8080/news/upload/image/news/20170517/1495009684648031200.jpg"--%>
                                        <%--alt="" class="img-thumbnail pic-item"></a></li>--%>
                            <%--</ul>--%>
                        <%--</div>--%>
                        <%--<div class="news-ref-info container">--%>
                            <%--<div class="col-lg-6 news-ref-info-left"><a href="/news/user/redirectToUserInfo/1/1"--%>
                                                                        <%--class="user-img"><img--%>
                                    <%--src="http://localhost:8080/news/upload/image/news/20170517/1495009466176001332.jpg"--%>
                                    <%--alt=""></a> <a href="/news/user/redirectToUserInfo/1/1" class="user-name"--%>
                                                   <%--style="text-decoration: none"><span><strong>王科顺</strong></span></a>--%>
                                <%--<span class="sub-timestamp"><strong>05-17 00:00</strong></span></div>--%>
                        <%--</div>--%>
                    <%--</div>--%>
                <%--</div>--%>
            <%--</div>--%>
        <%--</div>--%>
    </div>
</div>
<div class="right-nav">
    <div class="hotsearch">
        <input type="text" class="search-input" placeholder="大家都在搜"/>
        <span class="glyphicon glyphicon-search search-btn"></span>
    </div>
    <div class="hourhot-news-module">
        <div class="title-area">
            <span class="hourhot-news-title">实时热评榜</span>
        </div>
        <div class="hourhot">
            <ul class="hourhot-news-list">
                <c:set var="commentIndex" value="1"/>

                <c:forEach var="hotCommentItem" items="${hotCommentNewsList}">
                    <li class="hourhot-news-item">
                        <a href="${pageContext.request.contextPath}/news/newsdetial/${hotCommentItem.news.newsId}/${hotCommentItem.news.editorId}">
                            <c:choose>
                                <c:when test="${commentIndex<=3}">
                                    <span style="float:left;width:250px;overflow: hidden;display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;"
                                          class="order-${commentIndex}">${commentIndex}.${hotCommentItem.news.title}</span>
                                    <span style="margin-left:20px;font-family: Georgia;">${hotCommentItem.commentNumber}评</span>
                                </c:when>
                                <c:otherwise>
                                    <span style="float:left;width:250px;overflow: hidden;display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;"
                                          class="order-3">${commentIndex}.${hotCommentItem.news.title}</span>
                                    <span style="margin-left:20px;font-family: Georgia;">${hotCommentItem.commentNumber}评</span>
                                </c:otherwise>
                            </c:choose>
                        </a>
                    </li>
                    <c:set var="commentIndex" value="${commentIndex+1}"/>
                </c:forEach>
            </ul>
        </div>
    </div>
    <div class="hotvideo-module">
        <div class="hotvideo-title">热门视频</div>
        <ul class="hotvideo-list">
            <c:set var="index" value="0"/>
            <c:forEach var="hotVideo" items="${hotVideoList}">
                <li class="hotvideo-item">
                    <a href="${pageContext.request.contextPath}/video/videodetial/${hotVideo.videoId}/${hotVideo.uploaderId}">
                        <div class="video-image">
                            <video src="${hotVideo.path}" id="video${index}"></video>
                            <div class="video-icon">
                                <span class="glyphicon glyphicon-play-circle video-tag" id="video-tag${index}">05:07</span>
                            </div>
                        </div>
                        <div class="hotvideo-description">
                                ${hotVideo.title}
                        </div>
                    </a>
                </li>
                <c:set var="index" value="${index+1}"/>
            </c:forEach>
            <input type="hidden" value="${index}" id="index">
        </ul>
    </div>
</div>
<script src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script src="${pageContext.request.contextPath}/bootstrap/js/bootstrap.min.js"></script>
<script src="${pageContext.request.contextPath}/js/newsdetial.js"></script>
</body>
</html>