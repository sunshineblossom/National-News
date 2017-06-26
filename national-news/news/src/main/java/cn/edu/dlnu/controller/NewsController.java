package cn.edu.dlnu.controller;



import cn.edu.dlnu.pojo.*;
import cn.edu.dlnu.service.*;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServletRequest;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.*;


/**
 * Created by root on 2017/4/26.
 */
@Controller
@RequestMapping("/news")
public class NewsController {
    @Autowired
    private INewsService newsService;
    @Autowired
    private IPictureService pictureService;
    @Autowired
    private IVideoService videoService;
    @Autowired
    private IUsersService usersService;
    @Autowired
    private ICommentService commentService;
    @Autowired
    private ICommentLevel2Service commentLevel2Service;
    @Autowired
    private IUpService upService;
    @Autowired
    private ICategoryService categoryService;


    @RequestMapping("/add")
    @ResponseBody
    public Boolean add(@RequestBody News  news){
//        解析出图片路径
        String content = news.getContent();

        String initStr = "<img src=";
        Picture picture = new Picture();
        Video video = new Video();
//        解析出文章中的图片路径
//        插入前newsId
        newsService.insertAndGetId(news);
//        获取返回的自增主键
        int newsId = news.getNewsId();

        while (content.contains(initStr)){

            int startIndex = content.indexOf("<img src=");
            String imgPath = content.substring(startIndex+10,startIndex+87);
            picture.setEditorId(news.getEditorId());
            picture.setCategoryId(news.getCategoryId());
            picture.setPath(imgPath);
            picture.setNewsId(newsId);

            pictureService.insert(picture);
            content = content.substring(startIndex+87,content.length());
        }
//    解析视频地址
        String videoContent = news.getContent();
        String regStr = "<video class=";
        while (videoContent.contains(regStr)){
            System.out.println(">>>videoContent");
            int startIndex = videoContent.indexOf("<video class=");
            String videoPath = videoContent.substring(startIndex+117,startIndex+189);
            System.out.println(videoPath);
            video.setPlaynumber(0);
            video.setUploadTime(new Date());
            video.setNewsId(newsId);
            video.setPath(videoPath);
            video.setUploaderId(news.getEditorId());
            video.setTitle(news.getTitle());
            videoService.insert(video);
            videoContent = videoContent.substring(startIndex+189,content.length());
        }
        return true;
    }
//    跳转至新闻详情页
    @RequestMapping("/newsdetial/{newsId}/{editorId}")
    public String newsdetial(HttpServletRequest request, @PathVariable("newsId")String newsId, @PathVariable("editorId")String editorId){
        List<Comment> commentList = commentService.selectByNewsId(Integer.parseInt(newsId));
        List<CommentQueryVo> commentListFull = new LinkedList<CommentQueryVo>();
        List<CommentQueryVo> commentQueryVos = new LinkedList<CommentQueryVo>();
        request.setAttribute("news",newsService.selectByPrimaryKey(Integer.parseInt(newsId)));
        request.setAttribute("editor",usersService.selectByPrimaryKey(Integer.parseInt(editorId)));

//      获取所有热搜排行榜的信息
//        1.新闻信息
//        2.用户信息
//        3.评论数量
        List<CommentCustom> commentCustomList = commentService.selectHotCommentNews();
        if(commentCustomList.size()>0){
            for(int i=0;i<commentCustomList.size();i++){
                System.out.println("commentSize:"+commentCustomList.size());
                CommentCustom commentCustom = commentCustomList.get(i);
                CommentQueryVo commentQueryVo = new CommentQueryVo();
                commentQueryVo.setNews(newsService.selectByPrimaryKey(commentCustom.getNewsId()));
          //      System.out.println(commentQueryVo.getNews().getTitle());
                commentQueryVo.setCommentNumber(commentCustom.getCommentNumber());
            //    System.out.println("commentNumber:"+commentQueryVo.getCommentNumber());
                commentQueryVo.setUser(usersService.selectByPrimaryKey(commentCustom.getUserId()));
//            System.out.println(commentQueryVo.getUser().getUsername());
                commentQueryVos.add(commentQueryVo);
            }
        }
//      添加
        if(commentList.size()>0){
            for(int i=0;i<commentList.size();i++){
                CommentQueryVo commentQueryVo = new CommentQueryVo();
                Comment comment = commentList.get(i);
                commentQueryVo.setComment(comment);
                commentQueryVo.setSecondCommentNumber(commentLevel2Service.countByCommentId(comment.getCommentId()));
                commentQueryVo.setUser(usersService.selectByPrimaryKey(comment.getUserId()));
                commentQueryVo.setUpNumber(upService.countByCommentId(comment.getCommentId()));
                commentListFull.add(commentQueryVo);
            }
        }
//        热门视频
        request.setAttribute("hotVideoList",videoService.selectHotVideo());
        request.setAttribute("commentListFull",commentListFull);
//        热评排行榜的信息
        request.setAttribute("hotCommentNewsList",commentQueryVos);
        return "newsdetial";
    }
    @RequestMapping("/selectByCategory")
    @ResponseBody
    public List<NewsCustom> selectByCategory(@RequestBody Category category){
        System.out.println("categoryId:"+category.getCategoryId());
        List<NewsCustom> newsCustomList = newsService.selectByCategory(category.getCategoryId());
        return newsCustomList;
    }

