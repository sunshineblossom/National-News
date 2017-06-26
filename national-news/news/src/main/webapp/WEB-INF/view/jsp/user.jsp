<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>民新网</title>
    <meta charset="utf-8"/>

    <link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap-theme.min.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/editor.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.min.css">
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
            <a href="#"><img src="${user.userImage}" class="user-img"></a>
        </div>
        <div class="username-region">
            <h3 class="pf-username">${user.username}</h3>
            <input type="hidden" value="${user.uid}" class="userId">
        </div>
        <div class="self-introduction">
            <a href="#">${user.selfIntroduce}</a>
        </div>
        <div class="nav-btn">
            <div class="row">
                <div class="col-lg-4">
                    <a href="javascript:void(0);" class="homepage">我的主页</a>
                </div>
                <div class="col-lg-4">
                    <a href="javascript:void(0);" class="photo">我的相册</a>
                </div>
                <div class="col-lg-4">
                    <a href="javascript:void(0);" class="manage-center">管理中心</a>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="mylog">
            <div class="log-head">
                <a href="#"><img class="log-user-img" src="../images/9.jpg"></a>
                <div class="row log-username"><a href="#">呆呆的木头人</a></div>
                <div class="row log-publishtime"><span>3月18日 20:59</span></div>
            </div>
            <div class="log-content">
                现在都到白色情人节的尾巴了，然鹅我却在今天压了一下午的马路，关键是还被骂了一下午....伤心..发个微博纪念一下... ​​​​
            </div>
            <div class="log-footer">
                <div class="row">
                    <div class="col-lg-3 log-share"><a href="#"><span class="glyphicon glyphicon-share-alt"></span>&nbsp;1212</a></div>
                    <div class="col-lg-3 log-comment"><a href="#"><span class="glyphicon glyphicon-comment"></span>&nbsp;2131</a></div>
                    <span style="display: none;" class="click-count">0</span>
                    <div class="col-lg-3 log-handup"><a href="#"><span class="glyphicon glyphicon-hand-up"></span>&nbsp;12</a></div>
                    <div class="col-lg-3 log-delete"><a href="#"></span>&nbsp;删除</a></div>
                </div>
            </div>


        </div>

        <div class="mylog">
            <div class="log-head">
                <a href="#"><img class="log-user-img" src="../images/9.jpg"></a>
                <div class="row log-username"><a href="#">呆呆的木头人</a></div>
                <div class="row log-publishtime"><span>3月18日 20:59</span></div>
            </div>
            <div class="log-content">
                现在都到白色情人节的尾巴了，然鹅我却在今天压了一下午的马路，关键是还被骂了一下午....伤心..发个微博纪念一下... ​​​​
            </div>
            <div class="log-footer">
                <div class="row">
                    <div class="col-lg-3 log-share"><a href="#" data-toggle="modal" data-target=".share"><span class="glyphicon glyphicon-share-alt"></span>&nbsp;2113</a></div>
                    <div class="col-lg-3 log-comment"><a href="#"><span class="glyphicon glyphicon-comment"></span>&nbsp;2121</a></div>
                    <span style="display: none;" class="click-count">0</span>
                    <div class="col-lg-3 log-handup"><a href="#"><span class="glyphicon glyphicon-hand-up"></span>&nbsp;12</a></div>
                    <div class="col-lg-3 log-delete"><a href="#"></span>&nbsp;删除</a></div>
                </div>
            </div>
        </div>

        <div class="mylog">
            <div class="log-head">
                <a href="#"><img class="log-user-img" src="../images/9.jpg"></a>
                <div class="row log-username"><a href="#">呆呆的木头人</a></div>
                <div class="row log-publishtime"><span>3月18日 20:59</span></div>
            </div>
            <div class="log-content">
                现在都到白色情人节的尾巴了，然鹅我却在今天压了一下午的马路，关键是还被骂了一下午....伤心..发个微博纪念一下... ​​​​
            </div>
            <div class="share-ref">
                <div class="ref-mylog">
                    <div class="ref-log-head">
                        <a href="#"><img class="ref-log-user-img" src="../images/9.jpg"></a>
                        <div class="row ref-log-username"><a href="#">呆呆的木头人</a></div>
                        <div class="row ref-log-publishtime"><span>3月18日 20:59</span></div>
                    </div>
                    <div class="ref-log-content">
                        现在都到白色情人节的尾巴了，然鹅我却在今天压了一下午的马路，关键是还被骂了一下午....伤心..发个微博纪念一下... ​​​​
                    </div>
                </div>
            </div>
            <div class="log-footer">
                <div class="row">
                    <div class="col-lg-3 log-share"><a href="#" data-toggle="modal" data-target=".share"><span class="glyphicon glyphicon-share-alt"></span>&nbsp;2113</a></div>
                    <div class="col-lg-3 log-comment"><a href="#"><span class="glyphicon glyphicon-comment"></span>&nbsp;2121</a></div>
                    <span style="display: none;" class="click-count">0</span>
                    <div class="col-lg-3 log-handup"><a href="#"><span class="glyphicon glyphicon-hand-up"></span>&nbsp;12</a></div>
                    <div class="col-lg-3 log-delete"><a href="#"></span>&nbsp;删除</a></div>
                </div>
            </div>
        </div>
    </div>
    <div class="profile-info" style="display: none;">
        <div class="profile-title">
            <span class="base-info">基本信息</span>
            <div class="line"></div>
            <button class="btn btn-default btn-edit">编辑</button>
        </div>
        <div class="profile-info-list">
            <ul class="show-area">
                <li class="clearfix profile-item">
                    <div class="ex-tips"><span>用户名</span></div>
                    <div class="info-show"><span id="show-username">${user.username}</span></div>

                </li>
                <li class="clearfix profile-item">
                    <div class="ex-tips"><span>性&nbsp;别</span></div>
                    <div class="info-show"><span id="show-sex">${user.sex}</span></div>
                </li>
                <li class="clearfix profile-item">
                    <div class="ex-tips"><span>生&nbsp;日</span></div>
                    <div class="info-show"><span id="show-birthday"><fmt:formatDate value="${user.birthday}" pattern="yyyy-MM-dd"/></span></div>

                </li>
                <li class="clearfix profile-item">
                    <div class="ex-tips"><span>简&nbsp;介</span></div>
                    <div class="info-show"><span id="show-selfIntroduce">${user.selfIntroduce}</span></div>

                </li>
                <li class="clearfix profile-item">
                    <div class="ex-tips"><span>邮&nbsp;箱</span></div>
                    <div class="info-show"><span id="email">${user.email}</span></div>

                </li>
                <li class="clearfix profile-item">
                    <div class="ex-tips"><span>注册时间</span></div>
                    <div class="info-show"><span id="show-registTime"><fmt:formatDate value="${user.registTime}" pattern="yyyy-MM-dd"/></span></div>
                </li>
            </ul>
            <ul class="edit-area">
                <li class="clearfix profile-item">
                    <div class="ex-tips"><span>用户名</span></div>
                    <div class="info-show"><input type="text" id="update-username" value="${user.username}"></div>

                </li>
                <li class="clearfix profile-item">
                    <div class="ex-tips"><span>性&nbsp;别</span></div>
                    <div class="info-show">
                        <c:choose>
                            <c:when test="${user.sex eq '男'}">
                                <input class="" type="radio" name="sex" value="男" checked="checked">
                                <span class="">男</span>
                                <input class="" type="radio" name="sex" value="女">
                                <span class="">女</span>
                            </c:when>
                            <c:otherwise>
                                <input class="" type="radio" name="sex" value="男">
                                <span class="">男</span>
                                <input class="" type="radio" name="sex" value="女" checked="checked">
                                <span class="">女</span>
                            </c:otherwise>
                        </c:choose>
                    </div>
                </li>
                <li class="clearfix profile-item">
                    <div class="ex-tips"><span>生&nbsp;日</span></div>
                    <div class="info-show">
                        <input type="date" id="update-birthday" value="<fmt:formatDate value="${user.birthday}" pattern="yyyy-MM-dd"/>">
                    </div>
                </li>
                <li class="clearfix profile-item">
                    <div class="ex-tips"><span>简&nbsp;介</span></div>
                    <div class="info-show"><textarea id="update-selfIntroduce">${user.selfIntroduce}</textarea></div>

                </li>
                <li class="clearfix profile-item">
                    <div class="ex-tips"><span>邮&nbsp;箱</span></div>
                    <div class="info-show"><input id="update-email" value="${user.email}" type="text"></div>

                </li>
                <li class="clearfix profile-item">
                    <div class="ex-tips"><span>注册时间</span></div>
                    <div class="info-show"><span><fmt:formatDate value="${user.registTime}" pattern="yyyy-MM-dd"/></span></div>
                </li>
            </ul>
        </div>
    </div>
    <div class="right-nav">
        <div class="focus-fans-module">
            <div class="row focus-fans">
                <div class="col-lg-6 focus"><div class="row"><a href="#">${focusQueryVo.focusNumber}</a></div><div class="row"><span>关注</span></div></div>
                <div class="col-lg-6 fans"><div class="row"><a href="#">${focusQueryVo.fansNumber}</a></div><div class="row"><span>粉丝</span></div></div>
            </div>
        </div>
    </div>
    <div class="fans-focus-module" style="display: none;">
        <div class="focus-fans-list">
            <div class="focus-fans-header">
                <ul>
                    <li class="focus-header"><a href="#">关注</a></li>
                    <li class="fans-header"><a href="#">粉丝</a></li>
                </ul>
            </div>
            <ul>

            </ul>
        </div>
    </div>
</div>
<div class="log-edit-module" style="width:650px;height:150px;display: none;background-color: #00a2d4;">
    <script id="log-editor" type="text/plain" style="width:650px;height:150px;"></script>
    <div class="log-edit-footer">
        <div class="log-submit">
            <span>发布</span>
        </div>
    </div>
</div>
<script src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script src="${pageContext.request.contextPath}/bootstrap/js/bootstrap.min.js"></script>
<script src="${pageContext.request.contextPath}/ueditor/ueditor.config.js"> </script>
<script src="${pageContext.request.contextPath}/ueditor/ueditor.all.min.js"> </script>
<script src="${pageContext.request.contextPath}/ueditor/lang/zh-cn/zh-cn.js"></script>
<script src="${pageContext.request.contextPath}/js/editor.js"></script>

</body>
</html>