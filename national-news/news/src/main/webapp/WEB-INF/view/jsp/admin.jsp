<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/semanticUI/semantic.min.css">
    <style>
        .top{
            width: 620px;
            height: 153px;
            position: relative;
            margin: 20px auto;
        }
        .title{
            position: absolute;
            top: 48px;
        }
        td img{
            max-width: 100px;
        }
    </style>
</head>
<body>
<ul id="myTab" class="nav nav-tabs">
    <li ><a href="#user" data-toggle="tab">用户管理</a></li>
    <li><a href="#news" data-toggle="tab">新闻管理</a></li>
    <li><a href="#video" data-toggle="tab">视频管理</a></li>
    <li><a href="#category" data-toggle="tab">分类管理</a></li>
    <li><a href="#share" class="active" data-toggle="tab">分享管理</a></li>
    <ul class="nav navbar-nav navbar-right">
        <li>
            <a href="#">${sessionScope.admin.adminname}</a>
        </li>
        <li>
            <a href="${pageContext.request.contextPath}/admin/quit">退出</a>
        </li>
    </ul>
</ul>
<div class="top">
    <img src="${pageContext.request.contextPath}/images/logo.png" class="logo"/>
    <img  src="${pageContext.request.contextPath}/images/biaoti.png" class="title"/>
    <input type="hidden" id="basePath" value="${pageContext.request.contextPath}">