    @RequestMapping("/selectByPrimaryKey")
    @ResponseBody
    public News selectByPrimaryKey(@RequestBody String newsId){
        return newsService.selectByPrimaryKey(Integer.parseInt(newsId.substring(7)));
    }
    //查询过去一天以内的新闻
//    @RequestMapping("/selectInOneDay")
//    @ResponseBody
//    public List<News> selectInOneDay(){
//      return newsService.selectInOneDay();
//    }
    @RequestMapping("/selectInOneDay")
    public String selectInOneDay(HttpServletRequest request){
        List<News> newsList = newsService.selectInOneDay();
        List<NewsCustom> newsCustoms = new LinkedList<NewsCustom>();
        for(int i=0;i<newsList.size();i++){
            NewsCustom newsCustom = new NewsCustom();
            News news = newsList.get(i);
            //        用户信息
            newsCustom.setEditor(usersService.selectByPrimaryKey(news.getEditorId()));
            //        图片信息
            List<Picture> pictureList =pictureService.selectByNewsId(news.getNewsId());
            if (pictureList!=null){
                newsCustom.setPictureList(pictureList);
            }
//            视频信息
            List<Video> videoList = videoService.selectByNewsId(news.getNewsId());
            if ((videoList!=null) && (videoList.size()>=0)){
                newsCustom.setVideoList(videoList);
            }else{
                newsCustom.setVideoList(null);
            }
            //        新闻信息
            newsCustom.setNews(news);
            //            视频信息
//            newsCustom.setVideo(videoService.selectByNewsId(news.getNewsId()).get(1));
            System.out.println("newsId"+newsCustom.getNewsId()+":sizie:"+newsCustom.getPictureList().size()+"videoList:"+newsCustom.getVideoList().size());
            System.out.println("pic长度:"+newsCustom.getPictureList().size());
            System.out.println("picNUmber:"+newsCustom.getPicNumber());
            newsCustoms.add(newsCustom);
        }
        List<NewsCustom> hotList = newsService.selectHotNews();
        for (int i=0;i<hotList.size();i++){
            News hotNews = hotList.get(i);
            System.out.println("id:"+hotList.get(i).getNewsId()+"title:"+hotList.get(i).getTitle()+"editroId:"+hotList.get(i).getEditorId());
            hotList.get(i).setPictureList(pictureService.selectByNewsId(hotNews.getNewsId()));
        }
        request.setAttribute("hotList",hotList);

        request.setAttribute("categoryList",categoryService.selectAll());
        request.setAttribute("newsList",newsCustoms);
        return "homepage";
    }
//    查询过去一天以内点赞数量最多的新闻,取出前5条展示
    @RequestMapping("/selectHotNews")
    @ResponseBody
    public List<NewsCustom> selectHotNews(HttpServletRequest request){
        List<NewsCustom> newsList = newsService.selectHotNews();
        for (int i=0;i<newsList.size();i++){
            System.out.println("id:"+newsList.get(i).getNewsId()+"title:"+newsList.get(i).getTitle());
        }
        return newsService.selectHotNews();
    }

