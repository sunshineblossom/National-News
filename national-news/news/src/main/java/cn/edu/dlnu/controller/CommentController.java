package cn.edu.dlnu.controller;


import cn.edu.dlnu.pojo.Comment;
import cn.edu.dlnu.pojo.CommentQueryVo;
import cn.edu.dlnu.pojo.Share;
import cn.edu.dlnu.service.ICommentLevel2Service;
import cn.edu.dlnu.service.ICommentService;
import cn.edu.dlnu.service.IUpService;
import cn.edu.dlnu.service.IUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.parsing.ReaderContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.LinkedList;
import java.util.List;


/**
 * Created by root on 2017/4/26.
 */
@Controller
@RequestMapping("/comment")
public class CommentController {
    @Autowired
    private ICommentService commentService;
    @Autowired
    private IUpService upService;
    @Autowired
    private IUsersService usersService;
    @Autowired
    private ICommentLevel2Service commentLevel2Service;
    @RequestMapping("/countByNewsId")
    @ResponseBody
    public int countByNewsId(@RequestBody String newsId){
        return commentService.countByNewsId(Integer.parseInt(newsId.substring(7)));
    }

    @RequestMapping("/selectByNewsId")
    @ResponseBody
    public List<Comment> selectByNewsId(@RequestBody String newsId){
        return commentService.selectByNewsId(Integer.parseInt(newsId.substring(7)));
    }
    @RequestMapping("/addComment")
    @ResponseBody
    public Integer addComment(@RequestBody Comment comment){
        comment.setPublishTime(new Date());
        return commentService.insert(comment);
    }
    @RequestMapping("/selectByShareId")
    @ResponseBody
    public List<CommentQueryVo> selectByShareId(@RequestBody Share share){
//        1.一级评论点赞数
//        2.一级评论用户信息
//        3.二级评论数量
        List<CommentQueryVo> commentQueryVos = new LinkedList<CommentQueryVo>();
//        4.根据shareId获得所有的一级评论
        List<Comment> comments = commentService.selectByShareId(share.getShareId());
        for (int i=0;i<comments.size();i++){
            CommentQueryVo commentQueryVo = new CommentQueryVo();
            commentQueryVo.setUser(usersService.selectByPrimaryKey(comments.get(i).getUserId()));
            commentQueryVo.setUpNumber(upService.countByCommentId(comments.get(i).getCommentId()));
            commentQueryVo.setComment(comments.get(i));
            commentQueryVo.setSecondCommentNumber(commentLevel2Service.countByCommentId(comments.get(i).getCommentId()));
            commentQueryVos.add(commentQueryVo);
        }
        return commentQueryVos;
    }
}