</div>
<div id="myTabContent" class="tab-content">
    <div class="tab-pane fade in wowo active" id="user">
        <div style="width:100%; height:336px; overflow:auto" class="table_scroll">
        <table class="ui compact celled definition table" id="user-table" style="text-align:center;width:100%;
		     table-layout:fixed;/* 只有定义了表格的布局算法为fixed，下面td的定义才能起作用。 */
		     border-collapse: collapse;
		     font-family: Futura, Arial, sans-serif;">
            <thead>
            <tr style="text-align:center;">
                <th style="    width: 50px;background: #F9FAFB; box-shadow: 0 -1px 0 1px #E3E4E5;"></th>
                <th>用户ID</th>
                <th>用户名</th>
                <th>用户密码</th>
                <th>性别</th>
                <th>生日</th>
                <th>注册时间</th>
                <th>电子邮件</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody >
            <form id="userForm" action="${pageContext.request.contextPath}/user/deleteByPrimaryKey" method="post">
               <c:forEach var="user" items="${userList}">
                   <tr>
                       <td class="check" >
                           <input type="checkbox" name="uid" value="${user.uid}" class="checkbox">
                       </td>
                       <td>${user.uid}</td>
                       <td class="name">${user.username}</td>
                       <td  class="password">${user.password}</td>
                       <td class="gender">${user.sex}</td>
                       <td  class="birthday">${user.birthday}</td>
                       <td class="registetime">${user.registTime}</td>
                       <td class="email">${user.email}</td>
                       <td class="operation">
                           <button  class="small ui button delete">删除</button>
                       </td>
                   </tr>
               </c:forEach>
            </form>
            </tbody>
        </table>
            </div>
    </div>
    <div class="tab-pane fade" id="news">
        <div style="width:100%; height:336px; overflow:auto" class="table_scroll">
            <table class="ui compact celled definition table" id="news-table" style="text-align:center;width:100%;
		     table-layout:fixed;/* 只有定义了表格的布局算法为fixed，下面td的定义才能起作用。 */
		     border-collapse: collapse;
		     font-family: Futura, Arial, sans-serif;">
                <thead>
                <tr style="text-align:center;">
                    <th style="    width: 50px;background: #F9FAFB; box-shadow: 0 -1px 0 1px #E3E4E5;"></th>
                    <th>新闻ID</th>
                    <th>作者ID</th>
                    <th>发布时间</th>
                    <th>新闻标题</th>
                    <th>关键字</th>
                    <th>分类ID</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <form id="newsForm" action="${pageContext.request.contextPath}/news/deleteByPrimaryKey" method="post">
                  <c:forEach  var="news" items="${newsList}">
                      <tr>
                          <td class="check" >
                              <input type="checkbox" name="newsId" value="${news.newsId}" class="checkbox">
                          </td>
                          <td>${news.newsId}</td>
                          <td>${news.editorId}</td>
                          <td>${news.publishTime}</td>
                          <td>${news.title}</td>
                          <td>${news.keyword}</td>
                          <td>${news.categoryId}</td>
                          <td id="operation1" class="operation">
                              <button id="delete" class="small ui button delete">删除</button>
                          </td>
                      </tr>
                  </c:forEach>
                </form>
                </tbody>
            </table>
        </div>
    </div>
    <div class="tab-pane fade" id="video">
        <div style="width:100%; height:336px; overflow:auto" class="table_scroll">
        <table class="ui compact celled definition table" style="text-align:center;width:100%;
		     table-layout:fixed;/* 只有定义了表格的布局算法为fixed，下面td的定义才能起作用。 */
		     border-collapse: collapse;
		     font-family: Futura, Arial, sans-serif;" id="video-table">
            <thead>
            <tr style="text-align:center;">
                <th style="    width: 50px;background: #F9FAFB; box-shadow: 0 -1px 0 1px #E3E4E5;"></th>
                <th>视频ID</th>
                <th>视频标题</th>
                <th>上传时间</th>
                <th>播放次数</th>
                <th>上传者ID</th>
                <th>新闻ID</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody >
            <form id="videoForm" action="${pageContext.request.contextPath}/video/deleteByPrimaryKey" method="post">
                <c:forEach var="video" items="${videoList}">
                    <tr>
                        <td class="check" >
                            <input type="checkbox" name="videoId" value="${video.videoId}" class="checkbox">
                        </td>
                        <td>${video.videoId}</td>
                        <td>${video.title}</td>
                        <td>${video.uploadTime}</td>
                        <td>${vdeo.playnumber}</td>
                        <td>${video.uploaderId}</td>
                        <td>${video.newsId}</td>
                        <td class="operation">
                            <button class="small ui button delete">删除</button>
                        </td>
                    </tr>
                </c:forEach>
            </form>
            </tbody>
        </table>
            </div>
    </div>
    <div class="tab-pane fade" id="category">
        <div style="width:100%; height:336px; overflow:auto" class="table_scroll">
            <table class="ui compact celled definition table" style="text-align:center;width:100%;
		     table-layout:fixed;/* 只有定义了表格的布局算法为fixed，下面td的定义才能起作用。 */
		     border-collapse: collapse;
		     font-family: Futura, Arial, sans-serif;" id="category-table">
                <thead>
                <tr style="text-align:center;">
                    <th style="width:50px"></th>
                    <th>分类编号</th>
                    <th>分类名称</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <form id="categoryForm" action="${pageContext.request.contextPath}/category/deleteByPrimaryKey" method="post">
                    <c:forEach var="category" items="${categoryList}">
                        <tr>
                            <td class="check" >
                                <input type="checkbox" name="categoryId" value="${category.categoryId}"  class="checkbox">
                            </td>
                            <td id="num1" class="num">${category.categoryId}</td>
                            <td id="category1" class="category">${category.categoryName}</td>
                            <td id="ddd" class="dddd">
                                <button id="modify1" class="small ui button modify">修改</button>
                                <button id="submit1" class="small ui button submit">提交</button>
                                <button id="delete1" class="small ui button delete">删除</button>
                            </td>
                        </tr>
                    </c:forEach>
                </form>
                </tbody>
            </table>
        </div>
    </div>
    <div class="tab-pane fade" id="share">
        <div style="width:100%; height:336px; overflow:auto" class="table_scroll">
            <table class="ui compact celled definition table" id="share-table" style="text-align:center;width:100%;
		     table-layout:fixed;/* 只有定义了表格的布局算法为fixed，下面td的定义才能起作用。 */
		     border-collapse: collapse;
		     font-family: Futura, Arial, sans-serif;">
                <thead>
                <tr style="text-align:center;">
                    <th style="    width: 50px;background: #F9FAFB; box-shadow: 0 -1px 0 1px #E3E4E5;"></th>
                    <th>分享ID</th>
                    <th>用户ID</th>
                    <th>分享时间</th>
                    <th>分享内容</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <form id="shareForm" action="${pageContext.request.contextPath}/share/deleteByPrimaryKey" method="post">
                 <c:forEach var="share" items="${shareList}">
                     <tr>
                         <td class="check" >
                             <input type="checkbox" name="shareId" value="${share.shareId}" class="checkbox">
                         </td>
                         <td>${share.shareId}</td>
                         <td>${share.userId}</td>
                         <td>${share.shareDate}</td>
                         <td>${share.shareContent}</td>
                         <td>
                             <button  class="small ui button delete">删除</button>
                         </td>
                     </tr>
                 </c:forEach>
                </form>
                </tbody>
            </table>
        </div>
    </div>
</div>
<table class="ui compact celled definition table">
    <tfoot class="full-width">
    <tr>
        <th colspan="5">
            <button style="margin-left:30%" class="small ui button checkAll">全选</button>
            <button class="small ui button unCheck">不选</button>
            <button class="small ui button otherCheck">反选</button>
            <button class="ui primary button delChecked">删除选中项</button>
        </th>
    </tr>
    </tfoot>
</table>
<script src="${pageContext.request.contextPath}/js/jquery-2.1.4.min.js"></script>
<script src="${pageContext.request.contextPath}/semanticUI/semantic.min.js"></script>
<script src="${pageContext.request.contextPath}/bootstrap/js/bootstrap.min.js"></script>
<script src="${pageContext.request.contextPath}/js/admin.js"></script>
</body>
</html>