    @RequestMapping("/selectNewsByEditorId")
    @ResponseBody
    List<NewsCustom> selectNewsByEditorId(@RequestBody User editor){
        System.out.println(editor.getUsername());
        System.out.println(editor.getUid());
        return newsService.selectNewsByEditorId(editor.getUid());
    }


    @RequestMapping("/selectByCategoryId/{categoryId}")
    public String selectByCategoryId(HttpServletRequest request,@PathVariable("categoryId")Integer categoryId){
        System.out.println("categoryId:"+categoryId);
        List<NewsCustom> newsList = newsService.selectByCategory(categoryId);
        List<NewsCustom> newsCustoms = new LinkedList<NewsCustom>();
        for(int i=0;i<newsList.size();i++){
            NewsCustom newsCustom = new NewsCustom();
            News news = newsList.get(i);
            //        用户信息
            newsCustom.setEditor(usersService.selectByPrimaryKey(news.getEditorId()));
            //        视频信息
            newsCustom.setVideoList(videoService.selectByNewsId(news.getNewsId()));
            //        图片信息
            newsCustom.setPictureList(pictureService.selectByNewsId(news.getNewsId()));
            //        新闻信息
            newsCustom.setNews(news);
            newsCustoms.add(newsCustom);
        }
        System.out.println(newsCustoms);
        List<NewsCustom> hotList = newsService.selectHotNews();
        for (int i=0;i<hotList.size();i++){
            News hotNews = hotList.get(i);
            System.out.println("id:"+hotList.get(i).getNewsId()+"title:"+hotList.get(i).getTitle()+"editroId:"+hotList.get(i).getEditorId());
            hotList.get(i).setPictureList(pictureService.selectByNewsId(hotNews.getNewsId()));
        }
        request.setAttribute("hotList",hotList);
        request.setAttribute("newsList",newsCustoms);
        request.setAttribute("categoryList",categoryService.selectAll());
        return "homepage";
    }
    @RequestMapping("/selectByKeyword/{keyword}")
    public String selectByKeyword(HttpServletRequest request,@PathVariable("keyword")String keyword){
        System.out.println("进入keyword");
        News news1 = new News();
        news1.setKeyword(keyword);
        List<News> newsList = null;
        try {
            newsList = newsService.selectByKeyWord(news1);
        }catch (Exception e){
            e.printStackTrace();
        }
        List<NewsCustom> newsCustoms = new LinkedList<NewsCustom>();
        for(int i=0;i<newsList.size();i++){
            System.out.println(newsList.get(i).getNewsId());
            NewsCustom newsCustom = new NewsCustom();
            News news = newsList.get(i);
            //        用户信息
            newsCustom.setEditor(usersService.selectByPrimaryKey(news.getEditorId()));
            //        图片信息
            newsCustom.setPictureList(pictureService.selectByNewsId(news.getNewsId()));
//            设置视频信息
            newsCustom.setVideoList(videoService.selectByNewsId(news.getNewsId()));
            //        新闻信息
            newsCustom.setNews(news);
            newsCustoms.add(newsCustom);
        }
        List<NewsCustom> hotList = newsService.selectHotNews();
        for (int i=0;i<hotList.size();i++){
            News hotNews = hotList.get(i);
            System.out.println("id:"+hotList.get(i).getNewsId()+"title:"+hotList.get(i).getTitle()+"editroId:"+hotList.get(i).getEditorId());
            hotList.get(i).setPictureList(pictureService.selectByNewsId(hotNews.getNewsId()));
        }
        request.setAttribute("hotList",hotList);

        request.setAttribute("newsList",newsCustoms);
        request.setAttribute("categoryList",categoryService.selectAll());
        return "homepage";
    }
    @RequestMapping("/deleteByPrimaryKey")
    public String deleteByPrimaryKey(Integer[] newsId){
        for (int i=0;i<newsId.length;i++){
            newsService.deleteByPrimaryKey(newsId[i]);
        }
        return "forward:/admin/getAllInfo";
    }
}
