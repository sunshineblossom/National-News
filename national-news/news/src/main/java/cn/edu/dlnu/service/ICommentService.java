package cn.edu.dlnu.service;

import cn.edu.dlnu.pojo.Comment;
import cn.edu.dlnu.pojo.CommentCustom;
import cn.edu.dlnu.pojo.Share;

import java.util.List;

/**
 * Created by root on 2017/5/14.
 */
public interface ICommentService {
    Comment selectByPrimaryKey(Integer commentId);
    Integer insert(Comment comment);
    int countByNewsId(Integer newsId);
    List<Comment> selectByNewsId(Integer newsId);
//    查询1天以内评论数量最多的新闻
    List<CommentCustom> selectHotCommentNews();

    List<Comment> selectByShareId(Integer shareId);
}
